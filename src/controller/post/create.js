const Post = require('./../../models/post')

module.exports = async (ctx) => {
	let slug = ctx.request.body.title
					.toLowerCase()
					.replace(/ /g, '-')
					.replace(/[-]+/g, '-')
					.replace(/[^\w-]+/g,'')

	ctx.request.body.slug = slug

	let post = new Post(ctx.request.body)

	await post.save()

	ctx.status = 201
	ctx.body = post
}