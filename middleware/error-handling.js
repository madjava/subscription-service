const chalk = require('chalk');
const HttpStatus = require('http-status-codes');
const { ValidationError, AccessDeniedError, AuthenticationError } = require('../errors/errors');

function errorLogger(err, req, res, next) {
    if (err.message) {
        console.log(chalk.red(err.message));
    }
    if (err.stack) {
        console.log(chalk.red(err.message));
    }
    next(err);
}

function authenticationErrorHandler(err, req, res, next) {
    if (err instanceof AuthenticationError) {
        return res.sendStatus(HttpStatus.UNAUTHORIZED);
    }
    next(err);
}

function validationErrorHandler(err, req, res, next) {
    if (err instanceof ValidationError) {
        return res.sendStatus(HttpStatus.BAD_REQUEST);
    }
    next(err);
}

function accessDeniedErrorHandler(err, req, res, next) {
    if (err instanceof AccessDeniedError) {
        return res.sendStatus(HttpStatus.FORBIDDEN)
    }
    next(err);
}

function genericErrorHandler(err, req, res, next) {
    res.sendStatus(HttpStatus.INTERNAL_SERVER_ERROR);
    next(err);
}

module.exports = function ErrorHandlingMiddleware(app) {
    app.use([
        errorLogger,
        authenticationErrorHandler,
        validationErrorHandler,
        accessDeniedErrorHandler,
        genericErrorHandler
    ]);
}