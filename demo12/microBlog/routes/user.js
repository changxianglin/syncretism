const express = require('express')
const router = express.Router()

router.get('/:username', (req, res,next) => {
    res.render('user', { username: req.params.username })
})

module.exports = router