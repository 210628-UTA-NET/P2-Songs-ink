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
  });
  
  socket.on('Undo', function () {
    // Can change depending on feedback
    let undoHeuristic = 10;
    let temp = Array.from(drawMap.get(previousId));
    for (i = 0; i < undoHeuristic; i++)
    { 
      temp.pop(); 
    }
    drawMap.set(previousId, temp);
    io.to(previousId).emit('redraw', drawMap.get(previousId));
  });

  socket.on('Clear', function () {
    drawMap.set(previousId, []);
    io.to(previousId).emit('clear', drawMap.get(previousId));
  });




    let previousId;

    socket.on("getRoom", roomId => {
      let counter = 0;
      let usercounter = 0;
      let test = true;
      socket.leave(previousId);
      socket.join(roomId);
      console.log(`Socket ${username} joined room ${roomId}`);
      previousId = roomId;
      socket.emit("room", roomId);




      if(userMap.get(previousId)){

        

        while (test) {
          let userCheck = userMap.get(previousId);
          userCheck = userCheck.filter(user => user===tempusernamer);
          if(userCheck!=0){
            usercounter++;
            tempusernamer=tempusernamer+"("+usercounter+")";       
          }else{
            test=false;
          }
        }
        tempusernamer = username+"("+usercounter+")";
        
        



        userMap[previousId]=userMap.get(previousId).push(tempusernamer);
      }





      else{
        userMap.set(previousId,[username]);
      }





      // for (var i in userMap.get(previousId)){
      //   counter++;
      // }
      // if (counter >9){
      //   io.to(previousId).emit('room full');
      // }
      console.log(userMap.get(previousId));
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

    let username = "Test";
    let tempusernamer = username;

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
    });
  
    socket.on("leave room", () => {
      socket.leave(previousId);
      let users=[];
      // socket.removeAllListeners('message');
      // socket.on('message');
      console.log(`Socket ${username} joined the Lobby`);
      users=userMap.get(previousId);
      users=users.filter(user=>user!=tempusernamer);
      console.log(users);
      // userMap[previousId]=userMap.get(previousId).filter(user => user != 'Test');
      userMap.set(previousId,users);
      console.log(userMap.get(previousId));
      io.to(previousId).emit("players", userMap.get(previousId));
      if(users.length==0){
        rooms=rooms.filter(place => place != previousId);
        console.log(rooms);
      }
      io.emit('room list', rooms);
      console.log(users.length);
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

server.listen(process.env.PORT||3000, () => {
  console.log('listening on *:3000');
  
});