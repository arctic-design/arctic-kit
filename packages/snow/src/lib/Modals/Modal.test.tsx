import { render, fireEvent } from '../../utils/test-utils';
import { Modal } from './Modal';

describe('Modal Component', () => {
  it('renders the modal with the correct title', () => {
    const title = 'Test Modal';
    const { getByText } = render(
      <Modal title={title} open={true}>
        Modal Content
      </Modal>
    );

    expect(getByText(title)).toBeInTheDocument();
  });

  it('renders the modal with the correct content', () => {
    const content = 'Test Content';
    const { getByText } = render(
      <Modal title="Modal Title" open={true}>
        {content}
      </Modal>
    );

    expect(getByText(content)).toBeInTheDocument();
  });

  it('calls the onAction callback when the action button is clicked', () => {
    const onActionMock = vi.fn();
    const { getByTestId } = render(
      <Modal title="Modal Title" open={true} onAction={onActionMock}>
        Modal Content
      </Modal>
    );

    fireEvent.click(getByTestId('modal-footer-action-button'));

    expect(onActionMock).toHaveBeenCalled();
  });

  it('calls the onCancel callback when the cancel button is clicked', () => {
    const onCancelMock = vi.fn();
    const { getByTestId } = render(
      <Modal title="Modal Title" open={true} onCancel={onCancelMock}>
        Modal Content
      </Modal>
    );

    fireEvent.click(getByTestId('modal-footer-cancel-button'));

    expect(onCancelMock).toHaveBeenCalled();
  });

  it('renders the modal without header when hideHeader prop is true', () => {
    const { queryByTestId } = render(
      <Modal title="Modal Title" open={true} hideHeader={true}>
        Modal Content
      </Modal>
    );
    expect(queryByTestId('modal-heading')).toBeNull();
  });

  it('renders the modal without footer when hideFooter prop is true', () => {
    const { queryByTestId } = render(
      <Modal title="Modal Title" open={true} hideFooter={true}>
        Modal Content
      </Modal>
    );
    expect(queryByTestId('modal-footer')).toBeNull();
  });

  it('renders the modal with titleFooter', () => {
    const { queryByTestId, getByText } = render(
      <Modal
        title="Modal Title"
        open={true}
        hideFooter={true}
        titleFooter={<div data-testid="title-footer">Footer</div>}
      >
        Modal Content
      </Modal>
    );
    expect(queryByTestId('title-footer')).toBeInTheDocument();
    expect(getByText('Footer')).toBeInTheDocument();
  });
});
