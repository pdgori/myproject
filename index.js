
import https from 'https';
import http from 'http';
import mongoose from 'mongoose';

import sslConfig from './api/helpers/ssl-config';
import config from './config';

import express from './api/express';
// make bluebird default Promise
Promise = require('bluebird'); // eslint-disable-line no-global-assign

let server;

// plugin bluebird promise in mongoose
mongoose.Promise = Promise;

/**
 * This method starts api service
 */
const bootServer = () => {
  if (config.secureCommunication) {
    const ops = {
      key: sslConfig.privateKey,
      cert: sslConfig.certificate,
      passphrase: sslConfig.secretPharse,
    };
    server = https.createServer(ops, express.app).listen(config.port, () => {
      console.log(`server started on port ${config.port} (${config.env})`); // eslint-disable-line
    });
  } else {
    // listen on port config.port
    server = http.createServer(express.app).listen(config.port, () => {
      console.log(`server started on port ${config.port} (${config.env})`); // eslint-disable-line
    });
  }
};

/**
 * This method stops api server
 */
const shutdown = () => {
  server.close();
};

const port = config.port;

//  node js application main module
if (!module.parent) {
  bootServer();
}

module.exports = {
  bootServer,
  shutdown,
  port,
};
