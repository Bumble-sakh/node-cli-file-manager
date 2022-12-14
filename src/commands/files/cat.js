import path from 'path';
import fs from 'fs';
import { stdout } from 'process';
import store from '../../store/store.js';

const readFile = (destinationPath) => {
  return new Promise((resolve, reject) => {
    const input = fs.createReadStream(destinationPath, { flags: 'r', encoding: 'utf-8' });

    input.on('error', reject);

    input.on('data', (data) => {
      stdout.write(data);
    });

    input.on('close', resolve);
    stdout.write('\n\n');
  });
};

export const cat = async (filePath) => {
  const destinationPath = path.resolve(store.currentPath, filePath);

  try {
    await readFile(destinationPath);
  } catch (error) {
    console.log(error.message);
  }
};
