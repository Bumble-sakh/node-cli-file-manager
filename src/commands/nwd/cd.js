import path from 'path';
import { access, constants } from 'fs/promises';
import store from '../../store/store.js';

export const cd = async (destinationPath) => {
  const currentPath = path.resolve(store.currentPath, destinationPath);

  try {
    await access(currentPath, constants.R_OK);
    store.currentPath = currentPath;
  } catch (err) {
    console.error(err.message);
  }
};
