import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ComingSoonCard } from './coming-soon-card';

describe('ComingSoonCard', () => {
  it('renders "Coming Soon" text', () => {
    render(<ComingSoonCard />);
    expect(screen.getByText('Coming Soon')).toBeInTheDocument();
  });

  it('displays question mark icon', () => {
    render(<ComingSoonCard />);
    expect(screen.getByText('?')).toBeInTheDocument();
  });

  it('has proper card styling', () => {
    const { container } = render(<ComingSoonCard />);
    const card = container.querySelector('.bg-white.rounded-card.shadow-soft');
    expect(card).toBeInTheDocument();
  });

  it('has cursor pointer for interactivity', () => {
    const { container } = render(<ComingSoonCard />);
    const card = container.querySelector('.cursor-pointer');
    expect(card).toBeInTheDocument();
  });

  it('has aspect-square layout', () => {
    const { container } = render(<ComingSoonCard />);
    const content = container.querySelector('.aspect-square');
    expect(content).toBeInTheDocument();
  });
});
