const db = require('../data/dbConfig.js')
const server = require('../server')
const supertest = require('supertest');

const { insert, remove } = require('./instructors-model')


afterEach(async () => {
    await db('instructors').truncate()
})

describe('insert()', () => {
    it('should insert instructor', async () => {
        let instructor = { name: 'Luis' }
        let inserted = await insert(instructor)
        expect(inserted.name).toBe(instructor.name)
    })

    it('should return status code 200', async () => {
        await supertest(server)
        .post('/api/instructors')
        .send({name: 'Dustin'})
        .expect(200)
    })
})

describe('delete()', () => {
    it('should delete an instructor by id', async () => {
        let instructor = { name: 'Luis' }
        let inserted = await insert(instructor)
        let id = inserted.id
        let deleted = await remove(id)
        expect(deleted).toBe(1)
    })

    it('should respond a 404 if instructor is not found', async () => {
        await supertest(server)
        .del('/api/instuctors/1')
        expect(404)
    })

    it('should respond a 200 if deleted successfully', async () => {
        let instructor = { name: 'Luis' }
        await insert(instructor)
        let response = await supertest(server).delete( `/api/instructors/1` )
        expect(response.status).toBe(200)
    })
})