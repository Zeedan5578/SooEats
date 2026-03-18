import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Button } from './button';

describe('Button Component', () => {
  it('renders with default props', () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
  });

  it('renders with primary variant', () => {
    render(<Button variant="primary">Primary Button</Button>);
    const button = screen.getByRole('button', { name: /primary button/i });
    expect(button).toHaveClass('gradient-orange');
  });

  it('renders with secondary variant', () => {
    render(<Button variant="secondary">Secondary Button</Button>);
    const button = screen.getByRole('button', { name: /secondary button/i });
    expect(button).toHaveClass('bg-white');
  });

  it('renders with small size', () => {
    render(<Button size="sm">Small</Button>);
    const button = screen.getByRole('button', { name: /small/i });
    expect(button).toHaveClass('px-4');
    expect(button).toHaveClass('py-1.5');
  });

  it('renders with medium size', () => {
    render(<Button size="md">Medium</Button>);
    const button = screen.getByRole('button', { name: /medium/i });
    expect(button).toHaveClass('px-6');
    expect(button).toHaveClass('py-2.5');
  });

  it('renders with large size', () => {
    render(<Button size="lg">Large</Button>);
    const button = screen.getByRole('button', { name: /large/i });
    expect(button).toHaveClass('px-8');
    expect(button).toHaveClass('py-3.5');
  });

  it('applies custom className', () => {
    render(<Button className="custom-class">Custom</Button>);
    const button = screen.getByRole('button', { name: /custom/i });
    expect(button).toHaveClass('custom-class');
  });

  it('handles disabled state', () => {
    render(<Button disabled>Disabled</Button>);
    const button = screen.getByRole('button', { name: /disabled/i });
    expect(button).toBeDisabled();
    expect(button).toHaveClass('disabled:opacity-50');
  });

  it('has focus styles for keyboard accessibility', () => {
    render(<Button>Focus Test</Button>);
    const button = screen.getByRole('button', { name: /focus test/i });
    expect(button).toHaveClass('focus:outline-none');
    expect(button).toHaveClass('focus:ring-2');
    expect(button).toHaveClass('focus:ring-orange-500');
  });

  it('has hover transition styles', () => {
    render(<Button>Hover Test</Button>);
    const button = screen.getByRole('button', { name: /hover test/i });
    expect(button).toHaveClass('transition-all');
    expect(button).toHaveClass('duration-200');
  });
});
