const accountId=144553 //const -can't be changed
let accountEmail="sid1234@gmail.com"  
var accountPassword="123456"
accountCity="Prayagraj"
let accountState; //undefined

accountEmail="abc@gmail.com"
accountPassword="21355"
accountCity="Gonda"

console.log(accountId);

/*
Prefer not to use var bcuz of issues in block scope and functional issues

*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])