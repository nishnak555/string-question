let str =  'nishank'
let temp = '';
for(let i = str.length-1;str[i]!=null;i--){
 temp+=str[i]

 if (temp == str) {
   console.log("string is palindrome");
 }else{
  console.log("string is not palindrome")
 }
}