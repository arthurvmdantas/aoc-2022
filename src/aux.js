import { createInterface } from "node:readline";
import { createReadStream } from "node:fs";
import { once } from "node:events";

export async function readInputLineByLine(filePath, cb) {
  const rl = createInterface({
    input: createReadStream(filePath),
    crlfDelay: Infinity,
  });

  rl.on("line", (line) => cb(line));

  await once(rl, "close");
}
