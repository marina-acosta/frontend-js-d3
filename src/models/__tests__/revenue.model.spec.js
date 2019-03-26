import RevenueModel from "../revenue.model";
import { api } from "../../utils/api";

const mockSuccessResponse = { data: "test-data" };
const mockJsonPromise = Promise.resolve(mockSuccessResponse);
const mockFetchPromise = Promise.resolve({
  json: () => mockJsonPromise
});
window.fetch = jest.fn(() => mockFetchPromise);

describe("Revenue Model", () => {
  const model = new RevenueModel();

  it("should set api.revenue as resource", () => {
    expect(model.resource).toBe(api.revenue);
  });

  describe("getData", () => {
    it("should return data with euro unit", () => {
      model.getData().then(data => {
        expect(data).toEqual({ ...mockSuccessResponse, unit: "€" });
      });
    });
  });
});
