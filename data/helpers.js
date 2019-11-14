const db = require('./db-config')
module.exports = {
    insert,
    remove,
    find,
    update,
    findById,
}

function remove(id) {
    return db('cats')
    .del()
    .then(([id]) => {
        return db('cats')
        .where({ id })
        .first()
    })

}

function insert(cat) {
    return db('cats').insert(cat)
    .then(([id]) => {
        return db('cats')
        .where({ id })
        .first()
    })
  }

function find() {
    return db
    .select('*')
    .from('cats');
}

function update(id, cat) {
    return db('cats').update(cat)
    .where({ id })
    .then(([id]) => {
        return db('cats')
        .where({ id })
        .first()
    })
}

function findById(id) {
    return db('cats')
    .where({ id })
    .first()
}
