const { TestScheduler } = require("jest");
const { sumDigits} = require("../challenges/exercise007");
describe ("", () => {
    test("returns the sum of all digits", () => {
        expect(sumDigits(45)).toBe(9);
        expect(sumDigits(10)).toBe(1);
        expect(sumDigits(555)).toBe(15);
    });
});