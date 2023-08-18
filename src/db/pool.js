const mysql = require('mysql');
const dbConfig = require('../config/dbConfig');

const pool = mysql.createPool(dbConfig);
exports.getConnectionPool = (callback) => {
  pool.getConnection((err, conn) => {
    if (!err) callback(conn);
  });
};
