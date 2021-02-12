const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const tweet = require('./api/tweet')

const app = express()
app.use(bodyParser.json())
app.use('/tweet', tweet)
mongoose.connect('mongodb://localhost/twitter',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})

app.get('/', (req, res)=>{
    res.send('This is my first path')
})
app.get('/test', (req,res)=>{
    res.send('This is the test site')
})

app.post("/newroute/:username", (req,res) =>{
    res.send(req.body)
})

app.listen(3000)