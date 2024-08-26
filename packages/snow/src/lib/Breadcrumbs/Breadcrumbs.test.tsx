import { render, screen, waitFor } from '../../utils/test-utils';
import { Breadcrumbs, BreadcrumbItem } from './Breadcrumbs';

// Mock data
const items: BreadcrumbItem[] = [
  { title: 'Home', href: '#' },
  { title: 'Section', href: '#' },
  { title: 'Subsection', href: '#', clickable: false },
  { title: 'Page', href: '#' },
];

// Basic render test
test('renders Breadcrumbs with clickable links and labels', () => {
  render(<Breadcrumbs items={items} />);

  waitFor(() => {
    // Check if the links and labels are rendered correctly
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Section')).toBeInTheDocument();
    expect(screen.getByText('Subsection')).toBeInTheDocument();
    expect(screen.getByText('Page')).toBeInTheDocument();

    // Check that clickable items are rendered as links
    expect(screen.getByText('Home')).toHaveAttribute('href', '#');
    expect(screen.getByText('Section')).toHaveAttribute('href', '#');
    expect(screen.getByText('Page')).toHaveAttribute('href', '#');

    // Check that non-clickable items are rendered as plain labels
    expect(screen.getByText('Subsection')).not.toHaveAttribute('href');
  });
});

// Test for rendering custom separators
test('renders custom separator between items', () => {
  const customSeparator = <span data-testid="custom-separator">/</span>;
  render(<Breadcrumbs items={items} separator={customSeparator} />);

  // Check that custom separator is rendered between items
  expect(screen.getAllByTestId('custom-separator')).toHaveLength(3);
});

// Test for custom renderAnchor function
test('renders custom anchor elements', () => {
  const renderAnchor = (title: string, href: string) => (
    <a href={href} className="custom-anchor">
      {title}
    </a>
  );

  render(<Breadcrumbs items={items} renderAnchor={renderAnchor} />);

  // Check that custom anchor elements are rendered
  expect(screen.getAllByRole('link')).toHaveLength(2);
  expect(screen.getByText('Home')).toHaveClass('custom-anchor');
  expect(screen.getByText('Section')).toHaveClass('custom-anchor');
});

// Test for no items passed
test('does not render Breadcrumbs when no items are passed', () => {
  render(<Breadcrumbs items={[]} />);
  expect(screen.queryByRole('navigation')).toBeNull();
});

// Test for default ChevronRightIcon separator
test('renders default ChevronRightIcon separator', () => {
  render(<Breadcrumbs items={items} />);

  // Check that the default ChevronRightIcon is rendered between items
  expect(screen.getAllByTestId('icon-chevron-right')).toHaveLength(3); // Make sure you set a testId on the ChevronRightIcon component
});
