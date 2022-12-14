import { stdin } from 'process';

import { up, cd, ls } from './commands/nwd';
import { cat, add, rn, cp } from './commands/files';
import { os } from './commands/os';
import { hash } from './commands/hash';
import { compress, decompress } from './commands/brotli';

import store from './store/store.js';

import { COMMANDS } from './constants/commands.js';
import { OS_ARGUMENTS } from './constants/osArguments.js';

export const commandReducer = async ({ command, payload }) => {
  switch (command) {
    case COMMANDS['.exit']:
      if (payload.length > 0) {
        stdin.emit('operationFailed');
        break;
      }

      process.exit(0);
      break;

    case COMMANDS['.clear']:
      if (payload.length > 0) {
        stdin.emit('operationFailed');
        break;
      }

      process.stdout.write('\x1Bc');

      console.log(`You are currently in ${store.currentPath}`);
      break;

    case COMMANDS.up:
      if (payload.length > 0) {
        stdin.emit('operationFailed');
        break;
      }

      up();

      console.log(`You are currently in ${store.currentPath}`);
      break;

    case COMMANDS.cd:
      if (payload.length !== 1) {
        stdin.emit('operationFailed');
        break;
      }

      const [destinationPath] = payload;
      await cd(destinationPath);

      console.log(`You are currently in ${store.currentPath}`);
      break;

    case COMMANDS.ls:
      if (payload.length > 0) {
        stdin.emit('operationFailed');
        break;
      }

      await ls();

      console.log(`You are currently in ${store.currentPath}`);
      break;

    case COMMANDS.os:
      if (payload.length !== 1) {
        stdin.emit('operationFailed');
        break;
      }

      const argument = payload[0].slice(2);
      const osArgument = OS_ARGUMENTS[argument];

      os(osArgument);

      console.log(`You are currently in ${store.currentPath}`);
      break;

    case COMMANDS.hash:
      if (payload.length !== 1) {
        stdin.emit('operationFailed');
        break;
      }

      await hash(...payload);

      console.log(`You are currently in ${store.currentPath}`);
      break;

    case COMMANDS.compress:
      if (payload.length !== 2) {
        stdin.emit('operationFailed');
        break;
      }

      await compress(...payload);

      console.log(`You are currently in ${store.currentPath}`);
      break;

    case COMMANDS.decompress:
      if (payload.length !== 2) {
        stdin.emit('operationFailed');
        break;
      }

      await decompress(...payload);

      console.log(`You are currently in ${store.currentPath}`);
      break;

    case COMMANDS.cat:
      if (payload.length !== 1) {
        stdin.emit('operationFailed');
        break;
      }

      await cat(...payload);

      console.log(`You are currently in ${store.currentPath}`);
      break;

    case COMMANDS.add:
      if (payload.length !== 1) {
        stdin.emit('operationFailed');
        break;
      }

      await add(...payload);

      console.log(`You are currently in ${store.currentPath}`);
      break;

    case COMMANDS.rn:
      if (payload.length !== 2) {
        stdin.emit('operationFailed');
        break;
      }

      await rn(...payload);

      console.log(`You are currently in ${store.currentPath}`);
      break;

    case COMMANDS.cp:
      if (payload.length !== 2) {
        stdin.emit('operationFailed');
        break;
      }

      await cp(...payload);

      console.log(`You are currently in ${store.currentPath}`);
      break;

    default:
      console.log('Invalid input');
      console.log(`You are currently in ${store.currentPath}`);
      break;
  }
};
