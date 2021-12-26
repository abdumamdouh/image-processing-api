# Pixely, Image Processing API

## Table of Contents

-   [Summary](#Summary)

-   [Technologies](#Technologies)

-   [Usage](#Usage)

-   [Testing](#Testing)

-   [Structure](#Structure)

-   [Usage and Installation](#usage-and-installation)

## Summary

an image processing API that I made as part of my Full Stack JavaScript Developer Nanodegree from Udacity.

Currently the functionality is limited to resizing and processing images and setup an image caching system.

It demonstrates my understanding of Typescript, NodeJS, NodeJS Middleware, Express, Express Router, Endpoints, Node File Management, Unit Testing.

## Technologies

NodeJS was used for the runtime.  
Express was used for the backend.  
Jasmine was used for the unit testing.  
Sharp was used for the image processing.  
Typescript was used as the programming language.

## Usage

Endpoints

| Endpoint    | Request | Parameters                  | Response | Usage             |
| ----------- | ------- | --------------------------- | -------- | ----------------- |
| **/**       | **GET** | **N/A**                     | **200**  | **Root Route**    |
| **convert** | **GET** | **filename, width, height** | **200**  | **Resize Images** |

## Testing

A full suite of tests are ready to use that cover all endpoints and helper functions

You can use

```
npm run test or yarn test
```

To start the unit testing

## Structure

```
+---assets
|   |   DSOTM.jpg
|   |   okComputer.jpg
|   |   icelandwaterfall.jpg
|   |   UnknownPleasures.jpg
|   |
|   \---thumbnails
|
+---spec
|   \---support
|           jasmine.json
|
\---src
    |   index.ts
    |
    +---middleware
    |       loggerMiddleware.ts
    |
    +---router
    |   |   index.ts
    |   |
    |   \---api
    |           resize.ts
    |
    +---tests
    |   +---endpointsSpecs
    |   |       resizeSpec.ts
    |   |       indexSpec.ts
    |   |
    |   +---helpers
    |   |       reporter.ts
    |   |
    |   \---utilitiesSpecs
    |           handleFileSpec.ts
    |
    \---utilities
            handleFile.ts
            handleImage.ts
```

## Usage and Installation

You can get the project up and running in simple steps.

```
npm install or yarn
```

Then you can use the following endpoint to process your images.

```
http://localhost:3000/resize?filename=UnknownPleasures&width=700&height=400
```
