//primitive- String,number,boolean,BigInt,undefined,null,Symbol

const score=100
const scoreValue=100.3
console.log( typeof scoreValue)

const isLoggedIn=true
console.log(typeof isLoggedIn)

const outsideTemp= null
console.log(typeof outsideTemp) //datatype null=>object
let userEmail;
console.log(typeof userEmail)
const id=Symbol('123')
const anotherId=Symbol('123')
console.log(typeof id)
console.log(id===anotherId)

//const bigInt=12482782849n


//---------Reference(Non Primitive)

//Array,Objects,Function

const cousinName=['Siddhant','Anuj','Smita'];
console.log(typeof cousinName)

//object--key,value pair
let myObj={
    name:"Siddhant",
    age:24
}


console.log(typeof myObj)

const Myfunction =function(){
    console.log("hello World")
}

console.log(typeof Myfunction)


