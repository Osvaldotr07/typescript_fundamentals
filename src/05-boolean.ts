(() => {
  let isEnable = true
  let isNew: boolean = false
  console.log('isNew', isNew);
  isNew = true
  console.log('isNew', isNew);
  const random = Math.random() * 100
  console.log('random', random);
  isNew = random >= 0.5 ? true : false;
  console.log('isnew', isNew);
})();


