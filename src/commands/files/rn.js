import path from 'path';
import fs from 'fs/promises';
import store from '../../store/store.js';

export const rn = async (filePath, fileName) => {
  const oldPath = path.resolve(store.currentPath, filePath);
  const newPath = path.resolve(store.currentPath, fileName);

  try {
    const file = await fs.open(newPath, 'wx');
    file.close();
    await fs.rename(oldPath, newPath);
  } catch (error) {
    console.log(error.message);
  }
};
