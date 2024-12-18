const mySym1 = Symbol("key1");

const user1 = {
    name: "hitesh",
    "surname": "Choudhary",
    age: 12,
    isLoggedIn: true,
    LogInActivity: ["mon","wed"],
    [mySym1]: "mySym1", // add symbol datatype as key
    username: {
        fullname: {
            firstName: "hitesh",
            lastName: "choudhary"
        }
    }
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
    // console.log(`hello there! welcome ${this.name}`);
    
}

// console.log(user1.greetings());


// console.log(user1.username.fullname.firstName);

// combine 2 objects

const obj1 = { 1: "a", 2: "b",};
const obj2 = { 3: "c", 4: "d" };

// const obj3 = { obj1, obj2};

// const obj3 = Object.assign({}, obj1, obj2);
// console.log(obj3);

// const obj3 = { ...obj1, ...obj2};
// console.log(obj3);

// console.log(user1);
// console.log(Object.keys(user1)); //returns array of keys
// console.log(Object.values(user1));

// console.log(user1.hasOwnProperty('name'));


// DESTRUCTURING OBJECTS

const course = {
    coursename: "ML",
    price: 500,
    courseInstructor: "hitesh"
}

const {courseInstructor: instructor} = course;

console.log(instructor);





