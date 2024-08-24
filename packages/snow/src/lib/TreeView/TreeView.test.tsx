import { render, fireEvent, waitFor } from '../../utils/test-utils';
import { TreeView, TreeItem } from './TreeView'; // assuming your file is named TreeView.tsx

// Sample data for testing
const treeData: TreeItem[] = [
  {
    id: '1',
    label: 'Root',
    children: [
      {
        id: '1-1',
        label: 'Child 1',
        children: [
          { id: '1-1-1', label: 'Grandchild 1-1-1' },
          { id: '1-1-2', label: 'Grandchild 1-1-2' },
        ],
      },
      {
        id: '1-2',
        label: 'Child 2',
        children: [
          { id: '1-2-1', label: 'Grandchild 1-2-1' },
          { id: '1-2-2', label: 'Grandchild 1-2-2' },
        ],
      },
    ],
  },
];

// Test Suite
describe('TreeView Component', () => {
  test('renders the tree view with root and children', () => {
    const { getByText } = render(<TreeView items={treeData} />);

    waitFor(() => {
      // Check root node
      expect(getByText('Root')).toBeInTheDocument();

      // Check child nodes (collapsed initially)
      expect(getByText('Child 1')).toBeInTheDocument();
      expect(getByText('Child 2')).toBeInTheDocument();

      // Grandchildren should not be visible initially
      expect(() => getByText('Grandchild 1-1-1')).toThrow();
      expect(() => getByText('Grandchild 1-1-2')).toThrow();
    });
  });

  test('expands and collapses on click', () => {
    const { getByText, queryByText } = render(<TreeView items={treeData} />);

    waitFor(() => {
      // Expand first child
      const child1 = getByText('Child 1');
      fireEvent.click(child1);

      // Check if grandchildren are rendered
      expect(getByText('Grandchild 1-1-1')).toBeInTheDocument();
      expect(getByText('Grandchild 1-1-2')).toBeInTheDocument();

      // Collapse the first child
      fireEvent.click(child1);

      // Check if grandchildren are collapsed
      expect(queryByText('Grandchild 1-1-1')).not.toBeInTheDocument();
      expect(queryByText('Grandchild 1-1-2')).not.toBeInTheDocument();
    });
  });

  test('selects an item when clicked', () => {
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

  test('highlights the selected item', () => {
    const { getByText } = render(
      <TreeView items={treeData} currentItemId="1-1" />
    );

    waitFor(() => {
      // Check if Child 1 is selected
      const child1 = getByText('Child 1');
      expect(child1).toHaveStyle('font-weight: 700'); // or check the className/style that applies the selected state
    });
  });

  test('expands parent nodes when currentItemId is passed', () => {
    const { getByText } = render(
      <TreeView items={treeData} currentItemId="1-1-2" />
    );

    // The parent node "Child 1" and grandchild node "Grandchild 1-1-2" should be visible
    expect(getByText('Child 1')).toBeInTheDocument();
    expect(getByText('Grandchild 1-1-2')).toBeInTheDocument();
  });
});
