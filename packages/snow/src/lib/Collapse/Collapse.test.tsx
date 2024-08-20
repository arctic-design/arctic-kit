import { render } from '../../utils/test-utils';
import { Collapse } from './Collapse';

describe('Collapse', () => {
  it('should render children when expanded is true', () => {
    const { getByText, getByTestId } = render(
      <Collapse expanded id="collapse">
        <div>Content</div>
      </Collapse>
    );
    const container = getByTestId('collapse');
    expect(container).toHaveStyle('height: auto');
    expect(getByText('Content')).toBeInTheDocument();
  });

  it('should not render children when expanded is false', () => {
    const { getByTestId } = render(
      <Collapse expanded={false} id="collapse">
        <div>Content</div>
      </Collapse>
    );
    const container = getByTestId('collapse');
    expect(container).toHaveStyle('height: 0');
  });
});
