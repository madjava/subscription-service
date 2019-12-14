const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');

module.exports = function CommonMiddleWare(app) {
    app.use(helmet());
    app.use(cors());
    app.use(morgan('common'));
    app.use(express.json());
};