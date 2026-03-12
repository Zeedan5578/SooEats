import { describe, it, expect } from 'vitest';
import { cn } from './utils';

describe('cn utility', () => {
  it('should merge class names correctly', () => {
    const result = cn('text-red-500', 'bg-blue-500');
    expect(result).toBe('text-red-500 bg-blue-500');
  });

  it('should handle conflicting classes with tailwind-merge', () => {
    const result = cn('p-4', 'p-8');
    expect(result).toBe('p-8');
  });
});
