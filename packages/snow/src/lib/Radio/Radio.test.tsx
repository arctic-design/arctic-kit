import { DEFAULT_THEME } from '../../theming';
import { fireEvent, render, waitFor } from '../../utils/test-utils';
import { Radio } from './Radio';
import { RadioSizes } from './types';

describe('Radio Component', () => {
  const option = {
    value: 'option1',
    label: 'Option 1',
  };
  const selectedValue = 'option1';
  const onClick = vi.fn();
  const size = 'medium';
  const multiplier = RadioSizes[size];

  it('should render the radio option correctly', () => {
    const { getByRole, getByText } = render(
      <Radio option={option} onClick={onClick} size={size} color="primary" />
    );

    const radioOption = getByRole('checkbox');
    const radioOptionCircle = getByRole('checkbox').querySelector('div');
    const radioOptionLabel = getByText('Option 1');

    expect(radioOption).toBeInTheDocument();
    expect(radioOptionCircle).toBeInTheDocument();
    expect(radioOptionLabel).toBeInTheDocument();
  });

  it('should call onClick when the radio option is clicked', () => {
    const { getByRole } = render(
      <Radio option={option} onClick={onClick} size={size} stopPropagation />
    );

    const radioOption = getByRole('checkbox');
    expect(radioOption).toHaveAttribute('aria-checked', 'false');
    fireEvent.click(radioOption);

    expect(onClick).toHaveBeenCalledTimes(1);
    expect(onClick).toHaveBeenCalledWith(option);
  });

  it('should render the selected state', () => {
    const { getByRole, getByTestId } = render(
      <Radio
        option={option}
        selectedValue={selectedValue}
        onClick={onClick}
        size={size}
        stopPropagation
      />
    );

    const radioOption = getByRole('checkbox');
    const radioOptionCircle = getByTestId('option1-circle');

    expect(radioOptionCircle).toBeInTheDocument();
    expect(radioOption).toHaveAttribute('aria-checked', 'true');
    waitFor(() => {
      expect(radioOptionCircle).toHaveStyle(
        `border: ${multiplier * 0.3}px solid ${
          DEFAULT_THEME.colors.primary.main
        }`
      );
    });
  });

  it('should render the disabled selected state', () => {
    const { getByRole, getByTestId } = render(
      <Radio
        option={option}
        selectedValue={selectedValue}
        onClick={onClick}
        size={size}
        stopPropagation
        disabled
      />
    );

    const radioOption = getByRole('checkbox');
    const radioOptionCircle = getByTestId('option1-circle');

    expect(radioOptionCircle).toBeInTheDocument();
    expect(radioOption).toHaveAttribute('aria-checked', 'true');

    waitFor(() => {
      expect(radioOptionCircle).toHaveStyle(
        `background-color: ${DEFAULT_THEME.colors.grey.main}`
      );

      expect(radioOptionCircle).toHaveStyle(
        `border: ${multiplier * 0.3}px solid ${DEFAULT_THEME.colors.grey[200]}`
      );
    });
  });

  it('should render the disabled state', () => {
    const { getByRole, getByTestId } = render(
      <Radio
        option={option}
        onClick={onClick}
        size={size}
        stopPropagation
        disabled
      />
    );

    const radioOption = getByRole('checkbox');
    const radioOptionCircle = getByTestId('option1-circle');

    expect(radioOptionCircle).toBeInTheDocument();
    expect(radioOption).toHaveAttribute('aria-checked', 'false');

    waitFor(() => {
      expect(radioOptionCircle).toHaveStyle(
        `background-color: ${DEFAULT_THEME.colors.grey[200]}`
      );
      expect(radioOptionCircle).toHaveStyle(
        `border: 1px solid ${DEFAULT_THEME.colors.grey[200]}`
      );
    });
  });

  it('should render the error state', () => {
    const { getByRole, getByTestId } = render(
      <Radio
        option={option}
        onClick={onClick}
        size={size}
        stopPropagation
        error
      />
    );

    const radioOption = getByRole('checkbox');
    const radioOptionCircle = getByTestId('option1-circle');

    expect(radioOptionCircle).toBeInTheDocument();
    expect(radioOption).toHaveAttribute('aria-checked', 'false');
    waitFor(() => {
      expect(radioOptionCircle).toHaveStyle(
        `border: 1px solid ${DEFAULT_THEME.colors.error.main}`
      );
    });
  });
});
