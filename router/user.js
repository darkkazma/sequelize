const express = require('express')
const createError = require('http-errors')
const Class = require('../model/class.model')
const classService = require('../service/class.service')
const t_class_map_Service = require('../service/t_class.service')


const router = express.Router()


const Categorys = {
    company : ['all', 'seq', 'name', ],
    class   : ['all', '', ''],
    user    : ['all', '', '']
}



router.param('Category', (req, res, next, Category) =>{
    const type = req.query.type || 'all'

    if( !Object.keys(Categorys).includes(Category)){
        return next(createError(404, 'Not found API URI'))
    }
    else{
        console.log( "param 정리 혔슈...")      
    }


    res.locals.Category = Category

    console.log( '-------------------------------------------------')
    console.log( req.params )
    console.log( 'type : ' + type )
    console.log( '-------------------------------------------------')
    

    next()
})


router.get( '/aaa/:Category', async (req, res, next) =>{
    
    const { Category } = res.locals
    console.log( '-----------------------------------------------')
    console.log( Category )
    console.log( '-----------------------------------------------')

    let data 

    if( Category === 'user' ){
        data = await t_class_map_Service.findAll()
    }else if( Category === 'class'){
        data = await classService.findAll()
    }
    //const data = await classService.findAll()
    console.log( data )
    res.json({result : data})
})


module.exports = router

