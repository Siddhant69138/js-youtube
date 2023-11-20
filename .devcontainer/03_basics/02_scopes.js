
//curly braces{}  --k/n as scope
let a=300

if (true){
    let a=10
    const b=20
    //var c=30 //so we won't study var as it comes out of scope so will cause problem
    //console.log("INNER",a)
    
}


console.log(a);
//console.log(b);
//console.log(c);

//--nested scope

function one(){
    const username="siddhant"

    function two(){
        const website="youtube"
        console.log(username)
    }
    //console.log(website);
    two()
}
//one()

if(true){
    const username="siddhant"
    if(username==="siddhant"){
        const website=" youtube"
        //console.log(username+ website)
    }
    //console.log(website)
}
//console.log(username)


//+++++++++++++interesting+++++++++++



function addOne(num){
    return num+1

}

addOne(5)

const addTwo=function(num){
    return num+2
}

console.log(addTwo(5))