const { TestScheduler } = require("jest");
const {sumMultiples, isValidDNA, getComplementaryDNA, isItPrime, createMatrix, areWeCovered  } = require ("../challenges/exercise006");
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
    test("return 0 if there are no multiples of 3 or 5", () => {
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
describe("isItPrime",() => {
    test("requires a Number", () => {
        expect(() => {
            isItPrime()
        }).toThrow("Number required")
        });
    test("requires a Number", () => {
        expect(() => {
            isItPrime("dfr")
        }).toThrow("must be a Number")
        });
    test("check that a valid number returns false", () => {
        expect(isItPrime(4)).toBe(false);
        expect(isItPrime(12)).toBe(false);
        }); 
    test("check that a valid number returns true", () => {
        expect(isItPrime(7)).toBe(true);
        expect(isItPrime(11)).toBe(true);
        expect(isItPrime(13.0)).toBe(true);
        }); 
});
describe("createMatrix", () => {
    test("throws an errors if not a valid matrix", () => {
        expect(createMatrix(2,"foo")).toEqual([["foo","foo"],["foo","foo"]]);
        expect(createMatrix(3,"foo")).toEqual([["foo","foo","foo"],["foo","foo","foo"],["foo","foo","foo"]]); 
        });
});
describe("areWeCovered", () => {
    test("check that 3 staff are on rota per each day",() => {
        const staff = [{ name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
        { name: "Pedro", rota: ["Monday", "Wednesday", "Friday"] },
        { name: "Molly", rota: ["Monday", "Tuesday", "Thursday"] },
        { name: "Kelly", rota: [ "Tuesday", "Friday"] },
        ];
        expect(areWeCovered(staff,"Monday")).toBe(true);
        expect(areWeCovered(staff,"Wednesday")).toBe(false);
    });
});
