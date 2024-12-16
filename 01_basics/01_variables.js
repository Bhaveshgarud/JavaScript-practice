const account_id = 14563; // const variable cannot be changed
let account_email = "bhaveshgogle.com";
var account_pass = 232322;
account_city = "mumbai" // not a good practice
let account_state;

account_email = "hc@hc.com";
account_pass = 55555;
account_city = "banglore"

console.table([account_id, account_email,account_pass,account_city,account_state]);

/*
prefer not to use var
because of issue in block scope and functional scope

*/