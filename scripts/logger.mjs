import chalk from 'chalk';

import process from 'node:process';

// https://github.com/sindresorhus/is-unicode-supported
function isUnicodeSupported() {
  const { env } = process;
  const { TERM, TERM_PROGRAM } = env;

  if (process.platform !== 'win32') {
    return TERM !== 'linux'; // Linux console (kernel)
  }

  return (
    Boolean(env.WT_SESSION) || // Windows Terminal
    Boolean(env.TERMINUS_SUBLIME) || // Terminus (<0.2.27)
    env.ConEmuTask === '{cmd::Cmder}' || // ConEmu and cmder
    TERM_PROGRAM === 'Terminus-Sublime' ||
    TERM_PROGRAM === 'vscode' ||
    TERM === 'xterm-256color' ||
    TERM === 'alacritty' ||
    TERM === 'rxvt-unicode' ||
    TERM === 'rxvt-unicode-256color' ||
    env.TERMINAL_EMULATOR === 'JetBrains-JediTerm'
  );
}

// type LogLevel = 'info' | 'success' | 'warning' | 'error';

const _isUnicodeSupported = isUnicodeSupported();

const info = chalk.blue.bold(_isUnicodeSupported ? 'ℹ' : 'i');
const success = chalk.green.bold(_isUnicodeSupported ? '✔' : '√');
const warning = chalk.yellow.bold(_isUnicodeSupported ? '⚠' : '‼');
const error = chalk.red.bold(_isUnicodeSupported ? '✖️' : '×');

// Define native Unicode symbols for each log level
const symbols = {
  info,
  success, // Success
  warning, // Warning
  error, // Error
};

export const log = (level, message) => {
  const symbol = symbols[level] || '';

  switch (level) {
    case 'info':
      console.log(`${symbol} ${chalk.bold.blue(message)}`);
      break;
    case 'success':
      console.log(`${symbol} ${chalk.whiteBright(message)}`);
      break;
    case 'warning':
      console.log(`${symbol} ${chalk.yellow(message)}`);
      break;
    case 'error':
      console.error(`${symbol} ${chalk.red(message)}`);
      break;
    default:
      console.log(message);
  }
};

export const styledLogInfo = (message) => {
  console.log(`\n${info} ${chalk.bold.blue(message)}\n`);
};

export const styledLogSuccess = (message) => {
  console.log(`\n${success} ${chalk.bold.magenta(message)}\n`);
};
