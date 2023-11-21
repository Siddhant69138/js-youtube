//if

const isUserLoggedIn=true
const temperature=41

// if (temperature===41){
//     console.log("less than 50")
// }
// else{

// }
// console.log("temp is greater than 50")

// if(isUserLoggedIn){

// }
//-------------------   <,>,<=,>=,==,!=,!==

// if(2=== "2"){
//     console.log("executed");
// }
const score=200
// if (score>100){
//     const power="fly"
//     console.log(`User power: ${power}`);
// }

//console.log(`User power: ${power}`);

//---------------------------------------------------------
// const balance=1000
// // if (balance>500)  console.log("test")
// if (balance<500) {
//     console.log("less than 500");

    
// }else if (balance<900){
//     console.log("less than 900")
// }else {
//     console.log("less than 1200")
// }

//----------------
const userLoggedIn=true
const debitCard=true
const loggedInFromGoogle=false
const loggedInFromEmail=true

if(userLoggedIn && debitCard && 2==2){
    console.log("allow to buy course");
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User logged In")
}

//Nullish coalescing operator(??):null defined

// let val1;
// //val1=5??10
// val1=null??10

// console.log(val1);

// var1=undefined??15
// console.log(var1)

val1=null??10??20
console.log(val1)