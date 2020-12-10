const Sequelize = require('sequelize')
const sequelize = require('../sequelizes/ccdb.sequelize')

const User = require('../model/user.model')
const Class = require('../model/class.model')


const Model = Sequelize.Model

class t_class_map extends Model{}
t_class_map.init(
    {
        id: { type: Sequelize.BIGINT, field: 'c_map_seq', primaryKey: true},
        class_seq: { type: Sequelize.BIGINT, field: 'class_seq', references: { model : Class, key: 'class_id'}},
        user_seq : {type: Sequelize.BIGINT, field: 'user_seq', references: {model: User, key: 'user_id'}},
        reg_date : {type: Sequelize.STRING, field: 'reg_date'},
        reg_user: {type:Sequelize.STRING, field: 'reg_user'},
        deleted_yn: {type:Sequelize.STRING, field: 'deleted_yn'}
    },{
        sequelize,
        modelName: 'class_map',
        tableName: 't_class_map',
        timestamps: false
    }
)



module.exports = t_class_map