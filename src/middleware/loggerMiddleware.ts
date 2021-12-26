import express from 'express';

const loggerMiddleware = (
    reqest: express.Request,
    response: express.Response,
    next: () => void
): void => {
    console.log(`tUser visted this URL: ${reqest.url}.`);
    next();
};

export default loggerMiddleware;
