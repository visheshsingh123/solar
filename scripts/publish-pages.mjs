import { cp, rm, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

// GitHub Pages serves main's root. Keep a built static entry there;
// editable application sources live in site/.
const root = new URL('../', import.meta.url);
for (const directory of ['assets', 'images']) {
  const target = new URL(directory, root);
  await rm(target, { recursive: true, force: true });
  await cp(new URL(`dist/${directory}`, root), target, { recursive: true });
}
await cp(new URL('dist/index.html', root), new URL('index.html', root));
await writeFile(new URL('.nojekyll', root), '');
console.log(`Static GitHub Pages site updated at ${fileURLToPath(root)}`);
