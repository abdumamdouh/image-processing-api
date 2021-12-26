import express from 'express';
import path from 'path';
import {
    typeChecker,
    fileExists,
    createDirectory,
} from '../../utils/handleFile';

import resizeImg from '../../utils/handleImage';

const resize = express.Router();

resize.get(
    '/',
    async (request: express.Request, response: express.Response) => {
        // get the query object
        const query = request.query;
        // get the query parameters
        const { filename, width, height } = query;

        // <projectName>\assets
        const imageDirectory = path.resolve('./') + '/assets/';

        // <projectName>\assets\thumbnails
        const outputDirectory = imageDirectory + 'thumbnails/';

        // <projectName>\assets\thumbnails\<imageName>.jpg or any other extension
        const targetImage = `${imageDirectory}${filename}.jpg`;

        //return status code 200 and welcome message in case there is no query parameters just the api only
        if (Object.keys(request.query).length === 0) {
            return response
                .status(200)
                .send(
                    'Welcome to the resize endpoint. you can add the image filename, height and width in the query parameters.'
                );
        }

        // validation for the incoming inputs
        if (
            !filename ||
            !width ||
            !height ||
            isNaN(Number(width)) ||
            isNaN(Number(height))
        ) {
            return response
                .status(400)
                .send('Error, some parameter is missing!');
        }

        if (typeChecker(String(filename))) {
            return response
                .status(400)
                .send('Lookout, add the filename without the extension.');
        }

        if (!fileExists(targetImage)) {
            return response.status(404).send('404,image not found!');
        }

        if (!fileExists(outputDirectory)) {
            createDirectory(outputDirectory);
        }

        // the output directory of the image
        // example: the input image called img.jpg
        //the output will be img-thumb-600x350.jpg
        const outputImage =
            outputDirectory + `${filename}-thumb-${width}x${height}.jpg`;

        //catching, checking if the image is exist or not
        if (fileExists(outputImage)) response.sendFile(outputImage);
        else {
            await resizeImg(
                targetImage,
                outputImage,
                Number(width),
                Number(height)
            );
            response.sendFile(outputImage);
        }
    }
);

export default resize;
