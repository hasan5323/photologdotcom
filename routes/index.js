const express = require('express')
const router = express.Router()
const Controller = require('../controllers')

router.get('/',Controller.default)
router.get('/home',Controller.home)
router.get('/add-photo',Controller.add)
router.post('/add-photo',Controller.addPost)




module.exports = router




