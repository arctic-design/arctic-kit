import { render, screen, fireEvent } from '../../utils/test-utils';
import { Combobox, ComboboxProps } from './Combobox';
import { OptionType } from '../types';

describe('Combobox', () => {
  const options: ReadonlyArray<string | OptionType> = [
    'Option 1',
    'Option 2',
    'Option 3',
  ];

  const optionObjects: ReadonlyArray<string | OptionType> = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];
  const onChangeMock = vi.fn();

  const renderCombobox = (props: Partial<ComboboxProps> = {}) => {
    const defaultProps: ComboboxProps = {
      options,
      onChange: onChangeMock,
    };

    return render(<Combobox {...defaultProps} {...props} />);
  };

  it('renders the Combobox component', () => {
    renderCombobox();
    const autocompleteElement = screen.getByTestId('text-input');
    expect(autocompleteElement).toBeInTheDocument();
  });

  it('displays the options when the input is clicked', () => {
    renderCombobox();
    const autocompleteElement = screen.getByTestId('text-input');
    fireEvent.click(autocompleteElement);
    const optionElements = screen.getAllByRole('option');
    expect(optionElements.length).toBe(options.length);
  });

  it('calls the onChange callback when an option is selected', () => {
    renderCombobox();
    const autocompleteElement = screen.getByRole('textbox');
    fireEvent.click(autocompleteElement);
    const optionElement = screen.getByText('Option 1');
    fireEvent.click(optionElement);
    expect(onChangeMock).toHaveBeenCalledWith('Option 1');
  });

  it('does not display options when the input is not focused', () => {
    renderCombobox();

    const optionElements = screen.queryAllByRole('option');
    expect(optionElements.length).toBe(0);
  });

  it('updates the input value when an option is selected', () => {
    renderCombobox();
    const autocompleteElement = screen.getByRole('textbox');
    fireEvent.click(autocompleteElement);
    const optionElement = screen.getByText('Option 2');
    fireEvent.click(optionElement);
    expect(autocompleteElement).toHaveValue('Option 2');
  });

  it('renders the Combobox component for OptionType options', () => {
    renderCombobox({ options: optionObjects });
    const autocompleteElement = screen.getByTestId('text-input');
    expect(autocompleteElement).toBeInTheDocument();
  });

  it('displays the options with OptionType when the input is clicked', () => {
    renderCombobox({ options: optionObjects });
    const autocompleteElement = screen.getByTestId('text-input');
    fireEvent.click(autocompleteElement);
    const optionElements = screen.getAllByRole('option');
    expect(optionElements.length).toBe(options.length);
  });

  it('calls the onChange callback when an option of OptionType is selected', () => {
    renderCombobox({ options: optionObjects });
    const autocompleteElement = screen.getByRole('textbox');
    fireEvent.click(autocompleteElement);
    const optionElement = screen.getByText('Option 1');
    fireEvent.click(optionElement);
    expect(onChangeMock).toHaveBeenCalledWith('option1');
  });

  it('updates the input value when an option of OptionType is selected', () => {
    renderCombobox({ options: optionObjects });
    const autocompleteElement = screen.getByRole('textbox');
    fireEvent.click(autocompleteElement);
    const optionElement = screen.getByText('Option 2');
    fireEvent.click(optionElement);
    expect(autocompleteElement).toHaveValue('option2');
  });
});
