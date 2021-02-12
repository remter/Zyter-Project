const router = require('express').Router()

const Tweet = require('../models/Tweet')

router.post('/new', async (req,res)=>{
    const data = req.body
    try{
    const response = await Tweet.insertMany(data)
    res.json({newId: response._id})
    }
    catch(err){
        res.jason({error: err})
    }

})

router.get('/:id', async (req,res)=>{
    const id = req.params.id
    try{
    const response = await Tweet.findById(id)
    res.json({newId: response})
    }
    catch(err){
        res.jason({error: err})
    }

})
module.exports = router