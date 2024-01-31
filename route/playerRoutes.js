const express = require('express')

const playerController = require('../controller/player')

const router = express.Router()

router.post('/search',playerController.findPlayerByName)

router.post('/submit',playerController.saveNewPlayer)

router.delete('/delete')


router.put('/edit/submit',playerController.editPlayerSubmit)
router.post('/edit',playerController.editPlayer)

router.get('/',(req,res,next)=>{
  res.redirect('/')
})

module.exports = router