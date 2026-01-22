/**
 * Configuración de categorías y subcategorías del menú
 * Fácil de mantener y actualizar sin tocar componentes
 */

export interface Subcategory {
  id: string;
  name: string;
  label?: string; // Etiqueta para mostrar en UI
}

export interface MenuCategory {
  id: string;
  name: string;
  label: string;
  description?: string;
  image?: string;
  subcategories?: Subcategory[];
}

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: "bebidas",
    name: "BEBIDAS",
    label: "Bebidas",
    image:
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&q=80",
    subcategories: [
      { id: "vinos-blancos", name: "Vinos Blancos", label: "🍾 Vinos Blancos" },
      { id: "vinos-tintos", name: "Vinos Tintos", label: "🍇 Vinos Tintos" },
      { id: "cervezas", name: "Cervezas", label: "🍺 Cervezas" },
      { id: "sin-alcohol", name: "Sin Alcohol", label: "🥤 Sin Alcohol" },
    ],
  },
  {
    id: "comidas",
    name: "COMIDAS",
    label: "Comidas",
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ada?w=800&q=80",
    subcategories: [
      { id: "hamburguesas", name: "Hamburguesas", label: "🍔 Hamburguesas" },
      { id: "milanesas", name: "Milanesas", label: "🥩 Milanesas" },
      { id: "lomitos", name: "Lomitos", label: "🥪 Lomitos" },
      { id: "empanadas", name: "Empanadas", label: "🥟 Empanadas" },
      { id: "tostados", name: "Tostados", label: "🍞 Tostados" },
      { id: "pizzas", name: "Pizzas", label: "🍕 Pizzas" },
      { id: "papas-fritas", name: "Papas Fritas", label: "🍟 Papas Fritas" },
      { id: "picadas", name: "Picadas", label: "🍽️ Picadas" },
    ],
  },
  {
    id: "postres",
    name: "POSTRES",
    label: "Postres",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80",
  },
];

/**
 * Obtiene una categoría por su ID
 */
export function getCategoryById(id: string): MenuCategory | undefined {
  return MENU_CATEGORIES.find(
    (cat) => cat.id.toLowerCase() === id.toLowerCase(),
  );
}

/**
 * Obtiene todas las categorías activas
 */
export function getAllCategories(): MenuCategory[] {
  return MENU_CATEGORIES;
}

/**
 * Obtiene las subcategorías de una categoría
 */
export function getSubcategoriesById(categoryId: string): Subcategory[] {
  const category = getCategoryById(categoryId);
  return category?.subcategories || [];
}
