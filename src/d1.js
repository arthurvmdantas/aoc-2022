import { readInputLineByLine } from "./aux.js";

// Day 1 - Puzzle 1
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

// Day 1 - Puzzle 2
export async function d1_p2() {
  // top three Elves with the most calories
  let topThreeCalories = new Array(3).fill(0);

  // total calories for the current Elf
  let totalCalories = 0;
  const myCallback = (line) => {
    // an empty line means that I've read all the calories for the current Elf
    if (line === "") {
      if (totalCalories >= topThreeCalories[0])
        topThreeCalories = [
          totalCalories,
          topThreeCalories[0],
          topThreeCalories[1],
        ];
      else if (totalCalories >= topThreeCalories[1])
        topThreeCalories = [
          topThreeCalories[0],
          totalCalories,
          topThreeCalories[1],
        ];
      else if (totalCalories > topThreeCalories[2])
        topThreeCalories = [
          topThreeCalories[0],
          topThreeCalories[1],
          totalCalories,
        ];

      totalCalories = 0; // finish current Elf
      return;
    }

    totalCalories += parseInt(line);
  };

  await readInputLineByLine("src/inputs/d1.txt", myCallback);
  console.log(
    "The top three Elves with the most calories are carrying",
    topThreeCalories.reduce((acc, curr) => acc + curr)
  );
}
