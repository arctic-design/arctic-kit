import { render, screen, waitFor } from '../../utils/test-utils';
import { Tag } from './Tag';

describe('Tag', () => {
  it('renders the tag with default props', () => {
    render(<Tag>Default Tag</Tag>);
    const contentElement = screen.getByText('Default Tag');
    const tagElement = screen.getByTestId('tag');
    expect(contentElement).toBeInTheDocument();
    expect(tagElement).toBeInTheDocument();
    waitFor(() => {
      expect(tagElement).toHaveStyle(`
        padding: 4px 8px;
        border-radius: 4px;
        color: #6D7278;
        border: none;
    `);
    });
  });

  it('renders the tag with custom props', () => {
    render(
      <Tag size="small" color="primary" noFill>
        Custom Tag
      </Tag>
    );
    const tagElement = screen.getByTestId('tag');
    expect(tagElement).toBeInTheDocument();
    waitFor(() => {
      expect(tagElement).toHaveStyle(`
        padding: 2px 4px;
        border-radius: 2px;
        color: #6D7278;
        border: 1px solid #F4F5F5;
    `);
    });
  });

  it('renders the tag with filled style', () => {
    render(
      <Tag color="success" size="large">
        Filled Tag
      </Tag>
    );
    const tagElement = screen.getByTestId('tag');
    expect(tagElement).toBeInTheDocument();
    waitFor(() => {
      expect(tagElement).toHaveStyle(`
        padding: 8px 16px;
        border-radius: 6px;
        color: #338646;
        background-color: #E5F6E8;
        border: none;
    `);
    });
  });
});
