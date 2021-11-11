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
});