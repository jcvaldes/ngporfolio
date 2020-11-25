import express from 'express';
import RolesController from './controller';
const app = express();

app.get('/', RolesController.Fetch);
app.get('/:id', RolesController.FetchOne);
app.post('/', RolesController.Create);
app.put('/', RolesController.Update);
app.delete('/:id', RolesController.Delete);

export default app;
