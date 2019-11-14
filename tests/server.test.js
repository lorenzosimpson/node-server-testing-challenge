const request = require('supertest');

const server = require('../server')

describe('server', () => {
    it('should set env to testing', () => {
        expect(process.env.DB_ENV).toBe('testing')
    })

    it('should say API running', () => {
        return request(server).get('/api').then(res => {
            expect(res.body).toMatch(/API running/i)
        })
    })

    it('should return a 200 OK', () => {
        return request(server).get('/api').then(res => {
            expect(res.status).toBe(200)
        })
    })
})