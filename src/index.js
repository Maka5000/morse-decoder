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
    console.log(expr.length)
    let DivideToLetters = expr.match(/\d{10}\**/g);

    let divideToCodes = DivideToLetters.map((v) => {
        if (v.includes('*')) {
            return v.match(/\d{2}/g).map(e => {
                if (e === '10') {
                    return '.'
                } else if (e === '11') {
                    return '-'
                } else {
                    return '';
                }
            }).join('') + ' ';
        } else {
            return v.match(/\d{2}/g).map(e => {
                if (e === '10') {
                    return '.'
                } else if (e === '11') {
                    return '-'
                } else {
                    return ''
                }
            }).join('');
        }
    })

    let decodedResult = divideToCodes.map(v => {
        if (v.includes(' ')) {
            return MORSE_TABLE[v.replace(/\s/g, '')] + ' ';
        } else {
            return MORSE_TABLE[v];
        }
    })

    return decodedResult.join('');
}

module.exports = {
    decode
}