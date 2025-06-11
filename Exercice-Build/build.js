import fs from 'node:fs/promises';
import { resolve } from 'node:path';
import { minify } from 'terser';

const distPath = resolve(import.meta.dirname, 'dist');
const srcPath = resolve(import.meta.dirname, 'src');
const horlogeJsPath = resolve(srcPath, 'js', 'horloge.js');
const indexJsPath = resolve(srcPath, 'js', 'index.js');
const indexHtmlPath = resolve(srcPath, 'index.html');
const indexHtmlDistPath = resolve(distPath, 'index.html');
const appJsDistPath = resolve(distPath, 'app.js');

try {
  await fs.rm(distPath, { recursive: true, force: true });
  await fs.mkdir(distPath, { recursive: true });
  console.log('Cleaned dist directory');

  // Promise.all permet de combiner plusieurs promesses
  // en une seule promesse, qui est résolue lorsque toutes les promesses sont résolues.
  // si une des promesses est rejetée, la promesse retournée par Promise.all est rejetée.
  // Voir aussi Promise.allSettled, Promise.any, Promise.race
  const buffers = await Promise.all([
    fs.readFile(horlogeJsPath),
    fs.readFile(indexJsPath),
  ]);
  // const horlogeJsBuffer = await fs.readFile(horlogeJsPath);
  // const indexJsBuffer = await fs.readFile(indexJsPath);

  await fs.writeFile(
    appJsDistPath,
    Buffer.concat(buffers)
  );
  console.log('Combined horloge.js and index.js into app.js');

  const indexHtmlContent = await fs.readFile(indexHtmlPath, 'utf8');
  const newHtmlContent = indexHtmlContent
    .replace('<script src="./js/horloge.js"></script>', '')
    .replace('<script src="./js/index.js"></script>', '<script src="app.js"></script>');

  await fs.writeFile(indexHtmlDistPath, newHtmlContent, 'utf8');
  console.log('Updated index.html to use app.js');
}
catch (err) {
  console.error('Error during build process:', err);
}
