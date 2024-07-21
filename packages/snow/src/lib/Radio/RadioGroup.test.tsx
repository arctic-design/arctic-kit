import { fireEvent, render, screen } from '../../utils/test-utils';
import { RadioGroup } from './RadioGroup';

describe('RadioGroup Component', () => {
  const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];

  it('renders the label and options correctly', () => {
    const onChange = vi.fn();
    const { container } = render(
      <RadioGroup
        id="radioGroup"
        label="Select an option"
        options={options}
        value="option1"
        onChange={onChange}
      />
    );

    const labelElement = screen.getByText('Select an option');
    expect(labelElement).toBeInTheDocument();

    const radioOptions = container.querySelectorAll('li');
    expect(radioOptions.length).toBe(3);
    expect(radioOptions[0]).toHaveTextContent('Option 1');
    expect(radioOptions[1]).toHaveTextContent('Option 2');
    expect(radioOptions[2]).toHaveTextContent('Option 3');
  });

  it('calls onChange when an option is clicked', () => {
    const onChange = vi.fn();
    render(
      <RadioGroup
        id="radioGroup"
        label="Select an option"
        options={options}
        value="option1"
        onChange={onChange}
      />
    );

    const option2 = screen.getByText('Option 2');
    fireEvent.click(option2);

    expect(onChange).toHaveBeenCalledWith('option2');
  });

  it('handles keyboard navigation', () => {
    const onChangeMock = vi.fn();
    render(
      <RadioGroup
        id="group4"
        label="Choose an option"
        options={options}
        value="option1"
        onChange={onChangeMock}
      />
    );
    const radioOption1 = screen.getByText('Option 1');
    const radioOption2 = screen.getByText('Option 2');
    const radioOption3 = screen.getByText('Option 3');

    fireEvent.focus(radioOption1);
    fireEvent.keyDown(radioOption1, { key: 'ArrowRight' });
    expect(onChangeMock).toHaveBeenCalledWith('option2');

    fireEvent.focus(radioOption2);
    fireEvent.keyDown(radioOption2, { key: 'ArrowDown' });
    expect(onChangeMock).toHaveBeenCalledWith('option3');

    fireEvent.focus(radioOption3);
    fireEvent.keyDown(radioOption3, { key: 'ArrowLeft' });
    expect(onChangeMock).toHaveBeenCalledWith('option2');
  });
});
