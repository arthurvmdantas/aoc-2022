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

  return maxCalories;
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
      topThreeCalories = d1_p2_updateTopThreeCalories(
        topThreeCalories,
        totalCalories
      );

      totalCalories = 0; // finish current Elf calories counting
      return;
    }

    totalCalories += parseInt(line);
  };

  await readInputLineByLine("src/inputs/d1.txt", myCallback);

  return topThreeCalories.reduce((acc, curr) => acc + curr);
}

function d1_p2_updateTopThreeCalories(topThree, currentTotal) {
  if (currentTotal >= topThree[0])
    return [currentTotal, topThree[0], topThree[1]];
  else if (currentTotal >= topThree[1])
    return [topThree[0], currentTotal, topThree[1]];
  else if (currentTotal > topThree[2])
    return [topThree[0], topThree[1], currentTotal];
  else return topThree;
}
