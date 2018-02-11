#!/usr/bin/env node

/**
 * Module dependencies.
 */
import path = require('path');
import debug = require('debug');
import * as http from "http"
import express = require('express');
import API = require('./API');

class Server {

  private _server: http.Server;
  private _port: any;
  private _instance: API;
  private _expressServer : express.Application;

  constructor(){
    debug('helllllooooooo');
    this._instance = new API();
  
    this._port = this.normalizePort(process.env.PORT || '9797');
    this._instance.set('port', this._port);
    this._server = http.createServer(this._instance.getAPI);
    this.setup();
  }


  private setup() {


    this._server.listen(this._port);
    this._server.on('error', this.onError);
    this._server.on('listening', this.onListening);
    
  
  }

        /**
     * Normalize a port into a number, string, or false.
     */
    
    private normalizePort(val) {
      var port = parseInt(val, 10);
    
      if (isNaN(port)) {
        // named pipe
        return val;
      }
    
      if (port >= 0) {
        // port number
        return port;
      }
    
      return false;
    }
    
    /**
     * Event listener for HTTP server "error" event.
     */
    
    private onError(error) {
      if (error.syscall !== 'listen') {
        throw error;
      }
    
      var bind = typeof this._port === 'string'
        ? 'Pipe ' + this._port
        : 'Port ' + this._port;
    
      // handle specific listen errors with friendly messages
      switch (error.code) {
        case 'EACCES':
          console.error(bind + ' requires elevated privileges');
          process.exit(1);
          break;
        case 'EADDRINUSE':
          console.error(bind + ' is already in use');
          process.exit(1);
          break;
        default:
          throw error;
      }
    }
    
    /**
     * Event listener for HTTP server "listening" event.
     */
    
    private onListening() {
      debug('hello');
      debug(this._server);
      // var addr = this._server.address();
      // var bind = typeof addr === 'string'
      //   ? 'pipe ' + addr
      //   : 'port ' + addr.port;
      // debug('Listening on ' + bind);
    }
}

export = Server;