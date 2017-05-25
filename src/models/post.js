const mongoose = require('mongoose')

const Post = mongoose.Schema({
	title: String,
	description: String,
	slug: String,
	txt: String
})

module.exports = mongoose.model('Post', Post)