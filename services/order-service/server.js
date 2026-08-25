const http = require("http");
const PORT = process.env.PORT || 4002;
const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json");
    if (req.url === "/health") {
        res.end(JSON.stringify({
            service: "Order Service",
            status: "healthy"
        }));
    }
    else if (req.url === "/orders") {
        res.end(JSON.stringify([
            { id: 101, product: "Laptop", quantity: 2 },
            { id: 102, product: "Keyboard", quantity: 5 }
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
    console.log(`Order Service running on port ${PORT}`);
});
