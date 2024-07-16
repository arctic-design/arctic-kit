import { DEFAULT_THEME } from '../../theming/theme';
import { render, waitFor } from '../../utils/test-utils';
import { Badge } from './Badge';

describe('Badge Component', () => {
  it('renders with default color', () => {
    const { container } = render(<Badge />);
    const badge = container.firstChild as HTMLElement;
    expect(badge).toBeInTheDocument();
    waitFor(() => {
      expect(badge).toHaveStyle(
        `background-color: ${DEFAULT_THEME.colors.primary.main}`
      );
    });
  });

  it('renders with specified color', () => {
    const { container } = render(<Badge color="success" />);
    const badge = container.firstChild as HTMLElement;
    expect(badge).toBeInTheDocument();

    waitFor(() => {
      expect(badge).toHaveStyle(
        `background-color: ${DEFAULT_THEME.colors.success.main}`
      );
    });
  });

  it('renders children', () => {
    const { getByText } = render(<Badge>Hello</Badge>);
    const badge = getByText('Hello');
    expect(badge).toBeInTheDocument();
  });
});
