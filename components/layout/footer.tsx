import Link from 'next/link';

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterProps {
  links?: FooterLink[];
}

const defaultLinks: FooterLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Menu', href: '/menu' },
  { label: 'Catering', href: '/catering' },
  { label: 'Meal Plan', href: '/meal-plan' },
  { label: 'SooEats', href: '/soo-eats' },
  { label: 'Nutrition', href: '/nutrition' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export function Footer({ links = defaultLinks }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cafe-brown-800 text-cafe-cream border-t border-cafe-brown-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-6" aria-label="Footer navigation">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-cafe-cream hover:text-cafe-orange transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cafe-orange focus:ring-offset-2 focus:ring-offset-cafe-brown-800 rounded-md px-2 py-1"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Copyright */}
        <div className="text-center text-sm text-cafe-brown-300">
          <p>&copy; {currentYear} Cafe4Good. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
