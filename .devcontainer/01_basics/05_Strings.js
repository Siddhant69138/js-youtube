const name="Siddhant"
const repoCount=50

//console.log(name+repoCount+"Value");

console.log(`My name is ${name} and my repo count is ${repoCount}`);

const gameName=new String('sidhhhh-angt')

// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));

console.log(gameName.indexOf('t'));


//slice
const newString= gameName.substring(0,4);//can't fetch from negative using substring
console.log(newString);


const anotherString=gameName.slice(-8,4)
console.log(anotherString)


const newStringOne="      Siddhant  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url="https://siddhant.com/siddhant%1999gupta"

console.log(url.replace('%1999','-'))
console.log(url.includes('sundar'))

console.log(gameName.split('-'))




