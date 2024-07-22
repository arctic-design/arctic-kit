import { fireEvent, render, screen } from '../../utils/test-utils';
import { RadioOptions } from './RadioOptions';

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];
describe('RadioOptions Component', () => {
  it('renders radio options correctly', () => {
    const onClick = vi.fn();
    const selectedId = 'option2';

    render(
      <RadioOptions
        options={options}
        selectedId={selectedId}
        onClick={onClick}
        size="medium"
        color="primary"
      />
    );

    const radioOptions = screen.getAllByRole('checkbox');
    expect(radioOptions).toHaveLength(options.length);

    radioOptions.forEach((radioOption, index) => {
      const option = options[index];
      expect(radioOption).toHaveTextContent(option.label);
      expect(radioOption).toHaveAttribute(
        'aria-checked',
        option.value === selectedId ? 'true' : 'false'
      );
    });
  });

  it('calls onClick handler when a radio option is clicked', () => {
    const onClick = vi.fn();
    const selectedId = 'option2';

    render(
      <RadioOptions
        options={options}
        selectedId={selectedId}
        onClick={onClick}
        size="medium"
        color="primary"
      />
    );

    const radioOptions = screen.getAllByRole('checkbox');
    fireEvent.click(radioOptions[0]);

    expect(onClick).toHaveBeenCalledTimes(1);
    expect(onClick).toHaveBeenCalledWith(options[0]);
  });
});
