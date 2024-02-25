require('dotenv').config();
const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("combined"));

const port = process.env.APP_PORT || 3003;
app.listen(port, () => `Server running on port ${port}`);