import express from 'express';
import SkillController from './controller';
const app = express();

app.get('/', SkillController.Fetch);
app.get('/:id', SkillController.FetchOne);
app.post('/', SkillController.Create);
app.put('/', SkillController.Update);
app.delete('/:id', SkillController.Delete);

export default app;
