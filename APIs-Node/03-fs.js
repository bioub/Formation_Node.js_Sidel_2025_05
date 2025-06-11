// Recommendé : utiliser 'node:fs/promises' pour le code async
import fs from 'node:fs/promises';

// File operations example using fs/promises
await fs.writeFile('test.txt', 'Hello, world!', 'utf8');
await fs.appendFile('test.txt', '\nThis is a test.', 'utf8');
const content = await fs.readFile('test.txt', 'utf8');
console.log(content);
await fs.rename('test.txt', 'renamed_test.txt');
await fs.unlink('renamed_test.txt');
console.log('File operations completed successfully.');

// Directory operations example
await fs.mkdir('test_dir', { recursive: true });
await fs.writeFile('test_dir/test_file.txt', 'This is a test file.', 'utf8');
const dirContent = await fs.readdir('test_dir');
console.log('Directory content:', dirContent);
await fs.rename('test_dir/test_file.txt', 'test_dir/renamed_test_file.txt');
await fs.rmdir('test_dir', { recursive: true });
console.log('Directory operations completed successfully.');

// Permissions example
const filePath = 'test_permissions.txt';
await fs.writeFile(filePath, 'This file will have its permissions changed.', 'utf8');
const stats = await fs.stat(filePath);
console.log('File stats before permission change:', stats);
await fs.chmod(filePath, 0o644); // Change permissions to read/write for owner, read for group and others
const newStats = await fs.stat(filePath);
console.log('File stats after permission change:', newStats);