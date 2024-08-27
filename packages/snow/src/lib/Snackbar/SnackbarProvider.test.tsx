import { render, screen } from '../../utils/test-utils';

import { SnackbarProvider } from './SnackbarProvider';

describe('SnackbarProvider', () => {
  it('renders children', () => {
    render(
      <SnackbarProvider>
        <div>Child Component</div>
      </SnackbarProvider>
    );

    expect(screen.getByText('Child Component')).toBeInTheDocument();
  });
});
