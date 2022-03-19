// need for typeorm cli
require('dotenv').config({
    path: __dirname + "/../../.env"
});

const config = {
    type: 'postgres',
    url: process.env.DATABASE_URL,
    entities: [
        __dirname + "/dist/src/entities/*.js"
    ],
    migrations: [
        __dirname + "/dist/src/migrations/*.js"
    ],
    extra: {
        ssl: process.env.DATABASE_SSL_MODE !== 'false' ? { rejectUnauthorized: false } : false,
    },
    cli: {
        migrationsDir: './src/migrations',
    },
}
module.exports = config