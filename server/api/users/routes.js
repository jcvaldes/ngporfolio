import express from 'express'
import UsersController from './controller'
const app = express()

app.get('/', UsersController.Fetch)

export default app