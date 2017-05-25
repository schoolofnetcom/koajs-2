const Post = require('./../../models/post')

module.exports = async (ctx) => {
	let posts = await Post.find({})

	if (!posts || !posts.length) {
		ctx.status = 404
		return ctx.body = []
	}

	ctx.status = 200
	ctx.body = posts
}