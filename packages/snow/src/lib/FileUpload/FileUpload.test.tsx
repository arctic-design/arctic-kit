import { render, screen, fireEvent } from '../../utils/test-utils';
import { FileUpload } from './FileUpload';

describe('FileUpload', () => {
  const fakeEventHandler = vi.fn();
  test('renders without errors', () => {
    render(
      <FileUpload
        onChange={fakeEventHandler}
        onClear={fakeEventHandler}
        value={null}
      />
    );
    expect(screen.getByTestId('file-upload-container')).toBeInTheDocument();
  });

  test('displays helper text when no file is selected', () => {
    render(
      <FileUpload
        onChange={fakeEventHandler}
        onClear={fakeEventHandler}
        value={null}
      />
    );
    expect(screen.getByText('Upload your file here...')).toBeInTheDocument();
  });

  test('displays selected file name when a file is selected', () => {
    const file = new File(['file content'], 'test-file.txt', {
      type: 'text/plain',
    });
    render(
      <FileUpload
        onChange={fakeEventHandler}
        onClear={fakeEventHandler}
        value={file}
      />
    );
    expect(screen.getByText('test-file.txt')).toBeInTheDocument();
  });

  test('calls onClear when clear button is clicked', () => {
    const handleClear = vi.fn();
    render(
      <FileUpload
        onChange={fakeEventHandler}
        onClear={handleClear}
        value={
          new File(['file content'], 'test-file.txt', { type: 'text/plain' })
        }
      />
    );
    const clearButton = screen.getByTestId('clear-button');
    fireEvent.click(clearButton);
    expect(handleClear).toHaveBeenCalledTimes(1);
  });

  test('displays label and footerLabel when provided', () => {
    render(
      <FileUpload
        onChange={fakeEventHandler}
        onClear={fakeEventHandler}
        value={null}
        label="Upload your file"
        footerLabel="Footer Label"
        multiple
        isActive
      />
    );
    expect(screen.getByText('Upload your file')).toBeInTheDocument();
    expect(screen.getByText('Footer Label')).toBeInTheDocument();
  });
});
