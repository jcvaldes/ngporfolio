import express from 'express'
import RolesController from './controller'
const app = express()

app.get('/', RolesController.Fetch)
app.post('/', RolesController.Create)

export default app