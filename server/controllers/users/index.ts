module.exports = async (req, res) => {
    const {User} = require('../../models');
    const users = await User.findAll();
    res.status(200).send({
        message: 'Successfully retrieved all users',
        users: users
    })
}
