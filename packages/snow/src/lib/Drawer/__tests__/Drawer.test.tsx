import { render, screen, fireEvent } from '../../../utils/test-utils';
import { Drawer } from '../Drawer';

describe('Drawer', () => {
  it('renders the title correctly', () => {
    const title = 'Test Drawer';
    render(<Drawer title={title} open={true} />);
    const titleElement = screen.getByText(title);
    expect(titleElement).toBeInTheDocument();
  });

  it('calls the onClose callback when the drawer is closed', () => {
    const onClose = vi.fn();
    render(
      <Drawer open={true} onClose={onClose} title="Title text" id="my-drawer" />
    );
    const closeButton = screen.getByTestId('my-drawer-heading-close-button');
    fireEvent.click(closeButton);
    expect(onClose).toHaveBeenCalled();
  });
});
