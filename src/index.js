#! /usr/bin/env node

/* eslint-disable no-console */

const updateNotifier = require('update-notifier');
/* Notify if an update is available */
updateNotifier({ pkg: require('../package.json') }).notify();

const dgram = require('dgram');
const server = dgram.createSocket('udp4');

const chalk = require('chalk');

const PORT = process.env.LISTEN_PORT ? parseInt(process.env.LISTEN_PORT, 10) : 8125;
const HOST = process.env.LISTEN_HOST || '127.0.0.1';
const logformat = process.env.LOGFORMAT || 'text';

server.on('listening', () => {
  const address = server.address();
  if (logformat === 'json') {
    console.log(JSON.stringify({ eventTime: new Date().toISOString(), message: `UDP Server listening on ${address.address}:${address.port}`, severity: "DEBUG" }));
  } else {
    console.log(`UDP Server listening on ${address.address}:${address.port}`);
  }
});

server.on('message', (message, remote) => {
  const [keyval, datatype, tags] = message.toString('utf8').split('|');
  if (logformat === 'json') {
    console.log(JSON.stringify({ eventTime: new Date().toISOString(), message: `${keyval}(${datatype})\t${tags}`, severity: "INFO" }));
  } else {
    console.log(chalk.cyan(new Date().toTimeString()) + '\t' + chalk.green(keyval) + '(' + chalk.italic.red(datatype) + ')\t' + chalk.italic.yellow(tags));
  }
});

server.bind(PORT, HOST);
