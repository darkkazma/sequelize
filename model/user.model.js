const Sequelize = require('sequelize')
const sequelize = require('../sequelizes/ccdb.sequelize')
const t_class_map = require('../model/t_class_map.model')

const Model = Sequelize.Model

class User extends Model{}

User.init(
    {
        user_seq: { type: Sequelize.BIGINT, field: 'class_seq', primaryKey: true},
        user_id: { type: Sequelize.STRING, field: 'user_id'},
        user_pwd: { type: Sequelize.STRING, field: 'user_pwd'},
        user_name: { type: Sequelize.STRING, field: 'user_name'},
        reg_date: { type: Sequelize.STRING, field: 'reg_date'},
        deleted_yn: {type:Sequelize.STRING, field: 'deleted_yn'},
    },{
        sequelize,
        modelName: 'User',
        tableName: 't_user',
        timestamps: false
    }
)

// User.hasMany(t_class_map, {foreignKey: 'user_seq', targetKey: 'user'})

module.exports = User