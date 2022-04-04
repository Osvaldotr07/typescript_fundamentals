(()=>{

  type UserID = number | string | boolean;
  type Sizes = 'S' | 'M' | 'L' | 'XL' |'XXL';
  //Literal types
  let shirtSize: Sizes;
  shirtSize = 'M';
  shirtSize = 'L';
  shirtSize = 'XL';
  shirtSize = 'XXL';
  shirtSize = 'S';
  //guards
  function greeting(userId: UserID, size: Sizes) {
    if(typeof userId === 'string'){
      console.log(`string ${userId.toLowerCase()}`)
    }
  }

  greeting(12121, 'S');
  
})();
