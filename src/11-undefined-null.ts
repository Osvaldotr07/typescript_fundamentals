(() => {
  // let myNumber: number = undefined;
  // let myString: string = null;

  let myNull: null = null;
  let myUndefined: undefined = undefined;

  let myNumber: number | null = null;
  myNumber = 12;

  let myString: string | undefined = undefined;
  myString = 'Hello world';

  function hi(name: string | null){
    let hello = `Hello `;

    if(name){
      hello += name;
      console.log(hello)
    }
    else {
      hello += 'nobody';
      console.log(hello)
    }
  }
  hi('Osvaldo')
  
  function hiV2(name: string | null){
    let hello = `Hello `;
    hello += name?.toLowerCase() || 'npbody'; //optional change
    console.log(hello)
  }
  hiV2('Elizabeth')
})();
