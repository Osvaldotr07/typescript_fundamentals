(()=>{
  const login = (data:{email:string,password:string}) => {
    console.log(data.email, data.password);
  }

  // login('osvaldo@ibm.com','123345415');
  login({
    email:'osvaldo@ibm.com',
    password: '121415'
  })

  type Sizes = 'M'|'L'|'Xl'|'XXL';
  let products:any[] = [];

   const  addProduct = (data:{
    title:string,
    createAt: Date,
    stock: number,
    size?: Sizes
  }) => {
    products.push(data)
  }

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
})();
