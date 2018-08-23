var gimme = function (inputArray) {
  const originalArray = inputArray.slice();
  inputArray.sort(function(a, b) {
    return a - b;
  });
  return originalArray.indexOf(inputArray[1]);
};
