// Immediately Invoked Function Expression (IIFE)

// function chai(){
//     console.log("DB CONNECTED");
    
// }
// chai();

// IIFE syntax -> (function)(Execution)

// Used for limiting inside a scope to avoid global scope pollution

// (function chai(){
//     console.log("DB CONNECTED");
    
// })();

// (function chai(name){  //named IIFE
//         console.log(` ${name}`);
        
//     })('code');

( (name) => {  //un-named IIFE
        console.log(` ${name}`);
        
    })('code');