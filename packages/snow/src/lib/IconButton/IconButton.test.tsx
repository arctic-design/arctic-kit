import { fireEvent, render, screen, waitFor } from '../../utils/test-utils';
import { IconButton } from './IconButton';

describe('IconButton', () => {
  it('renders the button with the provided children', () => {
    render(<IconButton>Click me</IconButton>);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Click me');
  });

  it('calls onClick handler when clicked', () => {
    const onClickMock = vi.fn();
    const { getByText } = render(
      <IconButton onClick={onClickMock}>Click me</IconButton>
    );
    const button = getByText('Click me');
    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalled();
  });

  it('disables the button when disabled prop is true', () => {
    render(
      <IconButton disabled rounded color="primary">
        Click me
      </IconButton>
    );
    const button = screen.getByRole('button');

    waitFor(() => {
      expect(button).toHaveAttribute('aria-disabled');
      expect(button).toHaveStyle('border-radius: 50%');
    });
  });
});
