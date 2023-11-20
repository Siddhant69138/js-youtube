const user={
    username:"siddhant",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username} , welcome to website`)//this refer to current context(value)
        console.log(this)
    }
}

// user.welcomeMessage()
//  user.username="sam"
//  user.welcomeMessage()
console.log(this)

// function chai(){
//     let username="siddhant"
//     console.log(this.username)

// }

// chai()

// const chai=function(){

// }


//arrow function
const chai=()=>{
let username="sid"
console.log(this.username)
    
}

// const addThree=(n1,n2,n3)=>{
// return n1+n2+n3;
// }


//implictly return--maan lete h
// const addThree=(n1,n2,n3)=>  (n1+n2+n3)
    

// console.log(addThree(5,6,10))

//===

const addTwo=(n1,n2)=>({username:"sid"})
console.log(addTwo(3,4))







