const express = require('express');
const dotenv = require('dotenv');

//Route Files
const bootcamps = require('./routes/bootcamps');

// Load env variables 
dotenv.config({ path: './config/config.env' });

const app = express();


app.use('/api/v1/bootcamps', bootcamps);

const PORT = process.env.PORT || 500;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
