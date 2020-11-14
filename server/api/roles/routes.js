import express from 'express'
import RolesController from './controller'
const app = express()

app.get('/', RolesController.Fetch)
app.post('/', RolesController.Create)
app.delete('/:id', RolesController.Delete)

export default app