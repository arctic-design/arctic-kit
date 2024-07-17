import { render, screen, waitFor } from '../../utils/test-utils';
import { ActionMenu } from './ActionMenu';
import { ActionMenuItem } from './ActionMenuItem';

describe('ActionMenu', () => {
  it('renders the ActionMenu component', () => {
    render(<ActionMenu />);

    waitFor(() => {
      const actionMenuElement = screen.getByTestId('action-menu-root-menu');
      expect(actionMenuElement).toBeInTheDocument();
    });
  });

  it('renders the ActionMenu component with children', () => {
    render(
      <ActionMenu>
        <ActionMenuItem label="One" />
        <ActionMenuItem label="Two" />
      </ActionMenu>
    );

    waitFor(() => {
      const actionMenuElement = screen.getByTestId('action-menu-root-menu');
      const itemElement1 = screen.getByText('One');
      const itemElement2 = screen.getByText('Two');
      expect(actionMenuElement).toBeInTheDocument();
      expect(itemElement1).toBeInTheDocument();
      expect(itemElement2).toBeInTheDocument();
    });
  });
});
