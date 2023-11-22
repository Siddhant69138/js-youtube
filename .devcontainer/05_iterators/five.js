const coding=["js","ruby","java","python","cpp"]

//callbackfunction so no name of function
coding.forEach( function  (val){
    //console.log(val);

})

coding.forEach((item) => {
    //console.log(item);
})

function printMe(item){
    console.log(item);
}

//coding.forEach(printMe);

coding.forEach((item,index,arr)=>{
    //console.log(item,index,arr);

})

const myCoding=[
    {
        languageName:"javaScript",
        languageFike:"JS"
    },
    {
        languageName:"java",
        languageFike:"Java"
    },
    {
        languageName:"python",
        languageFile:"py"
    }

]

myCoding.forEach((item)=>{
console.log(item.languageName);
})