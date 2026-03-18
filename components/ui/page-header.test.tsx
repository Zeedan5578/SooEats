import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { PageHeader } from './page-header';

describe('PageHeader', () => {
  it('renders title correctly', () => {
    const { getByText } = render(<PageHeader title="Test Title" />);
    expect(getByText('Test Title')).toBeInTheDocument();
  });

  it('uses h1 element for title', () => {
    const { container } = render(<PageHeader title="Test Title" />);
    const h1 = container.querySelector('h1');
    expect(h1).toBeInTheDocument();
    expect(h1).toHaveTextContent('Test Title');
  });

  it('renders subtitle when provided', () => {
    const { getByText } = render(
      <PageHeader title="Test Title" subtitle="Test subtitle" />
    );
    expect(getByText('Test subtitle')).toBeInTheDocument();
  });

  it('does not render subtitle when not provided', () => {
    const { container } = render(<PageHeader title="Test Title" />);
    const paragraphs = container.querySelectorAll('p');
    expect(paragraphs).toHaveLength(0);
  });

  it('applies theme colors to title', () => {
    const { container } = render(<PageHeader title="Test Title" />);
    const h1 = container.querySelector('h1');
    expect(h1).toHaveClass('text-brown-900');
  });

  it('applies theme colors to subtitle', () => {
    const { container } = render(
      <PageHeader title="Test Title" subtitle="Test subtitle" />
    );
    const p = container.querySelector('p');
    expect(p).toHaveClass('text-brown-500');
  });

  it('merges custom className with default classes', () => {
    const { container } = render(
      <PageHeader title="Test Title" className="custom-class" />
    );
    const div = container.querySelector('div');
    expect(div).toHaveClass('mb-12', 'text-center', 'custom-class');
  });

  it('centers text by default', () => {
    const { container } = render(<PageHeader title="Test Title" />);
    const div = container.querySelector('div');
    expect(div).toHaveClass('text-center');
  });
});
