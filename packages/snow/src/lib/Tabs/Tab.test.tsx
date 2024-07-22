import { fireEvent, render } from '../../utils/test-utils';
import { Tab } from './Tab';

describe('Tab Component', () => {
  test('renders correctly', () => {
    const props = {
      label: 'Tab 1',
      selectedTabIndex: 0,
      index: 0,
      onClick: vi.fn(),
    };

    const { getByText } = render(<Tab {...props} />);

    expect(getByText('Tab 1')).toBeInTheDocument();
  });

  test('calls onClick when clicked', () => {
    const props = {
      label: 'Tab 2',
      selectedTabIndex: 0,
      index: 1,
      onClick: vi.fn(),
    };

    const { getByText } = render(<Tab {...props} />);

    fireEvent.click(getByText('Tab 2'));

    expect(props.onClick).toHaveBeenCalledWith(1);
  });

  test('applies "selected" class when selectedTabIndex matches index', () => {
    const props = {
      label: 'Tab 3',
      selectedTabIndex: 2,
      index: 2,
      onClick: vi.fn(),
    };

    const { getByText } = render(<Tab {...props} />);

    expect(getByText('Tab 3')).toHaveClass('selected');
  });

  test('does not apply "selected" class when selectedTabIndex does not match index', () => {
    const props = {
      label: 'Tab 4',
      selectedTabIndex: 2,
      index: 3,
      onClick: vi.fn(),
    };

    const { getByText } = render(<Tab {...props} />);

    expect(getByText('Tab 4')).not.toHaveClass('selected');
  });
});
