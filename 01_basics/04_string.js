const name = "Bhavesh"
const age = 21;

console.log(`my name is ${name} and my age is ${age}`); // string interpolation

const gameName = new String('Valo-rant')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toLowerCase());
console.log(gameName.charAt(2));

const anotherString = gameName.substring(0,4)
console.log(anotherString);

const newString = gameName.slice(-4)
console.log(newString);

console.log(gameName.includes('Valo'));

console.log(gameName.split('-'));









