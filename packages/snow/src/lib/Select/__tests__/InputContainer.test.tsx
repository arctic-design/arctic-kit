import { render } from '../../../utils/test-utils';
import InputContainer from '../InputContainer';

describe('InputContainer', () => {
  it('renders without errors', () => {
    const { container } = render(<InputContainer />);
    expect(container).toBeInTheDocument();
  });

  it('renders children', () => {
    const { getByText } = render(<InputContainer>Test Content</InputContainer>);
    const childElement = getByText('Test Content');
    expect(childElement).toBeInTheDocument();
  });

  it('applies the correct color', () => {
    const { container } = render(<InputContainer color="primary" />);
    const firstElement = container.firstChild as HTMLElement;
    expect(firstElement).toBeInTheDocument();
    // Add your assertions here
  });

  it('applies the correct size', () => {
    const { container } = render(<InputContainer size="large" />);
    const firstElement = container.firstChild as HTMLElement;
    expect(firstElement).toBeInTheDocument();
    // Add your assertions here
  });

  // Add more test cases as needed
});
