'use strict';

exports.mysql = {
    // database configuration
    client: {
      // host
      host: '127.0.0.1',
      // port
      port: '3306',
      // username
      user: 'root',
      // password
      password: '1111',
      // database
      database: 'posts',    
    },
    // load into app, default is open
    app: true,
    // load into agent, default is close
    agent: false,
  };
//produce a key
exports.keys = '123456';

exports.security = {
  csrf: { enable:false}
};