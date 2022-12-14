import path from 'path';
import { unlink } from 'fs/promises';
import store from '../../store/store.js';

export const rm = async (pathToFile) => {
  const sourcePath = path.resolve(store.currentPath, pathToFile);

  try {
    await unlink(sourcePath);
  } catch (error) {
    console.log(error.message);
  }
};
