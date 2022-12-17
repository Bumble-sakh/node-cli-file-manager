import { unlink } from 'fs/promises';
import { correctPath } from '../../helpers/correctPath.js';

export const rm = async (pathToFile) => {
  const sourcePath = correctPath(pathToFile);

  try {
    await unlink(sourcePath);
  } catch (error) {
    console.log(error.message);
  }
};
