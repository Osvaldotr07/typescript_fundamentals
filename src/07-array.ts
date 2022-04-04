(() => {
  let prices = [1,2,3,4,5,6, 'hola', true];

  let products = ['hola', true];
  products.push('Hello', false);

  let mixed: (number | string | boolean | Object)[] = [];
  mixed.push(1);
  mixed.push('as');
  mixed.push(true);
  mixed.push({});
  mixed.push([]);

  let numbers = [1,2,3,4,8]
  numbers.map(item => item * 2);

  
})();
