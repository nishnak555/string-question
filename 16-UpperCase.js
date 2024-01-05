let str = "hello"
  let UpperCaseString = " ";
function ConvertToUpperCase(str){
for (let char of str){
  
  if(char>='a'&& char<='z'){
    UpperCaseString+= String.fromCharCode(char.charCodeAt(0)-32)
  }else{
    UpperCaseString+=char
  }
}
return UpperCaseString
}
const UpperCaseStrinng =   ConvertToUpperCase(str)
console.log(UpperCaseStrinng)