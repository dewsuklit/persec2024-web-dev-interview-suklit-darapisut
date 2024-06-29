
import { ReverseEncoder } from './3';

describe('ReverseEncoder', () => {
    it('should encode correctly', () => {
        const reverseEncoder = new ReverseEncoder();
        expect(reverseEncoder.encode("Hello world")).toBe("dliow Svool");
    });

    it('should decode correctly', () => {
        const reverseEncoder = new ReverseEncoder();
        expect(reverseEncoder.decode("dliow Svool")).toBe("Hello world");
    });
});
