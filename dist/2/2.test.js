"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _2_1 = require("./2"); // ชื่อไฟล์ที่เก็บฟังก์ชัน sortAlphaNumeric
describe('sortAlphaNumeric', () => {
    it('should correctly sort array of strings', () => {
        const inputArray = ["TH10", "TH3Netflix", "TH1", "TH7"];
        const expectedOutput = ['TH1', 'TH3Netflix', 'TH7', 'TH10'];
        const sortedArray = (0, _2_1.sortAlphaNumeric)(inputArray);
        expect(sortedArray).toEqual(expectedOutput);
    });
    it('should handle different combinations of alphanumeric strings', () => {
        const inputArray = ["TH19", "SG20", "TH2"];
        const expectedOutput = ['SG20', 'TH2', 'TH19'];
        const sortedArray = (0, _2_1.sortAlphaNumeric)(inputArray);
        expect(sortedArray).toEqual(expectedOutput);
    });
});
