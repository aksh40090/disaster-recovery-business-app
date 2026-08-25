const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Sample inventory data
let products = [
    {
        id: 1,
        name: "Laptop",
        quantity: 10,
        price: 55000
    },
    {
        id: 2,
        name: "Keyboard",
        quantity: 25,
        price: 1200
    }
];

// Health check endpoint
app.get("/health", (req, res) => {
    res.json({
        status: "healthy",
        application: "Business Inventory Application",
        region: process.env.REGION || "Primary Region",
        timestamp: new Date().toISOString()
    });
});

// Get all products
app.get("/api/products", (req, res) => {
    res.json(products);
});

// Add a product
app.post("/api/products", (req, res) => {
    const { name, quantity, price } = req.body;

    if (!name || quantity === undefined || price === undefined) {
        return res.status(400).json({
            message: "Name, quantity and price are required."
        });
    }

    const product = {
        id: products.length + 1,
        name,
        quantity: Number(quantity),
        price: Number(price)
    };

    products.push(product);

    res.status(201).json(product);
});

// Delete a product
app.delete("/api/products/:id", (req, res) => {
    const id = Number(req.params.id);

    const originalLength = products.length;

    products = products.filter(product => product.id !== id);

    if (products.length === originalLength) {
        return res.status(404).json({
            message: "Product not found."
        });
    }

    res.json({
        message: "Product deleted successfully."
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Business Inventory Application running on port ${PORT}`);
    console.log(`Health check: http://localhost:${PORT}/health`);
});