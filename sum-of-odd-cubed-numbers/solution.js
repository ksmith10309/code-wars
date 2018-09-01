function cubeOdd(arr) {
  let newArr = arr.filter(el => Number.isInteger(el))
  if (newArr.length !== arr.length) {
    return undefined;
  }
  return arr.map(x => Math.pow(x, 3)).filter(el => el % 2 !== 0).reduce( (acc, cur) => acc + cur, 0);
}
