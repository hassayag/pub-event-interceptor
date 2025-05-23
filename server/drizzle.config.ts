import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: 'postgresql', // 'mysql' | 'sqlite' | 'turso'
  schema: './src/db/schema.ts',
  dbCredentials: {
    host: 'localhost',
    ssl: false,
    user: 'admin',
    password: 'password',
    database: 'pubx',
    port: 5432
  }
})
