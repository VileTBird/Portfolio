const express = require('express');
const router = express.Router();

let authCheck = require('../Config/authCheck');
const blogController = require('../Controllers/blog');

/* GET: /blog => display all blog posts */
router.get('/', (req, res, next) => {
    blogController.index(req, res, next);
});

/* GET: /blog/create => display form for creating a new blog post */
router.get('/create', authCheck, (req, res, next) => {
    blogController.displayCreateForm(req, res, next);
});

/* POST: /blog/create => process form submission for creating a new blog post */
router.post('/create', authCheck, (req, res, next) => {
    blogController.createBlog(req, res, next);
});

/* GET: /blog/delete/:_id => delete a blog post */
router.get('/delete/:_id', authCheck, (req, res, next) => {
    blogController.deleteBlog(req, res, next);
});

/* GET: /blog/edit/:_id => display form for editing a blog post */
router.get('/edit/:_id', authCheck, (req, res, next) => {
    blogController.displayEditForm(req, res, next);
});

/* POST: /blog/edit/:_id => process form submission for updating a blog post */
router.post('/edit/:_id', authCheck, (req, res, next) => {
    blogController.updateBlog(req, res, next);
});

router.get('/detail/:_id', (req, res, next) => {
    blogController.displayDetail(req, res, next);
});

module.exports = router;
