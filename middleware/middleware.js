const commonMiddleware = require('./common');
module.exports = function Middleware(app) {
    commonMiddleware(app);
}