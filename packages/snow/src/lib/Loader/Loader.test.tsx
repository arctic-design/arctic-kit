import { render, screen, waitFor } from '../../utils/test-utils';
import { Loader } from '../Loader';

describe('Loader', () => {
  it('renders the spinner loader by default', () => {
    render(<Loader />);
    const spinner = screen.getByTestId('spinner-loader');
    waitFor(() => {
      expect(spinner).toBeInTheDocument();
    });
  });

  it('renders the dots loader when type is set to "dots"', () => {
    render(<Loader type="dots" />);
    const dots = screen.getByTestId('dots-loader');
    expect(dots).toBeInTheDocument();
  });

  it('renders the loader with the specified size', () => {
    render(<Loader size="large" />);
    const loader = screen.getByTestId('spinner-loader');

    waitFor(() => {
      expect(loader).toHaveStyle('width: 36px');
      expect(loader).toHaveStyle('height: 36px');
    });
  });
});
