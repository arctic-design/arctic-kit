import { render, screen, waitFor } from '../../../utils/test-utils';
import { DrawerContent, DrawerSizeMap } from '../DrawerContent';
import { Drawer } from '../Drawer';

describe('DrawerContent', () => {
  it('renders without crashing', () => {
    render(
      <Drawer open>
        <DrawerContent id="default-drawer-content" />
      </Drawer>
    );
    expect(true).toBeTruthy();
    waitFor(() => {
      const content = screen.getByTestId('default-drawer-content');
      expect(content).toBeInTheDocument();
    });
  });

  it('renders with size medium prop', () => {
    render(
      <Drawer open>
        <DrawerContent size="medium" id="medium-drawer-content" />
      </Drawer>
    );

    waitFor(() => {
      const content = screen.getByTestId('medium-drawer-content');
      expect(content).toHaveStyle(`width: ${DrawerSizeMap.medium}`);
    });
  });

  it('renders with size fullWidth prop', () => {
    render(
      <Drawer open>
        <DrawerContent size="fullWidth" id="fullWidth-drawer-content" />
      </Drawer>
    );

    waitFor(() => {
      const content = screen.getByTestId('fullWidth-drawer-content');
      expect(content).toHaveStyle(`width: ${DrawerSizeMap.fullWidth}`);
    });
  });

  it('renders with position prop', () => {
    render(
      <Drawer open>
        <DrawerContent position="left" id="position-left-drawer-content" />
      </Drawer>
    );

    waitFor(() => {
      const content = screen.getByTestId('position-left-drawer-content');

      expect(content).toHaveClass('left');
    });
  });

  it('renders with children', () => {
    render(
      <Drawer open>
        <DrawerContent>
          <div>Child Component</div>
        </DrawerContent>
        ,
      </Drawer>
    );

    const content = screen.getByText('Child Component');
    expect(content).toBeInTheDocument();
  });
});
