const express = require('express');
const cors = require('cors');
var mysql = require('mysql');
const bcrypt = require('bcrypt');

const app = express();
app.use(cors());

var db = mysql.createConnection({
    host: 'localhost', // Replace with your host name
    user: 'root', // Replace with your database username
    password: '', // Replace with your database password
    database: 'airbnb_clone' // // Replace with your database Name
});
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('DB Connnected......');
});

// module.exports = db;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/signin', (req, res) => {
    res.sendFile(__dirname+"/airbnb.html/signin.html");
//     res.sendFile(__dirname + "/signup.html");h
});
app.post('/signin', (req, res) => {
    var email = req.body.email;
    var password = req.body.password;
    // console.log("The email is " + email + " the password is " + password);
    // db.query(`INSERT INTO signup_table (email , password) VALUES ("${email}", "${password}")`);
    async function compareIt(password){
        const validPassword = await bcrypt.compare(password, hashedPassword);
      }
      compareIt(password);

    res.send(req.body);
});

app.listen(3000, () => {
    console.log("Server is running on 3000");
});