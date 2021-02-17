import express from 'express';
import authRoutes from './auth/routes'
import roleRoutes from './roles/routes'
import userRoutes from './users/routes'
import skillRoutes from './skills/routes'
import teamRoutes from './teams/routes'

const uploadRoutes = require('./uploads');
const imageRoutes = require('./images');

const app = express();
app.use('/auth', authRoutes);
app.use('/role', roleRoutes);
app.use('/user', userRoutes);
app.use('/skill', skillRoutes);
app.use('/upload', uploadRoutes);
app.use('/skill', skillRoutes);
app.use('/images', imageRoutes);
app.use('/team', teamRoutes);

export default app;

