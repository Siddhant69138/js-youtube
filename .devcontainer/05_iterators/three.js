//for of

//["",'']
//[{},{},{}]

const arr=[1,2,3,4,5]
for (const num of arr) {
    //console.log(num);
}

const greetings="hello world!"
//for -of
for (const greet of greetings) {
    //  if(greet==" "){
    //      continue
    //  }
    //console.log(`each char is ${greet}`);
    
}

//Maps

const map=new Map()
map.set('IN',"INDIA")
map.set('FR',"FRANCE")
map.set('FR',"FRANCE")

//console.log(map);
//map are kn for unique value and order remains same
//The Map object holds key-value pairs and remembers the original insertion order of the keys.

for (const [key,value] of map) { //destructure of array
    console.log(key,':-',value);
    
}

//object

const myObject={
    'game1':'NFS',
    'game2':'Spiderman'
}

// for (const [key,value] of myObject) {
//     console.log(key,value);
    
// }



