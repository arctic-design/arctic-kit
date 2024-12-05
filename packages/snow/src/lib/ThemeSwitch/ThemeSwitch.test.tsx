import { render, fireEvent, waitFor } from '../../utils/test-utils';
import { ThemeSwitch } from './ThemeSwitch';

describe('ThemeSwitch', () => {
  let matchMediaListeners: Array<(e: MediaQueryListEvent) => void> = [];

  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();

    // Reset matchMediaListeners array
    matchMediaListeners = [];

    // Mock window.matchMedia
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: vi.fn().mockImplementation((query) => {
        const mql = {
          matches: query === '(prefers-color-scheme: dark)',
          media: query,
          onchange: null,
          addEventListener: (
            eventName: string,
            callback: (e: MediaQueryListEvent) => void
          ) => {
            matchMediaListeners.push(callback);
          },
          removeEventListener: (
            eventName: string,
            callback: (e: MediaQueryListEvent) => void
          ) => {
            matchMediaListeners = matchMediaListeners.filter(
              (listener) => listener !== callback
            );
          },
          dispatchEvent: vi.fn(),
        };
        return mql;
      }),
    });
  });

  test('renders without crashing', () => {
    const { getByTestId } = render(<ThemeSwitch />);
    // Check if the buttons are rendered
    expect(getByTestId('theme-light-icon')).toBeInTheDocument();
    expect(getByTestId('theme-dark-icon')).toBeInTheDocument();
    expect(getByTestId('theme-system-icon')).toBeInTheDocument();
  });

  test('initial themeMode is system if localStorage is empty', () => {
    const { getByTestId } = render(<ThemeSwitch />);
    // Since we can't access themeMode directly, we can check the 'active' prop on the buttons
    waitFor(() => {
      const systemButton = getByTestId('theme-system-icon');
      expect(systemButton).toHaveAttribute('active');
    });
  });

  test('uses theme from localStorage on initial render', () => {
    localStorage.setItem('theme', 'dark');
    const { getByTestId } = render(<ThemeSwitch />);

    waitFor(() => {
      // Check that the 'dark' button is active
      const darkButton = getByTestId('theme-dark-icon');
      expect(darkButton).toHaveAttribute('active');
      // Check that document.documentElement has 'theme-dark' class
      expect(document.documentElement.classList.contains('theme-dark')).toBe(
        true
      );
    });
  });

  test('clicking light button sets theme to light', () => {
    const { getByTestId } = render(<ThemeSwitch />);

    waitFor(() => {
      const lightButton = getByTestId('theme-light-icon');
      fireEvent.click(lightButton);
      // Check that localStorage is updated
      expect(localStorage.getItem('theme')).toBe('light');
      // Check that document.documentElement has 'theme-light' class
      expect(document.documentElement.classList.contains('theme-light')).toBe(
        true
      );
      expect(document.documentElement.classList.contains('theme-dark')).toBe(
        false
      );
      // Check that the 'light' button is active
      expect(lightButton).toHaveAttribute('active');
    });
  });

  test('clicking dark button sets theme to dark', () => {
    const { getByTestId } = render(<ThemeSwitch />);
    waitFor(() => {
      const darkButton = getByTestId('theme-dark-icon');
      fireEvent.click(darkButton);
      // Check that localStorage is updated
      expect(localStorage.getItem('theme')).toBe('dark');
      // Check that document.documentElement has 'theme-dark' class
      expect(document.documentElement.classList.contains('theme-dark')).toBe(
        true
      );
      expect(document.documentElement.classList.contains('theme-light')).toBe(
        false
      );
      // Check that the 'dark' button is active
      expect(darkButton).toHaveAttribute('active');
    });
  });

  test('clicking system button sets theme to system', () => {
    const { getByTestId } = render(<ThemeSwitch />);
    waitFor(() => {
      const systemButton = getByTestId('theme-system-icon');
      fireEvent.click(systemButton);
      // Check that localStorage is updated
      expect(localStorage.getItem('theme')).toBe('system');
      // Since themeMode is 'system', it should apply preferred theme
      // Our mock matchMedia matches '(prefers-color-scheme: dark)'
      // So document.documentElement should have 'theme-dark' class
      expect(document.documentElement.classList.contains('theme-dark')).toBe(
        true
      );
      expect(document.documentElement.classList.contains('theme-light')).toBe(
        false
      );
      // Check that the 'system' button is active
      expect(systemButton).toHaveAttribute('active');
    });
  });

  test('onChange callback is called with correct value', () => {
    const onChange = vi.fn();
    const { getByTestId } = render(<ThemeSwitch onChange={onChange} />);
    waitFor(() => {
      const darkButton = getByTestId('theme-dark-icon');
      fireEvent.click(darkButton);
      expect(onChange).toHaveBeenCalledWith(true); // true for dark mode
      const lightButton = getByTestId('theme-light-icon');
      fireEvent.click(lightButton);
      expect(onChange).toHaveBeenCalledWith(false); // false for light mode
    });
  });

  test('applies preferred theme when system preference changes', () => {
    const { getByTestId } = render(<ThemeSwitch />);

    waitFor(() => {
      const systemButton = getByTestId('theme-system-icon');
      fireEvent.click(systemButton);

      // Initially, prefers dark mode
      expect(document.documentElement.classList.contains('theme-dark')).toBe(
        true
      );

      // Simulate change in system preference to light mode
      (window.matchMedia('(prefers-color-scheme: dark)').matches as boolean) =
        false;

      // Trigger the event listeners
      matchMediaListeners.forEach((callback) =>
        callback({ matches: false } as MediaQueryListEvent)
      );

      // Now, expect that 'theme-light' class is added
      expect(document.documentElement.classList.contains('theme-light')).toBe(
        true
      );
      expect(document.documentElement.classList.contains('theme-dark')).toBe(
        false
      );
    });
  });

  test('removes event listener on unmount', () => {
    const { unmount, getByTestId } = render(<ThemeSwitch />);
    const systemButton = getByTestId('theme-system-icon');
    fireEvent.click(systemButton);

    // Ensure listener was added
    expect(matchMediaListeners.length).toBeGreaterThan(0);

    // Unmount the component
    unmount();

    // Ensure listener was removed
    expect(matchMediaListeners.length).toBe(0);
  });
});
