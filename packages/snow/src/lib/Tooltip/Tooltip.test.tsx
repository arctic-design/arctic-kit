import { render, screen, waitFor } from '../../utils/test-utils';
import userEvent from '@testing-library/user-event';
import { Tooltip } from './Tooltip';

describe('Tooltip Component', () => {
  test('renders tooltip content when hovered', () => {
    render(
      <Tooltip message="Tooltip Content">
        <button>Hover Me</button>
      </Tooltip>
    );

    const hoverButton = screen.getByText('Hover Me');
    userEvent.hover(hoverButton);

    waitFor(() => {
      const tooltipContent = screen.getByText('Tooltip Content');
      expect(tooltipContent).toBeInTheDocument();
    });
  });

  test('does not render tooltip content when not hovered', () => {
    render(
      <Tooltip message="Tooltip Content">
        <button>Hover Me</button>
      </Tooltip>
    );

    const tooltipContent = screen.queryByText('Tooltip Content');
    expect(tooltipContent).not.toBeInTheDocument();
  });
});
