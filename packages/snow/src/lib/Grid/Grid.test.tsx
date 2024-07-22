import { render } from '../../utils/test-utils';
import { Grid } from './Grid';
import { GridRow } from './GridRow';
import { GridColumn } from './GridColumn';

describe('Grid component', () => {
  it('renders without errors', () => {
    render(<Grid />);
    expect(true).toBeTruthy();
  });

  it('renders children correctly', () => {
    const { getByText } = render(
      <Grid spacing={1} gutterWidth={2}>
        <GridRow>
          <GridColumn xs={12}>Child 1</GridColumn>
          <GridColumn xs={12}>Child 2</GridColumn>
        </GridRow>
      </Grid>
    );

    expect(getByText('Child 1')).toBeInTheDocument();
    expect(getByText('Child 2')).toBeInTheDocument();
  });
});
