export let COMMANDS;

(function (commands) {
  commands[(commands['up'] = 0)] = 'up';
  commands[(commands['ls'] = 1)] = 'ls';
  commands[(commands['cd'] = 2)] = 'cd';
  commands[(commands['os'] = 3)] = 'os';
})(COMMANDS || (COMMANDS = {}));
