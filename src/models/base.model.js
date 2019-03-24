export default class BaseModel {
  constructor(resource) {
    this.resource = resource;
    this.data = this.fetchData();
    this.unit = "";
  }

  async fetchData() {
    return fetch(this.resource, {
      method: "GET"
    })
      .then(response => response.json())
      .catch(error => console.error("Error:", error))
      .then(response => response);
  }

  getData() {
    return this.data.then(data => ({ ...data, unit: this.unit }));
  }
}
