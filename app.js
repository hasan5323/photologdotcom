const express = require('express')
const app = express()
const router = require('./routes')
const port = 1234
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:true}))
app.use('/static', express.static('public'))
app.use(router)

app.listen(port, ()=>{
    console.log(`server running on localhost ${port}`)
})

// module.exports = port