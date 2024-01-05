let str = "helloo";
let charToFind = "l";
function firstOccurence(str, charToFind) {
  for (let i = 0; i < str.length; i++) {
    // console.log(str[i]);
    if (str[i] === charToFind) {
      return i;
    }
  }
  return -1;
}

let index = firstOccurence(str, charToFind);
console.log(index);
