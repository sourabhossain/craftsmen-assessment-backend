const express = require('express');
const controller = require('./post.controller');

const post = express.Router();

post.post('/posts', controller.createPost);
post.get('/posts', controller.getPosts);
post.get('/posts/:id', controller.getPost);
post.put('/posts/:id', controller.updatePost);
post.delete('/posts/:id', controller.deletePost);

module.exports = post;
