import { render, waitFor } from '../../utils/test-utils';
import { Breadcrumbs, BreadcrumbItem } from './Breadcrumbs';

// Mock data
const items: BreadcrumbItem[] = [
  { title: 'Home', href: '#' },
  { title: 'Section', href: '#' },
  { title: 'Subsection', href: '#', clickable: false },
  { title: 'Page', href: '#' },
];

describe('Breadcrumbs', () => {
  // Basic render test
  it('renders Breadcrumbs with clickable links and labels', () => {
    const { getByText } = render(<Breadcrumbs items={items} />);

    waitFor(() => {
      // Check if the links and labels are rendered correctly
      expect(getByText('Home')).toBeInTheDocument();
      expect(getByText('Section')).toBeInTheDocument();
      expect(getByText('Subsection')).toBeInTheDocument();
      expect(getByText('Page')).toBeInTheDocument();

      // Check that clickable items are rendered as links
      expect(getByText('Home')).toHaveAttribute('href', '#');
      expect(getByText('Section')).toHaveAttribute('href', '#');

      // Check that non-clickable items are rendered as plain labels
      expect(getByText('Subsection')).not.toHaveAttribute('href');
      expect(getByText('Page')).not.toHaveAttribute('href', '#');
    });
  });

  // Test for rendering custom separators
  it('renders custom separator between items', () => {
    const customSeparator = <span data-testid="custom-separator">/</span>;
    const { getAllByTestId } = render(
      <Breadcrumbs items={items} separator={customSeparator} />
    );

    // Check that custom separator is rendered between items
    expect(getAllByTestId('custom-separator')).toHaveLength(3);
  });

  // Test for custom renderAnchor function
  it('renders custom anchor elements', () => {
    const renderAnchor = (title: string, href: string) => (
      <a href={href} className="custom-anchor">
        {title}
      </a>
    );

    const { getAllByRole, getByText } = render(
      <Breadcrumbs items={items} renderAnchor={renderAnchor} />
    );

    // Check that custom anchor elements are rendered
    expect(getAllByRole('link')).toHaveLength(2);
    expect(getByText('Home')).toHaveClass('custom-anchor');
    expect(getByText('Section')).toHaveClass('custom-anchor');
  });

  // Test for no items passed
  it('does not render Breadcrumbs when no items are passed', () => {
    const { queryByRole } = render(<Breadcrumbs items={[]} />);
    expect(queryByRole('navigation')).toBeNull();
  });

  // Test for default ChevronRightIcon separator
  it('renders default ChevronRightIcon separator', () => {
    const { getAllByTestId } = render(<Breadcrumbs items={items} />);

    // Check that the default ChevronRightIcon is rendered between items
    expect(getAllByTestId('icon-chevron-right')).toHaveLength(3); // Make sure you set a testId on the ChevronRightIcon component
  });
});
