import { fireEvent, render, waitFor } from '../../utils/test-utils';
import { Button } from './Button';

describe('Button Component', () => {
  it('renders with default props', () => {
    const { getByText, getByTestId } = render(<Button>Hello</Button>);

    const button = getByTestId('button');

    const textButton = getByText('Hello');
    expect(textButton).toBeInTheDocument();
    expect(textButton.tagName).toBe('BUTTON');
    expect(button).toHaveClass('filled');
  });

  it('renders with specified props', () => {
    const { getByTestId } = render(
      <Button size="large" disabled color="secondary" variant="outlined">
        World
      </Button>
    );
    const button = getByTestId('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('disabled');
    expect(button).toHaveClass('outlined');
  });

  it('calls onClick handler when clicked', () => {
    const onClickMock = vi.fn();
    const { getByText } = render(
      <Button variant="text" onClick={onClickMock}>
        Click me
      </Button>
    );
    const button = getByText('Click me');
    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalled();
  });

  it('renders prefix', () => {
    const { getByTestId } = render(
      <Button
        prefix={
          <span data-testid="icon" role="img" aria-label="icon">
            🚀
          </span>
        }
      >
        With Icon
      </Button>
    );
    const icon = getByTestId('icon');
    expect(icon).toBeInTheDocument();
  });

  it('renders suffix', () => {
    const { getByTestId } = render(
      <Button
        suffix={
          <span data-testid="icon" role="img" aria-label="icon">
            🚀
          </span>
        }
      >
        Reverse
      </Button>
    );
    const icon = getByTestId('icon');
    expect(icon).toBeInTheDocument();
  });

  it('renders the loading component', () => {
    const { getByTestId } = render(<Button loading>Content</Button>);
    const loadingElement = getByTestId('spinner-loader');
    waitFor(() => {
      expect(loadingElement).toBeInTheDocument();
    });
  });

  it('doest not render the loading component when loading is not set', () => {
    const { queryByTestId } = render(<Button>Content</Button>);
    const loadingElement = queryByTestId('spinner-loader');
    waitFor(() => {
      expect(loadingElement).not.toBeInTheDocument();
    });
  });
});
