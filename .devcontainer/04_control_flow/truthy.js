const userEmail=""

if(userEmail){
    console.log("got user email")
}
else{
    console.log("don't have user email");
}

//falsey values
//false, 0 ,-0, BigInt 0n,"",null,undefined,NaN

//truthy values
//other than above and few other examples are "0",'false'," ",[],{},function(){}

if (userEmail.length===0) {
    console.log("array is empty");
    
}

const emptyObj={}

if(Object.keys(emptyObj).length===0){
    console.log("Object is empty");
}

//Terniary Operator

//condition? true:false

const iceTeaPrice=100
iceTeaPrice<=80 ? console.log("less than 80"):console.log("more than 80");;
