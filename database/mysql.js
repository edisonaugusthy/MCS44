const mysql = require('mysql');

module.exports = class Mysql {
  db = null;
  static connect() {
    // establish connection
    this.db = mysql.createConnection({
      host: "localhost",
      user: 'newuser',
      port: '3307',
      password: 'newuser',
      dateStrings: 'date',
      database: 'cumsdbms',
    });
    // connect to database
    this.db.connect((err) => {
      if (err) {
        console.log(err)
        throw err;
      }
      console.log('Mysql Connected');
    });
    return this.db;
  }
  static getInstance() {
    return this.db;
  }
};
