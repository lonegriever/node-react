const router = require('express').Router();
const {
    create,
    index
} = require('../controllers/users/main.ts');

router.post('/create', create);
router.get('/index', index);

module.exports = router