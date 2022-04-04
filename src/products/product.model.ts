export type Sizes = 'M'|'L'|'Xl'|'XXL';
export type Product = {
  title:string,
  createAt: Date,
  stock: number,
  size?: Sizes
};
