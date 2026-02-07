import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

import taskRoute from './src/routes/task.route.js';
import { connectDB } from './src/config/db.js';

dotenv.config();
const PORT = process.env.PORT || 3000;

const app = express();

// Middlewares
app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173' }));

app.use('/api/tasks', taskRoute);

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port: ${PORT}`);
    });
});
