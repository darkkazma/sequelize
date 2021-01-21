const Sequelize = require('sequelize')
const sequelize = require('../sequelizes/ccdb.sequelize')

const Model = Sequelize.Model

class stg_stats extends Model{}

stg_stats.init(
    {
        customerId : { type: Sequelize.BIGINT, get(){return this.getDataValue('customerId').toString();}, field : 'sp_user_seq'},
        svcId : { type: Sequelize.BIGINT, get(){return this.getDataValue('svcId').toString();}, field : 'svc_cont_seq'},
        volId : { type: Sequelize.BIGINT, get(){return this.getDataValue('volId').toString();}, field : 'svc_volume_seq'},
        statsYn : { type: Sequelize.STRING, field : 'stg_stat_yn'},
        davUri : { type: Sequelize.STRING, field : 'org_addr'},
        deletedYn : { type: Sequelize.STRING, field : 'deleted_yn'}
    },
    {
        sequelize,
        tableName : 't_svc_volume',
        timestamps: false

    }
)

module.exports = stg_stats