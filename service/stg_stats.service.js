const sequelize = require('sequelize')
const stg_stats = require('../model/stg_stats.model')
const Op = sequelize.Op

const findAllByDavUri = davUri =>
    stg_stats.findAll({
        where: { davUri :{[Op.substring] : davUri}, deleted_yn : 'N'},
        attributes : { exclude : ['deletedYn', 'id']},
        raw: true
    })

const findAll = () => 
    stg_stats.findAll({
        where : { davUri : {[Op.ne]: null}, deleted_yn : 'N'},
        attributes: { exclude: ['deletedYn', 'id']},
        raw : true
    })


module.exports = { findAll, findAllByDavUri }