import crypto from 'crypto';
import fs from 'fs';
import path from 'path';
import store from '../../store/store.js';

const getChecksum = (destinationPath) => {
  return new Promise((resolve, reject) => {
    const hash = crypto.createHash('sha256');
    const input = fs.createReadStream(destinationPath);

    input.on('error', reject);

    input.on('data', (chunk) => {
      hash.update(chunk);
    });

    input.on('close', () => {
      resolve(hash.digest('hex'));
    });
  });
};

export const hash = async (filePath) => {
  const destinationPath = path.resolve(store.currentPath, filePath);
  console.log('Hashing: ', destinationPath);

  try {
    const hash = await getChecksum(destinationPath);
    console.log('Hash: ', hash);
  } catch (error) {
    console.log(error.message);
  }
};
