const marvel_heros = ['spiderman', 'ironman', 'thor'];
const dc_heros = ["batman", "superman",];

// marvel_heros.push(dc_heros) //adds the array in the original array
// console.log(marvel_heros);

console.log(marvel_heros.concat(dc_heros)); //concats and returns new array, does not affect original array
console.log(marvel_heros);

// spread operator

const all_heros = [...marvel_heros, ...dc_heros]
console.log(all_heros);


console.log(Array.isArray("hitesh"));
console.log(Array.from("hitesh"));
console.log(Array.from({name: "hitesh"})); // interesting





