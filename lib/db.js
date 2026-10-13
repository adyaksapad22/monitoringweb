import mysql from 'mysql2/promise';

// Konfigurasi koneksi ke database lokal Anda (XAMPP / MySQL)
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '', // Kosongkan jika pakai XAMPP default
    database: 'db_monitoring',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

export default pool;