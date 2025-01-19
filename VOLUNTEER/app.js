const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// MySQL Connection
// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'Srestha@1903',
//     database: 'applicants'
// });

// // Connect to MySQL
// db.connect((err) => {
//     if (err) throw err;
//     console.log('Connected to MySQL database');
// });

// Save application route
app.post('/save_application', (req, res) => {
    const { full_name, email, password, involvement_type, age } = req.body;

    const sql = 'INSERT INTO application_form (full_name, email, password, involvement_type, age) VALUES (?, ?, ?, ?, ?)';
    db.query(sql, [full_name, email, password, involvement_type, age], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error saving application');
        } else {
            console.log('Application saved successfully');
            res.send('Application saved successfully');
        }
    });
}); 

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
