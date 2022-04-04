(() => {
  let productTitle = 'Amazing products';
  productTitle = ' Amazing product changed';
  let isNew: boolean = true;
  console.log('productTitle', productTitle);
  let myProductPrice: number = 1200;
  let productDescription = "bla bla bla bla s asasas";
  console.log("productDesccription", productDescription);

  const summary = `
    title: ${productTitle}
    description: ${productDescription}
    price: ${myProductPrice}
    isNew: ${isNew}
  `;

  console.log('summary: ', summary);
})();
