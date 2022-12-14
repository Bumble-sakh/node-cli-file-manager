import path from 'path';
import { open, unlink } from 'fs/promises';
import { copyFile } from '../../helpers/index.js';
import store from '../../store/store.js';

export const mv = async (pathToFile, pathToNewDir) => {
  const sourcePath = path.resolve(store.currentPath, pathToFile);
  const fileName = path.parse(sourcePath).base;
  const destinationPath = path.resolve(store.currentPath, pathToNewDir, fileName);

  try {
    const file = await open(sourcePath, 'r');
    file.close();
    await copyFile(sourcePath, destinationPath);
    await unlink(sourcePath);
  } catch (error) {
    console.log(error.message);
  }
};
