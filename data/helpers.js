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
    .where({id})
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
    return db('cats')
    .where({ id })
    .update(cat)
    .then(async () => {
        let updated = await findById(id)
        return updated;
    })
}

function findById(id) {
    return db('cats')
    .where({ id })
    .first()
}
