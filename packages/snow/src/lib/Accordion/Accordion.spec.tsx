import { render, fireEvent, waitFor } from '../../utils/test-utils';
import { Accordion } from './Accordion';
import { AccordionItem } from './AccordionItem';

describe('Accordion', () => {
  it('should render the accordion with the provided children', () => {
    const { getByText } = render(
      <Accordion>
        <AccordionItem title="Item 1">Content 1</AccordionItem>
        <AccordionItem title="Item 2">Content 2</AccordionItem>
      </Accordion>
    );

    expect(getByText('Item 1')).toBeInTheDocument();
    expect(getByText('Item 2')).toBeInTheDocument();
    expect(getByText('Content 1')).toBeInTheDocument();
    expect(getByText('Content 2')).toBeInTheDocument();
  });

  it('should toggle the content when the header is clicked', () => {
    (window as any).scrollTo = vi.fn(); // eslint-disable-line @typescript-eslint/no-explicit-any

    const { getByTestId } = render(
      <Accordion spacing={2}>
        <AccordionItem title="Item 1">Content 1</AccordionItem>
      </Accordion>
    );

    const header = getByTestId('accordion-item-header');
    const headerTitle = getByTestId('accordion-item-header-title');
    const content = getByTestId('accordion-item-content-container');
    expect(header).not.toHaveClass('reverse');
    expect(headerTitle).not.toHaveClass('reverse');

    expect(content).toHaveStyle('height: 0px');

    fireEvent.click(header);

    waitFor(() => {
      expect(content).toHaveStyle('height: auto');
    });

    fireEvent.click(header);

    waitFor(() => {
      expect(content).toHaveStyle('height: 0px');
    });
  });

  it('should render with reverse', () => {
    const { getByTestId } = render(
      <Accordion>
        <AccordionItem reverse title="Item 1">
          Content 1
        </AccordionItem>
      </Accordion>
    );
    const header = getByTestId('accordion-item-header');
    const headerTitle = getByTestId('accordion-item-header-title-container');
    expect(header).toHaveClass('reverse');
    expect(headerTitle).toHaveClass('reverse');
  });

  it('should render with custom expand icons', () => {
    const { getByText } = render(
      <Accordion>
        <AccordionItem
          titleComponent={<span>TitleIcon</span>}
          expandSection={<div>ExpandIcon</div>}
          title="Item 1"
        >
          Content 1
        </AccordionItem>
      </Accordion>
    );

    const expandIconContent = getByText('ExpandIcon');
    const titleIconContent = getByText('TitleIcon');
    expect(expandIconContent).toBeInTheDocument();
    expect(titleIconContent).toBeInTheDocument();
  });

  it('should render with leading and trailing expand sections', () => {
    const { getByText, queryByText } = render(
      <Accordion>
        <AccordionItem
          title="Item 1"
          leadingExpandSection={<div>Leading</div>}
          trailingExpandSection={<div>Trailing</div>}
        >
          Content 1
        </AccordionItem>
      </Accordion>
    );

    const leadingContent = getByText('Leading');
    const trailingContent = getByText('Trailing');
    const contentElement = queryByText('Content 1');
    expect(leadingContent).toBeInTheDocument();
    expect(trailingContent).toBeInTheDocument();
    expect(contentElement).toBeInTheDocument();
  });

  it('should render with disableToggle', () => {
    const { getByTestId, getByText, queryByText } = render(
      <Accordion>
        <AccordionItem disableToggle title="Item 1">
          Content 1
        </AccordionItem>
      </Accordion>
    );

    const contentElement = queryByText('Content 1');
    expect(getByText('Item 1')).toBeInTheDocument();
    expect(contentElement).not.toBeInTheDocument();
    waitFor(() => {
      const header = getByTestId('accordion-item-header');
      expect(header).toHaveStyle('cursor: default');
      expect(header).toHaveStyle('background: inherit');
    });
  });

  it('renders subtitle when provided', () => {
    const { getByTestId } = render(
      <Accordion>
        <AccordionItem id="test-id" title="Title" subTitle="SubTitle">
          Content 1
        </AccordionItem>
      </Accordion>
    );

    waitFor(() => {
      const subTitleElement = getByTestId('test-id-header-sub-title');
      expect(subTitleElement).toBeInTheDocument();
      expect(subTitleElement).toHaveTextContent(' - SubTitle');
    });
  });

  it('renders subtitle without hyphen when title is not provided', () => {
    const { getByTestId } = render(
      <Accordion>
        <AccordionItem id="test-id" subTitle="SubTitle">
          Content 1
        </AccordionItem>
      </Accordion>
    );
    const subTitleElement = getByTestId('test-id-header-sub-title');
    expect(subTitleElement).toBeInTheDocument();
    expect(subTitleElement).toHaveTextContent('SubTitle');
  });

  it('does not render subtitle when not provided', () => {
    const { queryByTestId } = render(
      <Accordion>
        <AccordionItem id="test-id" title="Title">
          Content 1
        </AccordionItem>
      </Accordion>
    );

    const subTitleElement = queryByTestId('test-id-header-sub-title');
    expect(subTitleElement).not.toBeInTheDocument();
  });

  it('renders error when provided', () => {
    const { getByTestId } = render(
      <Accordion>
        <AccordionItem id="test-id" title="Title" errorText="Failed">
          Content 1
        </AccordionItem>
      </Accordion>
    );

    waitFor(() => {
      const errorContainer = getByTestId('test-id-error-container');
      const errorElement = getByTestId('test-id-error-text');
      expect(errorContainer).toBeInTheDocument();
      expect(errorElement).toBeInTheDocument();
      expect(errorElement).toHaveTextContent('Failed');
    });
  });

  it('does not render error when not provided', () => {
    const { queryByTestId } = render(
      <Accordion>
        <AccordionItem id="test-id" title="Title">
          Content 1
        </AccordionItem>
      </Accordion>
    );

    const errorContainer = queryByTestId('test-id-error-container');
    const errorElement = queryByTestId('test-id-error-text');

    expect(errorContainer).not.toBeInTheDocument();
    expect(errorElement).not.toBeInTheDocument();
  });
});
