import express from 'express';
import authRoutes from './auth/routes'
import roleRoutes from './roles/routes'

const app = express();
app.use('/auth', authRoutes);
app.use('/role', roleRoutes);

export default app;

