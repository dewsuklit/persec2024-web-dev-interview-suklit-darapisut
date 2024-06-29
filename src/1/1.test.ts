import { hexToRgb } from './1';

describe('hexToRgb', () => {
    it('should convert 6-character hex to RGB', () => {
        expect(hexToRgb('#ff5733')).toEqual({ r: 255, g: 87, b: 51 });
        expect(hexToRgb('ff5733')).toEqual({ r: 255, g: 87, b: 51 });
    });

    it('should convert 3-character hex to RGB', () => {
        expect(hexToRgb('#03f')).toEqual({ r: 0, g: 51, b: 255 });
        expect(hexToRgb('03f')).toEqual({ r: 0, g: 51, b: 255 });
    });

    it('should return null for invalid hex strings', () => {
        expect(hexToRgb('invalid')).toBeNull();
        expect(hexToRgb('#12345')).toBeNull();
        expect(hexToRgb('#1234567')).toBeNull();
        expect(hexToRgb('12345g')).toBeNull();
    });

    it('should handle case-insensitive hex strings', () => {
        expect(hexToRgb('#FfF')).toEqual({ r: 255, g: 255, b: 255 });
        expect(hexToRgb('#AbCdEf')).toEqual({ r: 171, g: 205, b: 239 });
    });
});
