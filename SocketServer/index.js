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

// const express = require('express');
// const app = express();
// const http = require('http');
// const server = http.createServer(app);
// const { Server } = require("socket.io");
// const io = new Server(server);

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });

let rooms = [];
// let users = [];
const roomItems = {
  chatlog:[],
  pictures:[],
  users:[]
};
const chatMap = new Map();

io.on('connection', (socket) => {

    // socket.on("join server", (username) => {
    //   const user = {
    //     username,
    //     id: socket.id,
    //   };
    //   users.push(user);
    //   console.log("user joined");
    //   io.emit("new user", users);
    // })

    // socket.on("add room", (roomName) => {
    //   const room = {
    //     rName: roomName
    //   };
    //   rooms.push(room);
    //   io.emit("new room", rooms);
    //   console.log("room added");
    // });

    // socket.on("join room", (roomName, cb) => {
    //   socket.join(roomName);
    //   cb(messages[roomName]);
    //   console.log("room joined");
    // });

    // socket.on("send message", ({content, to, sender})=> {
    //   const payload = {
    //     content,
    //     to,
    //     sender
    //   };
    //   socket.to(to).emit("new message", payload);
    //   if(messages[to]) {
    //     messages[to].push({
    //       sender,
    //       content
    //     });
    //   }
    // });
    //   socket.on("disconnect", () => {
    //     users = users.filter(u => u.id !== socket.id);
    //     io.emit("new user", users);
    //   });

    //   socket.on("delete room", (roomName) => {
    //     rooms = rooms.filter(r => r.rName !== roomName)
    //     io.emit("new room", rooms);
    //   });
    // });

    let previousId;

  // function safeJoin(currentId) {
  //   socket.leave(previousId);
  //   socket.join(currentId, () => console.log(`Socket ${username} joined room ${currentId}`));
  //   previousId = currentId;
  // };
  

  
    // socket.on('chat message', (msg) => {
    //   io.emit('chat message', msg);
    // });
  

  
    socket.on("getRoom", roomId => {
      socket.leave(previousId);
      socket.join(roomId);
      console.log(`Socket ${username} joined room ${roomId}`);
      previousId = roomId;
      socket.emit("room", roomId);
    //   if(roomItems[roomId].chatlog){}
    //   roomItems[roomId].chatlog.forEach(element => {
    //     socket.emit('message', element)
    //   });
    // }
      socket.emit("EnterChatBox", chatMap.get(roomId))
    });

    // socket.on("addRoom", room => {
    //   rooms[room.id] = room;
    //   safeJoin(room.id);
    //   io.emit("Rooms", Object.keys(rooms));
    //   socket.emit("Room", room);
    //   console.log("Room Created");
    // });

    socket.on('addRoom', room => {
      rooms.push(room);
      console.log(room + " Created");
      chatMap.set(room, [room+" Created"]);
      io.emit("room list", rooms);
    })

    io.emit("room list", rooms);

    let username;

    socket.on("userName", nickname => {
      username = nickname;
    });

    
      socket.on("message", message=> {
        io.to(previousId).emit('message', username + ': '+message);
        console.log('message: ' + username + ': '+message);
        console.log(chatMap.get(previousId));
        if(chatMap.get(previousId)) {
          chatMap[previousId]=chatMap.get(previousId).push(username + ': '+message);
      }
    });
  
    



    io.emit("Rooms", Object.keys(rooms));

  console.log(`Socket ${username} has connected`);

  socket.on("disconnect", () => {
    console.log(`Socket ${username} has disconnected`)
  }
  )

});
server.listen(3000, () => {
  console.log('listening on *:3000');
});