import { stdin } from 'process';

import { up, cd, ls } from './commands/nwd/index.js';
import { cat, add, rn, cp, mv, rm } from './commands/files/index.js';
import { os } from './commands/os/index.js';
import { hash } from './commands/hash/index.js';
import { compress, decompress } from './commands/brotli/index.js';

import store from './store/store.js';

import { COMMANDS } from './constants/commands.js';
import { OS_ARGUMENTS } from './constants/osArguments.js';
import { colorText } from './helpers/colorText.js';
import { COLORS } from './constants/colors.js';

export const commandReducer = async ({ command, payload }) => {
  switch (command) {
    case COMMANDS['.exit']:
      if (payload.length > 0) {
        stdin.emit('invalidInput');
        break;
      }

      process.exit(0);
      break;

    case COMMANDS['.clear']:
      if (payload.length > 0) {
        stdin.emit('invalidInput');
        break;
      }

      process.stdout.write('\x1Bc');

      console.log(
        `You are currently in ${colorText(store.currentPath, COLORS.fg.yellow)}${colorText('>', COLORS.fg.yellow)}`
      );
      break;

    case COMMANDS.up:
      if (payload.length > 0) {
        stdin.emit('invalidInput');
        break;
      }

      up();

      console.log(
        `You are currently in ${colorText(store.currentPath, COLORS.fg.yellow)}${colorText('>', COLORS.fg.yellow)}`
      );
      break;

    case COMMANDS.cd:
      if (payload.length !== 1) {
        stdin.emit('invalidInput');
        break;
      }

      const [destinationPath] = payload;
      await cd(destinationPath);

      console.log(
        `You are currently in ${colorText(store.currentPath, COLORS.fg.yellow)}${colorText('>', COLORS.fg.yellow)}`
      );
      break;

    case COMMANDS.ls:
      if (payload.length > 0) {
        stdin.emit('invalidInput');
        break;
      }

      await ls();

      console.log(
        `You are currently in ${colorText(store.currentPath, COLORS.fg.yellow)}${colorText('>', COLORS.fg.yellow)}`
      );
      break;

    case COMMANDS.os:
      if (payload.length !== 1) {
        stdin.emit('invalidInput');
        break;
      }

      const argument = payload[0].slice(2);
      const osArgument = OS_ARGUMENTS[argument];

      os(osArgument);

      console.log(
        `You are currently in ${colorText(store.currentPath, COLORS.fg.yellow)}${colorText('>', COLORS.fg.yellow)}`
      );
      break;

    case COMMANDS.hash:
      if (payload.length !== 1) {
        stdin.emit('invalidInput');
        break;
      }

      await hash(...payload);

      console.log(
        `You are currently in ${colorText(store.currentPath, COLORS.fg.yellow)}${colorText('>', COLORS.fg.yellow)}`
      );
      break;

    case COMMANDS.compress:
      if (payload.length !== 2) {
        stdin.emit('invalidInput');
        break;
      }

      await compress(...payload);

      console.log(
        `You are currently in ${colorText(store.currentPath, COLORS.fg.yellow)}${colorText('>', COLORS.fg.yellow)}`
      );
      break;

    case COMMANDS.decompress:
      if (payload.length !== 2) {
        stdin.emit('invalidInput');
        break;
      }

      await decompress(...payload);

      console.log(
        `You are currently in ${colorText(store.currentPath, COLORS.fg.yellow)}${colorText('>', COLORS.fg.yellow)}`
      );
      break;

    case COMMANDS.cat:
      if (payload.length !== 1) {
        stdin.emit('invalidInput');
        break;
      }

      await cat(...payload);

      console.log(
        `You are currently in ${colorText(store.currentPath, COLORS.fg.yellow)}${colorText('>', COLORS.fg.yellow)}`
      );
      break;

    case COMMANDS.add:
      if (payload.length !== 1) {
        stdin.emit('invalidInput');
        break;
      }

      await add(...payload);

      console.log(
        `You are currently in ${colorText(store.currentPath, COLORS.fg.yellow)}${colorText('>', COLORS.fg.yellow)}`
      );
      break;

    case COMMANDS.rn:
      if (payload.length !== 2) {
        stdin.emit('invalidInput');
        break;
      }

      await rn(...payload);

      console.log(
        `You are currently in ${colorText(store.currentPath, COLORS.fg.yellow)}${colorText('>', COLORS.fg.yellow)}`
      );
      break;

    case COMMANDS.cp:
      if (payload.length !== 2) {
        stdin.emit('invalidInput');
        break;
      }

      await cp(...payload);

      console.log(
        `You are currently in ${colorText(store.currentPath, COLORS.fg.yellow)}${colorText('>', COLORS.fg.yellow)}`
      );
      break;

    case COMMANDS.mv:
      if (payload.length !== 2) {
        stdin.emit('invalidInput');
        break;
      }

      await mv(...payload);

      console.log(
        `You are currently in ${colorText(store.currentPath, COLORS.fg.yellow)}${colorText('>', COLORS.fg.yellow)}`
      );
      break;

    case COMMANDS.rm:
      if (payload.length !== 1) {
        stdin.emit('invalidInput');
        break;
      }

      await rm(...payload);

      console.log(
        `You are currently in ${colorText(store.currentPath, COLORS.fg.yellow)}${colorText('>', COLORS.fg.yellow)}`
      );
      break;

    default:
      stdin.emit('invalidInput');
      break;
  }
};
