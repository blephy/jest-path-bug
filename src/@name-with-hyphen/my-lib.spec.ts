const square = require("./my-lib");

describe("Square method", () => {
  it("should be defined", () => {
    expect(square).toBeTruthy();
  });

  it("should return right value", () => {
    const actual = square(1);
    const actual2 = square(3);
    const expected = 1;
    const expected2 = 9;

    expect(actual).toStrictEqual(expected);
    expect(actual2).toStrictEqual(expected2);
  });
});
