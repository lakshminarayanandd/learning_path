class UberCalculator {
  constructor(distance, ratePerKilometer, baseFare) {
    this.distance = distance;
    this.ratePerKilometer = ratePerKilometer;
    this.baseFare = baseFare;
  }

  calculatePrice() {
    const totalFare = this.baseFare + this.distance * this.ratePerKilometer;
    return `Uber Price: Rs.${totalFare.toFixed(2)}`;
  }
}

const distance = 10;
const ratePerKilometer = 12;
const baseFare = 50;

const uberCalculator = new UberCalculator(distance, ratePerKilometer, baseFare);
console.log(uberCalculator.calculatePrice());
