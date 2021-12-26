import express from 'express';
import { Application, Request, Response } from 'express';
import * as dotenv from 'dotenv';
import morgan from 'morgan';
import loggerMiddleware from './middleware/loggerMiddleware';

// the enviorment variable
dotenv.config();

//set the Port variable to the value from the .env file or 5000
const Port = process.env.PORT || 5000;

// the app instance of the server
const app: Application = express();

//optional to use the custom middleware instead of morgan
//uncomment this to use the custom middleware
// app.use(loggerMiddleware);

// logger middleware provided by morgan
// you can comment this and use the custom middleware
app.use(morgan('dev'));

// add routing for / path
app.get('/', (reqest: Request, response: Response) => {
    response.json({
        message: 'Hello World !🌍',
    });
});

// start express server
app.listen(Port, () => {
    console.log(`the server is running at PORT:${Port}`);
});

export default app;
