const express = require('express');
const useMiddlewares = require('../middleware/middleware');
const ErrorHandlingMiddleware = require('../middleware/error-handling');

const PORT = process.env.PORT;

const app = express();
 
const PlansController = require('./controllers/plans.controler');

useMiddlewares(app);

app.use('', PlansController);

ErrorHandlingMiddleware(app);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
