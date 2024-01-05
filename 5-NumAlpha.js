let AlphaCount =  0;
let digitCount = 0
let SpecialCharacterCount =  0 ;
let Str =  "Hello123#";
for(let char of Str){
 if((char>='a' && char<='z')||(char>='A' && char<='Z')){
  AlphaCount++;
 }
 else if (char>=0 && char<='9'){
  digitCount++;
 }
 else{
  SpecialCharacterCount++;
 }
}
console.log(AlphaCount)
console.log(digitCount)
console.log(SpecialCharacterCount)
