const t_class_map = require('../model/t_class_map.model')
const User = require('../model/user.model')
const Class = require('../model/class.model')

const findAll = () => 
    t_class_map.findAll({
        where: { deleted_yn : 'N'},
        include: [{association: User.user_seq}],
        raw: true
    })

 
module.exports = { findAll }