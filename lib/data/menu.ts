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
    image: 'https://picsum.photos/seed/protein-pancakes/600/400',
    serving: '3 pancakes',
    macros: { calories: 610, protein: 40, carbs: 70, fats: 19 },
    category: 'breakfast',
  },
  {
    id: 'chicken-steak-rice',
    name: 'Chicken Steak & Fried Rice',
    description: 'Grilled half chicken breast served with 300g seasoned fried rice',
    price: 16.99,
    image: 'https://picsum.photos/seed/chicken-steak-rice/600/400',
    serving: 'Half breast & 300g rice',
    macros: { calories: 820, protein: 48, carbs: 105, fats: 23 },
    category: 'breakfast',
  },
  {
    id: 'protein-pasta',
    name: 'Protein Pasta',
    description: 'High-protein pasta tossed in a signature sauce with fresh herbs',
    price: 13.99,
    image: 'https://picsum.photos/seed/protein-pasta/600/400',
    serving: '1 serving',
    macros: { calories: 401.66, protein: 30, carbs: 50, fats: 6 },
    category: 'breakfast',
  },

  // ── Lunch ──
  {
    id: 'signature-protein-wrap',
    name: 'Signature Protein Wrap',
    description: 'Four loaded wraps packed with protein and fresh vegetables',
    price: 14.99,
    image: 'https://picsum.photos/seed/protein-wrap/600/400',
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
    id: 'crispy-chicken-wrap',
    name: 'Crispy Chicken Wrap',
    description: 'Crispy chicken strips wrapped with fresh greens and signature sauce',
    price: 13.99,
    image: 'https://picsum.photos/seed/crispy-chicken-wrap/600/400',
    serving: '4 wraps',
    macros: { calories: 0, protein: 0, carbs: 0, fats: 0 },
    category: 'lunch',
  },
  {
    id: 'creamy-protein-pasta',
    name: 'Creamy Protein Pasta',
    description: 'Rich and creamy high-protein pasta with a velvety sauce',
    price: 14.99,
    image: 'https://picsum.photos/seed/creamy-protein-pasta/600/400',
    serving: '1 serving',
    macros: { calories: 0, protein: 0, carbs: 0, fats: 0 },
    category: 'lunch',
  },

  // ── Drinks ──
  {
    id: 'protein-french-vanilla-cold',
    name: 'Protein French Vanilla (Cold)',
    description: 'Chilled French vanilla protein shake — smooth and refreshing',
    price: 7.99,
    image: 'https://picsum.photos/seed/vanilla-cold/600/400',
    serving: '1 drink',
    macros: { calories: 0, protein: 0, carbs: 0, fats: 0 },
    category: 'drinks',
  },
  {
    id: 'protein-mocha-cold',
    name: 'Protein Mocha (Cold)',
    description: 'Iced mocha protein shake with rich chocolate and coffee flavour',
    price: 7.99,
    image: 'https://picsum.photos/seed/mocha-cold/600/400',
    serving: '1 drink',
    macros: { calories: 0, protein: 0, carbs: 0, fats: 0 },
    category: 'drinks',
  },
  {
    id: 'protein-caramel-latte-cold',
    name: 'Protein Caramel Latte (Cold)',
    description: 'Chilled caramel latte infused with protein for a guilt-free treat',
    price: 7.99,
    image: 'https://picsum.photos/seed/caramel-cold/600/400',
    serving: '1 drink',
    macros: { calories: 0, protein: 0, carbs: 0, fats: 0 },
    category: 'drinks',
  },
  {
    id: 'protein-french-vanilla-hot',
    name: 'Protein French Vanilla',
    description: 'Warm French vanilla protein drink — comforting and nourishing',
    price: 6.99,
    image: 'https://picsum.photos/seed/vanilla-hot/600/400',
    serving: '1 drink',
    macros: { calories: 0, protein: 0, carbs: 0, fats: 0 },
    category: 'drinks',
  },
  {
    id: 'protein-mocha-hot',
    name: 'Protein Mocha',
    description: 'Hot mocha protein drink with a rich, velvety finish',
    price: 6.99,
    image: 'https://picsum.photos/seed/mocha-hot/600/400',
    serving: '1 drink',
    macros: { calories: 0, protein: 0, carbs: 0, fats: 0 },
    category: 'drinks',
  },
  {
    id: 'protein-caramel-latte-hot',
    name: 'Protein Caramel Latte',
    description: 'Hot caramel latte with added protein for a satisfying boost',
    price: 6.99,
    image: 'https://picsum.photos/seed/caramel-hot/600/400',
    serving: '1 drink',
    macros: { calories: 0, protein: 0, carbs: 0, fats: 0 },
    category: 'drinks',
  },

  // ── Dessert ──
  {
    id: 'blueberry-protein-ice-cream',
    name: 'Blueberry Protein Ice-Cream',
    description: 'Creamy blueberry ice-cream loaded with protein — 230ml serving',
    price: 8.99,
    image: 'https://picsum.photos/seed/blueberry-icecream/600/400',
    serving: '230ml',
    macros: { calories: 283, protein: 25, carbs: 18, fats: 12 },
    category: 'dessert',
  },
  {
    id: 'strawberry-protein-ice-cream',
    name: 'Strawberry Protein Ice-Cream',
    description: 'Luscious strawberry ice-cream packed with protein — 230ml serving',
    price: 8.99,
    image: 'https://picsum.photos/seed/strawberry-icecream/600/400',
    serving: '230ml',
    macros: { calories: 278, protein: 25, carbs: 16, fats: 12 },
    category: 'dessert',
  },
  {
    id: 'protein-chocolate-pudding',
    name: 'Protein Chocolate Pudding',
    description: 'Rich chocolate pudding with high-protein content — 230ml serving',
    price: 7.99,
    image: 'https://picsum.photos/seed/choc-pudding/600/400',
    serving: '230ml',
    macros: { calories: 400, protein: 17, carbs: 53, fats: 13 },
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
];
