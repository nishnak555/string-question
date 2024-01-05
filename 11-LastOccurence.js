let str = "helloo";
let charToFind = 'o'
function LastOccurence(str,charToFind){
  for(let i = str.length - 1;i>=0;i--){
    if(str[i]===charToFind){
      return  i 
    }
  }
  return -1
}
let index  =  LastOccurence(str,charToFind)
console.log(index)