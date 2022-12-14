import path from 'path';
import { open } from 'fs/promises';
import store from '../../store/store.js';
import { copyFile } from '../../helpers/index.js';

export const cp = async (pathToFile, pathToNewDir) => {
  const sourcePath = path.resolve(store.currentPath, pathToFile);
  const fileName = path.parse(sourcePath).base;
  const destinationPath = path.resolve(store.currentPath, pathToNewDir, fileName);

  try {
    const file = await open(sourcePath, 'r');
    file.close();
    await copyFile(sourcePath, destinationPath);
  } catch (error) {
    console.log(error.message);
  }
};
