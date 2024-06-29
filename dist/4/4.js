"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.autocomplete = autocomplete;
function autocomplete(search, items, maxResult) {
    search = search.toLowerCase();
    let startsWithSearch = [];
    let containsSearch = [];
    items.forEach((item) => {
        let lowerCaseItem = item.toLowerCase();
        if (lowerCaseItem.indexOf(search) === 0) {
            startsWithSearch.push(item);
        }
        else if (lowerCaseItem.indexOf(search) > -1) {
            containsSearch.push(item);
        }
    });
    let result = startsWithSearch.concat(containsSearch);
    return result.slice(0, maxResult);
}
