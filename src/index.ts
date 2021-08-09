import express from 'express';

const app = express();
const port = 8000;

app.get('/', (request,response) => {
    response.send("Hello World!");
});

app.listen(port);
console.log("Server is running... ");