export default class RevenueModel {
  constructor() {
    this.data = {
      tablet: {
        percentage: 60,
        value: 120000
      },
      smartphone: {
        percentage: 40,
        value: 80000
      },
      historical: [
        100000,
        140000,
        120000,
        150000,
        140000,
        230000,
        200000,
        210000,
        200000
      ]
    };
  }

  getData() {
    return this.data;
  }
}
