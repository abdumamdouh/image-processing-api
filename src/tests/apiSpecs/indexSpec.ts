import supertest from 'supertest';
import app from '../../index';

const request = supertest(app);

describe('Testing the response of the main endpoint/api', () => {
    it('testing the response of the root route', async (done) => {
        const response = await request.get('/');
        expect(response.status).toBe(200);
        done();
    });
});
