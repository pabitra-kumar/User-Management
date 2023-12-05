const User = require('../model/User');

// Get all users
const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        if (!users) return res.status(204).json({ "message": "No Employees found" })
        res.json(users);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}

// Get user by id
const getUserById = async (req, res) => {
    try {
        const user = await User.findOne({ id: req.params.id }).exec()
        if (!user) {
            return res.status(400).json({ "message": `User ID ${req.params.id} not found` });
        }
        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}

// Add user
const addUser = async (req, res) => {
    const users = await User.find();
    if (!req?.body) {
        return res.status(400).json({ 'message': 'User required.' });
    }
    if (!req?.body?.first_name || !req?.body?.last_name) {
        return res.status(400).json({ 'message': 'First and last names are required.' });
    }
    if (!req?.body?.email) {
        return res.status(400).json({ 'message': 'Email required.' });
    }
    if (!req?.body?.gender) {
        return res.status(400).json({ 'message': 'Gender required.' });
    }
    if (!req?.body?.avatar) {
        return res.status(400).json({ 'message': 'avatar link required.' });
    }
    if (!req?.body?.domain) {
        return res.status(400).json({ 'message': 'domain required.' });
    }
    try {
        const result = await User.create({
            id: users?.length ? users[users.length - 1].id + 1 : 1,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            gender: req.body.gender,
            avatar: req.body.avatar,
            domain: req.body.domain,
            available: req.body.available || true,
        })
        res.status(201).json(result);
    } catch (err) {
        console.error(err)
    }
}

// Update user
const updateUser = async (req, res) => {
    try {
        const user = await User.findOne({ id: req.params.id }).exec()
        if (!user) {
            return res.status(400).json({ "message": `User ID ${req.params.id} not found` });
        }
        if (req?.body?.first_name) user.first_name = req.body.first_name;
        if (req?.body?.last_name) user.last_name = req.body.last_name;
        if (req?.body?.email) user.email = req.body.email;
        if (req?.body?.gender) user.gender = req.body.gender;
        if (req?.body?.avatar) user.avatar = req.body.avatar;
        if (req?.body?.domain) user.domain = req.body.domain;
        if (req?.body?.available) user.available = req.body.available;
        const result = await user.save();
        res.json(result);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}

// Delete user
const deleteUser = async (req, res) => {
    try {
        const user = await User.findOne({ id: req.params.id }).exec()
        if (!user) {
            return res.status(400).json({ "message": `User ID ${req.params.id} not found` });
        }
        const result = await User.deleteOne({ id: req.params.id }).exec();
        res.json(result);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}

module.exports = {
    getUsers,
    getUserById,
    addUser,
    updateUser,
    deleteUser
}