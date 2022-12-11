import os from 'os';

export const username = () => {
  try {
    const userInfo = os.userInfo();

    console.log('Username: ', userInfo.username);
  } catch (error) {
    console.log(error.message);
  }
};
