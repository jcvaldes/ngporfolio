import express from 'express';
import SkillController from './controller';
import mdw from '../../middlewares/authentication';
const app = express();

app.get('/', SkillController.Fetch);
// app.get('/nested', SkillController.FetchNested);

app.get('/:id', SkillController.FetchOne);
app.post('/', [mdw.verifyToken],  SkillController.Create);
app.put('/', SkillController.Update);
app.delete('/:id', SkillController.Delete);

export default app;
