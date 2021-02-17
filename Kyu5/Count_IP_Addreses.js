// https://www.codewars.com/kata/526989a41034285187000de4/train/javascript


// Implement a function that receives two IPv4 addresses, and returns the number of addresses between them (including the first one, excluding the last one).

// All inputs will be valid IPv4 addresses in the form of strings. The last address will always be greater than the first one.

// Examples
// ipsBetween("10.0.0.0", "10.0.0.50")  ===   50 
// ipsBetween("10.0.0.0", "10.0.1.0")   ===  256 
// ipsBetween("20.0.0.10", "20.0.1.0")  ===  246

function ipsBetween(start, end) {
    const startArray = start.split(".");
    const endArray = end.split(".");
    // let ips = 0;
    //     for (let i = 0; i < startArray.length; i++) {
    //         ips += (256**(4 - i - 1)) * (Number(endArray[i]) - Number(startArray[i]));
    //     }
    //    return (ips)

    return endArray.reduce((r, e, i) => r + (+e - +startArray[i]) * 256 ** (3 - i), 0);
}

console.log(ipsBetween("10.0.0.0", "10.0.0.50"))