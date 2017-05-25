const Post = require('./../../models/post')
const mongoose = require('mongoose')

module.exports = async (ctx) => {
	let post = {}

	if (mongoose.Types.ObjectId.isValid(ctx.params.query)) {
		try {
			post = await Post.findById(ctx.params.query)
		} catch(e) {
			console.log(e)
		}
	} else {
		try {
			post = await Post.findOne({
				slug: ctx.params.query
			})
		} catch(e) {
			console.log(e)
		}
	}

	if (!post) {
		ctx.status = 404
		return ctx.body = {}
	}

	ctx.status = 200
	ctx.body = post
}