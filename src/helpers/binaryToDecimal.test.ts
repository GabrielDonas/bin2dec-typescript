import binaryToDecimal from "./binaryToDecimal";

describe("Convert a binary number to decimal", () => {
  it("should convert a binary number to decimal", () => {
    expect(binaryToDecimal(111110000111)).toBe(3975);
    expect(binaryToDecimal(10101010101)).toBe(1365);
    expect(binaryToDecimal(1111010101110001)).toBe(62833);
  });
});
