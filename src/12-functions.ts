(() => {

  type Sizes = 'S' | 'M' | 'L' | 'XL' |'XXL';

  function createProductToJson(
    title:string,
    createAt: Date,
    stock: number,
    size: Sizes
  ){
    return {
      title,
      createAt,
      stock,
      size
    }
  }

  const product1 = createProductToJson('Pi', new Date(), 12, 'XL' )
  console.log(product1)

  const createProductToJsonV2 =  (
    title:string,
    createAt: Date,
    stock: number,
    size?:Sizes
  ) => {
    return {
      title,
      createAt,
      stock,
      size
    }
  }

  const product2 = createProductToJsonV2('Pi', new Date(), 12);
  console.log(product2)
  console.log(product2.title)
  console.log(product2.size)

})();
