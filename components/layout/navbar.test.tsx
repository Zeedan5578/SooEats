import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Navbar, NavLink } from './navbar';

describe('Navbar Component', () => {
  const mockLinks: NavLink[] = [
    { label: 'Home', href: '/' },
    { label: 'Menu', href: '/menu' },
    { label: 'About', href: '/about' },
  ];

  describe('Desktop Navigation', () => {
    it('renders logo with correct text', () => {
      render(<Navbar links={mockLinks} />);
      const logo = screen.getByLabelText('Cafe4Good Home');
      expect(logo).toBeInTheDocument();
    });

    it('renders all navigation links', () => {
      render(<Navbar links={mockLinks} />);
      mockLinks.forEach((link) => {
        const linkElements = screen.getAllByText(link.label);
        expect(linkElements.length).toBeGreaterThan(0);
      });
    });

    it('renders default links when no links prop provided', () => {
      render(<Navbar />);
      expect(screen.getAllByText('Menu').length).toBeGreaterThan(0);
      expect(screen.getAllByText('Catering').length).toBeGreaterThan(0);
    });

    it('logo has correct href', () => {
      render(<Navbar links={mockLinks} />);
      const logo = screen.getByLabelText('Cafe4Good Home');
      expect(logo).toHaveAttribute('href', '/');
    });

    it('navigation links have correct hrefs', () => {
      render(<Navbar links={mockLinks} />);
      mockLinks.forEach((link) => {
        const linkElements = screen.getAllByRole('link', { name: link.label });
        linkElements.forEach((element) => {
          expect(element).toHaveAttribute('href', link.href);
        });
      });
    });
  });

  describe('Mobile Menu', () => {
    it('mobile menu button is present', () => {
      render(<Navbar links={mockLinks} />);
      const menuButton = screen.getByLabelText('Open menu');
      expect(menuButton).toBeInTheDocument();
    });

    it('mobile menu is initially closed', () => {
      render(<Navbar links={mockLinks} />);
      const menuButton = screen.getByLabelText('Open menu');
      expect(menuButton).toHaveAttribute('aria-expanded', 'false');
    });

    it('opens mobile menu when hamburger button is clicked', () => {
      render(<Navbar links={mockLinks} />);
      const menuButton = screen.getByLabelText('Open menu');
      fireEvent.click(menuButton);

      const closeButton = screen.getByLabelText('Close menu');
      expect(closeButton).toHaveAttribute('aria-expanded', 'true');
    });

    it('closes mobile menu when X button is clicked', () => {
      render(<Navbar links={mockLinks} />);

      const openButton = screen.getByLabelText('Open menu');
      fireEvent.click(openButton);

      const closeButton = screen.getByLabelText('Close menu');
      fireEvent.click(closeButton);

      const menuButton = screen.getByLabelText('Open menu');
      expect(menuButton).toHaveAttribute('aria-expanded', 'false');
    });

    it('closes mobile menu when a link is clicked', () => {
      render(<Navbar links={mockLinks} />);

      const openButton = screen.getByLabelText('Open menu');
      fireEvent.click(openButton);

      const mobileLinks = screen.getAllByRole('link', { name: 'Menu' });
      const mobileMenuLink = mobileLinks[mobileLinks.length - 1];
      fireEvent.click(mobileMenuLink);

      const menuButton = screen.getByLabelText('Open menu');
      expect(menuButton).toHaveAttribute('aria-expanded', 'false');
    });
  });

  describe('Styling and Theme', () => {
    it('has sticky positioning class', () => {
      const { container } = render(<Navbar links={mockLinks} />);
      const nav = container.querySelector('nav');
      expect(nav).toHaveClass('sticky');
    });

    it('has background color on nav element', () => {
      const { container } = render(<Navbar links={mockLinks} />);
      const nav = container.querySelector('nav');
      // Navbar uses bg-white/70 or bg-white/90 depending on scroll state
      expect(nav?.className).toMatch(/bg-white/);
    });

    it('navigation links have themed text color', () => {
      const { container } = render(<Navbar links={mockLinks} />);
      const desktopNav = container.querySelector('.hidden.md\\:flex');
      expect(desktopNav?.querySelector('a')).toHaveClass('text-brown-600');
    });
  });

  describe('Keyboard Accessibility', () => {
    it('logo has focus styles', () => {
      render(<Navbar links={mockLinks} />);
      const logo = screen.getByLabelText('Cafe4Good Home');
      expect(logo).toHaveClass('focus:outline-none');
      expect(logo).toHaveClass('focus:ring-2');
      expect(logo).toHaveClass('focus:ring-orange-500');
    });

    it('navigation links have focus styles', () => {
      const { container } = render(<Navbar links={mockLinks} />);
      const links = container.querySelectorAll('a[href="/menu"]');
      links.forEach((link) => {
        expect(link).toHaveClass('focus:outline-none');
        expect(link).toHaveClass('focus:ring-2');
      });
    });

    it('mobile menu button has focus styles', () => {
      render(<Navbar links={mockLinks} />);
      const menuButton = screen.getByLabelText('Open menu');
      expect(menuButton).toHaveClass('focus:outline-none');
      expect(menuButton).toHaveClass('focus:ring-2');
    });

    it('mobile menu button has proper aria-label', () => {
      render(<Navbar links={mockLinks} />);
      const menuButton = screen.getByLabelText('Open menu');
      expect(menuButton).toHaveAttribute('aria-label', 'Open menu');
    });

    it('mobile menu button aria-label changes when menu is open', () => {
      render(<Navbar links={mockLinks} />);
      const openButton = screen.getByLabelText('Open menu');
      fireEvent.click(openButton);

      const closeButton = screen.getByLabelText('Close menu');
      expect(closeButton).toHaveAttribute('aria-label', 'Close menu');
    });
  });

  describe('Responsive Design', () => {
    it('desktop navigation has hidden class on mobile', () => {
      const { container } = render(<Navbar links={mockLinks} />);
      const desktopNav = container.querySelector('.hidden.md\\:flex');
      expect(desktopNav).toBeInTheDocument();
    });

    it('mobile menu button is hidden on desktop', () => {
      render(<Navbar links={mockLinks} />);
      const menuButton = screen.getByLabelText('Open menu');
      expect(menuButton).toHaveClass('md:hidden');
    });

    it('mobile menu has responsive padding', () => {
      const { container } = render(<Navbar links={mockLinks} />);
      const navContainer = container.querySelector('.max-w-7xl');
      expect(navContainer).toHaveClass('px-4');
      expect(navContainer).toHaveClass('sm:px-6');
      expect(navContainer).toHaveClass('lg:px-8');
    });
  });

  describe('Edge Cases', () => {
    it('handles empty links array', () => {
      render(<Navbar links={[]} />);
      expect(screen.getByLabelText('Cafe4Good Home')).toBeInTheDocument();
    });

    it('handles single link', () => {
      const singleLink: NavLink[] = [{ label: 'Home', href: '/' }];
      render(<Navbar links={singleLink} />);
      expect(screen.getAllByText('Home').length).toBeGreaterThan(0);
    });

    it('handles links with special characters', () => {
      const specialLinks: NavLink[] = [
        { label: 'Menu & Prices', href: '/menu' },
        { label: 'About Us!', href: '/about' },
      ];
      render(<Navbar links={specialLinks} />);
      expect(screen.getAllByText('Menu & Prices').length).toBeGreaterThan(0);
      expect(screen.getAllByText('About Us!').length).toBeGreaterThan(0);
    });
  });
});
