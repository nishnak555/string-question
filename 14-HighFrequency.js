let str ="heLLlo1223222%%%"
let count1 = 0 
function HighestFrequencyCharacter(str){
for(let char of str){
 let lowerCaseChar =  char.toLowerCase();
 if(lowerCaseChar ==='l'){
  count1++
 }
}
return count1
}

let Num = HighestFrequencyCharacter(str)
console.log(Num)