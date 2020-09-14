const express = require('express');
const dotenv = require('dotenv');

// Load env variabels 
dotenv.config({ path: './config/config.env' });

const app = express();

const PORT = process.env.PORT || 500;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
