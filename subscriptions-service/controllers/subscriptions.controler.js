const router = require('express').Router();
const asyncWrapper = require('../../utilities/async.wrapper').AsyncWrapper;
const SubcriptionsService = require('../services/subscriptions.service');
const protectedRoute = require('../../middleware/protected.route');

const subscriptionsService = new SubcriptionsService();

router.use(protectedRoute());

// api/subscriptions
router.get('/', asyncWrapper(async (req, res) => {
    let userId = 1;
    let subscriptions = await subscriptionsService.findAll(userId);
    res.send(subscriptions);
}));

// api/subscriptions/:id
router.get('/:id', asyncWrapper(async (req, res) => {
    let subscriptions = await subscriptionsService.findOne(req.params.id);
    res.send(subscriptions);
}));

// api/subscriptions
router.post('/', asyncWrapper(async (req, res) => {
    let subscriptions = await subscriptionsService.create(req.body);
    res.send(subscriptions);
}));

// api/subscriptions/:id
router.delete('/:id', asyncWrapper(async (req, res) => {
    await subscriptionsService.deleteOne(req.params.id);
    res.sendStatus(200);
}));

module.exports = router;
