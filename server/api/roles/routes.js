import express from 'express'
import RolesController from './controller'
const app = express()

app.get('/', RolesController.Fetch)

export default app