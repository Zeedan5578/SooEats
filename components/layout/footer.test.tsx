import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Footer } from './footer';

describe('Footer', () => {
  it('renders with default links', () => {
    render(<Footer />);
    
    // Check that main navigation links are present
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Menu' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Catering' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument();
  });

  it('renders copyright information with current year', () => {
    render(<Footer />);
    
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(new RegExp(`© ${currentYear} Cafe4Good`))).toBeInTheDocument();
  });

  it('renders custom links when provided', () => {
    const customLinks = [
      { label: 'Custom Link 1', href: '/custom1' },
      { label: 'Custom Link 2', href: '/custom2' },
    ];
    
    render(<Footer links={customLinks} />);
    
    expect(screen.getByRole('link', { name: 'Custom Link 1' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Custom Link 2' })).toBeInTheDocument();
    expect(screen.queryByRole('link', { name: 'Home' })).not.toBeInTheDocument();
  });

  it('uses semantic footer element', () => {
    const { container } = render(<Footer />);
    
    const footer = container.querySelector('footer');
    expect(footer).toBeInTheDocument();
  });

  it('has proper navigation landmark', () => {
    render(<Footer />);
    
    const nav = screen.getByRole('navigation', { name: 'Footer navigation' });
    expect(nav).toBeInTheDocument();
  });

  it('all links have correct href attributes', () => {
    render(<Footer />);
    
    const homeLink = screen.getByRole('link', { name: 'Home' });
    expect(homeLink).toHaveAttribute('href', '/');
    
    const menuLink = screen.getByRole('link', { name: 'Menu' });
    expect(menuLink).toHaveAttribute('href', '/menu');
  });

  it('applies cafe-themed styling classes', () => {
    const { container } = render(<Footer />);
    
    const footer = container.querySelector('footer');
    expect(footer).toHaveClass('bg-cafe-brown-800');
    expect(footer).toHaveClass('text-cafe-cream');
  });
});
