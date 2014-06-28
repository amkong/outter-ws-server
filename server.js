var app, express, io, server;

express = require("express");

app = express();

server = require("http").Server(app);

io = require("socket.io")(server);

server.listen(4444);

io.on("connection", function(socket) {
  console.log("message sent from server");
  socket.emit("message", {
    body: "hi",
    category: "fyi",
    room: "main"
  });
  console.log("{ body: \"hi\", category: \"fyi\", to: \"andrew@gmail.com\" }");
  socket.on("disconnect", function() {
    io.sockets.emit("user disconnected");
    console.log("user disconnected");
  });
});
