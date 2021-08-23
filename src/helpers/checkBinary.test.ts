import checkBinary from "./checkBinary";

describe("Check if the input is a binary number", () => {
  it("should return false if the input is a negative number", () => {
    expect(checkBinary("-1234")).toBe(false);
  });

  it("should return false if the input is not a binary number", () => {
    expect(checkBinary("1234")).toBe(false);
  });

  it("should return true if the input is a binary number", () => {
    expect(checkBinary("1000110")).toBe(true);
  });
});
