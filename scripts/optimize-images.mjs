import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imagesDir = path.resolve(__dirname, '../public/images');

// Photographic PNGs/JFIFs with no transparency need — convert to JPEG, resize to a
// sane max width for how large they ever render, and drop the old file once the
// new one exists. Source refs are updated separately to point at the new extension.
const CONVERT_TO_JPEG = [
  { from: 'Professional Pic 1.png', to: 'Professional Pic 1.jpg', maxWidth: 1400 },
  { from: 'Professional Pic 2.png', to: 'Professional Pic 2.jpg', maxWidth: 1400 },
  { from: 'Professional Pic 3.png', to: 'Professional Pic 3.jpg', maxWidth: 1400 },
  { from: 'Professional Pic 4.png', to: 'Professional Pic 4.jpg', maxWidth: 1400 },
  { from: 'Professional Pic 5.png', to: 'Professional Pic 5.jpg', maxWidth: 1400 },
  { from: 'Professional Pic 6.png', to: 'Professional Pic 6.jpg', maxWidth: 1400 },
  { from: 'Professional Pic Square.png', to: 'Professional Pic Square.jpg', maxWidth: 1200 },
  { from: 'hcltechmdu.jfif', to: 'hcltechmdu.jpg', maxWidth: 1000 },
];

// Keep format, just resize + recompress in place.
const RESIZE_IN_PLACE = [
  { file: 'Sjhss_plustwo.jpeg', maxWidth: 1000 },
  { file: 'IITG.jpg', maxWidth: 1000 },
];

async function run() {
  let totalBefore = 0;
  let totalAfter = 0;

  for (const { from, to, maxWidth } of CONVERT_TO_JPEG) {
    const srcPath = path.join(imagesDir, from);
    const destPath = path.join(imagesDir, to);
    if (!fs.existsSync(srcPath)) {
      console.log(`skip (missing): ${from}`);
      continue;
    }
    const before = fs.statSync(srcPath).size;
    await sharp(srcPath)
      .resize({ width: maxWidth, withoutEnlargement: true })
      .jpeg({ quality: 82, mozjpeg: true })
      .toFile(destPath);
    const after = fs.statSync(destPath).size;
    fs.unlinkSync(srcPath);
    totalBefore += before;
    totalAfter += after;
    console.log(`${from} -> ${to}: ${(before / 1024 / 1024).toFixed(2)}MB -> ${(after / 1024).toFixed(0)}KB`);
  }

  for (const { file, maxWidth } of RESIZE_IN_PLACE) {
    const srcPath = path.join(imagesDir, file);
    if (!fs.existsSync(srcPath)) {
      console.log(`skip (missing): ${file}`);
      continue;
    }
    const before = fs.statSync(srcPath).size;
    const buffer = await sharp(srcPath)
      .resize({ width: maxWidth, withoutEnlargement: true })
      .toBuffer();
    const tmpPath = `${srcPath}.tmp`;
    fs.writeFileSync(tmpPath, buffer);
    fs.renameSync(tmpPath, srcPath);
    const after = fs.statSync(srcPath).size;
    totalBefore += before;
    totalAfter += after;
    console.log(`${file} (in place): ${(before / 1024 / 1024).toFixed(2)}MB -> ${(after / 1024).toFixed(0)}KB`);
  }

  console.log(`\nTotal: ${(totalBefore / 1024 / 1024).toFixed(2)}MB -> ${(totalAfter / 1024 / 1024).toFixed(2)}MB`);
}

run();
