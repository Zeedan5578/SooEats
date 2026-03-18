import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { FoodCard } from './food-card';
import { FoodItem } from '@/lib/data/menu';

describe('FoodCard Component', () => {
  const mockFoodItem: FoodItem = {
    id: 'test-1',
    name: 'Test Avocado Toast',
    description: 'Fresh avocado on artisan bread',
    price: 12.99,
    image: '/menu/test-avocado-toast.jpg',
    macros: {
      calories: 350,
      protein: 12,
      carbs: 45,
      fats: 18,
    },
    category: 'breakfast',
  };

  it('renders food item name', () => {
    render(<FoodCard item={mockFoodItem} />);
    expect(screen.getByText('Test Avocado Toast')).toBeInTheDocument();
  });

  it('renders food item description', () => {
    render(<FoodCard item={mockFoodItem} />);
    expect(screen.getByText('Fresh avocado on artisan bread')).toBeInTheDocument();
  });

  it('renders food item price formatted correctly', () => {
    render(<FoodCard item={mockFoodItem} />);
    expect(screen.getByText('$12.99')).toBeInTheDocument();
  });

  it('renders image with correct alt text', () => {
    render(<FoodCard item={mockFoodItem} />);
    const image = screen.getByAltText('Test Avocado Toast');
    expect(image).toBeInTheDocument();
  });

  it('applies theme styling to name', () => {
    render(<FoodCard item={mockFoodItem} />);
    const name = screen.getByText('Test Avocado Toast');
    expect(name).toHaveClass('text-brown-900');
  });

  it('applies theme styling to price', () => {
    render(<FoodCard item={mockFoodItem} />);
    const price = screen.getByText('$12.99');
    expect(price).toHaveClass('text-orange-500');
  });

  it('applies theme styling to description', () => {
    render(<FoodCard item={mockFoodItem} />);
    const description = screen.getByText('Fresh avocado on artisan bread');
    expect(description).toHaveClass('text-brown-500');
  });

  it('formats price with two decimal places', () => {
    const itemWithWholePrice: FoodItem = {
      ...mockFoodItem,
      price: 10,
    };
    render(<FoodCard item={itemWithWholePrice} />);
    expect(screen.getByText('$10.00')).toBeInTheDocument();
  });

  it('handles long descriptions', () => {
    const itemWithLongDescription: FoodItem = {
      ...mockFoodItem,
      description: 'This is a very long description that should still render properly and maintain good readability with proper line height and spacing',
    };
    render(<FoodCard item={itemWithLongDescription} />);
    const description = screen.getByText(/This is a very long description/);
    expect(description).toBeInTheDocument();
    expect(description).toHaveClass('leading-relaxed');
  });
});
