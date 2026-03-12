import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ProductCard } from './product-card';
import { Product } from '@/lib/data/menu';

describe('ProductCard', () => {
  const mockProduct: Product = {
    id: 'test-1',
    name: 'Test Product',
    description: 'This is a test product description',
    image: '/test-product.jpg',
  };

  it('renders product name', () => {
    render(<ProductCard product={mockProduct} />);
    expect(screen.getByText('Test Product')).toBeInTheDocument();
  });

  it('renders product description', () => {
    render(<ProductCard product={mockProduct} />);
    expect(screen.getByText('This is a test product description')).toBeInTheDocument();
  });

  it('renders product image with correct alt text', () => {
    render(<ProductCard product={mockProduct} />);
    const image = screen.getByAltText('Test Product');
    expect(image).toBeInTheDocument();
  });

  it('has proper card styling', () => {
    const { container } = render(<ProductCard product={mockProduct} />);
    const card = container.querySelector('.bg-white.rounded-card.shadow-soft');
    expect(card).toBeInTheDocument();
  });

  it('has hover shadow transition', () => {
    const { container } = render(<ProductCard product={mockProduct} />);
    const card = container.querySelector('.hover\\:shadow-lg');
    expect(card).toBeInTheDocument();
  });
});
