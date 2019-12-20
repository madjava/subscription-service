const router = require('express').Router();
const asyncWrapper = require('../../utilities/async.wrapper').AsyncWrapper;
const PlansService = require('../services/plans.service');
const validator = require('../../middleware/validation');
const protectedRoute = require('../../middleware/protected.route');
const plansService = new PlansService();

router.use(protectedRoute());

// api/plans
router.get('/', asyncWrapper(async (req, res) => {
    const userId = req.user;
    const plans = await plansService.findAll(userId);
    res.send(plans);
}));

// api/plans/:id
router.get('/:id', asyncWrapper(async (req, res) => {
    const id = req.params.id;
    const userId = null;
    const plan = await plansService.findOne(id);
    res.send(plan);
}));

// api/plans
router.post('/', [validator('Plan')], asyncWrapper(async (req, res) => {
    let plan = req.body;
    plan.userId = req.user;
    plan = await plansService.create(req.body);
    res.send(plan);
}));

// api/plans/:id
router.delete('/:id', asyncWrapper(async (req, res) => {
    const id = req.params.id;
    await plansService.deleteOne(id);
    res.sendStatus(200);
}));

module.exports = router;
