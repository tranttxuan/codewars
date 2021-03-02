// https://www.codewars.com/kata/5a2c22271f7f709eaa0005d3/train/javascript 

function solve(s) {
    let status = '';
  
    if (s == s.split('').reverse().join('')) {
        return 'OK'
    } else {
        for (let i = 0; i < s.length; i++) {
            let string = s.slice().substring(0, i) + s.slice().substring(i+1, s.length)
            console.log(i,string)
            if (string === string.split('').reverse().join('')) {
                status = 'remove one'
                break;

            } else {
                if (i == s.length - 1) status = 'not possible'
            }
        }
        return status
    }


};

console.log(solve('abbaa'))

function checkPalindrome(string) {

}