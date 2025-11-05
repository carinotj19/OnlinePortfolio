#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const exts = new Set(['.png', '.jpg', '.jpeg']);
const roots = [
  path.resolve('src/assets/Projects'),
  path.resolve('src/assets/Certificates'),
];

const ensureDir = (dir) => fs.promises.mkdir(dir, { recursive: true });

async function* walk(dir) {
  const entries = await fs.promises.readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      yield* walk(full);
    } else {
      yield full;
    }
  }
}

async function processFile(file) {
  const ext = path.extname(file).toLowerCase();
  if (!exts.has(ext)) return;

  const outWebp = file.replace(/\.(png|jpe?g)$/i, '.webp');
  try {
    const [srcStat, webpStat] = await Promise.allSettled([
      fs.promises.stat(file),
      fs.promises.stat(outWebp)
    ]);

    const skipWebp = webpStat.status === 'fulfilled' && srcStat.status === 'fulfilled' && webpStat.value.mtimeMs >= srcStat.value.mtimeMs;

    if (!skipWebp) {
      await sharp(file)
        .webp({ quality: 82, effort: 4 })
        .toFile(outWebp);
      console.log(`webp: ${path.relative(process.cwd(), outWebp)}`);
    }

    // Lossy optimize originals into-place (write to a temp file then replace)
    const tmpOut = file + '.opt';
    const img = sharp(file);
    const meta = await img.metadata();
    if (meta.format === 'png') {
      await img.png({ compressionLevel: 9, palette: true, quality: 85 }).toFile(tmpOut);
    } else {
      await img.jpeg({ quality: 82, mozjpeg: true }).toFile(tmpOut);
    }
    await fs.promises.copyFile(tmpOut, file);
    await fs.promises.unlink(tmpOut);
    console.log(`opt:  ${path.relative(process.cwd(), file)}`);
  } catch (err) {
    console.error(`Error processing ${file}:`, err.message);
  }
}

async function main() {
  for (const root of roots) {
    if (!fs.existsSync(root)) continue;
    for await (const f of walk(root)) {
      await processFile(f);
    }
  }
}

main();

