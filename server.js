import express from 'express';
import { config } from 'dotenv';
import path from 'path';

// Load environment variables from .env file
config();

const app = express();
const port = process.env.PORT || 4000;

// Serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(path.resolve('public', 'index.html'));
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
