// services/productService.js

const productDao = require('../daos/productDao');

module.exports = {
    async getAllProducts() {
        try {
            return await productDao.getAllProducts();
        } catch (error) {
            throw error;
        }
    },

    async createProduct(name, description, price, image) {
        try {
            return await productDao.createProduct(name, description, price, image);
        } catch (error) {
            throw error;
        }
    },

    async deleteProduct(productId) {
        try {
            const isDeleted = await productDao.deleteProduct(productId);
            if (!isDeleted) {
                throw new Error(`Product with ID ${productId} not found`);
            }
        } catch (error) {
            throw error;
        }
    },
};
