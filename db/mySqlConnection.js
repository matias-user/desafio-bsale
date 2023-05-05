const mysql = require('mysql2');

const dbConnectionMySql= () => {

  try {
    const connection = mysql.createPool({
      host: process.env.HOST_NAME,
      user: process.env.USER_NAME,
      password: process.env.PASSWORD ,
      database: process.env.DATABASE_NAME ,
    });

    connection.query(
      'SELECT * FROM boarding_pass',
      function(err, results, fields) {
        console.log(results); // results contains rows returned by server
        console.log(fields); // fields contains extra meta data about results, if available
      }
    );
  } catch (error) {
    console.log(error);
  }
}


module.exports = {
    dbConnectionMySql,
    
}