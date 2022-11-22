import { createPool } from 'mysql2/promise'

const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: 'N3wP@ssW0rdSecurity',
    port:3306,
    database: 'escribania'
})

export { pool }