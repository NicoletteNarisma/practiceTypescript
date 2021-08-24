import express from 'express';
import route from './routes';

const app = express();
const port = 8000;

app.use(route);
app.listen(port);
console.log("Server is running...");