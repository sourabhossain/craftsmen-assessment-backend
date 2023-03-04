const responseConstant = require('../../constants/response.constant');
const Post = require('./post.service');
const errorHandler = require('../../helpers/error.handlers');

const createPost = (req, res) => {
    return new Post()
        .createPost(req)
        .then((data) => {
            const { message, code } = responseConstant.POST.CREATION_SUCCEEDED;

            res.status(200).send({
                success: true,
                message,
                code,
                data
            });
        })
        .catch((errors) => {
            const { message, code } = responseConstant.POST.CREATION_FAIL;

            res.status(400).send({
                success: false,
                message,
                code,
                errors: errorHandler.errorHttpResponse(errors)
            });
        });
};

const updatePost = (req, res) => {
    return new Post()
        .updatePost(req)
        .then((data) => {
            const { message, code } = responseConstant.POST.UPDATE_SUCCEEDED;

            res.status(200).send({
                success: true,
                message,
                code,
                data
            });
        })
        .catch((errors) => {
            const { message, code } = responseConstant.MOVIE_TV_SHOW.UPDATE_FAIL;

            res.status(400).send({
                success: false,
                message,
                code,
                errors: errorHandler.errorHttpResponse(errors)
            });
        });
};

const getPosts = (req, res) => {
    return new Post()
        .getPosts(req)
        .then((data) => {
            const { message, code } = responseConstant.POST.FETCH_SUCCEEDED;

            res.status(200).send({
                success: true,
                message,
                code,
                data
            });
        })
        .catch((errors) => {
            const { message, code } = responseConstant.MOVIE_TV_SHOW.FETCH_FAIL;

            res.status(400).send({
                success: false,
                message,
                code,
                errors: errorHandler.errorHttpResponse(errors)
            });
        });
};

const getPost = (req, res) => {
    return new Post()
        .getPost(req)
        .then((data) => {
            const { message, code } = responseConstant.POST.FETCH_SUCCEEDED;

            res.status(200).send({
                success: true,
                message,
                code,
                data
            });
        })
        .catch((errors) => {
            const { message, code } = responseConstant.MOVIE_TV_SHOW.FETCH_FAIL;

            res.status(400).send({
                success: false,
                message,
                code,
                errors: errorHandler.errorHttpResponse(errors)
            });
        });
};

const deletePost = (req, res) => {
    return new Post()
        .deletePost(req)
        .then((data) => {
            const { message, code } = responseConstant.POST.DELETE_SUCCEEDED;

            res.status(200).send({
                success: true,
                message,
                code,
                data
            });
        })
        .catch((errors) => {
            const { message, code } = responseConstant.POST.DELETE_FAIL;

            res.status(400).send({
                success: false,
                message,
                code,
                errors: errorHandler.errorHttpResponse(errors)
            });
        });
};

module.exports = {
    createPost,
    updatePost,
    getPosts,
    getPost,
    deletePost
};
