import { render, screen, waitFor } from '../../utils/test-utils';
import { Alert } from './Alert';
import { SnowFeedbackColor } from '../types';
import { DEFAULT_THEME } from '../../theming/theme';

const expectValidateAlert = (severity: SnowFeedbackColor) => {
  render(<Alert severity={severity}>{severity} Alert</Alert>);

  const container = screen.getByTestId(`alert-container-${severity}`);

  waitFor(() => {
    expect(container).toHaveStyle(
      `color: ${DEFAULT_THEME.colors[severity][700]}`
    );
    expect(container).toHaveStyle(
      `background-color: ${DEFAULT_THEME.colors[severity][100]}`
    );
  });

  return container;
};

describe('Alert Component', () => {
  it('renders the children', () => {
    render(<Alert>Hello, world!</Alert>);
    const alertElement = screen.getByText('Hello, world!');
    expect(alertElement).toBeInTheDocument();
  });

  it('renders the success alert', () => {
    const container = expectValidateAlert('success');
    expect(container).toBeInTheDocument();
  });

  it('renders the info alert', () => {
    const container = expectValidateAlert('info');
    expect(container).toBeInTheDocument();
  });

  it('renders the warning alert', () => {
    const container = expectValidateAlert('warning');
    expect(container).toBeInTheDocument();
  });

  it('renders the error alert', () => {
    const container = expectValidateAlert('error');
    expect(container).toBeInTheDocument();
  });

  it('hides the icon when hideIcon prop is true', () => {
    render(<Alert hideIcon>Alert without Icon</Alert>);
    const icon = screen.queryByRole('svg');
    expect(icon).not.toBeInTheDocument();
  });

  it('applies shadow when shadow prop is true', () => {
    render(<Alert shadow>Alert with Shadow</Alert>);
    const container = screen.getByTestId('alert-container-info');
    expect(container).not.toHaveStyle('box-shadow: none;');
  });

  it('applies custom className', () => {
    render(<Alert className="custom-alert">Custom Alert</Alert>);
    const container = screen.getByTestId('alert-container-info');
    expect(container).toHaveClass('custom-alert');
  });
});
