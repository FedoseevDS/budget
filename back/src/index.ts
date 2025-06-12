import express from 'express';
import bodyParser from 'body-parser';
import http from 'http';

const app = express();

app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(8080, () => console.log('I here'))