// autocomplete.test.ts

import { autocomplete } from './4';

describe('autocomplete function', () => {
    it('should return ["Think", "Mother"] for search "th", items ["Mother", "Think", "Worthy", "Apple", "Android"], maxResult 2', () => {
        const search = "th";
        const items = ["Mother", "Think", "Worthy", "Apple", "Android"];
        const maxResult = 2;

        const result = autocomplete(search, items, maxResult);

        expect(result).toEqual(["Think", "Mother"]);
    });

    it('should return ["Mother"] for search "Mo", items ["Mother", "Think", "Worthy", "Apple", "Android"], maxResult 5', () => {
        const search = "Mo";
        const items = ["Mother", "Think", "Worthy", "Apple", "Android"];
        const maxResult = 5;

        const result = autocomplete(search, items, maxResult);

        expect(result).toEqual(["Mother"]);
    });

    it('should return ["Apple", "Android"] for search "a", items ["father", "Think", "Worthy", "Apple", "data"], maxResult 2', () => {
        const search = "a";
        const items = ["Mother", "Think", "Worthy", "Apple", "Android"];
        const maxResult = 2;

        const result = autocomplete(search, items, maxResult);

        expect(result).toEqual(["Apple", "Android"]);
    });
    it('should return ["Think", "Father", "Appleth"] for search "th", items ["Father", "Boat", "Think", "Appleth"], maxResult 3', () => {
        const search = "th";
        const items = ["Father", "Boat", "Think", "Appleth"];
        const maxResult = 3;

        const result = autocomplete(search, items, maxResult);

        expect(result).toEqual(["Think", "Father", "Appleth"]);
    });
});
