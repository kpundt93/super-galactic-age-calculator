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

  calculatePlanetLifeExpectancy(planet) {
    let lifeExpectancy = 72.6;
    
    switch (planet) {
      case "Mercury":
        let mercuryLifeExp = parseFloat(lifeExpectancy/.24).toFixed(2);
        return mercuryLifeExp;
      case "Venus":
        let venusLifeExp = parseFloat(lifeExpectancy/.62).toFixed(2);
        return venusLifeExp;
      case "Mars":
        let marsLifeExp = parseFloat(lifeExpectancy/1.88).toFixed(2);
        return marsLifeExp;
      case "Jupiter":
        let jupiterLifeExp = parseFloat(lifeExpectancy/11.86).toFixed(2);
        return jupiterLifeExp;
    }
  }

  yearsLeft(planet) {
    let planetAge = this.calculator(planet);
    let planetLifeExpectancy = this.calculatePlanetLifeExpectancy(planet);
    let yearsToLive;

    switch(planet) {
      case "Mercury":
        yearsToLive = parseFloat((planetLifeExpectancy - planetAge).toFixed(2));

        if (yearsToLive <= 0) {
          return  (yearsToLive * -1);
          } else {
            return yearsToLive;
          }
      case "Venus":
        yearsToLive = parseFloat((planetLifeExpectancy - planetAge).toFixed(2));
        
        if (yearsToLive <= 0) {
          return  (yearsToLive * -1);
          } else {
            return yearsToLive;
          }
      case "Mars":
        yearsToLive = parseFloat((planetLifeExpectancy - planetAge).toFixed(2));
        
        if (yearsToLive <= 0) {
          return  (yearsToLive * -1);
          } else {
            return yearsToLive;
          }
      case "Jupiter":
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