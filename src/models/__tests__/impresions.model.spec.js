import ImpresionsModel from "../impresions.model";
import { api } from "../../utils/api";

const mockSuccessResponse = { data: "test-data" };
const mockJsonPromise = Promise.resolve(mockSuccessResponse);
const mockFetchPromise = Promise.resolve({
  json: () => mockJsonPromise
});
window.fetch = jest.fn(() => mockFetchPromise);

describe("Impresions Model", () => {
  const model = new ImpresionsModel();

  it("should set api.impresions as resource", () => {
    expect(model.resource).toBe(api.impresions);
  });

  describe("getData", () => {
    it("should return data with empty unit", () => {
      model.getData().then(data => {
        expect(data).toEqual({ ...mockSuccessResponse, unit: "" });
      });
    });
  });
});
