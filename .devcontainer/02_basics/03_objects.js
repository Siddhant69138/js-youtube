//singelton
//object.create


//object literals
const mySym=Symbol("key1")


const JsUser={
    name:"Siddhant",
    "full name":"Siddhant Gupta",
    [mySym]:"mykey1",
    age:23,
    location:"Prayagraj",
    email:"siddhant69@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}

console.log(JsUser.email)
//console.log(JsUser[email])//email is taken as string so we have write it as string
console.log(JsUser["email"])

console.log(JsUser[mySym])
JsUser.age=18

console.log(JsUser["age"])

//for freezing-> Object.freeze(JsUser)
JsUser.email="abc@gmail.com"
console.log(JsUser)

//adding fun in object
JsUser.greeting=function(){
console.log("helo js user");
}

console.log(JsUser.greeting);//op-> helo js user
console.log(JsUser.greeting());//op-> undefined

JsUser.greetingTwo=function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greetingTwo());





