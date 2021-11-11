import { AgeCalculator } from "../src/ageCalculator.js";

describe('AgeCalculator', () => {
  let calc;
  beforeEach(() => {
    calc = new AgeCalculator(28);
  });

  // Test #1
  test('should correctly return a new calc object with the age property', () => {
    expect(calc.age).toEqual(28);
  });

  // Test #2, Mercury age
  test('should correctly return age in Mercury years', () => {
    expect(calc.calculator("Mercury")).toEqual(116.67);
  });

  // Test #3, Venus age
  test('should correctly return age in Venus years', () => {
    expect(calc.calculator("Venus")).toEqual(45.16);
  });

  // Test #4, Mars age
  test('should correctly return age in Mars years', () => {
    expect(calc.calculator("Mars")).toEqual(14.89);
  });

  // Test #5, Jupiter age
  test('should correctly return age in Jupiter years', () => {
    expect(calc.calculator("Jupiter")).toEqual(2.36);
  });

  // Test #6, default case
  test('should return false when not given anything other than Mercury, Venus, Mars, or Jupiter', () => {
    expect(calc.calculator("")).toEqual(false);
    expect(calc.calculator("Neptune")).toEqual(false);
    expect(calc.calculator(100)).toEqual(false);
    expect(calc.calculator(true)).toEqual(false);
  });

  // Test #7
  test('should correctly return years left to live on Mercury', () => {
    expect(calc.yearsLeft("Mercury")).toEqual(185.83);
  });

  // Test #8
  test('should correctly return years left to live on Venus', () => {
    expect(calc.yearsLeft("Venus")).toEqual(71.94);
  });
    
});