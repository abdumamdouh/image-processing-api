import supertest from 'supertest';
import app from '../../index';

const request = supertest(app);

describe('Testing the resize endpoint with wrong parameters', () => {
    it('testing the resize route with no value for filename', async (done) => {
        request.get('/resize?width=225&height=452').expect(400, done);
    });
    it('testing the resize endpoint with no width', async (done) => {
        request
            .get('/resize?filename=UnknownPleasures&height=455')
            .expect(400, done);
    });
    it('testing the resize endpoint with no height', async (done) => {
        request
            .get('/resize?filename=UnknownPleasures&width=385')
            .expect(400, done);
        done();
    });
    it('testing the resize endpoint with filename and extension', async (done) => {
        request
            .get('/resize?filename=UnknownPleasures.jpg&width=245&height=395')
            .expect(400, done);
        done();
    });
});

describe('Testing the resize endpoint with missing resource', () => {
    it('testing the resize endpoint with missing filename', async (done) => {
        request
            .get('/resize?filename=8eqR39dsdsdsdsdsdr5cd&width=295&height=480')
            .expect(404, done);
        done();
    });
});

describe('Testing the resize endpoint with the right parameters', () => {
    it('testing the resize endpoint with missing filename', async (done) => {
        request
            .get('/resize?filename=UnknownPleasures&width=275&height=265')
            .expect(200, done);
        done();
    });
});
