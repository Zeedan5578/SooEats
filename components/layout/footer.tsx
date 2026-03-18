import Link from 'next/link';

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterProps {
  links?: FooterLink[];
}

const defaultLinks: FooterLink[] = [
  { label: 'Home',      href: '/' },
  { label: 'Menu',      href: '/menu' },
  { label: 'Catering',  href: '/catering' },
  { label: 'Meal Plan', href: '/meal-plan' },
  { label: 'SooEats',   href: '/soo-eats' },
  { label: 'Nutrition', href: '/nutrition' },
  { label: 'About',     href: '/about' },
  { label: 'Contact',   href: '/contact' },
];

export function Footer({ links = defaultLinks }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const serviceLinks = links.slice(0, 4);
  const companyLinks = links.slice(4);

  return (
    <footer className="bg-brown-900 text-brown-300">
      {/* Top accent line */}
      <div className="h-px w-full bg-orange-500" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <h3 className="font-display font-bold text-2xl text-white mb-4">
              Cafe<span className="text-orange-500">4</span>Good
            </h3>
            <p className="text-brown-400 text-sm leading-relaxed max-w-xs">
              Step into Cafe4Good and savour the perfect blend of warmth, flavour, and community.
            </p>
          </div>

          {/* Service column */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.2em] text-brown-500 font-semibold mb-6">
              Service
            </h4>
            <nav className="flex flex-col gap-3" aria-label="Service links">
              {serviceLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-brown-400 hover:text-orange-400 transition-colors duration-200 w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Company column */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.2em] text-brown-500 font-semibold mb-6">
              Company
            </h4>
            <nav className="flex flex-col gap-3" aria-label="Company links">
              {companyLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-brown-400 hover:text-orange-400 transition-colors duration-200 w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact column */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.2em] text-brown-500 font-semibold mb-6">
              Get In Touch
            </h4>
            <div className="space-y-3 text-sm text-brown-400">
              <p>(555) 123-4567</p>
              <p>hello@cafe4good.com</p>
              <a
                href="https://instagram.com/cafe4good"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-orange-400 transition-colors duration-200"
              >
                @cafe4good
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-brown-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-brown-600 uppercase tracking-widest">
            &copy; {currentYear} Cafe4Good. All rights reserved.
          </p>
          <p className="text-xs text-brown-700">
            Good food for good people.
          </p>
        </div>
      </div>
    </footer>
  );
}
