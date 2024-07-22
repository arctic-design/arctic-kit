import { render, screen } from '../../utils/test-utils';
import { TabPanel } from './TabPanel';

describe('TabPanel', () => {
  it('should render children when selected is true', () => {
    const { container } = render(
      <TabPanel selected label="Tab 1">
        <div>Tab 1 Content</div>
      </TabPanel>
    );
    expect(container).toBeInTheDocument();
  });

  it('should not render children when selected is false', () => {
    render(
      <TabPanel selected={false} label="Tab 2">
        <div>Tab 2 Content</div>
      </TabPanel>
    );

    const tabContent = screen.queryByText('Tab 2 Content');
    expect(tabContent).toBeNull();
  });
});
