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
      .webp({ quality: parse(file).name === "go-messaging-app" ? 60 : 75 })
      .toFile(join(fileURLToPath(output), `${parse(file).name}-${width}.webp`));
  }

  const textures = new URL("../public/laptop/source/", import.meta.url);
  const optimized = new URL("../public/laptop/optimized/", import.meta.url);
  await mkdir(optimized, { recursive: true });
  for (const name of ["ComputerTextureBase", "ComputerScreenTextureBase"]) {
    await sharp(fileURLToPath(new URL(`${name}.png`, textures)))
      .resize({ width: 1024, withoutEnlargement: true })
      .webp({ lossless: true })
      .toFile(fileURLToPath(new URL(`${name}.webp`, optimized)));
  }
}
