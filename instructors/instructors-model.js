const db = require('../data/dbConfig.js')

module.exports = {
    insert,
    find,
    remove
}

function insert(instructor) {
    return db('instructors')
        .insert(instructor, 'id')
        .then(ids => {
            return db('instructors')
            .where({ id: ids[0] })
            .first();
        });
}

function find() {
    return db('instructors')
}

function remove(id) {
    return db('instructors').where({id})
    .del()
}