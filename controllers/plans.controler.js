const router = require('express').Router();
const asyncWrapper = require('../utilities/async.wrapper').AsyncWrapper;
const PlansService = require('../services/plans.service');

const plansService = new PlansService();

// api/plans
router.get('/', asyncWrapper(async (req, res) => {
   const userId = null;
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
router.post('/', asyncWrapper(async (req, res) => {
    const plan = await plansService.create(req.body);
    res.send(plans);
}));

// api/plans/:id
router.delete('/:id', asyncWrapper(async (req, res) => {
    const id = req.params.id;
    await PlansService.deleteOne(id);
    res.sendStatus(200);
}));

module.exports = router;
