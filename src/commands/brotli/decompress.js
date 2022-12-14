import path from 'path';
import store from '../../store/store.js';
import { BROTLI_ACTIONS } from '../../constants/brotliActions.js';
import { brotli } from '../../helpers/index.js';

export const decompress = async (filePath, destinationPath) => {
  const readFile = path.resolve(store.currentPath, filePath);
  const writeFile = path.resolve(store.currentPath, destinationPath);

  try {
    await brotli(readFile, writeFile, BROTLI_ACTIONS.decompress);
  } catch (error) {
    console.log(error.message);
  }
};
