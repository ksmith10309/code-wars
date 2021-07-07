function mutateMyStrings(stringOne, stringTwo) {
  let wordTransition = stringOne + '\n';  
  for(let i = 0; i < stringOne.length; i ++) {
    if (stringOne.charAt(i) !== stringTwo.charAt(i)) {
      wordTransition += stringTwo.slice(0, i + 1) + stringOne.slice(i + 1) + '\n';
    }
  }
  return wordTransition;
}
