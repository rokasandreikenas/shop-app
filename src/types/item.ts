export type ItemDefinition = {
  id: number;
  price: number;
  name: string;
  image: string;
};

export interface ItemDetail extends ItemDefinition {
  description: string;
}
