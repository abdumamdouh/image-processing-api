import express from 'express';
import resize from './API/resize';
//import loggerMiddleware from '../middleware/loggerMiddleware';

const routes = express.Router();

//optional, you can use the custom middleware instead morgan middleware
//routes.use(loggerMiddleware);

routes.get('/', (request: express.Request, response: express.Response) => {
    response.send('Hello, Welcome to my image processing API.');
});

routes.use('/resize', resize);

export default routes;
