const Post = require('../models/post');


exports.createNew = async (req, res) => {
    try {
        const newPost = new Post(req.body);
        await newPost.save();

        res.status(201).json(newPost);
    } catch (error) {
        res.status(400).json({ error: error.message }); 
    }
};

exports.getPosts = async (req, res) => {
    try {
        const posts = await Post.find().populate({ path: 'userId', select: 'name email', strictPopulate: false });

        res.json(posts);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


exports.getPostId = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id).populate('userId', 'name email');

        if (!post) {
            return res.status(404).json({ message: "Post Not Found" });
        }

        res.json(post);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.updatePost = async (req, res) => {
    try {

        const updatePost = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!updatePost) {
            return res.status(404).json({ message: "Post Not Found" });
        }

        res.json(updatePost);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.deletePost = async (req, res) => {
    try {
        const deletePost = await Post.findByIdAndDelete(req.params.id, req.body, { new: true});

        if(!deletePost) return res.status(404).json({ message: "Post Not Found"})
            res.json(deletePost);
            
        } catch (error) {
    
            res.status(500).json({ error: err.message})
    
        }
};
