import { existsSync, mkdirSync } from 'fs';

export const typeChecker = (fn: string): boolean => {
    //the supported extensions
    // you can add or remove any extension
    return fn.includes('.jpg' || '.jpeg' || '.png' || '.gif');
};

export const fileExists = (Location: string): boolean => {
    // check if the file is exist
    return existsSync(Location);
};

export const createDirectory = (directoryLocation: string): void => {
    // creat a directory with given directory location
    return mkdirSync(directoryLocation);
};
