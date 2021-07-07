module.exports = {
    
    /* test: {
        client: 'postgresql',
        connection: {
            host: 'localhost',
            database: 'POUPE_PILAS_DB',
            user: 'postgres',
            password: 'pgadmin',            
            port: 5432,
            encrypt: true, 
            
        },
        migrations: {
            directory: 'src/migrations',
        }
    }*/
    test: {
        client: 'postgresql',
        connection: {
            host: 'localhost',
            database: 'sd_bus',
            user: 'postgres',
            password: 'pgadmin',
            port: 5432,
            encrypt: true, 
           // ssl: { rejectUnauthorized: false }
            
        },
        migrations: {
            directory: 'src/migrations',
        }
    }

  
};