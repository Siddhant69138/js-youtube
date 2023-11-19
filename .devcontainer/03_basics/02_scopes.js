
//curly braces{}  --k/n as scope
let a=300

if (true){
    let a=10
    const b=20
    //var c=30 //so we won't study var as it comes out of scope so will cause problem
    console.log("INNER",a)
    
}


console.log(a);
//console.log(b);
//console.log(c);