import { mean } from "./average";

test("test mean of two numbers", () => {
  // Arrange
  const numbers: number[] = [1, 9];
  const expected: number = 5;

  // Act
  const actual: number = mean(numbers);

  // Assert
  expect(actual).toBe(expected);
});

test("test mean of five numbers", () => {
  // Arrange
  const numbers: number[] = [1, 9, 2, 7, 2];
  const expected: number = 4.2;

  // Act
  const actual: number = mean(numbers);

  // Assert
  expect(actual).toBe(expected);
});
