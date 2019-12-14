const express = require('express');
const dotenv = require('dotenv');
const useMiddlewares = require('./middleware/middleware');
const ErrorHandlingMiddleware = require('./middleware/error-handling');

dotenv.config();
const PORT = process.env.PORT || 3000;

const app = express();
 
const PlansController = require('./controllers/plans.controler');
const SubscriptionsController = require('./controllers/subscriptions.controler');

useMiddlewares(app);

app.use('/api/plans', PlansController);
app.use('/api/subscriptions', SubscriptionsController);

ErrorHandlingMiddleware(app);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});