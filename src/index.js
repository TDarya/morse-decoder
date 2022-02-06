
const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let expr_array = expr.split('**********');
    let result = [];
    for (var i = 0; i < expr_array.length; i++) {
        let word = '';
        for (var y = 0; y < expr_array[i].length; y += 10) {
            let symbol = expr_array[i].slice(y, y + 10);
            let firstOneInStr = symbol.indexOf('1');
            symbol = symbol.slice(firstOneInStr, 10);
            let code = '';
            for (var z = 0; z < symbol.length; z += 2) {
                let cyfr = symbol[z] + symbol[z+1];
                if (cyfr == 10) {
                    code += '.';
                } else {
                    code += '-';
                }
            }
            word += MORSE_TABLE[code];
        }
        result.push(word);
    }

    return result.join(' ');
}

module.exports = {
    decode
}