"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortAlphaNumeric = sortAlphaNumeric;
function sortAlphaNumeric(arr) {
    return arr.sort((a, b) => {
        const regex = /^([a-zA-Z]+)(\d+)(.*)$/;
        const matchA = a.match(regex);
        const matchB = b.match(regex);
        if (matchA && matchB) {
            const [, alphaA, numA, restA] = matchA;
            const [, alphaB, numB, restB] = matchB;
            if (alphaA === alphaB) {
                const numDiff = parseInt(numA) - parseInt(numB);
                if (numDiff === 0) {
                    return restA.localeCompare(restB);
                }
                return numDiff;
            }
            else {
                return alphaA.localeCompare(alphaB);
            }
        }
        else if (matchA) {
            return -1;
        }
        else if (matchB) {
            return 1;
        }
        else {
            return a.localeCompare(b);
        }
    });
}
