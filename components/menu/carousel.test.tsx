import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { Carousel } from './carousel';
import { FoodItem } from '@/lib/data/menu';

// Mock Next.js Image component
vi.mock('next/image', () => ({
  default: ({ src, alt, priority, ...props }: any) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={alt} {...props} />;
  },
}));

// Mock framer-motion to avoid animation issues in tests
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, initial, animate, exit, transition, ...props }: any) => (
      <div {...props}>{children}</div>
    ),
  },
  AnimatePresence: ({ children, mode }: any) => <>{children}</>,
}));

const mockItems: FoodItem[] = [
  {
    id: 'item-1',
    name: 'Avocado Toast',
    description: 'Fresh avocado on artisan bread',
    price: 12.99,
    image: '/menu/avocado-toast.jpg',
    macros: { calories: 350, protein: 12, carbs: 45, fats: 18 },
    category: 'breakfast',
  },
  {
    id: 'item-2',
    name: 'Acai Bowl',
    description: 'Organic acai with berries',
    price: 11.99,
    image: '/menu/acai-bowl.jpg',
    macros: { calories: 420, protein: 8, carbs: 68, fats: 14 },
    category: 'breakfast',
  },
  {
    id: 'item-3',
    name: 'Grilled Chicken Wrap',
    description: 'Herb-marinated chicken',
    price: 14.99,
    image: '/menu/chicken-wrap.jpg',
    macros: { calories: 480, protein: 35, carbs: 42, fats: 18 },
    category: 'lunch',
  },
];

describe('Carousel', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
    vi.useRealTimers();
  });

  it('renders the first item initially', () => {
    render(<Carousel items={mockItems} />);
    
    expect(screen.getByText('Avocado Toast')).toBeInTheDocument();
    expect(screen.getByText('Fresh avocado on artisan bread')).toBeInTheDocument();
    expect(screen.getByText('$12.99')).toBeInTheDocument();
  });

  it('renders empty state when no items provided', () => {
    render(<Carousel items={[]} />);
    
    expect(screen.getByText('No items to display')).toBeInTheDocument();
  });

  it('displays navigation arrows', () => {
    render(<Carousel items={mockItems} />);
    
    expect(screen.getByLabelText('Previous item')).toBeInTheDocument();
    expect(screen.getByLabelText('Next item')).toBeInTheDocument();
  });

  it('displays dot indicators for all items', () => {
    render(<Carousel items={mockItems} />);
    
    const dots = screen.getAllByRole('button').filter(
      (button) => button.getAttribute('aria-label')?.startsWith('Go to slide')
    );
    expect(dots).toHaveLength(mockItems.length);
  });

  it('navigates to next item when next button is clicked', () => {
    render(<Carousel items={mockItems} />);
    
    const nextButton = screen.getByLabelText('Next item');
    fireEvent.click(nextButton);
    
    expect(screen.getByText('Acai Bowl')).toBeInTheDocument();
  });

  it('navigates to previous item when previous button is clicked', () => {
    render(<Carousel items={mockItems} />);
    
    const prevButton = screen.getByLabelText('Previous item');
    fireEvent.click(prevButton);
    
    // Should wrap to last item
    expect(screen.getByText('Grilled Chicken Wrap')).toBeInTheDocument();
  });

  it('navigates to specific slide when dot is clicked', () => {
    render(<Carousel items={mockItems} />);
    
    const thirdDot = screen.getByLabelText('Go to slide 3');
    fireEvent.click(thirdDot);
    
    expect(screen.getByText('Grilled Chicken Wrap')).toBeInTheDocument();
  });

  it('autoplays through items', () => {
    render(<Carousel items={mockItems} autoplayInterval={1000} />);
    
    // Initially shows first item
    expect(screen.getByText('Avocado Toast')).toBeInTheDocument();
    
    // After 1 second, should show second item
    act(() => {
      vi.advanceTimersByTime(1000);
    });
    expect(screen.getByText('Acai Bowl')).toBeInTheDocument();
    
    // After another second, should show third item
    act(() => {
      vi.advanceTimersByTime(1000);
    });
    expect(screen.getByText('Grilled Chicken Wrap')).toBeInTheDocument();
  });

  it('pauses autoplay on hover', () => {
    render(<Carousel items={mockItems} autoplayInterval={1000} />);
    
    const carousel = screen.getByText('Avocado Toast').closest('div')?.parentElement?.parentElement;
    expect(carousel).toBeInTheDocument();
    
    // Hover over carousel
    if (carousel) {
      fireEvent.mouseEnter(carousel);
    }
    
    // Advance time - should not change
    vi.advanceTimersByTime(1000);
    expect(screen.getByText('Avocado Toast')).toBeInTheDocument();
  });

  it('pauses autoplay when manually navigating', () => {
    render(<Carousel items={mockItems} autoplayInterval={1000} />);
    
    // Click next button
    const nextButton = screen.getByLabelText('Next item');
    fireEvent.click(nextButton);
    
    expect(screen.getByText('Acai Bowl')).toBeInTheDocument();
    
    // Advance time - should stay on same item (autoplay paused)
    vi.advanceTimersByTime(1000);
    expect(screen.getByText('Acai Bowl')).toBeInTheDocument();
  });

  it('wraps around to first item after last item', () => {
    render(<Carousel items={mockItems} autoplayInterval={500} />);
    
    // Advance through all items
    act(() => {
      vi.advanceTimersByTime(500); // Item 2
    });
    expect(screen.getByText('Acai Bowl')).toBeInTheDocument();
    
    act(() => {
      vi.advanceTimersByTime(500); // Item 3
    });
    expect(screen.getByText('Grilled Chicken Wrap')).toBeInTheDocument();
    
    act(() => {
      vi.advanceTimersByTime(500); // Should wrap to Item 1
    });
    expect(screen.getByText('Avocado Toast')).toBeInTheDocument();
  });

  it('has accessible navigation controls', () => {
    render(<Carousel items={mockItems} />);
    
    const prevButton = screen.getByLabelText('Previous item');
    const nextButton = screen.getByLabelText('Next item');
    
    expect(prevButton).toHaveAttribute('aria-label', 'Previous item');
    expect(nextButton).toHaveAttribute('aria-label', 'Next item');
  });

  it('displays all required food item information', () => {
    render(<Carousel items={mockItems} />);
    
    const item = mockItems[0];
    expect(screen.getByText(item.name)).toBeInTheDocument();
    expect(screen.getByText(item.description)).toBeInTheDocument();
    expect(screen.getByText(`$${item.price.toFixed(2)}`)).toBeInTheDocument();
    expect(screen.getByAltText(item.name)).toBeInTheDocument();
  });
});
