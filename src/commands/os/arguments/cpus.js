import os from 'os';

export const cpus = () => {
  const cpu = os.cpus();

  console.log('Core(s): ', cpu.length);
  cpu.forEach((core, idx) => {
    console.log('Core', idx + 1);
    console.log('Model: ', core.model);
    console.log('Speed: ', core.speed / 1000, 'GHz\n');
  });
};
