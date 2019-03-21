export default class VisitsModel {
  constructor() {
    this.data = {
      tablet: {
        percentage: 80,
        value: 480000000
      },
      smartphone: {
        percentage: 20,
        value: 120000000
      },
      historical: [
        300000000,
        400000000,
        350000000,
        500000000,
        450000000,
        610000000,
        600000000,
        610000000,
        600000000
      ]
    };
  }

  getData() {
    return this.data;
  }
}
