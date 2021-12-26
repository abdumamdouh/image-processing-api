import { typeChecker, fileExists } from '../../utils/handleFile';
import path from 'path';

const f = `${path.resolve('./')}/package.json`;

describe('Testing functions of handleFile', () => {
    describe('Testing functionality of typeChecker', () => {
        it('testing typeChecker with wrong filename', () => {
            expect(typeChecker('img.jpg')).toBeTruthy();
        });
        it('testing typeChecker with correct filename', () => {
            expect(typeChecker('img')).toBeFalsy();
        });
    });
    describe('Testing functionality of fileExists', () => {
        it('testing fileExists with non-existing file', () => {
            expect(fileExists('invalid path, not exist')).toBeFalsy();
        });
        it('testing fileExists with a existed file', () => {
            expect(fileExists(f)).toBeTruthy();
        });
    });
});
