// function findMaxProduct(array) {
//     let max = 0;
//     let check=[];
//     let index = 0;
//     for (let i = 0; i < array.length - 1; i++) {
//         const product = array[i] * array[i + 1]
//         if (product > max) {
//             check.push(product)
//             max = product
//             index = i
//         }
//     }
//     console.log(check)

//     return `${max} - ${index} - ${array[index]}`
    
// }

// console.log(findMaxProduct([2, 3, 4, 6, 7, 7, 2, 5, 1]))


// function maxNumber(n){
//     return Number(n.toString().split('').sort((a,b)=>-Number(a)+Number(b)).join(''))
//     }

//     console.log(maxNumber(214))