#! /usr/bin/env node
const dgram = require('dgram');
const server = dgram.createSocket('udp4');

const PORT = 8125;
const HOST = '127.0.0.1';

server.on('listening', () => {
  const address = server.address();
  // eslint-disable-next-line no-console
  console.log(`UDP Server listening on ${address.address}:${address.port}`);
});

server.on('message', (message, remote) => {
  // eslint-disable-next-line no-console
  console.log(`${remote.address}:${remote.port} - ${message}`);
});

server.bind(PORT, HOST);
