module.exports = async (req, res) => {
    const {User} = require('../../models');
    try {
        const users = await User.findAll();
    } catch(error) {
        console.log('the error for query is: ', error);
    }
    res.status(200).send({
        message: 'Successfully retrieved all users',
        other: 'hello',
        users: users
    })
}
