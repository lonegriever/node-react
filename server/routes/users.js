const router = require('express').Router();
const {create} = require('../controllers/users/main.ts');

router.post('/create', create);

module.exports = router