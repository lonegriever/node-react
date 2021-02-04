module.exports = async (_, res) => {
    const {User} = require('../../models');
    try {
        const allUsers = await User.findAll();
        const users = allUsers.map(user => ({
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName
        }));
        res.status(200).send({
            message: 'Successfully retrieved all users',
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
