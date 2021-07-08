const square = require("./my-app");

describe("Square method", () => {
  it("should be defined", () => {
    expect(square).toBeTruthy();
  });

  it("should return right value", () => {
    const actual = square(1);
    const actual2 = square(3);
    const actual3 = square();
    const expected = 1;
    const expected2 = 9;
    const expected3 = 0;

    expect(actual).toStrictEqual(expected);
    expect(actual2).toStrictEqual(expected2);
    expect(actual3).toStrictEqual(expected3);
  });
});
