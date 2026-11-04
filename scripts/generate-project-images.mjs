import { mkdir, readdir } from "node:fs/promises";
import { join, parse } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const source = new URL("../public/images/projects/", import.meta.url);
const output = new URL("responsive/", source);
await mkdir(output, { recursive: true });

for (const file of await readdir(source)) {
  if (!/\.(jpe?g|webp|png)$/i.test(file)) continue;
  for (const width of [320, 640, 960]) {
    await sharp(fileURLToPath(new URL(file, source)))
      .resize({ width })
      .webp({ quality: 75 })
      .toFile(join(fileURLToPath(output), `${parse(file).name}-${width}.webp`));
  }
}
