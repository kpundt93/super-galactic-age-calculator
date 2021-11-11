export class AgeCalculator {
  constructor(age) {
    this.age = age;
  }

  calculator(planet) {
    switch (planet) {
      case "Mercury":
        let mercuryAge = parseFloat((this.age/.24).toFixed(2));
        return mercuryAge;
      case "Venus":
        let venusAge = parseFloat((this.age/.62).toFixed(2));
        return venusAge;
      case "Mars":
        let marsAge = parseFloat((this.age/1.88).toFixed(2));
        return marsAge;
      case "Jupiter":
        let jupiterAge = parseFloat((this.age/11.86).toFixed(2));
        return jupiterAge;
      default:
        return false;
    }
  }

  yearsLeft(planet) {
    let lifeExpectancy = 72.6;
    let planetAge = this.calculator(planet);
    let planetLifeExpectancy;
    let yearsToLive;

    switch(planet) {
      case "Mercury":
        planetLifeExpectancy = parseFloat(lifeExpectancy/.24).toFixed(2);
        yearsToLive = parseFloat((planetLifeExpectancy - planetAge).toFixed(2));

        if (yearsToLive <= 0) {
          return  (yearsToLive * -1);
          } else {
            return yearsToLive;
          }
      case "Venus":
        planetLifeExpectancy = parseFloat(lifeExpectancy/.62).toFixed(2);
        yearsToLive = parseFloat((planetLifeExpectancy - planetAge).toFixed(2));
        
        if (yearsToLive <= 0) {
          return  (yearsToLive * -1);
          } else {
            return yearsToLive;
          }
      case "Mars":
        planetLifeExpectancy = parseFloat(lifeExpectancy/1.88).toFixed(2);
        yearsToLive = parseFloat((planetLifeExpectancy - planetAge).toFixed(2));
        
        if (yearsToLive <= 0) {
          return  (yearsToLive * -1);
          } else {
            return yearsToLive;
          }
      case "Jupiter":
        planetLifeExpectancy = parseFloat(lifeExpectancy/11.86).toFixed(2);
        yearsToLive = parseFloat((planetLifeExpectancy - planetAge).toFixed(2));
        
        if (yearsToLive <= 0) {
          return  (yearsToLive * -1);
          } else {
            return yearsToLive;
          }
      default:
        return false;
    }
  }
}