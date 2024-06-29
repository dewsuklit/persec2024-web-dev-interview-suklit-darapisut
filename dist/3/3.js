"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReverseEncoder = void 0;
class ReverseEncoder {
    encode(text) {
        let encodedText = text.split('').map(char => {
            if (/[a-z]/.test(char)) {
                return String.fromCharCode('z'.charCodeAt(0) - (char.charCodeAt(0) - 'a'.charCodeAt(0)));
            }
            else if (/[A-Z]/.test(char)) {
                return String.fromCharCode('Z'.charCodeAt(0) - (char.charCodeAt(0) - 'A'.charCodeAt(0)));
            }
            else {
                return char;
            }
        }).join('');
        return encodedText.split(' ').reverse().join(' ');
    }
    decode(text) {
        return this.encode(text);
    }
}
exports.ReverseEncoder = ReverseEncoder;
