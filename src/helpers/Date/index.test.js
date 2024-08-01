import { getMonth } from ".";

describe("Date helper", () => {
  describe("When getMonth is called", () => {
    it("the function return janvier for 2022-01-01 as date", () => {
      const date = new Date("2022-01-01");
      const result = getMonth(date);
      expect(result).toBe("janvier");
    });
    it("the function return juillet for 2022-07-08 as date", () => {
      const date = new Date("2022-07-08");
      const result = getMonth(date);
      expect(result).toBe("juillet");
    });
    it("the function returns 'décembre' for 2022-12-25 as date", () => {
      const date = new Date("2022-12-25");
      const result = getMonth(date);
      expect(result).toBe("décembre");
    });
  });
});
