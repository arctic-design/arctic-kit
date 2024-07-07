import { render } from '../../utils/test-utils';
import { ActionMenuComponent } from './ActionMenuComponent';

describe('ActionMenuComponent', () => {
  it('renders the component correctly', () => {
    const { getByText } = render(<ActionMenuComponent label="Menu" />);
    const menuButton = getByText('Menu');
    expect(menuButton).toBeInTheDocument();
  });
});
