import { open } from 'fs/promises';
import { correctPath } from '../../helpers/correctPath.js';
import { colorText } from '../../helpers/colorText.js';
import { COLORS } from '../../constants/colors.js';

export const add = async (filePath) => {
  const destinationPath = correctPath(filePath);

  try {
    const file = await open(destinationPath, 'wx');
    file.close();
    console.log(colorText(filePath, COLORS.fg.cyan), colorText('created.', COLORS.fg.green));
  } catch (error) {
    console.error(colorText(error.message, COLORS.fg.red));
  }
};
