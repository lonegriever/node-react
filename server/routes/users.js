const router = require('express').Router();
const {
    create,
    index
} = require('../controllers/users/main');

router.post('/create', create);
router.get('/index', index);

module.exports = router