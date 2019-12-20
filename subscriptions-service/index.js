const express = require('express');
const useMiddlewares = require('../middleware/middleware');
const AuthenticationMiddleware = require('../middleware/auth');
const ErrorHandlingMiddleware = require('../middleware/error-handling');
const SubscriptionsController = require('./controllers/subscriptions.controler');

const PORT = process.env.PORT;

const app = express();
 
useMiddlewares(app);

AuthenticationMiddleware(app);

app.use('', SubscriptionsController);

ErrorHandlingMiddleware(app);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});