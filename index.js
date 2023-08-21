import { d1_p1, d1_p2 } from "./src/d1.js";

const puzzle1 = await d1_p1();
const puzzle2 = await d1_p2();

console.log("The Elf with the most calories is carrying", puzzle1);
console.log("The top three Elves with the most calories are carrying", puzzle2);
