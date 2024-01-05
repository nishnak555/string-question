let vowelCount = 0;
let consonantCount = 0;
let str = "Hello";
for(let char of str ){
 let lowerCaseChar = char.toLowerCase()
 if((lowerCaseChar>='a' &&lowerCaseChar <='z')){
  if(
   lowerCaseChar==='a'||
   lowerCaseChar==='e'||
   lowerCaseChar==='i'||
   lowerCaseChar==='o'||
   lowerCaseChar==='u'
  ){
   vowelCount++;
  }else{
   consonantCount++
  }
 }
}
console.log(vowelCount)
console.log(consonantCount)