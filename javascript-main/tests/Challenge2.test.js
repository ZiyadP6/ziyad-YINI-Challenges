const challenge2 = require("../challenges/Challenge2");

const Challenge2_TestCases = [
    { numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], expectedResult: 1 },
    { numbers: [1, 2, -3, 4], expectedResult: -3 },
    { numbers: [Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER, 1, 2, -3, 4], expectedResult: Number.MIN_SAFE_INTEGER },
    { numbers: [0, 0, 0, 0, 0], expectedResult: 0 },
    { numbers: [Number.MAX_SAFE_INTEGER], expectedResult: Number.MAX_SAFE_INTEGER },
    { numbers: [], expectedResult: 0 },
    { numbers: [Number.MAX_SAFE_INTEGER - 1], expectedResult: Number.MAX_SAFE_INTEGER - 1 }
];

describe('Challenge2_ReturnSmallestValueInArray_ShouldReturnValue', () =>
    Challenge2_TestCases.forEach(t =>
        test('Challenge2_ReturnSmallestValueInArray', () =>
            expect(challenge2.ReturnSmallestValueInArray(t.numbers)).toBe(t.expectedResult)
        )));