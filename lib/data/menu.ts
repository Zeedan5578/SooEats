// Centralized food data for Menu and Nutrition pages

export interface FoodItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  macros: {
    calories: number;
    protein: number;
    carbs: number;
    fats: number;
  };
  category?: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
}

// Menu items with realistic cafe offerings
export const menuItems: FoodItem[] = [
  {
    id: 'item-1',
    name: 'Avocado Toast',
    description: 'Fresh avocado on artisan sourdough with cherry tomatoes and microgreens',
    price: 12.99,
    image: 'https://picsum.photos/seed/avocado-toast/600/400',
    macros: {
      calories: 350,
      protein: 12,
      carbs: 45,
      fats: 18,
    },
    category: 'breakfast',
  },
  {
    id: 'item-2',
    name: 'Acai Bowl',
    description: 'Organic acai topped with granola, fresh berries, banana, and honey',
    price: 11.99,
    image: 'https://picsum.photos/seed/acai-bowl/600/400',
    macros: {
      calories: 420,
      protein: 8,
      carbs: 68,
      fats: 14,
    },
    category: 'breakfast',
  },
  {
    id: 'item-3',
    name: 'Grilled Chicken Wrap',
    description: 'Herb-marinated chicken with mixed greens, tomatoes, and tahini sauce',
    price: 14.99,
    image: 'https://picsum.photos/seed/chicken-wrap/600/400',
    macros: {
      calories: 480,
      protein: 35,
      carbs: 42,
      fats: 18,
    },
    category: 'lunch',
  },
  {
    id: 'item-4',
    name: 'Quinoa Buddha Bowl',
    description: 'Roasted vegetables, quinoa, chickpeas, and lemon-tahini dressing',
    price: 13.99,
    image: 'https://picsum.photos/seed/buddha-bowl/600/400',
    macros: {
      calories: 520,
      protein: 18,
      carbs: 72,
      fats: 16,
    },
    category: 'lunch',
  },
  {
    id: 'item-5',
    name: 'Salmon Poke Bowl',
    description: 'Fresh salmon, edamame, cucumber, avocado over sushi rice',
    price: 16.99,
    image: 'https://picsum.photos/seed/poke-bowl/600/400',
    macros: {
      calories: 580,
      protein: 32,
      carbs: 58,
      fats: 22,
    },
    category: 'lunch',
  },
  {
    id: 'item-6',
    name: 'Cold Brew Coffee',
    description: 'Smooth cold brew coffee steeped for 24 hours',
    price: 5.99,
    image: 'https://picsum.photos/seed/cold-brew/600/400',
    macros: {
      calories: 5,
      protein: 0,
      carbs: 0,
      fats: 0,
    },
    category: 'drinks',
  },
  {
    id: 'item-7',
    name: 'Green Smoothie',
    description: 'Spinach, banana, mango, almond milk, and chia seeds',
    price: 8.99,
    image: 'https://picsum.photos/seed/green-smoothie/600/400',
    macros: {
      calories: 280,
      protein: 6,
      carbs: 52,
      fats: 8,
    },
    category: 'drinks',
  },
  {
    id: 'item-8',
    name: 'Matcha Latte',
    description: 'Premium ceremonial grade matcha with oat milk',
    price: 6.99,
    image: 'https://picsum.photos/seed/matcha-latte/600/400',
    macros: {
      calories: 180,
      protein: 4,
      carbs: 28,
      fats: 6,
    },
    category: 'drinks',
  },
];

// Collaboration products for SooEats x Cafe4Good page
export const collaborationProducts: Product[] = [
  {
    id: 'product-1',
    name: 'Organic Coffee Blend',
    description: 'Premium organic coffee beans sourced from sustainable farms in Ethiopia and Colombia',
    image: 'https://picsum.photos/seed/coffee-blend/600/400',
  },
  {
    id: 'product-2',
    name: 'Artisan Granola',
    description: 'House-made granola with organic oats, nuts, and local honey',
    image: 'https://picsum.photos/seed/granola/600/400',
  },
  {
    id: 'product-3',
    name: 'Cold-Pressed Juice Pack',
    description: 'Variety pack of fresh cold-pressed juices made daily',
    image: 'https://picsum.photos/seed/juice-pack/600/400',
  },
  {
    id: 'product-4',
    name: 'Protein Energy Balls',
    description: 'Nutrient-dense energy balls with dates, nuts, and superfoods',
    image: 'https://picsum.photos/seed/energy-balls/600/400',
  },
];
