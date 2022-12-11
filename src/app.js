import store from './store/store.js';

import { stdin } from 'process';
import { commandReducer } from './commands/commandReducer.js';
import { COMMANDS } from './constants/commands.js';

export const app = (userName) => {
  console.log(`Welcome to the File Manager, ${userName}!`);
  console.log(`You are currently in ${store.startPath}`);

  stdin.read();

  stdin.on('command', async (command) => {
    await commandReducer(command);
  });

  stdin.on('operationFailed', () => {
    console.log('Operation failed');
  });

  stdin.on('data', (data) => {
    const [command, ...payload] = data.toString().trim().split(' ');

    stdin.emit('command', { command: COMMANDS[command], payload });

    if (command == '.exit') {
      console.log(`Thank you for using File Manager, ${userName}, goodbye!`);
      process.exit(0);
    }
  });

  process.on('SIGINT', () => {
    console.log(`Thank you for using File Manager, ${userName}, goodbye!`);
    process.exit(0);
  });
};
