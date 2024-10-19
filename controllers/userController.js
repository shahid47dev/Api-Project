const User = require('../models/user');

exports.createNew = async (req, res) => {

    try {

        const newUser = new User(req.body);
        await newUser.save();

        res.status(201).json(newUser);
        
    } catch (error) {

        res.status(400).json({ error: err.message });

    }
};

exports.getUsers = async (req, res) => {

    try {

        const users = await User.find();
        res.json(users);
        
    } catch (error) {

        res.status(400).json({ error: err.message})

        
    }

};

exports.getUserId = async (req, res) => {

    try {

        const user = await User.findById(req.params.id);

        if(!user) return res.status(404).json({ message: "User Not Found"})
        res.json(user);
        
    } catch (error) {

        res.status(500).json({ error: err.message})

    }

};

exports.updateUser = async (req, res) => {

    try {

        const updateUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true});

        if(!updateUser) return res.status(404).json({ message: "User Not Found"})
        res.json(updateUser);
        
    } catch (error) {

        res.status(500).json({ error: err.message})

    }

};

exports.deleteUser = async (req, res) => {

    try {

        const deleteUser = await User.findByIdAndDelete(req.params.id, req.body, { new: true});

        if(!deleteUser) return res.status(404).json({ message: "User Not Found"})
        res.json(deleteUser);
        
    } catch (error) {

        res.status(500).json({ error: err.message})

    }

};

exports.getPostsUser = async (req, res) => {

    try {

        const posts = await Post.find({ userId: req.params.userId});
        res.json(posts);
    } catch (error) {

        res.status(500).json({ error: err.message });
        
    }
};







