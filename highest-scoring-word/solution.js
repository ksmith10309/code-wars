function high(x){
  let arr = x.split(' '); 
  let numArr = arr.map(el => el.split('').reduce( (acc, cur) => acc + cur.charCodeAt(0) - 96, 0));
    
  let index;
  let value = 0;
  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] > value) {
      value = numArr[i];
      index = i;
    }
  }
  return arr[index];
}
