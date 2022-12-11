import os from 'os';

export const eol = () => {
  console.log('EOL: ', JSON.stringify(os.EOL));
};
