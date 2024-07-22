import { render } from '../../utils/test-utils';
import { TabPanels } from './TabPanels';

describe('TabPanels Component', () => {
  it('renders children correctly', () => {
    const { getByText } = render(
      <TabPanels>
        <div>Panel 1</div>
        <div>Panel 2</div>
        <div>Panel 3</div>
      </TabPanels>
    );

    expect(getByText('Panel 1')).toBeInTheDocument();
    expect(getByText('Panel 2')).toBeInTheDocument();
    expect(getByText('Panel 3')).toBeInTheDocument();
  });
});
