const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: 'http://localhost:4200',
    methods: ["GET", "POST"],
    transports: ['websocket', 'polling'],
    credentials: true
  },
  allowEIO3: true
});

let rooms = [];
const roomItems = {
  chatlog:[],
  pictures:[],
  users:[]
};
const chatMap = new Map();

io.on('connection', (socket) => {

    let previousId;

    socket.on("getRoom", roomId => {
      socket.leave(previousId);
      socket.join(roomId);
      console.log(`Socket ${username} joined room ${roomId}`);
      previousId = roomId;
      socket.emit("room", roomId);
      socket.emit("EnterChatBox", chatMap.get(roomId))
    });

    socket.on('addRoom', room => {
      rooms.push(room);
      console.log(room + " Created");
      chatMap.set(room, [room+" Created"]);
      io.emit("room list", rooms);
    })

    io.emit("room list", rooms);

    let username;

    socket.on("userName", nickname => {
      console.log(socket.id+" has changed to "+nickname);
      username = nickname;
    });

    
      socket.on("message", message=> {
        io.to(previousId).emit('message', username + ': '+message);
        console.log('message: ' + username + ': '+message);
        
        if(chatMap.get(previousId)) {
          chatMap[previousId]=chatMap.get(previousId).push(username + ': '+message);
      }
      console.log(chatMap.get(previousId));
    });
  
    socket.on("leave room", () => {
      console.log(previousId);
    socket.leave(previousId);
    // socket.removeAllListeners('message');
    // socket.on('message');
    console.log(`Socket ${username} joined the Lobby`);
    previousId = "";
    socket.emit("room", "Lobby");
    // socket.removeAllListeners(previousId + 'message');
  });

    io.emit("Rooms", Object.keys(rooms));

  console.log(`Socket ${socket.id} has connected`);

  socket.on("disconnect", () => {
    console.log(`Socket ${username} has disconnected`)
  }
  )

});
server.listen(3000, () => {
  console.log('listening on *:3000');
});