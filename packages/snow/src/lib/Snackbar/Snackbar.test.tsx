import { render } from '../../utils/test-utils';
import Snackbar from './Snackbar';

describe('Snackbar Component', () => {
  it('renders children correctly', () => {
    const { getByText } = render(
      <Snackbar id="snackbar" autoHideDuration={3000} onClose={vi.fn()}>
        <span>Snackbar Content</span>
      </Snackbar>
    );

    expect(getByText('Snackbar Content')).toBeInTheDocument();
  });

  it('auto hides after specified duration', () => {
    vi.useFakeTimers();

    const handleClose = vi.fn();
    render(
      <Snackbar id="snackbar" autoHideDuration={3000} onClose={handleClose}>
        <span>Snackbar Content</span>
      </Snackbar>
    );

    expect(handleClose).not.toHaveBeenCalled();

    vi.advanceTimersByTime(3000);

    expect(handleClose).toHaveBeenCalledTimes(1);
    expect(handleClose).toHaveBeenCalledWith('snackbar');
  });
});
