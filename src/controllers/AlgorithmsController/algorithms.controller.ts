const twoVariables = (var1: number, var2: number, operacion: string) => {
  let result: number;
  try {
    if (var1 && var2 && operacion === "+") result = var1 + var2;
    else throw "You should add a valid sum operator";
    return result;
  } catch (error) {
    console.error(error);
  }
};

const twoVariablesEquals = (var1: number, var2: number) => {
  let result: string;
  try {
    if (var1 > var2) {
      result = "The first value is older";
    } else if (var1 < var2) {
      result = "The second value is older";
    } else {
      throw "Both are equals, please add one of the value older";
    }
    return result;
  } catch (error) {
    console.error(error);
  }
};

const getYourFullName = (fullname: string) => {
  try {
    if (fullname && fullname !== "") return fullname;
    else return "Please write your fullname!";
  } catch (error) {
    console.error(error);
  }
};

const modValue = (value: number) => {
  let result: string;
  try {
    if (value % 2) result = `Is a positive number ${value}`;
    else result = `Is a negative number ${value}`;
    return result;
  } catch (error) {
    console.error(error);
  }
};
export default { twoVariables, twoVariablesEquals, getYourFullName, modValue };
