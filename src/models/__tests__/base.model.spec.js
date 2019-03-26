import BaseModel from "../base.model";

const resource = "http://my-mocked-api/v01/my-resource";
const mockSuccessResponse = { data: "test-data" };
const mockJsonPromise = Promise.resolve(mockSuccessResponse);
const mockFetchPromise = Promise.resolve({
  json: () => mockJsonPromise
});
window.fetch = jest.fn(() => mockFetchPromise);

describe("Base Model", () => {
  const model = new BaseModel(resource);

  it("should fetch data", () => {
    expect(window.fetch).toBeCalledWith(resource, { method: "GET" });
  });

  it("should set the response in this.data", () => {
    model.data.then(data => {
      expect(data).toBe(mockSuccessResponse);
    });
  });

  describe("getData", () => {
    it("should return data and unit", () => {
      model.getData().then(data => {
        expect(data).toEqual({ ...mockSuccessResponse, unit: "" });
      });
    });
  });
});
