import algorithmsController from "../AlgorithmsController/algorithms.controller";
import color from "colors";

console.log(
  color.bgBlue(color.white("Basic Application for implement UnitTesting \n"))
);
console.log(
  color.bgMagenta(
    color.white(
      `First Challenge: ${algorithmsController.twoVariables(2, 2, "+")}`
    )
  )
);
console.log(
  color.bgMagenta(
    color.white(
      `Second Challenge: ${algorithmsController.twoVariablesEquals(9, 1)}`
    )
  )
);
console.log(
  color.bgMagenta(
    color.white(
      `Third Challenge: ${algorithmsController.getYourFullName(
        "Lina Castro Martinez"
      )}`
    )
  )
);
console.log(
  color.bgMagenta(
    color.white(`Fourth Challenge: ${algorithmsController.modValue(0)}`)
  )
);
