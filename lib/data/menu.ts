// Centralized food data for Menu, Nutrition, and Cart

export interface FoodItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  serving: string;
  macros: {
    calories: number;
    protein: number;
    carbs: number;
    fats: number;
  };
  category: 'breakfast' | 'lunch' | 'drinks' | 'dessert';
}

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
}

// Menu items — real SOOEATS products with nutritional data
export const menuItems: FoodItem[] = [
  // ── Breakfast ──
  {
    id: 'protein-pancakes',
    name: 'Protein Pancakes',
    description: 'Three fluffy high-protein pancakes served with fresh toppings',
    price: 12.99,
    image: '/menu/pancake.jpeg',
    serving: '3 pancakes',
    macros: { calories: 610, protein: 40, carbs: 70, fats: 19 },
    category: 'breakfast',
  },

  // ── Lunch ──
  {
    id: 'signature-protein-wrap',
    name: 'Signature Wrap',
    description: 'Four loaded wraps packed with protein and fresh vegetables',
    price: 14.99,
    image: '/menu/protein_wrap.jpeg',
    serving: '4 wraps',
    macros: { calories: 624, protein: 45, carbs: 65, fats: 18 },
    category: 'lunch',
  },
  {
    id: 'tandoori-wrap',
    name: 'Tandoori Wrap',
    description: 'Four smoky tandoori-spiced wraps with fresh veggies and sauce',
    price: 14.99,
    image: 'https://picsum.photos/seed/tandoori-wrap/600/400',
    serving: '4 wraps',
    macros: { calories: 662, protein: 46, carbs: 65, fats: 16 },
    category: 'lunch',
  },
  {
    id: 'chicken-steak-rice',
    name: 'Chicken Steak & Rice',
    description: 'Grilled chicken steak served with seasoned rice',
    price: 16.99,
    image: '/menu/chicken_steak_rice.jpeg',
    serving: 'Half breast & 300g rice',
    macros: { calories: 820, protein: 48, carbs: 105, fats: 23 },
    category: 'lunch',
  },
  {
    id: 'protein-pasta',
    name: 'Protein Pasta',
    description: 'High-protein pasta tossed in a signature sauce with fresh herbs',
    price: 13.99,
    image: '/menu/pasta.jpeg',
    serving: '1 serving',
    macros: { calories: 401.66, protein: 30, carbs: 50, fats: 6 },
    category: 'lunch',
  },

  // ── Dessert ──
  {
    id: 'strawberry-protein-ice-cream',
    name: 'Strawberry Protein Ice-Cream',
    description: 'Luscious strawberry ice-cream packed with protein — 230ml serving',
    price: 8.99,
    image: '/menu/icecream-Strawberry.jpeg',
    serving: '230ml',
    macros: { calories: 278, protein: 25, carbs: 16, fats: 12 },
    category: 'dessert',
  },
  {
    id: 'blueberry-protein-ice-cream',
    name: 'Blueberry Protein Ice-Cream',
    description: 'Creamy blueberry ice-cream loaded with protein — 230ml serving',
    price: 8.99,
    image: '/menu/icecream-Blueberry.jpeg',
    serving: '230ml',
    macros: { calories: 283, protein: 25, carbs: 18, fats: 12 },
    category: 'dessert',
  },
  {
    id: 'protein-cheesecake',
    name: 'Protein Cheesecake',
    description: 'Indulgent cheesecake with a protein-packed twist',
    price: 9.99,
    image: 'https://picsum.photos/seed/protein-cheesecake/600/400',
    serving: '1 slice',
    macros: { calories: 0, protein: 0, carbs: 0, fats: 0 },
    category: 'dessert',
  },

  // ── Drinks ──
  {
    id: 'protein-coffee',
    name: 'Protein Coffee',
    description: 'Rich coffee blended with protein for an energizing boost',
    price: 6.99,
    image: 'https://picsum.photos/seed/protein-coffee/600/400',
    serving: '1 drink',
    macros: { calories: 0, protein: 0, carbs: 0, fats: 0 },
    category: 'drinks',
  },
];
