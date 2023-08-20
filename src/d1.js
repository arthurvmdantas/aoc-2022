import { readInputLineByLine } from "./aux.js";

export async function d1_p1() {
  // maximum calories (global maximum)
  let maxCalories = 0;
  // total calories for the current Elf
  let totalCalories = 0;
  const myCallback = (line) => {
    // an empty line means that I've read all the calories for the current Elf
    if (line === "") {
      maxCalories = Math.max(maxCalories, totalCalories);
      totalCalories = 0; // finish current Elf
      return;
    }

    totalCalories += parseInt(line);
  };

  await readInputLineByLine("src/inputs/d1.txt", myCallback);
  console.log("The Elf with the most calories is carrying", maxCalories);
}
