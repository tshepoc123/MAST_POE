import { MenuItem } from '../types';

// Seed data for the menu — Omit the id here, the context will generate ids
export const seedMenu: Omit<MenuItem, 'id'>[] = [
  { name: 'Sunrise Shakshuka', description: 'Poached eggs in a spiced tomato and pepper sauce, served with crusty bread.', course: 'Breakfast', price: '58.00' },
  { name: 'Lemon Ricotta Pancakes', description: 'Light ricotta pancakes with lemon zest, maple syrup and a dusting of icing sugar.', course: 'Breakfast', price: '72.00' },
  { name: 'Cape Malay Spiced Eggs', description: 'Scrambled eggs infused with Cape Malay curry spices, served with toasted sourdough.', course: 'Breakfast', price: '65.00' },
  { name: 'Honeyed Granola Parfait', description: 'Greek yoghurt layered with honey-roasted granola and seasonal fruit.', course: 'Breakfast', price: '48.00' },
  { name: 'Sourdough Avocado Smash', description: 'Creamy smashed avocado, chili flakes, lemon on toasted sourdough with micro herbs.', course: 'Breakfast', price: '59.00' },
  { name: 'Cinnamon Apple Oat Bowl', description: 'Warm oats with sautéed cinnamon apples, toasted almonds and a drizzle of honey.', course: 'Breakfast', price: '46.00' },
  { name: 'Smoked Salmon & Dill Scramble', description: 'Soft-scrambled eggs with smoked salmon, dill and a touch of crème fraîche.', course: 'Breakfast', price: '92.00' },
  { name: 'Sweetcorn & Feta Fritter', description: 'Crisp sweetcorn fritters topped with crumbly feta and a coriander-yoghurt.', course: 'Breakfast', price: '53.00' },
  { name: 'Masala Omelette Wrap', description: 'Spiced vegetable omelette rolled in a flatbread with chutney and salad.', course: 'Breakfast', price: '49.00' },
  { name: 'Banana Bread French Toast', description: 'Thick slices of banana bread dipped and fried, served with caramelised bananas.', course: 'Breakfast', price: '68.00' },

  { name: 'Grilled Halloumi & Fig Salad', description: 'Charred halloumi with roasted figs, rocket and a honey-balsamic dressing.', course: 'Light Meals', price: '115.00' },
  { name: 'Warm Lentil, Beet & Feta Bowl', description: 'Roasted beetroot, warm lentils, feta and citrus vinaigrette on a bed of greens.', course: 'Light Meals', price: '95.00' },
  { name: 'Chimichurri Chicken Flatbread', description: 'Slices of grilled chicken with chimichurri, pickled onions and rocket on flatbread.', course: 'Light Meals', price: '125.00' },
  { name: 'Roast Pumpkin & Goat Cheese Tart', description: 'Buttery tart filled with roast pumpkin and creamy goat cheese with thyme.', course: 'Light Meals', price: '105.00' },
  { name: 'Piri‑Piri Prawn Skewers', description: 'Spicy piri-piri prawns served with lemon-herb couscous and garlic aioli.', course: 'Light Meals', price: '155.00' },
  { name: 'Braised Lamb Sliders with Mint Yoghurt', description: "Mini brioche sliders filled with slow-braised lamb and mint yoghurt slaw.", course: 'Light Meals', price: '138.00' },
  { name: 'Harissa Chickpea & Couscous', description: 'Smoky harissa chickpeas tossed with fluffy couscous and roasted peppers.', course: 'Light Meals', price: '89.00' },
  { name: 'Pan‑Seared Trout with Salsa Verde', description: 'Crisp trout fillet served with bright salsa verde and herbed new potatoes.', course: 'Light Meals', price: '162.00' },
  { name: 'Marinated Portobello Burger', description: 'Grilled portobello with caramelised onions, vegan aioli and crisp lettuce on a bun.', course: 'Light Meals', price: '99.00' },
  { name: 'Citrus Quinoa & Avocado Plate', description: 'Citrus-marinated quinoa, avocado slices, roasted seeds and a lime dressing.', course: 'Light Meals', price: '85.00' },
  { name: 'BBQ Pulled Jackfruit Wrap (vegan)', description: 'Smoky BBQ jackfruit, crunchy slaw and pickles wrapped in a tortilla.', course: 'Light Meals', price: '88.00' },
  { name: 'Sweet Potato, Kale & Peanut Stew', description: 'Comforting West-African–inspired stew with sweet potato, kale and spiced peanut broth.', course: 'Light Meals', price: '92.00' },

  { name: 'Dark Chocolate Espresso Tart', description: 'Rich chocolate tart with an espresso kick, served with whipped cream.', course: 'Desserts', price: '68.00' },
  { name: 'Malva Pudding with Vanilla Cream', description: 'Warm South African malva pudding drenched in sticky toffee sauce and cream.', course: 'Desserts', price: '55.00' },
  { name: 'Lemon Lavender Panna Cotta', description: 'Silky panna cotta scented with lavender and topped with a lemon curd.', course: 'Desserts', price: '72.00' },
  { name: 'Caramelized Banana & Toffee Sundae', description: 'Roasted bananas, toffee sauce, vanilla ice cream and crushed biscuits.', course: 'Desserts', price: '62.00' },
  { name: 'Honey Almond Baklava Bites', description: 'Crispy filo parcels with honeyed almonds and a dusting of cinnamon.', course: 'Desserts', price: '48.00' },
  { name: 'Rooibos Poached Pears', description: 'Tender pears poached in rooibos tea and served with mascarpone.', course: 'Desserts', price: '58.00' },
  { name: 'Passionfruit Pavlova', description: 'Crisp meringue crowned with whipped cream and tangy passionfruit pulp.', course: 'Desserts', price: '66.00' },
  { name: 'Salted Caramel Cheesecake Bar', description: 'Creamy cheesecake with a salted caramel swirl on a biscuit base.', course: 'Desserts', price: '75.00' }
];
