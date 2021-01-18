const keys = require('./keys')


//Express APP Setup
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors);
app.use(bodyParser.json());

//Postgress client setup
const {Pool} = require('pg');
const key = require('./key');
const pgClient = new Pool({
    user: keys.pgUser,
    host: keys.pgHost,
    database: keys.pgDatabase,
    password: key.pgPassword,
});