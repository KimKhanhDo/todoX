import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import path from 'path';

import taskRoute from './src/routes/task.route.js';
import { connectDB } from './src/config/db.js';

dotenv.config();

const PORT = process.env.PORT || 3000;
const __dirname = path.resolve();

const app = express();

// Middlewares
app.use(express.json());

if (process.env.NODE_ENV !== 'production') {
    app.use(cors({ origin: 'http://localhost:5173' }));
}

app.use('/api/tasks', taskRoute);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/dist')));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
    });
}

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port: ${PORT}`);
    });
});
