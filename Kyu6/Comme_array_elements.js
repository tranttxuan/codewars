// Given three arrays of integers, return the sum of elements that are common in all three arrays.

// For example:

// common([1,2,3],[5,3,2],[7,3,2]) = 5 because 2 & 3 are common in all 3 arrays
// common([1,2,2,3],[5,3,2,2],[7,3,2,2]) = 7 because 2,2 & 3 are common in the 3 arrays
// More examples in the test cases.


function common(a, b, c) {
    let sum = 0;
    const aDic = a.reduce((acc, v) => (acc[v] = acc[v] ? acc[v] + 1 : 1, acc), {})
    const bDic = b.reduce((acc, v) => (acc[v] = acc[v] ? acc[v] + 1 : 1, acc), {})
    const cDic = c.reduce((acc, v) => (acc[v] = acc[v] ? acc[v] + 1 : 1, acc), {})
    for (let i in aDic) {
        if (aDic[i] && bDic[i] && cDic[i]) {
            const min=Math.min(aDic[i],bDic[i], cDic[i]);
            sum+=min*i
        }
    }
    return sum;
}


// const common = (a,b,c) => {
//     let sum = 0;
//     for(let i = 0; i < a.length; i++) {
//         if(b.includes(a[i]) && c.includes(a[i])) {
//             sum+=a[i];
//             b.splice(b.indexOf(a[i]),1);c.splice(c.indexOf(a[i]),1);
//         }
//     }
//     return sum;
// }

console.log(common([1, 2, 3], [5, 3, 2], [7, 3, 2]));