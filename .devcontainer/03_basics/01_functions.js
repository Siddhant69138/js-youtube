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

// console.log(loginUserMessage())


//-----------------------

//cart--logic
function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(200,500,300,5000))

function calculateCartPrice1(n1,n2,...num1){
    return num1
}

console.log(calculateCartPrice1(200,500,300,5000))

//----passing object in fun
const user={
    username:"Siddhant",
    price:1000
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price} `)

}

//handleObject(user)

handleObject({
    username:"sam",
    price:399
})

//passing array in fun

const myNewArray=[200,400,500]

function returnSecondArray(getArray){
    return getArray[1]
}
console.log(returnSecondArray(myNewArray));
console.log(returnSecondArray([200,400,500]));




