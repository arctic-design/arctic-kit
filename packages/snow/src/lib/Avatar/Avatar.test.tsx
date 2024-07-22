import { render, screen, fireEvent } from '../../utils/test-utils';
import { Avatar } from './Avatar';

describe('Avatar', () => {
  it('renders without crashing', () => {
    render(<Avatar />);
    expect(screen.getByTestId('avatar')).toBeInTheDocument();
  });

  it('renders the image when src prop is provided', () => {
    const src = 'https://example.com/avatar.png';
    render(<Avatar src={src} />);
    expect(screen.getByAltText('Avatar')).toHaveAttribute('src', src);
  });

  it('calls onClick handler when clicked', () => {
    const onClick = vi.fn();
    render(<Avatar onClick={onClick} />);
    fireEvent.click(screen.getByTestId('avatar'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('renders the children text', () => {
    const children = 'JD';
    render(<Avatar>{children}</Avatar>);
    expect(screen.getByText(children)).toBeInTheDocument();
  });

  it('applies the specified color class', () => {
    const color = 'primary';
    render(<Avatar color={color} />);
    expect(screen.getByTestId('avatar')).toHaveClass(`fill`);
  });
});
