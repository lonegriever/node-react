const router = require('express').Router();

router.use('/api/notes', require('./notes/main'));
router.use('/api/users', require('./users'));

module.exports = router;