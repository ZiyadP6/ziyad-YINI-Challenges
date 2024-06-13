const challenge4 = require('../challenges/Challenge4');

const Challenge4_StampDuty_TestCases = [
    { propertyPrice: 125000, expectedResult: 0 },
    { propertyPrice: 300000, expectedResult: 0 },
    { propertyPrice: 300001, expectedResult: Math.round(1 * 0.05) },
    { propertyPrice: 500000, expectedResult: Math.round((500000 - 300001) * 0.05) },
    { propertyPrice: 925000, expectedResult: Math.round((925000 - 300001) * 0.05) },
    { propertyPrice: 925001, expectedResult: Math.round((925000 - 300001) * 0.05) },
    { propertyPrice: 1500000, expectedResult: Math.round((574999 * 0.1) + ((925000 - 300001) * 0.05)) },
    { propertyPrice: 2500000, expectedResult: Math.round(((2500000 - 1500001) * 0.12) + (574999 * 0.1) + ((925000 - 300001) * 0.05)) },
    { propertyPrice: 1595000, expectedResult: 100150 }
];


describe('Challenge4_StampDuty_TestCases', () =>
    Challenge4_StampDuty_TestCases.forEach(t =>
        test('Challenge4_StampDuty', () =>
            expect(challenge4.StampDuty(t.propertyPrice)).toBe(t.expectedResult)
        )));