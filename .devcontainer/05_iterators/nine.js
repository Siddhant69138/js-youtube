// const array1 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue,
// );

// console.log(sumWithInitial);
// // Expected output: 10


//========

const myNums=[1,2,3]
// const myTotal=myNums.reduce(function (acc,currval){
//     console.log(`acc: ${acc} and currval: ${currval}}`);
//   return acc+ currval
// },0)

const myTotal=myNums.reduce((acc,curr)=>acc+curr,0)
console.log(myTotal);


const shoppingCart=[
    {
        itemName:"js course",
        price:2999
    },
    {
        itemName:"mobile data course",
        price:5999
    },
    {
        itemName:"data science course",
        price:8999
    },
    {
        itemName:"python science course",
        price:999
    }

]

const pricetoPay=shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(pricetoPay);
