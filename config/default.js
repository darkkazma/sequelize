module.exports = {
    ccdb: {
        host: '192.168.10.80',
        username: 'ccdb',
        database: 'ccdb',
        dialect: 'mysql',
        timezone: '+09:00',
        logging: console.log,
        pool: {max:5, min:0, acquire: 3000, idle:1000 }
    }
}