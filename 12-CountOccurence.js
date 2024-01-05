let str = "helllo";
let charToFind = "l";
let count = 0;
function CountOccurence(str,charToFind){
for(let i = 0 ;i <str.length;i++){
 if(str[i]===charToFind){
  count++
 
 }
}
return count
}

let totalOccurence = CountOccurence(str,charToFind)
console.log(totalOccurence)