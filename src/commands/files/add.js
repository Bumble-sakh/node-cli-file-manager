import path from 'path';
import { open } from 'fs/promises';
import store from '../../store/store.js';

export const add = async (filePath) => {
  const destinationPath = path.resolve(store.currentPath, filePath);

  try {
    const file = await open(destinationPath, 'wx');
    file.close();
  } catch (error) {
    console.log(error.message);
  }
};
