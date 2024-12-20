// for loop

//Array

const arr = [1,2,3,4,5];
for (let index = 0; index < arr.length; index++) {
    // console.log(arr[index]);  
}

// for of loop

const arr2 = [1,2,3,4];

for(const num of arr2) {
    // console.log(num);
    
}

const greetings = "Hello World";
for (const greet of greetings) {
    // console.log(greet);
    
}
    
// Maps: unique values

const map = new Map();
map.set("IN", "India");
map.set("UN", "United Nations");

for (const [key,value] of map) {
    // console.log(key,value);   
}


// For in loop

//object

const myObj = {
    JS: "JavaScript",
    rb: "ruby",
    cpp: "c++"
}

for (const key in myObj) {
//    console.log(`${key} shortcut is for ${myObj[key]}`);  
}

// For Each : can iterate through array of objects but cannot return the elements, you can use filter

const myCoding = [
    {
        language: "Javascript",
        fileName: "js"
    },
    {
        language: "python",
        fileName: "py"
    }
]

myCoding.forEach((coding) => {
    // console.log(coding.language);
    
})

