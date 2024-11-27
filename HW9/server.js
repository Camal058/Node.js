const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = 3000;

app.use(express.static(__dirname + '/public'));

io.on("connection", (socket) => {
    console.log("User connected: ", socket.id);

    socket.on("chatMessage", (message) => {
        console.log(`Message from ${socket.id}: ${message}`);
        
        io.emit("chatMessage", { id: socket.id, message });
    });

    socket.on("disconnect", () => {
        console.log("User disconnected: ", socket.id);
    });
});

server.listen(PORT, () => {
    console.log(`Server is on http://localhost:${PORT}`);
});
