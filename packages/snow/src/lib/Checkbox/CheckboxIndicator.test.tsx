import { fireEvent, render, screen } from '../../utils/test-utils';
import { CheckboxIndicator } from './CheckboxIndicator';

describe('CheckboxIndicator Component', () => {
  it('renders without errors', () => {
    render(<CheckboxIndicator name="checkbox" id="checkbox" />);
    const checkbox = screen.getByTestId('checkbox');
    expect(checkbox).toBeInTheDocument();
  });

  it('calls onChange when clicked', () => {
    const onChange = vi.fn();
    render(<CheckboxIndicator name="checkbox" onChange={onChange} />);
    const checkbox = screen.getByTestId('checkbox-indicator');
    fireEvent.click(checkbox);
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(true);
  });

  it('applies "checked" class when isChecked is true', () => {
    render(<CheckboxIndicator name="checkbox" checked />);
    const checkbox = screen.getByTestId('checkbox-indicator');
    expect(checkbox).toHaveClass('checked');
  });

  it('applies "unchecked" class when isChecked is false', () => {
    render(<CheckboxIndicator name="checkbox" checked={false} />);
    const checkbox = screen.getByTestId('checkbox-indicator');
    expect(checkbox).toHaveClass('unchecked');
  });
});
