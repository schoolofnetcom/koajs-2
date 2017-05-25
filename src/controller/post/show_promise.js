const Post = require('./../../models/post')
const mongoose = require('mongoose')

module.exports = (ctx) => {
	let post = {}

	if (mongoose.Types.ObjectId.isValid(ctx.params.query)) {
		post = Post
				.findById(ctx.params.query)
				.then((result) => {
					return result
				}) 
				.catch((error) => {
					return console.log(error)
				})
	} else {
		post = Post
				.findOne({
					slug: ctx.params.query
				})
				.then((result) => {
					return result
				})
				.catch((error) => {
					return console.log(error)
				})
	}

	if (!post) {
		ctx.status = 404
		return ctx.body = {}
	}

	ctx.status = 200
	ctx.body = post
}