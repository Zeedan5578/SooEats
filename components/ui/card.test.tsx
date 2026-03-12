import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Card } from './card';

describe('Card Component', () => {
  it('renders children correctly', () => {
    render(
      <Card>
        <div>Test Content</div>
      </Card>
    );
    
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('applies base styles with soft shadows and rounded corners', () => {
    const { container } = render(
      <Card>
        <div>Test Content</div>
      </Card>
    );
    
    const card = container.firstChild as HTMLElement;
    expect(card).toHaveClass('bg-white');
    expect(card).toHaveClass('overflow-hidden');
  });

  it('applies custom className when provided', () => {
    const { container } = render(
      <Card className="custom-class">
        <div>Test Content</div>
      </Card>
    );
    
    const card = container.firstChild as HTMLElement;
    expect(card).toHaveClass('custom-class');
  });

  it('renders as motion.div when hover prop is true', () => {
    const { container } = render(
      <Card hover={true}>
        <div>Test Content</div>
      </Card>
    );
    
    const card = container.firstChild as HTMLElement;
    expect(card).toBeDefined();
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('renders as regular div when hover prop is false', () => {
    const { container } = render(
      <Card hover={false}>
        <div>Test Content</div>
      </Card>
    );
    
    const card = container.firstChild as HTMLElement;
    expect(card.tagName).toBe('DIV');
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('renders as regular div when hover prop is not provided', () => {
    const { container } = render(
      <Card>
        <div>Test Content</div>
      </Card>
    );
    
    const card = container.firstChild as HTMLElement;
    expect(card.tagName).toBe('DIV');
  });
});
