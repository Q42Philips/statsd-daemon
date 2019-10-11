#! /usr/bin/env node

const updateNotifier = require('update-notifier');
/* Notify if an update is available */
updateNotifier({ pkg: require('../package.json') }).notify();

const dgram = require('dgram');
const server = dgram.createSocket('udp4');

const chalk = require('chalk');

const PORT = process.env.LISTEN_PORT ? parseInt(process.env.LISTEN_PORT, 10) : 8125;
const HOST = process.env.LISTEN_HOST || '127.0.0.1';

server.on('listening', () => {
  const address = server.address();
  // eslint-disable-next-line no-console
  console.log(`UDP Server listening on ${address.address}:${address.port}`);
});

server.on('message', (message, remote) => {
  const [keyval, datatype, tags] = message.toString('utf8').split('|');
  // eslint-disable-next-line no-console
  console.log(chalk.cyan(new Date().toTimeString()) + '\t' + chalk.green(keyval) + '(' + chalk.italic.red(datatype) + ')\t' + chalk.italic.yellow(tags));
});

server.bind(PORT, HOST);
