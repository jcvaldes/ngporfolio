import express from 'express';
import authRoutes from './auth/routes'
import roleRoutes from './roles/routes'
import userRoutes from './users/routes'
import skillRoutes from './skills/routes'

const app = express();
app.use('/auth', authRoutes);
app.use('/role', roleRoutes);
app.use('/user', userRoutes);
app.use('/skill', skillRoutes);
export default app;

