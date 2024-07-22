import { fireEvent, render } from '../../utils/test-utils';
import { Checkbox } from './Checkbox';

describe('Checkbox Component', () => {
  it('renders correctly', () => {
    const { getByLabelText } = render(
      <Checkbox name="myCheckbox" label="My Checkbox" />
    );

    const checkbox = getByLabelText('My Checkbox');
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();
  });

  it('calls onChange when clicked', () => {
    const handleChange = vi.fn();
    const { getByLabelText } = render(
      <Checkbox
        name="myCheckbox"
        label="My Checkbox"
        checked={true}
        onChange={handleChange}
      />
    );

    const checkbox = getByLabelText('My Checkbox');
    fireEvent.click(checkbox);

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(false);
  });
});
