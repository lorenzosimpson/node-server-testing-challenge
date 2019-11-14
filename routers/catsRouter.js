const db = require('../data/helpers')
const router = require('express').Router()



router.get('/:id', (req, res) => {
    const { id } = req.params

    db.findById(id)
    .then(cat => res.status(200).json(cat))
    .catch(err => res.status(500).json({ error: 'Could not fetch cat '}))
})

router.get('/', (req, res) => {
    const { id } = req.params

    db.find()
    .then(cats => res.status(200).json(cats))
    .catch(err => res.status(500).json({ error: 'Could not fetch cats'}))
})


router.post('/', (req, res) => {
    const cat = req.body;
    db.insert(cat)
    .then(added => res.status(200).json(added))
    .catch(err => res.status(500).json({ error: 'Could not add cat'}))
})

router.put('/:id', (req, res) => {
    const changes = req.body;
    const { id } = req.params;
    db.update(id, changes)
    .then(updated => res.status(200).json(updated))
    .catch(err => res.status(500).json({ error: 'could not update cat'}))
})

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    db.remove(id)
    .then(deleted => res.status(200).json(deleted))
    .catch(err => res.status(500).json({ error: 'Could not delete cat'}))
})
module.exports = router;