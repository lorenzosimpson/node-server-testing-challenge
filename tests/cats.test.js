const server = require('../server')
const request = require('supertest');

describe('cats router responses', () => {

    it('should return hi from cats', () => {
        return request(server).get('/api/cats').then(res => {
            expect(res.body).toMatch(/hi from cats/i)
        })
    })

})