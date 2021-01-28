module.exports = (req, res) => {
    console.log('hello')
    res.status(200).send({
        message: 'create route for users'
    })
}
