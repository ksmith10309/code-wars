function capitalize(s,arr){
  let strArr = s.split('');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < s.length) {
      strArr[arr[i]] = strArr[arr[i]].toUpperCase();
    }
  }
  return strArr.join(''); 
};
