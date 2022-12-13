import fs from 'fs';
import zlib from 'zlib';
import { BROTLI_ACTIONS } from '../../constants/brotliActions.js';

export const brotli = async (readFile, writeFile, action) => {
  return new Promise((resolve, reject) => {
    const readStream = fs.createReadStream(readFile);
    const writeStream = fs.createWriteStream(writeFile);

    const brotli = action === BROTLI_ACTIONS.compress ? zlib.createBrotliCompress() : zlib.createBrotliDecompress();

    const stream = readStream.pipe(brotli).pipe(writeStream);

    readStream.on('error', reject);
    writeStream.on('error', reject);
    stream.on('error', reject);

    stream.on('finish', () => {
      const doneText = BROTLI_ACTIONS.compress ? 'Compress done' : 'Decompress done';
      console.log(doneText);
      resolve();
    });
  });
};
