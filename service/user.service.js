const Class = require('../model/class.model')

const findAll = () => 
    Class.findAll({
        where: { deleted_yn : 'N'},
        raw: true
    })


module.exports = { findAll }