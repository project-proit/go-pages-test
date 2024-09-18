const Router = require('express')
const router = new Router()
const groupController = require('../controllers/groupController')


router.post('/', groupController.create)
router.get('/', groupController.getAll)
router.delete('/', groupController.delete)





module.exports = router