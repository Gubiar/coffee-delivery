export const enum CoffeeType {
  TRADITIONAL = "Tradicional",
  SPECIAL = "Especial",
  WITH_MILK = "Com Leite",
  COLD = "Gelado",
  ALCOHOLIC = "Alcolico",
}

export interface CoffeeProps {
  id: number;
  imagePath: string;
  name: string;
  types: Array<CoffeeType>;
  price: number;
  description: string;
}
