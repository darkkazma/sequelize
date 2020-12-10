module.exports = {
    ccdb: {
        username: 'ccdb',
        database: 'ccdb',
        dialect: 'mariadb',
        timezone: '+09:00',
        logging: console.log,
        pool: {max:5, min:0, acquire: 3000, idle:1000 }
    }
}