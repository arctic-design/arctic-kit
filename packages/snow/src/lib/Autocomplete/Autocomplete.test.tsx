import { render, screen, fireEvent } from '../../utils/test-utils';
import { Autocomplete, AutocompleteProps } from './Autocomplete';
import { OptionType } from '../types';

describe('Autocomplete', () => {
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

  const renderAutocomplete = (props: Partial<AutocompleteProps> = {}) => {
    const defaultProps: AutocompleteProps = {
      options,
      onChange: onChangeMock,
    };

    return render(<Autocomplete {...defaultProps} {...props} />);
  };

  it('renders the Autocomplete component', () => {
    renderAutocomplete();
    const autocompleteElement = screen.getByTestId('text-input');
    expect(autocompleteElement).toBeInTheDocument();
  });

  it('displays the options when the input is clicked', () => {
    renderAutocomplete();
    const autocompleteElement = screen.getByTestId('text-input');
    fireEvent.click(autocompleteElement);
    const optionElements = screen.getAllByRole('option');
    expect(optionElements.length).toBe(options.length);
  });

  it('calls the onChange callback when an option is selected', () => {
    renderAutocomplete();
    const autocompleteElement = screen.getByRole('textbox');
    fireEvent.click(autocompleteElement);
    const optionElement = screen.getByText('Option 1');
    fireEvent.click(optionElement);
    expect(onChangeMock).toHaveBeenCalledWith('Option 1');
  });

  it('does not display options when the input is not focused', () => {
    renderAutocomplete();

    const optionElements = screen.queryAllByRole('option');
    expect(optionElements.length).toBe(0);
  });

  it('updates the input value when an option is selected', () => {
    renderAutocomplete();
    const autocompleteElement = screen.getByRole('textbox');
    fireEvent.click(autocompleteElement);
    const optionElement = screen.getByText('Option 2');
    fireEvent.click(optionElement);
    expect(autocompleteElement).toHaveValue('Option 2');
  });

  it('renders the Autocomplete component for OptionType options', () => {
    renderAutocomplete({ options: optionObjects });
    const autocompleteElement = screen.getByTestId('text-input');
    expect(autocompleteElement).toBeInTheDocument();
  });

  it('displays the options with OptionType when the input is clicked', () => {
    renderAutocomplete({ options: optionObjects });
    const autocompleteElement = screen.getByTestId('text-input');
    fireEvent.click(autocompleteElement);
    const optionElements = screen.getAllByRole('option');
    expect(optionElements.length).toBe(options.length);
  });

  it('calls the onChange callback when an option of OptionType is selected', () => {
    renderAutocomplete({ options: optionObjects });
    const autocompleteElement = screen.getByRole('textbox');
    fireEvent.click(autocompleteElement);
    const optionElement = screen.getByText('Option 1');
    fireEvent.click(optionElement);
    expect(onChangeMock).toHaveBeenCalledWith('option1');
  });

  it('updates the input value when an option of OptionType is selected', () => {
    renderAutocomplete({ options: optionObjects });
    const autocompleteElement = screen.getByRole('textbox');
    fireEvent.click(autocompleteElement);
    const optionElement = screen.getByText('Option 2');
    fireEvent.click(optionElement);
    expect(autocompleteElement).toHaveValue('option2');
  });
});
