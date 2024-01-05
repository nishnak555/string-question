let str = "HELLO";
let LowerCaseString = " ";
function ConvertToLowerCase(str) {
  for (let char of str) {
    if (char >= "A" && char <= "Z") {
      LowerCaseString += String.fromCharCode(char.charCodeAt(0) + 32);
    } else {
      LowerCaseString += char;
    }
  }
  return LowerCaseString;
}
const LowerCaseStrinng = ConvertToLowerCase(str);
console.log(LowerCaseStrinng);
