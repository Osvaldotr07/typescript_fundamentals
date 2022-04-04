import { addProduct, calcStock, products } from "./product.service";

addProduct({
  title: 'Product 1',
  createAt: new Date(1993, 1,1),
  stock: 12
})

addProduct({
  title: 'Product 1',
  createAt: new Date(1993, 1,1),
  stock: 12,
  size: 'XXL'
})

console.log(products)
const  total = calcStock()

console.log(total)
