// routes/productRoutes.js

const express = require('express');
const router = express.Router();
const productService = require('../services/productService');

// GET all products
router.get('/', async (req, res) => {
    console.log("hjjkjkjk")
    try {
        const products = await productService.getAllProducts();
        res.json(products);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ error: 'Failed to fetch products' });
    }
});

// POST create a new product
router.post('/', async (req, res) => {
    const { name, description, price, image } = req.body;

    if (!name || !description || !price || !image) {
        return res.status(400).json({ error: 'Please provide all required fields: name, description, price, image' });
    }

    try {
        const productId = await productService.createProduct(name, description, price, image);
        res.status(201).json({ id: productId, name, description, price, image });
    } catch (error) {
        console.error('Error creating product:', error);
        res.status(500).json({ error: 'Failed to create product' });
    }
});

// DELETE a product by ID
router.delete('/:id', async (req, res) => {
    const productId = req.params.id;

    try {
        await productService.deleteProduct(productId);
        res.json({ message: `Product with ID ${productId} deleted successfully` });
    } catch (error) {
        console.error('Error deleting product:', error);
        res.status(500).json({ error: 'Failed to delete product' });
    }
});

module.exports = router;
