import express from 'express';
import path from 'path';
import {
    typeChecker,
    fileExists,
    createDirectory,
} from '../../utils/handleFile';

import resizeImg from '../../utils/handleImage';

const resize = express.Router();

resize.get('/', async (reqest: express.Request, response: express.Response) => {
    // get the query object
    const query = reqest.query;
    // get the query parmeters
    const { filename, width, height } = query;

    // <projectName>\assets
    const imageDirectory = path.resolve('./') + '/assets/';

    // <projectName>\assets\thumbnails
    const outputDirectory = imageDirectory + 'thumbnails/';

    // <projectName>\assets\thumbnails\<imageName>.jpg or any other extension
    const targetImage = `${imageDirectory}${filename}.jpg`;

    if (Object.keys(reqest.query).length === 0) {
        return response
            .status(200)
            .send(
                'Welcome to the conversion endpoint. An image filname, height and width are required parameters.'
            );
    }

    if (
        !filename ||
        !width ||
        !height ||
        isNaN(Number(width)) ||
        isNaN(Number(height))
    ) {
        return response
            .status(400)
            .send('Error, missing or malformed parameters');
    }

    if (typeChecker(String(filename))) {
        return response
            .status(400)
            .send("Filename shouldn't include the extension");
    }

    if (!fileExists(targetImage)) {
        return response.status(404).send('Oh uh, image not found');
    }

    if (!fileExists(outputDirectory)) {
        createDirectory(outputDirectory);
    }

    const outputImage =
        outputDirectory + `${filename}-thumbnail-${width}x${height}.jpg`; // ex: pic.jpg => pic-thumbnail-500x400.jpg
    if (fileExists(outputImage)) {
        // Caching system
        response.sendFile(outputImage);
    } else {
        await resizeImg(
            targetImage,
            outputImage,
            Number(width),
            Number(height)
        );
        response.sendFile(outputImage);
    }
});

export default resize;
