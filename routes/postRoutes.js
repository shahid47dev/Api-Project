const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

router.post('/post', postController.createNew);
router.get('/post', postController.getPosts);
router.get('/post/:id', postController.getPostId);
router.put('/post/:id', postController.updatePost);
router.delete('/users/:id/post', postController.deletePost);

module.exports = router;

