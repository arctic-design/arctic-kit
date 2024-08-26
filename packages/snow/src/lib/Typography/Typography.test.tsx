import { render, waitFor } from '../../utils/test-utils';
import { SnowFontSizes } from '../constants';
import { Typography } from './Typography';

describe('Typography Component', () => {
  it('renders children correctly', () => {
    const { getByText } = render(<Typography>This is a test</Typography>);

    expect(getByText('This is a test')).toBeInTheDocument();
  });

  it('renders as a span by default', () => {
    const { container } = render(<Typography>This is a test</Typography>);
    const spanElement = container.querySelector('span');

    expect(spanElement).toBeInTheDocument();
  });

  it('renders as a different HTML element when "as" prop is provided', () => {
    const { container } = render(
      <Typography as="h1">This is a test</Typography>
    );
    const h1Element = container.querySelector('h1');

    expect(h1Element).toBeInTheDocument();
  });

  it('applies the correct font size based on the "size" prop', () => {
    const { container } = render(
      <Typography size="large" as="label">
        This is a test
      </Typography>
    );
    const spanElement = container.querySelector('label');

    expect(spanElement).toBeInTheDocument();

    waitFor(() => {
      expect(spanElement).toHaveStyle(`font-size: ${SnowFontSizes.large}px`);
    });
  });
});
