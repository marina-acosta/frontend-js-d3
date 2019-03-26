import VisitsModel from "../visits.model";
import { api } from "../../utils/api";

const mockSuccessResponse = { data: "test-data" };
const mockJsonPromise = Promise.resolve(mockSuccessResponse);
const mockFetchPromise = Promise.resolve({
  json: () => mockJsonPromise
});
window.fetch = jest.fn(() => mockFetchPromise);

describe("Visits Model", () => {
  const model = new VisitsModel();

  it("should set api.visits as resource", () => {
    expect(model.resource).toBe(api.visits);
  });

  describe("getData", () => {
    it("should return data with empty unit", () => {
      model.getData().then(data => {
        expect(data).toEqual({ ...mockSuccessResponse, unit: "" });
      });
    });
  });
});
