const express = require('express');
const auth = require('../../middlewares/auth');
const categoryIdsValidate = require('../../middlewares/blogposts/categoryIdsValidate');
const blogPostValidate = require('../../middlewares/blogposts/blogPostValidate');
const updateValidate = require('../../middlewares/blogposts/updateValidate');

const router = express.Router({ mergeParams: true });

router.post('/', auth, categoryIdsValidate, blogPostValidate, require('./registerBlogPost'));
router.get('/search', auth, require('./searchBlogPostByText'));
router.get('/:id', auth, require('./getBlogPostById'));
router.get('/', auth, require('./getAllBlogPost'));
router.put('/:postId', auth, updateValidate, require('./updateBlogPostById'));
router.delete('/:postId', auth, require('./deleteBlogPostById'));

module.exports = router;