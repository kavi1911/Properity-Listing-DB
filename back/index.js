const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const DB = require('./connection/connection');
const Property = require('./routes/Property')

const app = express();
app.use(bodyParser.json());
app.use(cors());

DB();

app.use(Property);


app.listen(5000, () => {
    console.log("Server is Running"
        
    )
})
