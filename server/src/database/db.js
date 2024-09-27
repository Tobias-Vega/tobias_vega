import { createPool } from 'mysql2/promise';

const createMyPool = () => {
    try {
        const pool = createPool({
            database: 'coffees',
            host: 'localhost',
            port: 3306,
            user: 'root'
        })
        return pool;
    } catch (error) {
        console.error('Hubo un error al conectarse con la base de datos')
    }
}

const conn = createMyPool;

export { conn }