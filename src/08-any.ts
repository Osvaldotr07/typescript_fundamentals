(() => {
  let myDynamicVar: any;
  myDynamicVar = 100;
  myDynamicVar = 'String';

  const rta = (myDynamicVar as string);
  rta.toLocaleLowerCase()
  console.log(rta)

  myDynamicVar = 12144;
  const rtaNumber = (<number>myDynamicVar);
  console.log(rtaNumber);
  
})();
