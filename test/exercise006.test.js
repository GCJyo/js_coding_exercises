const { TestScheduler } = require("jest");
const {sumMultiples, isValidDNA, getComplementaryDNA } = require ("../challenges/exercise006");
describe("sumMultiples", () => {
    test("throws an error if not an array", () => {
        expect(()=>{
            sumMultiples();
        }).toThrow("arr is required");

        expect(()=>{
            sumMultiples("foo");
        }).toThrow("an Array is required");

        expect(()=>{
            sumMultiples(4);
        }).toThrow("an Array is required");
    });
    test("returns sum of numbers that are a multiple of 3 or 5",() => {
        const result = sumMultiples([1,3,5]);
        const expected = 8;
        expect(result).toBe(expected);
    });
    test("works okay with decimal numbers", () => {
        const result = sumMultiples([1,3,5.0,2,12,10]);
        const expected = 30;
        expect(result).toBe(expected);
    });
    test("returm 0 if there are no multiples of 3 or 5", () => {
        expect(sumMultiples([1,2,8,13,7])).toBe(0);
    });
});
describe("isValidDNA",() => {
    test("check function requires a string", () => {
        expect(() => {
            isValidDNA()
        }).toThrow("str is required")
        expect(() => {
            isValidDNA(2)
        }).toThrow("str must be a String")
        expect(() => {
            isValidDNA(["GATA","CGTA"])
        }).toThrow("str must be a String")
    });
    test("returns false if string has a character other than  C, G, T or A", () => {
        expect(isValidDNA(" ")).toBe(false);
        expect(isValidDNA("CGTA*!")).toBe(false);
        expect(isValidDNA("cgta")).toBe(false);
        expect(isValidDNA("CGTA ")).toBe(false);
    });
    test("returns true if string has only  C, G, T or A", () => {
        expect(isValidDNA("G")).toBe(true);
        expect(isValidDNA("CCTTAAGG")).toBe(true);
        expect(isValidDNA("CGTACGTA")).toBe(true);
    });
});
describe("getComplementaryDNA",() => {
    // testing of the 'validDNA' function happens above
    test("check that an invalid or empty DNA string returns false", () => {
        expect(() => {
            getComplementaryDNA("rtyt")
        }).toThrow("must have only CGTA")
        expect(() => {
            getComplementaryDNA(8)
        }).toThrow("must be a String")
        expect(() => {
            getComplementaryDNA(["GATA","CGTA"])
        }).toThrow("must be a String")
        expect(() => {
            getComplementaryDNA()
        }).toThrow("str is required")
        });
    test("check that a valid DNA string returns valid pairs", () => {
        expect(getComplementaryDNA("ACTG")).toBe("TGAC")
        expect(getComplementaryDNA("TGAC")).toBe("ACTG")
        expect(getComplementaryDNA("TTT")).toBe("AAA")
        });
});
