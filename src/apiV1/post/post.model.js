const postDoc = require('./post.schema');

class Post {
    getPostById(id) {
        return postDoc.findById(id);
    }

    getPost(query) {
        return postDoc.findOne(query);
    }

    getPosts(query) {
        return postDoc.find(query);
    }

    createPost(data) {
        const Post = new postDoc(data);
        return Post.save();
    }

    updatePost(id, data) {
        return postDoc.findByIdAndUpdate(id, data, {
            new: true
        });
    }

    deletePost(id) {
        return postDoc.findByIdAndRemove(id);
    }
}

const post = new Post();
module.exports = post;
