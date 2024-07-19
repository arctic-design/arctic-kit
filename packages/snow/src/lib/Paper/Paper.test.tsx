import { DEFAULT_THEME } from '../../theming/theme';
import { fireEvent, render, waitFor } from '../../utils/test-utils';
import { Paper, PaperProps } from './Paper';

describe('Paper', () => {
  it('renders without errors', () => {
    const { container } = render(<Paper />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('renders children', () => {
    const { getByText } = render(
      <Paper>
        <div>Child Component</div>
      </Paper>
    );

    expect(getByText('Child Component')).toBeInTheDocument();
  });

  it('applies elevation style when variant is "elevation"', () => {
    const props: PaperProps = {
      variant: 'elevation',
      elevation: 2,
    };

    const { container } = render(<Paper color="primary" {...props} />);

    waitFor(() => {
      expect(container.firstChild).toHaveStyle(
        `box-shadow: 0px 2px 4px ${DEFAULT_THEME.colors.grey[400]}`
      );
      expect(container.firstChild).toHaveStyle(
        `border-radius: ${DEFAULT_THEME.border.radius.main}`
      );
    });
  });

  it('applies outlined style when variant is "outlined"', () => {
    const props: PaperProps = {
      variant: 'outlined',
    };

    const { container } = render(<Paper {...props} />);

    waitFor(() => {
      expect(container.firstChild).toHaveStyle(
        `border: 1px solid ${DEFAULT_THEME.colors.grey[400]}`
      );
      expect(container.firstChild).toHaveStyle(
        `background-color: ${DEFAULT_THEME.colors.neutral[0]}`
      );
    });
  });

  it('applies border-radius as 0 style when square is true', () => {
    const props: PaperProps = {
      square: true,
    };

    const { container } = render(<Paper {...props} />);

    waitFor(() => {
      expect(container.firstChild).toHaveStyle(`border-radius: 0`);
    });
  });

  it('calls onClick event', () => {
    const onClick = vi.fn();

    const { container } = render(<Paper onClick={onClick} />);

    fireEvent.click(container.firstChild as HTMLElement);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
