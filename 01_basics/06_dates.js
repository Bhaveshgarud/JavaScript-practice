
let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
// console.log(myDate.toJSONString);
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());


myDate.toLocaleString('default',{
    day: "2-digit",

})


