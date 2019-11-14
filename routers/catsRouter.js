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

module.exports = router;