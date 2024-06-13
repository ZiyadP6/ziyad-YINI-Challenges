const challenge1 = require("../challenges/Challenge1");

describe('Challenge1_AddTax_ShouldCalcuate', () => {

  const Challenge1_AddTax_ShouldCalcuate_TestCases =
    [
      { amount: 10, taxRate: 0.5, expectedResult: 15 },
      { amount: (Number.MaxValue - 1) / 2, taxRate: 1, expectedResult: Number.MaxValue - 1 },
      { amount: 1, taxRate: 0, expectedResult: 1 },
      { amount: 0, taxRate: 1, expectedResult: 0 }
    ];

  Challenge1_AddTax_ShouldCalcuate_TestCases.forEach(t =>
    test("Challenge1_AddTax", () =>
      expect(challenge1.Add_Tax(t.amount, t.taxRate)).toBe(t.expectedResult)));
});

describe('Challenge1_AddTax_ShouldThrow_TestCases', () => {
  const Challenge1_AddTax_ShouldThrow_TestCases = [
    { amount: Number.MaxValue, taxRate: 2 }
  ];

  Challenge1_AddTax_ShouldThrow_TestCases.forEach(t =>
    test("Challenge1_AddTax", () =>
      expect(() => challenge1.Add_Tax(t.amount, t.taxRate)).toThrow()));
});

describe('Challenge1_Discount_ShouldCalculate', () => {
  const Challenge1_Discount_ShouldCalculate_TestCases = [
    { rrp: 10, taxRate: 0.2, ExpectedResult: 8 },
    { rrp: 78, taxRate: 0.4, ExpectedResult: 46.8 },
    { rrp: 100, taxRate: 1, ExpectedResult: -1 },
    { rrp: 100, taxRate: 2, ExpectedResult: -1 },
    { rrp: 100, taxRate: -1, ExpectedResult: -1 },
  ];

  Challenge1_Discount_ShouldCalculate_TestCases.forEach(t =>
    test("Challenge1_Discount", () =>
      expect(challenge1.Discount(t.rrp, t.taxRate)).toBe(t.ExpectedResult)));
});

describe('Challenge1_Calculate_Total_Cost_Should_Calculate', () => {
  const Challenge1_Calculate_Total_Cost_TestCases = [
    { input: [1, 2, 3, 4, 5], expectedResult: 15 },
    { input: [10, 20, 30, 40, 50], expectedResult: 150 },
    { input: [-1, -2, -3, -4, -5], expectedResult: -15 },
    { input: [-1, -2, -3, -4, 5], expectedResult: -5 },
  ];

  Challenge1_Calculate_Total_Cost_TestCases.forEach(t =>
    test('Challenge1_Calculate_Total_Cost', () =>
      expect(challenge1.Calculate_Total_Cost(t.input)).toBe(t.expectedResult)));
});

describe('Buy_One_Get_One_Half_Price_Should_Calculate', () => {
  const Buy_One_Get_One_Half_Price_TestCases = [
    { item1: 10, item2: 10, expectedResult: 15 },
    { item1: 10, item2: 20, expectedResult: 25 },
    { item1: 20, item2: 10, expectedResult: 25 },
  ];

  Buy_One_Get_One_Half_Price_TestCases.forEach(t =>
    test('Buy_One_Get_One_Half_Price', () =>
      expect(challenge1.Buy_One_Get_One_Half_Price(t.item1, t.item2)).toBe(t.expectedResult)));
});