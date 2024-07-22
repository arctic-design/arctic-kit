import { render, fireEvent, waitFor } from '../../../utils/test-utils';
import { DrawerHeading } from '../DrawerHeading';
import { Drawer } from '../Drawer';

describe('DrawerHeading', () => {
  it('renders children correctly', () => {
    const { getByText } = render(
      <Drawer open>
        <DrawerHeading>Hello World</DrawerHeading>
      </Drawer>
    );
    expect(getByText('Hello World')).toBeInTheDocument();
  });

  it('calls onClose when button is clicked', () => {
    const onClose = vi.fn();
    const { getByRole } = render(
      <Drawer open>
        <DrawerHeading onClose={onClose} />
      </Drawer>
    );

    waitFor(() => {
      fireEvent.click(getByRole('button'));
      expect(onClose).toHaveBeenCalled();
    });
  });
});
