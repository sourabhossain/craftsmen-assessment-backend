const express = require('express');
const post = require('./post/post.route');

const router = express.Router();

router.use('/', post);

module.exports = router;
