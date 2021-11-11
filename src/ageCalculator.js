export class AgeCalculator {
  constructor(age) {
    this.age = age;
  }

  calculator(planet) {
    switch (planet) {
      case "Mercury":
        return parseFloat((this.age/.24).toFixed(2));
      case "Venus":
        return parseFloat((this.age/.62).toFixed(2));
      case "Mars":
        return ;
      default:
        return false;
    }
  }

}