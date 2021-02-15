// https://www.codewars.com/kata/559536379512a64472000053/train/javascript 
// Everyone knows passphrases. One can choose passphrases from poems, songs, movies names and so on but frequently they can be guessed due to common cultural references. You can get your passphrases stronger by different means. One is the following:

// choose a text in capital letters including or not digits and non alphabetic characters,

// shift each letter by a given number but the transformed letter must be a letter (circular shift),
// replace each digit by its complement to 9,
// keep such as non alphabetic and non digit characters,
// downcase each letter in odd position, upcase each letter in even position (the first character is in position 0),
// reverse the whole result.
// Example:
// your text: "BORN IN 2015!", shift 1

// 1 + 2 + 3 -> "CPSO JO 7984!"

// 4 "CpSo jO 7984!"

// 5 "!4897 Oj oSpC"

// With longer passphrases it's better to have a small and easy program. Would you write it?

function playPass(s, n) {
    const listCharacters = s.split("");
    const checkLetter = new RegExp(/[a-zA-Z]/)
    const checkDigit = new RegExp(/[0-9]/);

    listCharacters.forEach((ch, ind) => {
        if (checkLetter.test(ch)) {
            const charCode = ch.toUpperCase().charCodeAt(0) + n > 90 ? ch.toUpperCase().charCodeAt(0) + n - 26 : ch.toUpperCase().charCodeAt(0) + n
            if (ind % 2 === 0) {
                listCharacters.splice(ind, 1, String.fromCharCode(charCode).toUpperCase())
            } else if (ind % 2 === 1) {
                listCharacters.splice(ind, 1, String.fromCharCode(charCode).toLowerCase())
            }
        } else if (checkDigit.test(ch)) {
            listCharacters.splice(ind, 1, 9 - Number(ch))
        }
    })
    return listCharacters.reverse().join("")

}


// function playPass(s, n) {
//     return s.replace(/[A-Z]/g, l => String.fromCharCode((l.charCodeAt(0) + n - 65) % 26 + 65))
//         .replace(/\d/g, d => 9 - d)
//         .split('').map((l, i) => (i % 2 == 0) ? l.toUpperCase() : l.toLowerCase())
//         .reverse().join('');
// }


console.log(playPass("MY GRANMA CAME FROM NY ON THE 23RD OF APRIL 2015", 2))