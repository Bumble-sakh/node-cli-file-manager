import { open } from 'fs/promises';
import { correctPath } from '../../helpers/correctPath.js';

export const add = async (filePath) => {
  const destinationPath = correctPath(filePath);

  try {
    const file = await open(destinationPath, 'wx');
    file.close();
  } catch (error) {
    console.log(error.message);
  }
};
