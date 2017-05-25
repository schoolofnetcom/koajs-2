const Post = require('./../../models/post')

module.exports = async (ctx) => {
	let post = await Post
						.findByIdAndRemove(ctx.params.id)

	if (!post) {
		return ctx.status = 404
	}

	ctx.status = 204
}