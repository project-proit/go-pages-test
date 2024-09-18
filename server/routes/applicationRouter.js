const Router = require('express')
const router = new Router()
const applicationController = require('../controllers/applicationController')


router.post('/', applicationController.create)
router.get('/', applicationController.getAll)
router.delete('/', applicationController.delete)






module.exports = router