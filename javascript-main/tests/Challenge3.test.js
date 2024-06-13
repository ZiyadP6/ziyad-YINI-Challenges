const challenge3 = require('../challenges/Challenge3');

const date = new Date('2020-02-20');
const Challenge3_CalculateBestBranch_TestCases = [
    {
        salesItems: [
            new challenge3.SalesItem("ABC", 100, date),
            new challenge3.SalesItem("ABC", 50, date.setDate(date.getDate() - 1)),
            new challenge3.SalesItem("ABC", 400, date.setDate(date.getDate() - 2)),
            new challenge3.SalesItem("DEF", 200, date)
        ],
        expectedResult: "ABC"
    },
    {
        salesItems: [
            new challenge3.SalesItem("ABC", 100, date),
            new challenge3.SalesItem("ABC", 50, date.setDate(date.getDate() - 1)),
            new challenge3.SalesItem("ABC", 200, date.setDate(date.getDate() - 2)),
            new challenge3.SalesItem("DEF", 500, date),
        ],
        expectedResult: "DEF"
    }
];

describe('Challenge3_CalculateBestBranch_ShouldReturnValue', () =>
    Challenge3_CalculateBestBranch_TestCases.forEach(t =>
        test('Challenge3_CalculateBestBranch', () =>
            expect(challenge3.CalculateBestBranch(t.salesItems)).toBe(t.expectedResult)
        )));