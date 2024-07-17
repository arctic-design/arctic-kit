import { DEFAULT_THEME } from '../../theming/theme';
import { fireEvent, render, screen, waitFor } from '../../utils/test-utils';
import { CardStack } from './CardStack';

describe('CardStack', () => {
  test('renders the title correctly', () => {
    const title = 'Test CardStack';
    render(
      <CardStack title={title} totalItems={3}>
        Content
      </CardStack>
    );
    const titleElement = screen.getByText(title);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders based on id correctly', () => {
    const title = 'Test CardStack';
    render(
      <CardStack title={title} totalItems={3} id="demo-stack">
        Content
      </CardStack>
    );
    const container = screen.getByTestId('demo-stack-container');
    const content = screen.getByTestId('demo-stack-content');
    const headerContainer = screen.getByTestId('demo-stack-header-container');
    const header = screen.getByTestId('demo-stack-header');
    const headerLeft = screen.getByTestId('demo-stack-header-left');
    const headerTitle = screen.getByTestId('demo-stack-header-title');
    const headerCount = screen.getByTestId('demo-stack-header-count');
    const headerCheckIcon = screen.getByTestId(
      'demo-stack-header-count-check-icon'
    );
    const headerCountText = screen.getByTestId('demo-stack-header-count-text');
    const headerIcon = screen.getByTestId('demo-stack-header-icon');
    const emptyCard1 = screen.getByTestId('demo-stack-empty-card-0');
    const emptyCard2 = screen.getByTestId('demo-stack-empty-card-1');

    expect(container).toBeInTheDocument();
    expect(content).toBeInTheDocument();
    expect(headerContainer).toBeInTheDocument();
    expect(header).toBeInTheDocument();
    expect(headerLeft).toBeInTheDocument();
    expect(headerTitle).toBeInTheDocument();
    expect(headerCount).toBeInTheDocument();
    expect(headerCheckIcon).toBeInTheDocument();
    expect(headerCountText).toBeInTheDocument();
    expect(headerIcon).toBeInTheDocument();
    expect(emptyCard1).toBeInTheDocument();
    expect(emptyCard2).toBeInTheDocument();
  });

  test('renders the children correctly', () => {
    const children = <div>Test Children</div>;
    render(
      <CardStack title="Test CardStack" totalItems={0}>
        {children}
      </CardStack>
    );

    const header = screen.getByTestId('card-stack-header-container');
    fireEvent.click(header);

    waitFor(() => {
      const childrenElement = screen.getByText('Test Children');
      expect(childrenElement).toBeInTheDocument();
    });
  });

  test('renders the count correctly', () => {
    const totalItems = 10;
    const completedItems = 5;
    render(
      <CardStack
        title="Test CardStack"
        totalItems={totalItems}
        completedItems={completedItems}
      >
        Content
      </CardStack>
    );
    const countElement = screen.getByText(`${completedItems}/${totalItems}`);
    expect(countElement).toBeInTheDocument();
  });

  test('renders the collapsed state by default', () => {
    render(
      <CardStack title="Test CardStack" totalItems={0}>
        Content
      </CardStack>
    );
    const containerElement = screen.getByTestId('card-stack-container');
    waitFor(() => {
      expect(containerElement).toHaveStyle(`background: transparent;`);
    });
  });

  test('renders the expanded state when initialCollapsed is false', () => {
    render(
      <CardStack title="Test CardStack" totalItems={0} initialCollapsed={false}>
        Content
      </CardStack>
    );
    const containerElement = screen.getByTestId('card-stack-container');
    waitFor(() => {
      expect(containerElement).toHaveStyle(
        `background: ${DEFAULT_THEME.colors.grey[200]}`
      );
    });
  });

  test('renders the expanded state when clicked', () => {
    render(
      <CardStack title="Test CardStack" totalItems={0}>
        Content
      </CardStack>
    );
    const containerElement = screen.getByTestId('card-stack-container');
    waitFor(() => {
      expect(containerElement).toHaveStyle(`background: transparent;`);
    });

    const headerElement = screen.getByTestId('card-stack-header');
    headerElement.click();
    waitFor(() => {
      expect(containerElement).toHaveStyle(
        `background: ${DEFAULT_THEME.colors.grey[200]}`
      );
    });
  });

  test('renders the correct header border-color not expanded but active', () => {
    render(
      <CardStack title="Test CardStack" totalItems={0} active>
        Content
      </CardStack>
    );
    const headerContainerElement = screen.getByTestId(
      'card-stack-header-container'
    );
    expect(headerContainerElement).toBeInTheDocument();
    waitFor(() => {
      expect(headerContainerElement).toHaveStyle(
        `border-color: ${DEFAULT_THEME.colors.grey[600]}`
      );
    });

    headerContainerElement.click();

    waitFor(() => {
      expect(headerContainerElement).toHaveStyle(`border-color: transparent}`);
    });
  });
});
