let str = "hello   ";
// let result = " ";
function RemoveTrailingSpace(str) {
 let result = " "
   let i = str.length -1 
   while(i>=0  && str[i]===' ' ){

   i--
  
   }
    for (let j = 0; j <=i; j++) {
      result += str[j];
    }
return result
  
}

let finalString = RemoveTrailingSpace(str);
console.log(finalString);
