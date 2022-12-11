import os from 'os';

export const homedir = () => {
  try {
    const userInfo = os.userInfo();

    console.log('Homedir: ', userInfo.homedir);
  } catch (error) {
    console.log(error.message);
  }
};
