const db = require('../data/helpers')
const router = require('express').Router()


router.get('/', (req, res) => {
    res.json('hi from cats')
})

module.exports = router;