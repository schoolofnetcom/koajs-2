const Koa = require('koa')
const Router = require('koa-router')
const Mongoose = require('koa-mongoose')
const BodyParser = require('koa-bodyparser')
const Logger = require('koa-logger')
const CORS = require('kcors')

const app = new Koa()
const router = new Router()

app.use(Mongoose({
	user: '',
	pass: '',
	host: '127.0.0.1',
	port: 27017,
	database: 'koa2'
}))
app.use(BodyParser())
app.use(Logger())
app.use(CORS({
	allowMethods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE']
}))
require('./src/index')(app, router)

app.use(router.routes())
   .use(router.allowedMethods())

app.listen(3000)