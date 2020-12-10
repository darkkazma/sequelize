const Sequelize = require('sequelize')
const sequelize = require('../sequelizes/ccdb.sequelize')
const t_class_map = require('../model/t_class_map.model')


const Model = Sequelize.Model

class Class extends Model{}
Class.init(
    {
        id: { type: Sequelize.BIGINT, field: 'class_seq', primaryKey: true},
        name: { type: Sequelize.STRING, field: 'class_name'},
        deleted_yn: {type:Sequelize.STRING, field: 'deleted_yn'}
    },{
        sequelize,
        modelName: 'Class',
        tableName: 't_class',
        timestamps: false
    }
)

// Class.hasMany(t_class_map, {foreignKey: 'id', targetKey: 'class'}) 

module.exports = Class