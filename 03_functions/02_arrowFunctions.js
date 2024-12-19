/// this keyword

const user = {
    username: "hitesh",
    price: 888,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to javascript`);
        // console.log(this);
        
        
    }
}

// user.welcomeMessage();

// user.username = "sam";

// user.welcomeMessage();

// console.log(this); // when run in browser the context will be the global: which is Window, but here it will return empty object




// function chai(){
//     let username = "hitesh";
//     console.log(this.username); //undefined, it works for objects not inside a function
    
// }

// const chai = function(){
//     let username = "hitesh";
// //     console.log(this.username);
// }


// arrows

// const chai = () => {
//     let username = "hitesh";
//     console.log(this);
    
// }

// chai()


const addNum = (num1, num2) => {
    return num1 + num2;
}
console.log(addNum(1, 2));

// implicit return

const addNum2 = (num1, num2) => (num1 + num2); // helps in return objects, wrap them inside the paranthesis
console.log(addNum2(1, 2));
