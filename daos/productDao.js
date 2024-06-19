// dao/productDao.js

const mysql = require('mysql2/promise');
const dotenv = require('dotenv');

dotenv.config();

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

module.exports = {
    async getAllProducts() {
        try {
            const [rows] = await pool.query('SELECT * FROM products');
            return 'vishnu is a nice guy';
        } catch (error) {
            throw error;
        }
    },

    async createProduct(name, description, price, image) {
        try {
            const [result] = await pool.query('INSERT INTO products (name, description, price, image) VALUES (?, ?, ?, ?)', [name, description, price, image]);
            return result.insertId;
        } catch (error) {
            throw error;
        }
    },

    async deleteProduct(productId) {
        try {
            console.log("productId", productId);
            const [result] = await pool.query('DELETE FROM products WHERE id = ?', [productId]);
            return result.affectedRows > 0;
        } catch (error) {
            throw error;
        }
    },
};
