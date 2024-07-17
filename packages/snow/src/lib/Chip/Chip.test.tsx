import { render, fireEvent, waitFor } from '../../utils/test-utils';
import { Chip, ChipProps } from './Chip';

import { SnowHeights } from '../constants';
import { DEFAULT_THEME } from '../../theming/theme';

describe('Chip', () => {
  const defaultProps: ChipProps = {
    onClick: vi.fn(),
  };

  const content = 'Test Chip';

  it('renders the chip with default props', () => {
    const { getByText } = render(<Chip {...defaultProps}>{content}</Chip>);
    const chipElement = getByText('Test Chip');
    expect(chipElement).toBeInTheDocument();
    waitFor(() => {
      expect(chipElement).toHaveStyle(`height: ${SnowHeights['medium']}px`);
    });
  });

  it('calls onClick when chip is clicked', () => {
    const { getByText } = render(<Chip {...defaultProps}>{content}</Chip>);
    const chipElement = getByText('Test Chip');
    fireEvent.click(chipElement);
    waitFor(() => {
      expect(defaultProps.onClick).toHaveBeenCalled();
    });
  });

  it('renders the chip with selected style when selected prop is true', () => {
    const { getByText } = render(
      <Chip {...defaultProps} selected interactive color="primary">
        {content}
      </Chip>
    );
    const chipElement = getByText('Test Chip');
    waitFor(() => {
      expect(chipElement).toHaveStyle(
        `background-color: ${DEFAULT_THEME.colors.primary.main}`
      );
    });
  });

  it('renders the chip with correct height for size small', () => {
    const { getByTestId } = render(
      <Chip {...defaultProps} size="small">
        {content}
      </Chip>
    );
    const chipElement = getByTestId('chip');
    expect(chipElement).toBeInTheDocument();
    waitFor(() => {
      expect(chipElement).toHaveStyle(`height: ${SnowHeights['small']}px`);
    });
  });

  it('renders the chip with correct height for size large', () => {
    const { getByTestId } = render(
      <Chip {...defaultProps} size="large">
        {content}
      </Chip>
    );
    const chipElement = getByTestId('chip');
    expect(chipElement).toBeInTheDocument();
    waitFor(() => {
      expect(chipElement).toHaveStyle(`height: ${SnowHeights['large']}px`);
    });
  });

  it('renders the chip with correct style when disabled', () => {
    const { getByTestId } = render(
      <Chip {...defaultProps} disabled>
        {content}
      </Chip>
    );
    const chipElement = getByTestId('chip');
    expect(chipElement).toBeInTheDocument();

    waitFor(() => {
      expect(chipElement).toHaveStyle(
        `background-color: ${DEFAULT_THEME.colors.grey[200]}`
      );
      expect(chipElement).toHaveStyle(`border: none`);
      expect(chipElement).toHaveStyle(
        `color: ${DEFAULT_THEME.colors.grey[600]}`
      );
    });
  });

  it('renders the chip with correct style when variant is non-interactive', () => {
    const { getByTestId } = render(
      <Chip {...defaultProps} color="info">
        {content}
      </Chip>
    );
    const chipElement = getByTestId('chip');
    expect(chipElement).toBeInTheDocument();
    waitFor(() => {
      expect(chipElement).toHaveStyle(
        `background-color: ${DEFAULT_THEME.colors.info.main}`
      );
      expect(chipElement).toHaveStyle(`border-color: transparent`);
      expect(chipElement).toHaveStyle(
        `color: ${DEFAULT_THEME.colors.neutral[0]}`
      );
    });
  });

  it('renders the chip with correct style when variant is default', () => {
    const { getByTestId } = render(<Chip {...defaultProps}>{content}</Chip>);
    const chipElement = getByTestId('chip');
    expect(chipElement).toBeInTheDocument();
    waitFor(() => {
      expect(chipElement).toHaveStyle(
        `background-color: ${DEFAULT_THEME.colors.grey[300]}`
      );
      expect(chipElement).toHaveStyle(`border-color: transparent`);
      expect(chipElement).toHaveStyle(
        `color: ${DEFAULT_THEME.colors.grey[900]}`
      );
    });
  });

  it('renders the loading component', () => {
    const { getByTestId } = render(
      <Chip {...defaultProps} loading>
        {content}
      </Chip>
    );
    const loadingElement = getByTestId('spinner-loader');
    waitFor(() => {
      expect(loadingElement).toBeInTheDocument();
    });
  });

  it('doest not render the loading component when loading is false', () => {
    const { queryByTestId } = render(<Chip {...defaultProps}>{content}</Chip>);
    const loadingElement = queryByTestId('spinner-loader');
    waitFor(() => {
      expect(loadingElement).not.toBeInTheDocument();
    });
  });
});
