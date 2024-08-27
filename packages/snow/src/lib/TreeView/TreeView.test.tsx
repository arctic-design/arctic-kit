import { render, fireEvent, waitFor } from '../../utils/test-utils';
import { TreeView, TreeItem } from './TreeView'; // assuming your file is named TreeView.tsx

// Sample data for testing
const treeData: TreeItem[] = [
  {
    id: '1',
    label: 'Root',
    items: [
      {
        id: '1-1',
        label: 'Child 1',
        items: [
          { id: '1-1-1', label: 'Grandchild 1-1-1' },
          { id: '1-1-2', label: 'Grandchild 1-1-2' },
        ],
      },
      {
        id: '1-2',
        label: 'Child 2',
        items: [
          { id: '1-2-1', label: 'Grandchild 1-2-1' },
          { id: '1-2-2', label: 'Grandchild 1-2-2' },
        ],
      },
    ],
  },
];

// Test Suite
describe('TreeView Component', () => {
  it('renders the tree view with root and items', () => {
    const { getByText } = render(<TreeView items={treeData} />);

    waitFor(() => {
      // Check root node
      expect(getByText('Root')).toBeInTheDocument();

      // Check child nodes should not be present
      expect(() => getByText('Child 1')).toThrow();
      expect(() => getByText('Child 2')).toThrow();

      // Grandchildren should not be visible initially
      expect(() => getByText('Grandchild 1-1-1')).toThrow();
      expect(() => getByText('Grandchild 1-1-2')).toThrow();
    });
  });

  it('expands and collapses on click', () => {
    const { getByText, queryByText } = render(<TreeView items={treeData} />);

    waitFor(() => {
      // Expand first child
      const root = getByText('Root');
      fireEvent.click(root);

      const child1 = getByText('Child 1');

      // Check if child nodes are rendered
      expect(getByText('Child 1')).toBeInTheDocument();
      expect(getByText('Child 2')).toBeInTheDocument();

      // Check if grandchildren are not rendered
      expect(queryByText('Grandchild 1-1-1')).not.toBeInTheDocument();
      expect(queryByText('Grandchild 1-1-2')).not.toBeInTheDocument();

      // Expand the first child
      fireEvent.click(child1);

      // Check if grandchildren are collapsed
      expect(queryByText('Grandchild 1-1-1')).toBeInTheDocument();
      expect(queryByText('Grandchild 1-1-2')).toBeInTheDocument();

      // Collapse the first child
      fireEvent.click(child1);

      // Check if grandchildren are collapsed
      expect(queryByText('Grandchild 1-1-1')).not.toBeInTheDocument();
      expect(queryByText('Grandchild 1-1-2')).not.toBeInTheDocument();
    });
  });

  it('selects an item when clicked', () => {
    const mockOnSelect = vi.fn();
    const { getByText } = render(
      <TreeView items={treeData} onSelect={mockOnSelect} />
    );

    waitFor(() => {
      // Click on Child 2
      const child2 = getByText('Child 2');
      fireEvent.click(child2);

      // Check if onSelect is called with the correct item id
      expect(mockOnSelect).toHaveBeenCalledWith('1-2');
    });
  });

  it('highlights the selected item', () => {
    const { getByText } = render(
      <TreeView items={treeData} currentItemId="1-1" />
    );

    waitFor(() => {
      // Check if Child 1 is selected
      const child1 = getByText('Child 1');
      expect(child1).toHaveStyle('font-weight: 700'); // or check the className/style that applies the selected state
    });
  });

  it('expands parent nodes when currentItemId is passed', () => {
    const { getByText } = render(
      <TreeView items={treeData} currentItemId="1-1-2" />
    );

    // The parent node "Child 1" and grandchild node "Grandchild 1-1-2" should be visible
    expect(getByText('Child 1')).toBeInTheDocument();
    expect(getByText('Grandchild 1-1-2')).toBeInTheDocument();
  });
});
