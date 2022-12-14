export let COMMANDS;

(function (commands) {
  commands[(commands['.exit'] = 0)] = '.exit';
  commands[(commands['.clear'] = 1)] = '.clear';
  commands[(commands['up'] = 2)] = 'up';
  commands[(commands['ls'] = 3)] = 'ls';
  commands[(commands['cd'] = 4)] = 'cd';
  commands[(commands['os'] = 5)] = 'os';
  commands[(commands['hash'] = 6)] = 'hash';
  commands[(commands['compress'] = 7)] = 'compress';
  commands[(commands['decompress'] = 8)] = 'decompress';
  commands[(commands['cat'] = 9)] = 'cat';
  commands[(commands['add'] = 10)] = 'add';
  commands[(commands['rn'] = 11)] = 'rn';
  commands[(commands['cp'] = 12)] = 'cp';
})(COMMANDS || (COMMANDS = {}));
