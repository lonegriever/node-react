module.exports = async (req, res) => {
    const {User} = require('../../models');
    const {firstName, lastName} = req.body;
    
    const newUser = await User.create({
        firstName: firstName,
        lastName: lastName
    })

    res.status(200).send({
        message: 'The user has been successfully created',
        user: newUser
    })
}
