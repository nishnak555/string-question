let str =  "          hello"
let result = " "
function RemoveLeadingSpace(str){
 for(let i = 0 ;i<str.length;i++){
if(str[i]!==" "){
 result+=str[i]
}
 }
 return result
}

let finalString =  RemoveLeadingSpace(str)
console.log(finalString)