import { stdin } from 'process';
import { OS_ARGUMENTS } from '../../constants/osArguments.js';

import { eol } from './eol.js';
import { cpus } from './cpus.js';
import { homedir } from './homedir.js';
import { username } from './username.js';
import { architecture } from './architecture.js';

export const os = (osArgument) => {
  switch (osArgument) {
    case OS_ARGUMENTS.eol:
      eol();
      break;

    case OS_ARGUMENTS.cpus:
      cpus();
      break;

    case OS_ARGUMENTS.homedir:
      homedir();
      break;

    case OS_ARGUMENTS.username:
      username();
      break;

    case OS_ARGUMENTS.architecture:
      architecture();
      break;

    default:
      stdin.emit('operationFailed');
      break;
  }
};
