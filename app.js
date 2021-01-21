const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const createError = require('http-errors')

const classRouter = require('./router/user')
const ManagementRouter = require('./router/management')

var app = express()


app.use(logger('combined'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


console.log( "ggggg" )

app.use('/v2/info', classRouter)
app.get('/v2/info/bbb', (req, res, next) => {
    console.log('/v2/info/bbb cal....')
    res.json( "aaaaa" )
})

app.use('/v2/management/', ManagementRouter)



app.use((req, res, next) =>{
    console.log('Error 당.')
    next(createError(404))
})

app.use((err, req, res, next) =>{
    console.error(err.stack)

    res.status(err.status || 500 )
    res.json({ error: err })
})


module.exports = app
