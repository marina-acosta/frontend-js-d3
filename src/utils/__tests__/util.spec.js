import { format } from "../util";

describe("utils.format", () => {
  describe("should format without unit", () => {
    it("number smaller than 1000 should keep the same", () => {
      expect(format(900)).toBe("900");
    });

    it("number between 1000 than 100000 should add one thousand separator", () => {
      expect(format(11900)).toBe("11.900");
    });

    it("number 1000000 should add two thousand separator", () => {
      expect(format(1000000)).toBe("1.000.000");
    });

    it("number with decimal should round and format with thousand separator", () => {
      expect(format(2500.5)).toBe("2.500");
    });
  });

  describe("should format with unit", () => {
    it("number smaller than 1000 should keep the same and add unit", () => {
      expect(format(900, "€")).toBe("900 €");
    });

    it("number between 1000 than 100000 should add one thousand separator and unit", () => {
      expect(format(11900, "€")).toBe("11.900 €");
    });

    it("number 1000000 should add two thousand separator and unit", () => {
      expect(format(1000000, "€")).toBe("1.000.000 €");
    });

    it("number with decimal should round and format with thousand separator adding unit", () => {
      expect(format(2500.5, "€")).toBe("2.500 €");
    });
  });
});
