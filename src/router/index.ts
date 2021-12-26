import express from 'express';
import resize from './API/resize';
import loggerMiddleware from '../middleware/loggerMiddleware';

const routes = express.Router();

routes.use(loggerMiddleware);

routes.get('/', (reqest: express.Request, response: express.Response) => {
    response.send('Hello, Welcone to my image processing API.');
});

routes.use('/resize', resize);

export default routes;
