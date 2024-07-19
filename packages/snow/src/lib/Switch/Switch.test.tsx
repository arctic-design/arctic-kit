import { DEFAULT_THEME } from '../../theming/theme';
import { fireEvent, render, waitFor } from '../../utils/test-utils';
import { Switch } from './Switch';

describe('Switch Component', () => {
  test('renders without errors', () => {
    const { container } = render(<Switch />);
    expect(container).toBeInTheDocument();
  });

  test('renders without size', () => {
    const { container } = render(<Switch size="medium" />);
    expect(container).toBeInTheDocument();
  });

  test('renders label when provided', () => {
    const label = 'Toggle Switch';
    const { getByText } = render(<Switch label={label} />);
    expect(getByText(label)).toBeInTheDocument();
  });

  test('calls onToggle when clicked', () => {
    const onToggle = vi.fn();
    const { getByRole } = render(<Switch onToggle={onToggle} />);
    fireEvent.click(getByRole('radio'));
    expect(onToggle).toHaveBeenCalled();
  });

  test('does not call onToggle when disabled', () => {
    const onToggle = vi.fn();
    const { getByRole } = render(<Switch onToggle={onToggle} disabled />);
    fireEvent.click(getByRole('radio'));
    expect(onToggle).not.toHaveBeenCalled();
  });

  test('renders with label', () => {
    const { getByText } = render(<Switch label="Toggle Switch" />);
    const labelElement = getByText('Toggle Switch');
    expect(labelElement).toBeInTheDocument();
  });

  test('handles toggle correctly', () => {
    const onToggleMock = vi.fn();
    const { getByRole } = render(<Switch onToggle={onToggleMock} />);
    const switchElement = getByRole('radio');
    fireEvent.click(switchElement);
    expect(onToggleMock).toHaveBeenCalled();
  });

  test('handles toggle correctly when disabled', () => {
    const onToggleMock = vi.fn();
    const { getByRole } = render(<Switch onToggle={onToggleMock} disabled />);
    const switchElement = getByRole('radio');
    fireEvent.click(switchElement);
    expect(onToggleMock).not.toHaveBeenCalled();
  });

  test('renders with checked state', () => {
    const { getByTestId } = render(<Switch checked />);
    const handleElement = getByTestId('switch-handle-element');
    expect(handleElement).toBeInTheDocument();
    waitFor(() => {
      expect(handleElement).toHaveStyle(
        `background-color: ${DEFAULT_THEME.colors.neutral[0]};`
      );
    });
  });
});
