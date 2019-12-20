const express = require('express');
const useMiddlewares = require('../middleware/middleware');
const AuthenticationMiddleware = require('../middleware/auth');
const ErrorHandlingMiddleware = require('../middleware/error-handling');
const PlansController = require('./controllers/plans.controler');

const PORT = process.env.PORT;

const app = express();
 
useMiddlewares(app);

AuthenticationMiddleware(app);

app.use('', PlansController);

ErrorHandlingMiddleware(app);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
