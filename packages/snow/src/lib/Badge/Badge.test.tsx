import { DEFAULT_THEME } from '../../theming/theme';
import { render, waitFor } from '../../utils/test-utils';
import { Badge } from './Badge';

describe('Badge Component', () => {
  it('renders with default color', () => {
    const { getByTestId } = render(<Badge id="default-badge" />);
    const badge = getByTestId('default-badge');
    expect(badge).toBeInTheDocument();
    waitFor(() => {
      expect(badge).toHaveStyle(
        `background-color: ${DEFAULT_THEME.colors.primary.main}`
      );
    });
  });

  it('renders with specified color', () => {
    const { getByTestId } = render(
      <Badge color="success" id="success-badge" />
    );
    const badge = getByTestId('success-badge');
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
