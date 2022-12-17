import { open } from 'fs/promises';
import { BROTLI_ACTIONS } from '../../constants/brotliActions.js';
import { brotli } from '../../helpers/index.js';
import { correctPath } from '../../helpers/correctPath.js';

export const decompress = async (filePath, destinationPath) => {
  const readFile = correctPath(filePath);
  const writeFile = correctPath(destinationPath);

  try {
    const file = await open(readFile, 'r');
    file.close();
    await brotli(readFile, writeFile, BROTLI_ACTIONS.decompress);
  } catch (error) {
    console.log(error.message);
  }
};
