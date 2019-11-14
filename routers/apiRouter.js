const db = require('../data/helpers')
const router = require('express').Router()
const catsRouter = require('./catsRouter')


router.get('/', (req, res) => {
    res.status(200).json(`API running`)
})


router.use('/cats', catsRouter)

module.exports = router;