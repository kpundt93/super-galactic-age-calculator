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

  // Test #9
  test('should correctly return years left to live on Mars', () => {
    expect(calc.yearsLeft("Mars")).toEqual(23.73);
  });

  // Test #10
  test('should correctly return years left to live on Jupiter', () => {
    expect(calc.yearsLeft("Jupiter")).toEqual(3.76);
  });
    
  // Test #11, default case
  test('should return false when not given anything other than Mercury, Venus, Mars, or Jupiter', () => {
    expect(calc.yearsLeft("")).toEqual(false);
    expect(calc.yearsLeft("Neptune")).toEqual(false);
    expect(calc.yearsLeft(100)).toEqual(false);
    expect(calc.yearsLeft(true)).toEqual(false);
  });

  // Test #12
  test('should return a positive number when a user has outlived the life expectancy on Mercury', () => {
    const elderlyCalc = new AgeCalculator(90);
    expect(elderlyCalc.yearsLeft("Mercury")).toEqual(72.5);
  });

  // Test #13
  test('should return a positive number when a user has outlived the life expectancy on Venus', () => {
    const elderlyCalc = new AgeCalculator(90);
    expect(elderlyCalc.yearsLeft("Venus")).toEqual(28.06);
  });

  // Test #14
  test('should return a positive number when a user has outlived the life expectancy on Mars', () => {
    const elderlyCalc = new AgeCalculator(90);
    expect(elderlyCalc.yearsLeft("Mars")).toEqual(9.25);
  });

  // Test #15
  test('should return a positive number when a user has outlived the life expectancy on Jupiter', () => {
    const elderlyCalc = new AgeCalculator(90);
    expect(elderlyCalc.yearsLeft("Jupiter")).toEqual(1.47);
  });

  // Test #16
  test('should correctly calculate the life expectancy on Mercury', () => {
    expect(calc.calculatePlanetLifeExpectancy("Mercury")).toEqual(302.5);
  });

  // Test #17
  test('should correctly calculate the life expectancy on Venus', () => {
    expect(calc.calculatePlanetLifeExpectancy("Venus")).toEqual(117.10);
  });

  // Test #18
  test('should correctly calculate the life expectancy on Mars', () => {
    expect(calc.calculatePlanetLifeExpectancy("Mars")).toEqual(38.62);
  });

  // Test #19
  test('should correctly calculate the life expectancy on Jupiter', () => {
    expect(calc.calculatePlanetLifeExpectancy("Jupiter")).toEqual(6.12);
  });
});