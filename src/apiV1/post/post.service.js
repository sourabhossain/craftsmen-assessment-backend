const post = require('./post.model');

module.exports = class Post {
    createPost(req) {
        const data = { ...req.body, ...req.params };
        return post.createPost(data);
    }

    async updatePost(req) {
        const model = await this.getPost(req);
        return post.updatePost(model, req.body);
    }

    async getPosts(req) {
        const posts = await post.getPosts(req.query);
        return { count: posts.length, rows: posts };
    }

    async getPost(req) {
        req.params._id = req.params.id;
        delete req.params.id;
        req.query = { ...req.query, ...req.params };
        return post.getPost(req.query);
    }

    deletePost(req) {
        return post.deletePost({ _id: req?.params?.id });
    }
};
