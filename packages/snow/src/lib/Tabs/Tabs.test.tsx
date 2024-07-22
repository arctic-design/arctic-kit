import { screen, render, waitFor } from '../../utils/test-utils';
import { Tabs } from './Tabs';

describe('Tabs Component', () => {
  it('renders correctly with defaults', () => {
    render(<Tabs id="tabs">Tab 1</Tabs>);
    const tabsContainer = screen.getByTestId('tabs-container');
    const tabsNav = screen.getByTestId('tabs-tab-nav');
    const tabsUl = screen.getByTestId('tabs-ul');
    const tabItem = screen.getByText('Tab 1');

    expect(tabsContainer).toBeInTheDocument();
    expect(tabsNav).toBeInTheDocument();
    expect(tabsUl).toBeInTheDocument();
    expect(tabItem).toBeInTheDocument();
  });

  it('renders the tabs with correct styling', () => {
    render(
      <Tabs fullWidth={true} color="primary" id="tabs">
        Tab 1
      </Tabs>
    );

    const tabsContainer = screen.getByTestId('tabs-container');
    const tabsNav = screen.getByTestId('tabs-tab-nav');
    const tabsUl = screen.getByTestId('tabs-ul');
    const tabItem = screen.getByText('Tab 1');

    expect(tabsContainer).toBeInTheDocument();
    expect(tabsNav).toBeInTheDocument();
    expect(tabsUl).toBeInTheDocument();
    expect(tabItem).toBeInTheDocument();

    waitFor(() => {
      expect(tabsContainer).toHaveStyle('width: 100%');
      expect(tabsNav).toHaveStyle('width: 100%');
      expect(tabsUl).toHaveStyle('width: 100%');
    });
  });

  // Add more test cases here...
});
