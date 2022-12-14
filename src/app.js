import store from './store/store.js';

import { stdin } from 'process';
import { commandReducer } from './commandsReducer.js';
import { COMMANDS } from './constants/commands.js';
import { parseInput } from './helpers/index.js';

export const app = (userName) => {
  console.log(`Welcome to the File Manager, ${userName}!`);
  console.log(`You are currently in ${store.startPath}`);

  stdin.read();

  stdin.on('command', async (command) => {
    await commandReducer(command);

    stdin.resume();
  });

  stdin.on('operationFailed', () => {
    console.log('Operation failed');
    console.log(`You are currently in ${store.startPath}`);
  });

  stdin.on('data', (data) => {
    stdin.pause();

    const [command, ...payload] = parseInput(data);

    stdin.emit('command', { command: COMMANDS[command], payload });
  });

  process.on('SIGINT', () => {
    process.exit(0);
  });

  process.on('exit', () => {
    console.log(`Thank you for using File Manager, ${userName}, goodbye!`);
  });
};
