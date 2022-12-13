import path from 'path';
import store from '../../store/store.js';
import { BROTLI_ACTIONS } from '../../constants/brotliActions.js';
import { brotli } from './brotli.js';

export const compress = async (filePath, destinationPath) => {
  const readFile = path.resolve(store.currentPath, filePath);
  const writeFile = path.resolve(store.currentPath, destinationPath);

  try {
    await brotli(readFile, writeFile, BROTLI_ACTIONS.compress);
  } catch (error) {
    console.log(error.message);
  }
};
