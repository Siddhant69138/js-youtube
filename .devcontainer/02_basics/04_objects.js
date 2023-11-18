//singelton

const TinderUser=new Object()

TinderUser.id="123abc"
TinderUser.name="Sam"
TinderUser.isLoggedIn=false

//console.log(TinderUser)


const regularUser={
    email:"sab@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Siddhant",
            lastname:"Gupta"
        }

    }
}
console.log(regularUser.fullname.userfullname.lastname)

//optional chaining--use of ?,discuss in future


//__________
//with literal
// const TinderUser2={}
// console.log(TinderUser2)
//________________________________


const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

//const obj3=Object.assign({},obj1,obj2)

const obj3={...obj1,...obj2}//spread operator
console.log(obj3)

//when value coming from (database)so come in form of array of object
const users=[
    {
        id:1,
        email:"aabc@gmail.com"

    },
    {

    }
]

users[1].email

console.log(Object.keys(TinderUser));
console.log(Object.values(TinderUser));
console.log(Object.entries(TinderUser));

console.log(TinderUser.hasOwnProperty('isLoggedIn'))
console.log(TinderUser.hasOwnProperty('isLoggedI'))



