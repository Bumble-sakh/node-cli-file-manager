import { open } from 'fs/promises';
import { BROTLI_ACTIONS } from '../../constants/brotliActions.js';
import { brotli } from '../../helpers/brotli.js';
import { correctPath } from '../../helpers/correctPath.js';

export const compress = async (filePath, destinationPath) => {
  const readFile = correctPath(filePath);
  const writeFile = correctPath(destinationPath);

  try {
    const file = await open(readFile, 'r');
    file.close();
    await brotli(readFile, writeFile, BROTLI_ACTIONS.compress);
  } catch (error) {
    console.log(error.message);
  }
};
