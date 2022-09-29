const router = require('express').Router()

router.get('/hello',(req,res) => {
    // const error =  new Error('error')
    // error.status = 404
    // throw error
    res.status(200).json({
        message: 'success'
    })
})

module.exports = router