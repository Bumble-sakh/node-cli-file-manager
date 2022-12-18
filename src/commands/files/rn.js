import { open, rename } from 'fs/promises';
import { correctPath } from '../../helpers/correctPath.js';
import { colorText } from '../../helpers/colorText.js';
import { COLORS } from '../../constants/colors.js';
import { parse } from 'path';
import { stdin } from 'process';

export const rn = async (filePath, fileName) => {
  const oldPath = correctPath(filePath);
  const oldFileName = parse(oldPath).base;
  const newPath = correctPath(fileName);

  try {
    const file = await open(newPath, 'wx');
    file.close();
    await rename(oldPath, newPath);
    console.log(colorText(oldFileName, COLORS.fg.cyan), colorText('renamed.', COLORS.fg.green));
  } catch (error) {
    console.error(colorText(error.message, COLORS.fg.red));
    stdin.emit('operationFailed');
  }
};
