import { render, fireEvent } from '../../utils/test-utils';
import { LayoutSpacingType } from '../Layout';
import { ToggleGroup, ToggleGroupItem } from './ToggleGroup'; // Adjust the import path as necessary

// Mock Icons to avoid rendering actual SVGs in tests
const MockIcon = () => <span data-testid="mock-icon">Icon</span>;

// Helper Component for Testing
const TestToggleGroup = ({
  singleSelect = false,
  spacing,
  withBorder,
}: {
  singleSelect?: boolean;
  spacing?: LayoutSpacingType;
  withBorder?: boolean;
}) => {
  return (
    <ToggleGroup
      singleSelect={singleSelect}
      spacing={spacing}
      withBorder={withBorder}
    >
      <ToggleGroupItem value="option1">
        <MockIcon />
        Option 1
      </ToggleGroupItem>
      <ToggleGroupItem value="option2">
        <MockIcon />
        Option 2
      </ToggleGroupItem>
      <ToggleGroupItem value="option3">
        <MockIcon />
        Option 3
      </ToggleGroupItem>
    </ToggleGroup>
  );
};

describe('ToggleGroup Component', () => {
  test('renders all ToggleGroupItem components', () => {
    const { getAllByRole, getAllByTestId } = render(<TestToggleGroup />);

    const toggleItems = getAllByRole('button');
    expect(toggleItems).toHaveLength(3);
    expect(getAllByTestId('mock-icon')).toHaveLength(3);
    expect(toggleItems[0]).toHaveTextContent('Option 1');
    expect(toggleItems[1]).toHaveTextContent('Option 2');
    expect(toggleItems[2]).toHaveTextContent('Option 3');
  });

  test('allows multiple toggles by default', () => {
    const { getByTestId } = render(<TestToggleGroup />);

    const toggle1 = getByTestId('toggle-item-option1');
    const toggle2 = getByTestId('toggle-item-option2');

    // Initially, no toggles are active
    expect(toggle1).not.toHaveClass('active');
    expect(toggle2).not.toHaveClass('active');

    // Click on Option 1
    if (toggle1) fireEvent.click(toggle1);
    expect(toggle1).toHaveClass('active');
    expect(toggle2).not.toHaveClass('active');

    // Click on Option 2
    if (toggle2) fireEvent.click(toggle2);
    expect(toggle1).toHaveClass('active');
    expect(toggle2).toHaveClass('active');
  });

  test('allows only single toggle when singleSelect is true', () => {
    const { getByTestId } = render(<TestToggleGroup singleSelect={true} />);

    const toggle1 = getByTestId('toggle-item-option1');
    const toggle2 = getByTestId('toggle-item-option2');

    // Initially, no toggles are active
    expect(toggle1).not.toHaveClass('active');
    expect(toggle2).not.toHaveClass('active');

    // Click on Option 1
    if (toggle1) fireEvent.click(toggle1);

    expect(toggle1).toHaveClass('active');
    expect(toggle2).not.toHaveClass('active');

    // Click on Option 2
    if (toggle2) fireEvent.click(toggle2);

    expect(toggle1).not.toHaveClass('active');
    expect(toggle2).toHaveClass('active');

    // Click on Option 2 again to deactivate
    if (toggle2) fireEvent.click(toggle2);

    expect(toggle1).not.toHaveClass('active');
    expect(toggle2).not.toHaveClass('active');
  });

  test('sets correct ARIA roles and attributes for multiple selection', () => {
    const { getByRole, getByTestId } = render(<TestToggleGroup />);

    const toggleGroup = getByRole('group', { name: /toggle group/i });
    expect(toggleGroup).toBeInTheDocument();
    expect(toggleGroup).toHaveAttribute('role', 'group');

    const toggle1 = getByTestId('toggle-item-option1');
    const toggle2 = getByTestId('toggle-item-option2');

    expect(toggle1).toHaveAttribute('role', 'button');
    expect(toggle1).toHaveAttribute('aria-pressed', 'false');

    expect(toggle2).toHaveAttribute('role', 'button');
    expect(toggle2).toHaveAttribute('aria-pressed', 'false');

    // Activate Option 1
    if (toggle1) fireEvent.click(toggle1);
    expect(toggle1).toHaveAttribute('aria-pressed', 'true');
    expect(toggle2).toHaveAttribute('aria-pressed', 'false');
  });

  test('sets correct ARIA roles and attributes for single selection', () => {
    const { getByTestId, getByRole } = render(
      <TestToggleGroup singleSelect={true} />
    );

    const toggleGroup = getByRole('radiogroup', {
      name: /toggle group/i,
    });
    expect(toggleGroup).toBeInTheDocument();
    expect(toggleGroup).toHaveAttribute('role', 'radiogroup');

    const toggle1 = getByTestId('toggle-item-option1');
    const toggle2 = getByTestId('toggle-item-option2');

    expect(toggle1).toHaveAttribute('role', 'radio');
    expect(toggle1).toHaveAttribute('aria-checked', 'false');

    expect(toggle2).toHaveAttribute('role', 'radio');
    expect(toggle2).toHaveAttribute('aria-checked', 'false');

    // Activate Option 1
    if (toggle1) fireEvent.click(toggle1);

    expect(toggle1).toHaveAttribute('aria-checked', 'true');
    expect(toggle2).toHaveAttribute('aria-checked', 'false');

    // Activate Option 2
    if (toggle2) fireEvent.click(toggle2);

    expect(toggle1).toHaveAttribute('aria-checked', 'false');
    expect(toggle2).toHaveAttribute('aria-checked', 'true');
  });

  test('toggles selection via keyboard (Enter and Space) in multiple selection mode', () => {
    const { getByTestId } = render(<TestToggleGroup />);

    const toggle1 = getByTestId('toggle-item-option1');
    const toggle2 = getByTestId('toggle-item-option2');

    // Focus on Toggle 1 and press Enter
    toggle1.focus();
    fireEvent.keyPress(toggle1, { key: 'Enter', code: 'Enter', charCode: 13 });
    expect(toggle1).toHaveClass('active');

    // Focus on Toggle 2 and press Space
    toggle2.focus();
    fireEvent.keyPress(toggle2, { key: ' ', code: 'Space', charCode: 32 });
    expect(toggle2).toHaveClass('active');

    // Ensure both toggles are active
    expect(toggle1).toHaveClass('active');
    expect(toggle2).toHaveClass('active');
  });

  test('toggles selection via keyboard (Enter and Space) in single selection mode', () => {
    const { getByTestId } = render(<TestToggleGroup singleSelect={true} />);

    const toggle1 = getByTestId('toggle-item-option1');
    const toggle2 = getByTestId('toggle-item-option2');

    // Focus on Toggle 1 and press Enter
    toggle1.focus();
    fireEvent.keyPress(toggle1, { key: 'Enter', code: 'Enter', charCode: 13 });
    expect(toggle1).toHaveClass('active');

    // Focus on Toggle 2 and press Space
    toggle2.focus();
    fireEvent.keyPress(toggle2, { key: ' ', code: 'Space', charCode: 32 });
    expect(toggle2).toHaveClass('active');
    expect(toggle1).not.toHaveClass('active');

    // Press Enter on Toggle 2 to deactivate
    fireEvent.keyPress(toggle2, { key: 'Enter', code: 'Enter', charCode: 13 });
    expect(toggle2).not.toHaveClass('active');
  });

  test('throws error when ToggleGroupItem is used outside of ToggleGroup', () => {
    // Suppress error logs for this test
    const consoleError = vi.spyOn(console, 'error').mockImplementation(vi.fn());

    expect(() => {
      render(
        <div>
          <ToggleGroupItem value="outside">Outside Toggle</ToggleGroupItem>
        </div>
      );
    }).toThrow('ToggleGroupItem must be used within a ToggleGroup');

    // Restore console error
    consoleError.mockRestore();
  });
});
