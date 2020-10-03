import express from 'express'
import AuthController from './controller'
const app = express()
app.post('/', AuthController.Login)

// module.export = app
export default app