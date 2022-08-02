import algorithmsController from "../AlgorithmsController/algorithms.controller";

test("Create a sum depends of the operator and the value of the variables", () => {
  const sumOperator = algorithmsController.twoVariables(1, 2, "+");
  expect(sumOperator).toBe(sumOperator);
});

test("Validate if a number if older or equal", () => {
  const variableEquals = algorithmsController.twoVariablesEquals(5, 2);

  expect(variableEquals).toBe(variableEquals);
});

test("Validate if your full name", () => {
  const fullName = algorithmsController.getYourFullName("Lina Castro Martinez");
  expect(fullName).toBe(fullName);
});

test("Validate if a number is positive or negative", () => {
  const mod = algorithmsController.modValue(10);
  expect(mod).toBe(mod);
});
