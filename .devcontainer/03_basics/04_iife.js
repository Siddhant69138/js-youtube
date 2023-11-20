// Immediately Invoked Function Expressions (IIFE)
//-to rmove problem of global pollution

//named IIFE
(function chai(){
    console.log('DB connected')
})();

//unamed IIFE
(()=>{
    console.log(`DB  CONNECTED TWO  `)
})('SIDDHANT')