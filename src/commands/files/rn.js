import { open, rename } from 'fs/promises';
import { correctPath } from '../../helpers/correctPath.js';

export const rn = async (filePath, fileName) => {
  const oldPath = correctPath(filePath);
  const newPath = correctPath(fileName);

  try {
    const file = await open(newPath, 'wx');
    file.close();
    await rename(oldPath, newPath);
  } catch (error) {
    console.log(error.message);
  }
};
