const express = require('express')
const stg_stats = require('../model/stg_stats.model')
const router = express.Router()

const stg_stats_service = require('../service/stg_stats.service')

router.get('/stgstats', async (req, res, next) =>{

    const data = await stg_stats_service.findAll() 
    console.log(data)
    res.status(200).json(data)
})

router.get('/stgstats/:davUri*', async (req, res, next) => {
    const davUri = req.params.davUri
    console.log(davUri)
    const data = await stg_stats_service.findAllByDavUri(davUri)
    if( !data ){ res.status(400).json('Not Exsist data for davUri') }
    else{
        console.log( data )
        const newData = new Array()
        for( var i=0; i<data.length; i++ ){
            //console.log( data[i].davUri )
            if( data[i].davUri.indexOf(',') != -1 ){
                const uri = data[i].davUri.split(',')
                data[i].davUri = uri[0]
            }

            if( data[i].davUri == davUri ){
                console.log( data[i])
                newData.push(data[i])
            }
        }
        res.status(200).json(newData)
    }
    
})

module.exports = router


