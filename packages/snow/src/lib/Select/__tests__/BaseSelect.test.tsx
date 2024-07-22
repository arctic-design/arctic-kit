import { render, fireEvent } from '../../../utils/test-utils';
import { BaseSelect } from '../BaseSelect';

describe('BaseSelect', () => {
  const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];

  test('renders without errors', () => {
    const { container } = render(
      <BaseSelect options={options} onChange={vi.fn()} value={[]} />
    );
    const firstElement = container.firstChild as HTMLElement;
    expect(firstElement).toBeInTheDocument();
  });

  test('displays placeholder when no value is selected', () => {
    const { getByText } = render(
      <BaseSelect
        onChange={vi.fn()}
        options={options}
        placeholder="Select an option"
        value={[]}
      />
    );
    expect(getByText('Select an option')).toBeInTheDocument();
  });

  test('displays selected value', () => {
    const { getByText } = render(
      <BaseSelect onChange={vi.fn()} options={options} value={[options[0]]} />
    );
    expect(getByText('Option 1')).toBeInTheDocument();
  });

  test('opens menu on click', () => {
    const { getByRole, getByText } = render(
      <BaseSelect onChange={vi.fn()} options={options} value={[]} />
    );
    const selectControl = getByRole('button');
    fireEvent.click(selectControl);
    expect(getByText('Option 1')).toBeInTheDocument();
    expect(getByText('Option 2')).toBeInTheDocument();
    expect(getByText('Option 3')).toBeInTheDocument();
  });

  test('selects an option', () => {
    const onChange = vi.fn();
    const { getByRole, getByText } = render(
      <BaseSelect options={options} onChange={onChange} value={[]} />
    );
    const selectControl = getByRole('button');
    fireEvent.click(selectControl);
    const option2 = getByText('Option 2');
    fireEvent.click(option2);
    expect(onChange).toHaveBeenCalledWith([options[1]]);
  });
});
