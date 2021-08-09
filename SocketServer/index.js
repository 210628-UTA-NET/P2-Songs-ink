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
const userMap = new Map();
const drawMap = new Map();

// canvas stuff
var line_history = [];

io.on('connection', (socket) => {
  
  // for (var i in line_history) {
  //   // socket.emit('draw_line',{ line: line_history[i] });
  //   socket.emit('draw_line',{ line: drawMap.get(previousId)[i] });
  // }

  socket.on('draw_line', function (data) {
    if(drawMap.get(previousId)){
    // line_history.push(data.line);
    drawMap[previousId]=drawMap.get(previousId).push(data.line);
    } else{
      drawMap.set(previousId,[data.line]);
    }
    io.to(previousId).emit('draw_line', { line: data.line } );

  })


    let previousId;

    socket.on("getRoom", roomId => {
      socket.leave(previousId);
      socket.join(roomId);
      console.log(`Socket ${username} joined room ${roomId}`);
      previousId = roomId;
      socket.emit("room", roomId);
      // socket.emit("EnterChatBox", chatMap.get(roomId))
      for (var i in chatMap.get(previousId)) {
        // socket.emit('draw_line',{ line: line_history[i] });
        socket.emit('message',chatMap.get(previousId)[i] );
      }
      for (var i in drawMap.get(previousId)) {
        // socket.emit('draw_line',{ line: line_history[i] });
        socket.emit('draw_line',{ line: drawMap.get(previousId)[i] });
      }
    });

    socket.on('addRoom', room => {
      rooms.push(room);
      console.log(room + " Created");
      chatMap.set(room, [room+" Created"]);
      // drawMap.set(room,["a"]);
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