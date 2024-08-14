let Blog = require('../Models/blog');

// Fetch all blog posts
let index = async (req, res, next) => {
    let blogs = await Blog.find().sort({ createdAt: -1 });

    console.log(blogs);
    res.render('blog/index', { 
        title: 'Blog',
        blogs: blogs,
        user: req.user
    });
};

// Display form for creating a new blog post
let displayCreateForm = (req, res, next) => {
    res.render('blog/create', { 
        title: 'Create New Post',
        user: req.user 
    });
};

// Create a new blog post
let createBlog = async (req, res, next) => {
    await Blog.create(req.body);
    res.redirect('/blog');
};

// Delete a blog post
let deleteBlog = async (req, res, next) => {
    await Blog.findByIdAndDelete(req.params._id);
    res.redirect('/blog');
};

// Display form for editing a blog post
let displayEditForm = async (req, res, next) => {
    let blog = await Blog.findById(req.params._id);
    res.render('blog/edit', { 
        title: 'Edit Post',
        blog: blog,
        user: req.user 
    });
};

// Update a blog post
let updateBlog = async (req, res, next) => {
    await Blog.findByIdAndUpdate(req.params._id, req.body);
    res.redirect('/blog');
};

let displayDetail = async (req, res, next) => {
    let blog = await Blog.findById(req.params._id);
    res.render('blog/detail', { 
        title: 'View New Post',
        blog: blog,
        user: req.user,
        comments: blog.comments,
        likes: blog.likes
    });
};

// Add a like to a blog post
let likeBlog = async (req, res, next) => {
    let blog = await Blog.findById(req.params._id);
    blog.likes += 1;
    await blog.save();
    res.redirect(`/blog`);
};

let addComment = async (req, res, next) => {
    try {
        let blog = await Blog.findById(req.params._id);
        if (!blog) {
            return res.status(404).send('Blog post not found');
        }
        
        blog.comments.push({
            username: req.body.username || 'Anonymous',
            content: req.body.content,
            createdAt: new Date()
        });
        
        await blog.save();
        res.redirect(`/blog/detail/${req.params._id}`);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};





// Make public
module.exports = {
    index, displayCreateForm, createBlog, deleteBlog, displayEditForm, updateBlog, displayDetail, likeBlog, addComment
};
