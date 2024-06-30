"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.autocomplete = autocomplete;
function autocomplete(search, items, maxResult) {
    let result = [];
    let indD = [];
    search = search.toUpperCase();
    for (let item of items) {
        let itemUpper = item.toUpperCase();
        if (itemUpper.includes(search)) {
            let tmpInd = itemUpper.indexOf(search);
            let tmpScore = tmpInd / item.length;
            if (indD.length === 0) {
                indD.push(tmpScore);
                result.push(item);
            }
            else {
                let flag = true;
                for (let i = 0; i < indD.length; i++) {
                    if (tmpScore < indD[i]) {
                        result.splice(i, 0, item);
                        indD.splice(i, 0, tmpScore);
                        flag = false;
                        break;
                    }
                }
                if (flag) {
                    result.push(item);
                    indD.push(tmpScore);
                }
            }
        }
    }
    return result.slice(0, maxResult);
}
// let result1 = autocomplete("th", ["Mother", "Think", "Worthy", "Apple", "Android"], 2);
// console.log(result1);
