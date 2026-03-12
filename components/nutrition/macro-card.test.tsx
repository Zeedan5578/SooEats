import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MacroCard } from './macro-card';
import { FoodItem } from '@/lib/data/menu';

describe('MacroCard', () => {
  const mockFoodItem: FoodItem = {
    id: 'test-1',
    name: 'Test Food',
    description: 'Test description',
    price: 10.99,
    image: '/test-image.jpg',
    macros: {
      calories: 350,
      protein: 25,
      carbs: 40,
      fats: 15,
    },
    category: 'test',
  };

  it('renders food name', () => {
    render(<MacroCard item={mockFoodItem} />);
    expect(screen.getByText('Test Food')).toBeInTheDocument();
  });

  it('renders all macro information', () => {
    render(<MacroCard item={mockFoodItem} />);
    
    expect(screen.getByText('Calories')).toBeInTheDocument();
    expect(screen.getByText('350 kcal')).toBeInTheDocument();
    
    expect(screen.getByText('Protein')).toBeInTheDocument();
    expect(screen.getByText('25g')).toBeInTheDocument();
    
    expect(screen.getByText('Carbs')).toBeInTheDocument();
    expect(screen.getByText('40g')).toBeInTheDocument();
    
    expect(screen.getByText('Fats')).toBeInTheDocument();
    expect(screen.getByText('15g')).toBeInTheDocument();
  });

  it('renders food image with correct alt text', () => {
    render(<MacroCard item={mockFoodItem} />);
    const image = screen.getByAltText('Test Food');
    expect(image).toBeInTheDocument();
  });

  it('displays macros in clean organized layout', () => {
    const { container } = render(<MacroCard item={mockFoodItem} />);
    const macroContainer = container.querySelector('.space-y-3');
    expect(macroContainer).toBeInTheDocument();
    expect(macroContainer?.children).toHaveLength(4);
  });
});
