const { TestScheduler } = require("jest");
const { sumDigits, createRange} = require("../challenges/exercise007");
describe("sumDigits", () => {
    test("returns the sum of all digits", () => {
        expect(sumDigits(45)).toBe(9);
        expect(sumDigits(10)).toBe(1);
        expect(sumDigits(555)).toBe(15);
    });
});
describe ("createRange", () => {
    test("returns createRange", () => {
        expect(createRange(2,8,2)).toEqual([2,4,6,8]);
        expect(createRange(0,9,3)).toEqual([0,3,6,9]);
      });
});