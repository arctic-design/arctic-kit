import { fireEvent, render, waitFor } from '../../utils/test-utils';
import { SegmentedControl } from './SegmentedControl';
import { SegmentedControlButton } from './SegmentedControlButton';

import { SnowHeights } from '../constants';
import { ThemeSize } from '../types';
import { DEFAULT_THEME } from '../../theming/theme';
import { forwardRef } from 'react';
import { useSegmentedControl } from './SegmentedControlContext';

vi.mock('../Tooltip', () => ({
  Tooltip: vi.fn(),
}));

describe('SegmentedControl', () => {
  it('renders without crashing', () => {
    const { getByTestId } = render(
      <SegmentedControl>
        <SegmentedControlButton>Test</SegmentedControlButton>
      </SegmentedControl>
    );
    waitFor(() => {
      expect(getByTestId('segmented-control-button-0')).toBeInTheDocument();
    });
  });

  it('initially selects the correct index', () => {
    const { getByText } = render(
      <SegmentedControl initialSelectedIndex={1}>
        <SegmentedControlButton>Button 1</SegmentedControlButton>
        <SegmentedControlButton>Button 2</SegmentedControlButton>
      </SegmentedControl>
    );

    expect(getByText('Button 2')).toHaveAttribute('aria-selected', 'true');
  });

  it('moves the indicator when a different button is selected', () => {
    const { getByText } = render(
      <SegmentedControl initialSelectedIndex={0}>
        <SegmentedControlButton>Button 1</SegmentedControlButton>
        <SegmentedControlButton>Button 2</SegmentedControlButton>
      </SegmentedControl>
    );

    expect(getByText('Button 1')).toHaveAttribute('aria-selected', 'true');

    expect(getByText('Button 2')).toHaveAttribute('aria-selected', 'false');

    fireEvent.click(getByText('Button 2'));

    expect(getByText('Button 1')).toHaveAttribute('aria-selected', 'false');

    expect(getByText('Button 2')).toHaveAttribute('aria-selected', 'true');
  });

  it('applies styles based on size small', () => {
    const { getByTestId } = render(
      <SegmentedControl color="primary" size="small">
        <SegmentedControlButton>Button</SegmentedControlButton>
      </SegmentedControl>
    );

    const indicator = getByTestId('segmented-control-indicator'); // Assume the first div is the indicator
    const rootContainer = getByTestId('segmented-control-root');

    waitFor(() => {
      expect(indicator).toHaveStyle(`height: 100%`);
      expect(indicator).toHaveStyle(
        `border: 1px solid ${DEFAULT_THEME.colors.primary.main}`
      );
      expect(rootContainer).toHaveStyle(`height: ${SnowHeights.small}px`);
    });
  });

  it('applies no borders when initialSelectedIndex is -1', () => {
    const { getByTestId } = render(
      <SegmentedControl color="primary" size="small" initialSelectedIndex={-1}>
        <SegmentedControlButton>Button</SegmentedControlButton>
      </SegmentedControl>
    );

    const indicator = getByTestId('segmented-control-indicator'); // Assume the first div is the indicator
    const rootContainer = getByTestId('segmented-control-root');

    waitFor(() => {
      expect(indicator).toHaveStyle(`height: 100%`);
      expect(indicator).toHaveStyle(`border: none`);
      expect(rootContainer).toHaveStyle(`height: ${SnowHeights.small}px`);
    });
  });

  it('applies styles based on size medium', () => {
    const { getByTestId } = render(
      <SegmentedControl color="primary" size="medium">
        <SegmentedControlButton>Button</SegmentedControlButton>
      </SegmentedControl>
    );

    const rootContainer = getByTestId('segmented-control-root');

    waitFor(() => {
      expect(rootContainer).toHaveStyle(`height: ${SnowHeights.medium}px`);
    });
  });

  it('applies styles based on size large', () => {
    const { getByTestId } = render(
      <SegmentedControl color="primary" size="large">
        <SegmentedControlButton tooltipMessage="Hellow there!!!">
          Button
        </SegmentedControlButton>
      </SegmentedControl>
    );

    const rootContainer = getByTestId('segmented-control-root');

    waitFor(() => {
      expect(rootContainer).toHaveStyle(`height: ${SnowHeights.large}px`);
    });
  });

  it('provides correct context values to children', () => {
    const ChildComponent = forwardRef<HTMLButtonElement, Record<string, never>>(
      (props, ref) => {
        const context = useSegmentedControl();
        return (
          <SegmentedControlButton {...props} ref={ref}>
            {context.size}
          </SegmentedControlButton>
        );
      }
    );

    ChildComponent.displayName = 'ChildComponent';

    const { getByText } = render(
      <SegmentedControl size="large">
        <ChildComponent />
      </SegmentedControl>
    );

    waitFor(() => {
      expect(getByText('large')).toBeInTheDocument();
    });
  });
});
