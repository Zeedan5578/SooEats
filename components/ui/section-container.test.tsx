import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { SectionContainer } from './section-container';

describe('SectionContainer', () => {
  it('renders children correctly', () => {
    const { getByText } = render(
      <SectionContainer>
        <p>Test content</p>
      </SectionContainer>
    );
    
    expect(getByText('Test content')).toBeInTheDocument();
  });

  it('applies default classes for consistent layout', () => {
    const { container } = render(
      <SectionContainer>
        <p>Test content</p>
      </SectionContainer>
    );
    
    const section = container.querySelector('section');
    expect(section).toHaveClass('mx-auto', 'max-w-7xl', 'px-4', 'py-12');
  });

  it('merges custom className with default classes', () => {
    const { container } = render(
      <SectionContainer className="bg-cafe-cream">
        <p>Test content</p>
      </SectionContainer>
    );
    
    const section = container.querySelector('section');
    expect(section).toHaveClass('mx-auto', 'max-w-7xl', 'bg-cafe-cream');
  });

  it('uses semantic section element', () => {
    const { container } = render(
      <SectionContainer>
        <p>Test content</p>
      </SectionContainer>
    );
    
    expect(container.querySelector('section')).toBeInTheDocument();
  });
});
