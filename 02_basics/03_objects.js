const mySym1 = Symbol("key1");

const user1 = {
    name: "hitesh",
    "surname": "Choudhary",
    age: 12,
    isLoggedIn: true,
    LogInActivity: ["mon","wed"],
    [mySym1]: "mySym1", // add symbol datatype as key
}

// access values

// console.log(user1.age);
// console.log(user1["surname"]);


// console.log(user1);


// // add values
// user1.email = "hitesh@google.com";
// console.log(user1);


// adding function to an object

user1.greetings = function(){
    console.log(`hello there! welcome ${this.name}`);
    
}

console.log(user1.greetings());
