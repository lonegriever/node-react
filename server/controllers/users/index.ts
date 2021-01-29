module.exports = async (req, res) => {
    const {User} = require('../../models');
    try {
        const users = await User.findOne();
        res.status(200).send({
            message: 'Successfully retrieved all users',
            other: 'hello',
            users: users
        })
    } catch(error) {
        console.log('the error for query is: ', error);
        res.status(400).send({
            message: 'There was an error retrieving the users',
            error: error
        })
    }
    
}
