const mysql = require('mysql')
const express = require('express');
const bodyParser = require("body-parser");
const mysqlConnecrtion = require('./connection');
const cors = require('cors')

const peopleRoutes = require("./routes/people");


var app = express();
app.use(bodyParser.json());
app.use(cors())
app.use("/",peopleRoutes);



app.listen(3333);