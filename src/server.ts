import express from 'express';
import routes from './routes';
import { config }  from './config/config';
import { initModels } from './models';

initModels();

const app = express();

app.use(routes);
app.listen(config.port);
console.log('Server is running...');
console.log(config);
