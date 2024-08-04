const mongoose = require('mongoose');

// Define schema for Blog Post
let blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    tags: {
        type: [String],
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

let Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;
