const router = require('express').Router();

router.post('/create', async(req, res) => {
    res.status(200).send({
        message: 'power overwhelming'
    })
});

module.exports = router;