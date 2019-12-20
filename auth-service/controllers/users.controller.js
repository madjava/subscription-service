const { Router } = require('express');
const router = Router();
const asyncWrapper = require('../../utilities/async.wrapper').AsyncWrapper;
const UsersService = require('../services/users.service');
const validator = require('../middleware/validation');
const AuthenticationError = require('../../errors/authentication.errors');

const usersService = new UsersService();

router.post('/signup', [validator('User')], asyncWrapper(async (req, res) => {
    const token = await usersService.create(req.body);
    res.send(token);
}));


router.post('/signin', [validator('User', 'login')], asyncWrapper(async (req, res) => {
    const { email, password } = req.body;
    const token = await usersService.signin(email, password);
    if (!token) {
        throw new AuthenticationError('Invalid credentials');
    } else {
        res.send(token);
    }

}));

module.exports = router;