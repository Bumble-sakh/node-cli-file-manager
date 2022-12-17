import { access, constants } from 'fs/promises';
import store from '../../store/store.js';
import { correctPath } from '../../helpers/correctPath.js';

export const cd = async (destinationPath) => {
  const currentPath = correctPath(destinationPath);

  try {
    await access(currentPath, constants.R_OK);
    store.currentPath = currentPath;
  } catch (err) {
    console.error(err.message);
  }
};
