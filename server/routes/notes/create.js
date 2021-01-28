const router = require('express').Router();

router.post('/create', async(_, res) => {
    res.status(200).send({
        message: 'create route for notes'
    })
});

module.exports = router;