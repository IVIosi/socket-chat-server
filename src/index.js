const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const port = process.env.PORT || 9000;

io.on("connection", function (socket) {
  console.log("a user connected");

  socket.on("chat message", function (msg) {
    io.emit("chat message", msg);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

http.listen(port, function () {
  console.log("listening on *:" + port);
});
