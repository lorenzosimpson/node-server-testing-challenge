const server = require('../server')
const request = require('supertest');
const db = require('../data/db-config')

const { insert, find } = require('../data/helpers')

describe('cats router responses', () => {

    // it('should return hi from cats', () => {
    //     return request(server).get('/api/cats').then(res => {
    //         expect(res.body).toMatch(/hi from cats/i)
    //     })
    // })

    it('should respond with a 200 OK', () => {
        return request(server).get('/api/cats').then(res => {
            expect(res.status).toBe(200)
        })
    })

})

describe('cats model tests', () => {
    describe('insert method', () => {
        beforeEach(async () => {
            await db('cats').truncate()
        })

        it('should insert a cat', async () => {
            await insert({ name: 'sandy', favorite_food: 'fish'})

            const cats = await db('cats')

            expect(cats).toHaveLength(1)
        })

        it('should return the cat that was inserted', async () => {
            let insertedCat = await insert({ name: 'ginny', favorite_food: 'chicken'})
            expect(insertedCat.name).toBe('ginny')


            insertedCat = await insert({ name: 'simba', favorite_food: 'fish'})
            expect(insertedCat.name).toBe('simba')

        })
    });

    describe('find', () => {
        it('should return array of cats', async () => {
           let cats = await find()
           
           expect(cats).toHaveLength(2)
           expect(cats.length).toBeDefined()
        })
    })

  
    

})