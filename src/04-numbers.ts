(() => {
  let productPrice = 100;
  productPrice = 12;
  console.log('Porduct price: ', productPrice);

  let customerAge: number = 28
  customerAge += 1;

  let productInStock: number;

  console.log('producInStock', productInStock)

  if(productInStock > 10) {
    console.log('Is greater')
  }

  let discount = parseInt('100');
  console.log('discount', discount)

  if (discount <= 200){
    console.log('apply')
  }
  else {
    console.log('not apply')
  }

  let hex = 0xfff;
  console.log('hex', hex)
  let bin = 0b1010
  console.log('binario', bin)

  const myNumber:number = 10;

})();
