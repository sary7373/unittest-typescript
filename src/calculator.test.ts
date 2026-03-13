import { add, subtract, multiply, divide } from "./calculator";

test("add three to two is five", () => {
  // Arrange
  const a: number = 2;
  const b: number = 3;
  const expected: number = 5;

  // Act
  const actual = add(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("subtract seven from six is negative one", () => {
  // Arrange
  const a: number = 6;
  const b: number = 7;
  const expected: number = -1;

  // Act
  const actual: number = subtract(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("multiply three by seven is twenty-one", () => {
  // Arrange
  const a: number = 3;
  const b: number = 7;
  const expected: number = 21;

  // Act
  const actual: number = multiply(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("divide ten by five is two", () => {
  // Arrange
  const a: number = 10;
  const b: number = 5;
  const expected: number = 2;

  // Act
  const actual: number = divide(a, b);

  // Assert
  expect(actual).toBe(expected);
});
