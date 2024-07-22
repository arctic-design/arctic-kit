import { render } from '../../utils/test-utils';
import { MultiSelect } from './MultiSelect';

describe('MultiSelect', () => {
  const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];

  test('renders without errors', () => {
    const mockedHandler = vi.fn();
    const { container } = render(
      <MultiSelect options={options} value={[]} onChange={mockedHandler} />
    );
    // Add assertions here to check if the component renders correctly
    const firstElement = container.firstChild as HTMLElement;
    expect(firstElement).toBeInTheDocument();
  });

  // Add more tests as needed
});
