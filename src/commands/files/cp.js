import path from 'path';
import { open } from 'fs/promises';
import { copyFile } from '../../helpers/copyFile.js';
import { correctPath } from '../../helpers/correctPath.js';

export const cp = async (pathToFile, pathToNewDir) => {
  const sourcePath = correctPath(pathToFile);
  const fileName = path.parse(sourcePath).base;
  const destinationPath = path.resolve(correctPath(pathToNewDir), fileName);

  try {
    const file = await open(sourcePath, 'r');
    file.close();
    await copyFile(sourcePath, destinationPath);
  } catch (error) {
    console.log(error.message);
  }
};
