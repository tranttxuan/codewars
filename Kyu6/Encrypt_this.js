// Acknowledgments:
// I thank yvonne-liu for the idea and for the example tests :)

// Description:
// Encrypt this!

// You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

// Your message is a string containing space separated words.
// You need to encrypt each word in the message using the following rules:
// The first letter needs to be converted to its ASCII code.
// The second letter needs to be switched with the last letter
// Keepin' it simple: There are no special characters in input.


//simply way
var encryptThis = function (text) {
    const array = text.split(' ')
    const encrypt = array.map(str => {
        if (str.length === 1) {
            return str[0].charCodeAt()
        } else if (str.length === 2) {
            return str[0].charCodeAt() + str[1]
        } else {
            const firstLetter = str[0].charCodeAt();
            const secondLetter = str[str.length - 1]
            return firstLetter + secondLetter + str.substring(2, str.length - 1) + str[1]
        }

    })
    return encrypt.join(' ')
}



//use regex
var encryptThis = function (text) {

    return text.split(' ').map(word => word
        .replace(/(^\w)(\w)(\w*)(\w$)/, `$1$4$3$2`)
        .replace(/(^\w)/, word.charCodeAt(0))
    ).join(' ')
}

