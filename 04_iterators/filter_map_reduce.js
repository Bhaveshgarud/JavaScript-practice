// Filter : returns the elements which satisfies the given condition implicitly (true or false)

// const myNums = [1,2,3,4,5,6,7,8,9,10,11];

// const newNums = myNums.filter( (num) => num >5 )
// console.log(newNums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


  let myBooks = books.filter( (bk) => bk.publish === 1981 && bk.edition > 2000 );
//   console.log(myBooks);
   

// Map used for performing the operations by iterating but does not implicitely return it, you can explicitely return

const myNumbers = [1,2,3,4,5,6];

let newNums = myNumbers.map( (nums) => nums*10 )
                        .map( (nums) => nums+1 )
                        .filter((nums) => nums>30 )

// console.log(newNums);


// Reduce

const myTotal = myNumbers.reduce( (acc,curr) => acc + curr, 0 );
console.log(myTotal);
