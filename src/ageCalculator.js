export class AgeCalculator {
  constructor(age) {
    this.age = age;
  }

  calculator(planet) {
    switch (planet) {
      case "Mercury":
        return parseFloat((this.age/.24).toFixed(2));
      default:
        return false;
    }
  }

}