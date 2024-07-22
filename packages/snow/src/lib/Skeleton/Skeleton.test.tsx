import { render, screen, waitFor } from '../../utils/test-utils';
import { Skeleton } from './Skeleton';

describe('Skeleton', () => {
  it('renders without crashing', () => {
    render(<Skeleton height="50px" />);
    const container = screen.getByTestId('skeleton-animated');
    expect(container).toBeInTheDocument();
  });

  it('renders with the correct height', () => {
    render(<Skeleton height="50px" />);
    const container = screen.getByTestId('skeleton-animated');
    expect(container).toHaveStyle('height: 50px');
  });

  it('renders with the correct width', () => {
    render(<Skeleton height="50px" width="200px" />);
    const container = screen.getByTestId('skeleton-animated');
    expect(container).toHaveStyle('width: 200px');
  });

  it('renders as a circle when circle prop is true', () => {
    render(<Skeleton height="50px" circle />);
    const container = screen.getByTestId('skeleton-animated');
    waitFor(() => {
      expect(container).toHaveStyle('border-radius: 50%');
    });
  });

  it('does not animate when animate prop is false', () => {
    render(<Skeleton height="50px" animate={false} />);
    const container = screen.getByTestId('skeleton-static');
    expect(container).toBeInTheDocument();
  });
});
