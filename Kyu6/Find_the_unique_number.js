// here is an array with some numbers. All numbers are equal except for one. Try to find it!

// Kata.findUniq(new double[]{ 1, 1, 1, 2, 1, 1 }); // => 2
// Kata.findUniq(new double[]{ 0, 0, 0.55, 0, 0 }); // => 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// This is the first kata in series:

// Find the unique number (this kata)
// Find the unique string
// Find The Unique

function findUniq(arr) {
    arr.sort((a, b) => a - b);
    //in this kata, there are only 2 different numbers in array
    return arr[0] === arr[1] ? arr.pop() : arr[0]
}


function findUniq(arr) {
    const newArr = new Set([...arr]);
   let num=0;
   newArr.forEach((el) => {
     if ([...arr].filter(a => a === el).length === 1) {
     num=Number(el)
     }
   });
   return num;
 }