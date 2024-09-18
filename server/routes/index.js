const Router = require('express')
const router = new Router()
const applicationRouter = require('./applicationRouter')
const studentRouter = require('./studentRouter')
const directionRouter = require('./directionRouter')
const groupRouter = require('./groupRouter')
const userRouter = require('./userRouter')



router.use('/application', applicationRouter)
router.use('/student', studentRouter)
router.use('/direction', directionRouter)
router.use('/group', groupRouter)
router.use('/user', userRouter)




module.exports = router