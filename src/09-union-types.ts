(() => {
  let userId: number | string;
  userId = 12154;
  userId = 'asasdsd';

  function greeting(myText: string | number) {
    if(typeof myText === 'string'){
      console.log(`string ${myText.toLowerCase()}`)
    }
    else {
      console.log(`number ${myText.toFixed()}`)
    }
  }

  greeting(122);
  greeting('Hello');
})();
