https://www.codewars.com/kata/5b7176768adeae9bc9000056/train/javascript

// Given a sorted array of distinct integers, write a function indexEqualsValue that returns the lowest index for which array[index] == index.
// Return -1 if there is no such index.

// Your algorithm should be very performant.

// [input] array of integers ( with 0-based nonnegative indexing )
// [output] integer

function indexEqualsValue(a) {
    const value =  [...a].filter((x, i)=> x===i)[0]
    if(value){
        return value
    }
    if( a[0]===0){
        return 0;
    }
    return -1;
}
console.log(indexEqualsValue([-1,0,3,6]))

//use binary search
function indexEqualsValue1(a) {
    //use index
    let min = 0
    let max = a.length - 1
    while (min < max) {
        let i = Math.floor((min+max)/2)
        if (i <= a[i]) max = i
        else min = i + 1
    }
    return a[max] === max ? max : -1
}
console.log(indexEqualsValue1([-1,0,3,6]))