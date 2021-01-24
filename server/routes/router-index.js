const router = require('express').Router();

router.use('/api/notes', require('./notes/main'));

module.exports = router;