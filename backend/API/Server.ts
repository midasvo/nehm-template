#!/usr/bin/env node

/**
 * Module dependencies.
 */
import path = require('path');
import debug = require('debug');
import * as http from "http"
import express = require('express');
import API = require('./API');
import Executor = require("./../Helpers/Executor");

class Server {

  private _server: any;
  private _port: any;
  private _api: express.Application;
  private _expressServer : express.Application;

  constructor(){
    new Executor(() => {
      console.log("Created new API server");
      console.log("Creating instance of API...");
      this._api = new API();
      this._server = http.createServer(this._api);
      this.setup();
      return this._server;
    });
  }


  private setup() {
    new Executor(() => {
      this.setErrorHandling();
      this.setListener();
      this.setPort();
      //console.log(this._server);
    });  
  }

  private setPort() {
    new Executor(() => {
      console.log("Configuring port " + this._port + " for API server.");
      this._port = this.normalizePort(process.env.PORT || '9797');
      this._api.set('port', this._port);
      this._server.listen(this._port);
    });
  }

  private setErrorHandling() {
    new Executor(() => {
      console.log("Configuring error handling");
      this._server.on('error', this.onError);
  
    });
  }

  private setListener() {
    new Executor(() => {
      console.log("Configuring listener");
      this._server.on('listening', this.onListening);  
    });
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
      if (error.syscall !== 'listen') 
      {
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
      console.log('hello');
      console.log(this._server);
      // var addr = this._server.address();
      // var bind = typeof addr === 'string'
      //   ? 'pipe ' + addr
      //   : 'port ' + addr.port;
      // debug('Listening on ' + bind);
    }
}

export = Server;