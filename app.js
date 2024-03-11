require('dotenv').config();
const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('common'));

// API ROUTES
const router = require('./src/routes');
app.use('/api/v1', router);

// GLOBAL ERROR HANDLER
const { globalError, notFound } = require('./src/helper/errorHandler');
app.use(notFound);
app.use(globalError);

const port = process.env.APP_PORT || 3003;
app.listen(port, () => console.log(`Server running on port ${port}`));