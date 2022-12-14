import os from 'os';

export const architecture = () => {
  console.log('Architecture: ', os.arch());
};
