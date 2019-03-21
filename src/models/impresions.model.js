export default class ImpresionsModel {
  constructor() {
    this.data = {
      tablet: {
        percentage: 40,
        value: 20000000
      },
      smartphone: {
        percentage: 60,
        value: 30000000
      },
      historical: [
        100000000,
        90000000,
        10000000,
        80000000,
        85000000,
        70000000,
        65000000,
        70000000,
        50000000
      ]
    };
  }

  getData() {
    return this.data;
  }
}
