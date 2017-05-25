module.exports = (app, router) => {
	router
		.get('/posts', require('./controller/post/index'))
		.get('/posts/:query', require('./controller/post/show'))
		.post('/posts', require('./controller/post/create'))
		.put('/posts/:id', require('./controller/post/update'))
		.patch('/posts/:id', require('./controller/post/update'))
		.del('/posts/:id', require('./controller/post/destroy'))
}