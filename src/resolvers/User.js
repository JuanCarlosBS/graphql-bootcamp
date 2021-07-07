const User = {
    posts(parent, args, { db }, info) {
        return db.posts.filter((post) => {
            return post.author === parent.id
        })
    },
    comments(parent, args, { db }, info) {
        return comments.filter((comment) => {
            return db.comment.author === parent.id
        })
    }
}

export { User as default }