const router = require('express').Router();
const asyncWrapper = require('../utilities/async.wrapper').AsyncWrapper;

// api/subscriptions
router.get('/', asyncWrapper(async (req, res) => {
   
}));

// api/subscriptions/:id
router.get('/:id', asyncWrapper(async (req, res) => {

}));

// api/subscriptions
router.post('/', asyncWrapper(async (req, res) => {

}));

// api/subscriptions/:id
router.delete('/:id', asyncWrapper(async (req, res) => {

}));

module.exports = router;
