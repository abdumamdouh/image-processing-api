import express from 'express';
import { Application, Request, Response } from 'express';
import * as dotenv from 'dotenv';
import morgan from 'morgan';
//import loggerMiddleware from './middleware/loggerMiddleware';
import routes from './router';

// the environment variable
dotenv.config();

//set the Port variable to the value from the .env file or 3000
const Port = process.env.PORT || 3000;

// the app instance of the server
const app: Application = express();

//optional to use the custom middleware instead of morgan
//uncomment this to use the custom middleware
// app.use(loggerMiddleware);

// logger middleware provided by morgan
// you can comment this and use the custom middleware
app.use(morgan('dev'));

// add the index of the routes as a middleware to use to '/' route

app.use('/', routes);

// start express server
app.listen(Port, () => {
    console.log(`the server is running at PORT:${Port}`);
});

export default app;
