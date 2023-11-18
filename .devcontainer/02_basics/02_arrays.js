const marvel_heroes=['thor','ironman','spiderman']
const dc_heroes=['superman','flash','batman']

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

// const allHeroes=marvel_heroes.concat(dc_heroes)
// console.log(allHeroes);

const all_new_Heroes=[...marvel_heroes,...dc_heroes]
console.log(all_new_Heroes);

const another_Array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const useable_another_array=another_Array.flat(Infinity)
console.log(useable_another_array)

console.log(Array.isArray("Siddhant"))

//Array.from--n iterable object to convert to an array.Creates an array from an iterable object.
console.log(Array.from("Siddhant"))

console.log(Array.from({name:"Siddhant"}))//interesting

let score1=100
let score2=200
let score3=300
//Array.of--A set of elements to include in the new array object.Returns a new array from a set of elements.
console.log(Array.of(score1,score2,score3))