module.exports = {
    apps: [
        {
            name: 'Node_1',
            script: './bin/www',
            watch: true,
            instance: 2,
            instance_var: 'INSTANCE_ID',
            exec_mode: 'cluster',
            log_date_format: 'YYYY-MM-DD HH:mm:ss',
            env: {
                PORT: 3000,
                NODE_ENV: 'develeopment'
            },
            env_production_aa:{
                PORT: 4000,
                NODE_ENV: 'production_aa'
            }
        }
    ]
}