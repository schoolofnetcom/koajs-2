const Post = require('./../../models/post')

module.exports = async (ctx) => {
	let slug = ctx.request.body.title
					.toLowerCase()
					.replace(/ /g, '-')
					.replace(/[-]+/g, '-')
					.replace(/[^\w-]+/g,'')

	ctx.request.body.slug = slug

	let post = await Post
						.findByIdAndUpdate(ctx.params.id, ctx.request.body)

	if (!post) {
		return ctx.status = 404
	}

	ctx.status = 204			
}