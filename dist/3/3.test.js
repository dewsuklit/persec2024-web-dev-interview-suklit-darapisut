"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _3_1 = require("./3");
describe('ReverseEncoder', () => {
    it('should encode correctly', () => {
        const reverseEncoder = new _3_1.ReverseEncoder();
        expect(reverseEncoder.encode("Hello world")).toBe("dliow Svool");
    });
    it('should decode correctly', () => {
        const reverseEncoder = new _3_1.ReverseEncoder();
        expect(reverseEncoder.decode("dliow Svool")).toBe("Hello world");
    });
});
