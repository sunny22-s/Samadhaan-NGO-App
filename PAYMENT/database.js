const mysql = require('mysql2');
const dotenv=require('dotenv')
dotenv.config({path: './config.env'});

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect(function(err) {
  if (err) throw err;
  console.log("Connected to the database!");
});

// db.query('SET time_zone = "+05:30"', (err, result) => {
//   if (err) {
//     console.error('Error setting timezone: ' + err.stack);
//     return;
//   }
//   console.log('Current time: ' + result[0]);
//   console.log('Timezone set to IST.');
// });

module.exports = db;


// CREATE TABLE donations (
//   donation_id VARCHAR(255) PRIMARY KEY,
//   name VARCHAR(255) NOT NULL,
//   amount DECIMAL(10, 2) NOT NULL,
//   purpose VARCHAR(255),
//   donated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
// );
