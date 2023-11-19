// function sayMyName(){
//     console.log("Hi Sid")
// }

// sayMyName()
// function addTwoNumbers(n1,n2){ 
//     //n1,n2 are parameters
//   
//     console.log(n1+n2)

// }

function addTwoNumbers(n1,n2){
    // result=n1+n2
    // //console.log("Siddhant")
    // return result
    return n1+n2

}
const result= addTwoNumbers(3,5)   //3,5 are arguments
// console.log("Result: ",result);

function loginUserMessage(username){
    if (username === undefined){  //we can write this line also as !username
        console.log("please enter a username")
        return 

    }
    return `${username} just logged in`
}

console.log(loginUserMessage())




