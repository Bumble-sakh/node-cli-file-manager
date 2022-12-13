export let COMMANDS;

(function (commands) {
  commands[(commands['.exit'] = 0)] = '.exit';
  commands[(commands['up'] = 1)] = 'up';
  commands[(commands['ls'] = 2)] = 'ls';
  commands[(commands['cd'] = 3)] = 'cd';
  commands[(commands['os'] = 4)] = 'os';
  commands[(commands['hash'] = 5)] = 'hash';
})(COMMANDS || (COMMANDS = {}));
