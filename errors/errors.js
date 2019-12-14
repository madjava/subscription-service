const ValidationError = require('./validation.errors');
const AuthenticationError = require('./authentication.errors');
const AccessDeniedError = require('./access-denied.error');

module.exports = {
    AccessDeniedError,
    AuthenticationError,
    ValidationError
}