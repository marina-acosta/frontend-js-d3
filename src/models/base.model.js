export default class BaseModel {
  constructor(resource) {
    this.resource = resource;
    this.data = this.fetchData();
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
    return this.data;
  }
}
