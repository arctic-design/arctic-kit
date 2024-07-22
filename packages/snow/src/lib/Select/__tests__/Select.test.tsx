import { render } from '../../../utils/test-utils';
import { Select } from '../Select';

describe('Select Component', () => {
  const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];

  it('renders correctly with default props', () => {
    const { container } = render(<Select options={options} />);
    const baseSelectElement = container.firstChild as HTMLElement;

    expect(baseSelectElement).toBeInTheDocument();
  });
});
