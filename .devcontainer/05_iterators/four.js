const myObject={
    js:'javascript',
    cpp:'C++',
    rb:'ruby'
}
//for in- used for objrct mainly
for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`)
    //console.log(myObject);
    
}

const programming=['java','cpp','python']
for (const key in programming) {
    console.log(key);
}
for (const key of programming) {
    console.log(key);
}

//for of directly give values
//for in gives keys