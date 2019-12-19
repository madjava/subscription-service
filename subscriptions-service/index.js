const express = require('express');
const dotenv = require('dotenv');
const useMiddlewares = require('../middleware/middleware');
const ErrorHandlingMiddleware = require('../middleware/error-handling');

dotenv.config();
const PORT = process.env.PORT;

const app = express();
 
const SubscriptionsController = require('./controllers/subscriptions.controler');
useMiddlewares(app);

app.use('', SubscriptionsController);

ErrorHandlingMiddleware(app);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});