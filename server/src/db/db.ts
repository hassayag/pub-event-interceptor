import {drizzle} from 'drizzle-orm/node-postgres'

export const db = drizzle({
    connection: {
        host: 'localhost',
        ssl: false,
        user: 'admin',
        password: 'password',
        database: 'pubx',
        port: 5432
      }
})
