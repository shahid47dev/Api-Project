const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

router.post('/posts', postController.createNew);
router.get('/posts', postController.getPosts);
router.get('/posts/:id', postController.getPostId);
router.put('/posts/:id', postController.updatePost);
router.delete('/users/:userId/posts', postController.deletePost);

module.exports = router;

