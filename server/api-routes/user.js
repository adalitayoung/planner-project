const userDA = require('../data-access/user')
const router = require('express').Router();

router.post('/createUser', userDA.createUser)

module.exports = router;
