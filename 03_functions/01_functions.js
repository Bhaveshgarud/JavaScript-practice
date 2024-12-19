function loginUserMessage(username = "sam"){
    if(!username){ // for undefined
        console.log("Please enter a username!");
        return;
    }
    return `${username} just logged in`;
}

console.log(loginUserMessage("hitesh"));

function addTwoNumbers(num1, num2){
    return num1 + num2;
}

console.log(addTwoNumbers(1, 2));


function calculateCartPrice(...items){ // rest operator
    return items;
}

console.log(calculateCartPrice(100,200,23));
