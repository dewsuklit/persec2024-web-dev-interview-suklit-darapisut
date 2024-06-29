"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1_1 = require("./1");
describe('hexToRgb', () => {
    it('should convert 6-character hex to RGB', () => {
        expect((0, _1_1.hexToRgb)('#ff5733')).toEqual({ r: 255, g: 87, b: 51 });
        expect((0, _1_1.hexToRgb)('ff5733')).toEqual({ r: 255, g: 87, b: 51 });
    });
    it('should convert 3-character hex to RGB', () => {
        expect((0, _1_1.hexToRgb)('#03f')).toEqual({ r: 0, g: 51, b: 255 });
        expect((0, _1_1.hexToRgb)('03f')).toEqual({ r: 0, g: 51, b: 255 });
    });
    it('should return null for invalid hex strings', () => {
        expect((0, _1_1.hexToRgb)('invalid')).toBeNull();
        expect((0, _1_1.hexToRgb)('#12345')).toBeNull();
        expect((0, _1_1.hexToRgb)('#1234567')).toBeNull();
        expect((0, _1_1.hexToRgb)('12345g')).toBeNull();
    });
    it('should handle case-insensitive hex strings', () => {
        expect((0, _1_1.hexToRgb)('#FfF')).toEqual({ r: 255, g: 255, b: 255 });
        expect((0, _1_1.hexToRgb)('#AbCdEf')).toEqual({ r: 171, g: 205, b: 239 });
    });
});
