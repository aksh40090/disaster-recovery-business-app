const http = require("http");
const PORT = process.env.PORT || 4001;
const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json");
    if (req.url === "/health") {
        res.end(JSON.stringify({
            service: "Product Service",
            status: "healthy",
            version: "v2"
        }));
    }
    else if (req.url === "/products") {
        res.end(JSON.stringify([
            { id: 1, name: "Laptop", price: 55000 },
            { id: 2, name: "Keyboard", price: 1200 }
        ]));
    }
    else {
        res.statusCode = 404;
        res.end(JSON.stringify({
            error: "Route not found"
        }));
    }
});
server.listen(PORT, () => {
    console.log(`Product Service running on port ${PORT}`);
});
