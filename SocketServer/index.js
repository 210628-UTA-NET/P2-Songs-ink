const express = require('express');
const app = express();
const http = require('http');
const internal = require('stream');
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
const categoryMap = new Map();
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
  
  socket.on('setWord', function (word) {
    io.to(previousId).emit('getWord', word);
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
  socket.on("getRoom", ({roomId:roomId, username:username}) => {
      let counter = 0;
      let tempUsers=[];
      let usercounter = 0;
      let test = true;
      let tempusernamer=username;
      socket.leave(previousId);
      socket.join(roomId);
      console.log(`Socket ${username} joined room ${roomId}`);
      previousId = roomId;
      socket.emit("room", roomId);
      socket.emit('room-category', categoryMap.get(previousId));
      if(userMap.get(previousId)){
        while (test) {
          let userCheck=[];
          for (var i in userMap.get(previousId)){
            userCheck.push(userMap.get(previousId)[i].name);
          }
          userCheck = userCheck.filter(user => user===tempusernamer);
          if(userCheck!=0){
            usercounter++;
            tempusernamer=username+"("+usercounter+")";       
          }else{
            test=false;
          }
        }
        userMap[previousId]=userMap.get(previousId).push({name:username,score:0,socket:socket.id,gamename:tempusernamer,ActiveDrawer:false});
        console.log(userMap.get(previousId));
      }
      else{
        userMap.set(previousId,[{name:username,score:0,socket:socket.id,gamename:username,ActiveDrawer:true}]);
      }
      socket.emit('update name',tempusernamer)
      // for (var i in userMap.get(previousId)){
      //   counter++;
      // }
      // if (counter >9){
      //   io.to(previousId).emit('room full');
      // }
      io.to(previousId).emit('players',userMap.get(previousId))
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

  socket.on('timer update', timeLeft => {
      io.to(previousId).emit('time left',timeLeft+" seconds remaining in the round!");
  });

  socket.on('times up', () => {
    io.to(previousId).emit('time left',"Time's Up!");
  })


  socket.on('addRoom', data => {
    let category = data.category;
    console.log("Chosen Category: " + category);
    let room = data.room;
    rooms.push(room);
    console.log(room + " Created");
    categoryMap.set(room, category);
    chatMap.set(room, [room+" Created"]);
    // drawMap.set(room,["a"]);
    io.emit("room list", rooms);
  })

  io.emit("room list", rooms);
  console.log(rooms);


  socket.on("message", ({message:message, tempusernamer:tempusernamer})=> {
        io.to(previousId).emit('message', tempusernamer + ': '+message);
        console.log(previousId+' message: ' + tempusernamer + ': '+message);
        if(chatMap.get(previousId)) {
          chatMap[previousId]=chatMap.get(previousId).push(tempusernamer + ': '+message);
      }
  });

  socket.on("leave room", (tempusernamer) => {
    if(previousId){
      socket.leave(previousId);
      let users=[];
      // socket.removeAllListeners('message');
      // socket.on('message');
      users=userMap.get(previousId);
      console.log(users);
      console.log(tempusernamer);
      users=users.filter(user=>user.gamename!=tempusernamer);
      console.log(users);
      // userMap[previousId]=userMap.get(previousId).filter(user => user != 'Test');
      userMap.set(previousId,users);
      console.log(userMap.get(previousId));
      io.to(previousId).emit('players',userMap.get(previousId));

      // io.to(previousId).emit("players", {name:userMap.get(previousId),score:0});
      if(users.length==0){
        rooms=rooms.filter(place => place != previousId);
        console.log(rooms);
      }
      io.emit('room list', rooms);
      console.log(users.length);
      previousId = "MainLobby";
      socket.emit("room", "MainLobby");
      // socket.removeAllListeners(previousId + 'message');
  }});


  io.emit("Rooms", Object.keys(rooms));


  console.log(`Socket ${socket.id} has connected`);


  // socket.on("disconnect", () => {
  //   console.log(`Socket ${username} has disconnected`)
  //   if(userMap.get(previousId!=[])){
  //   socket.leave(previousId);
  //   let users=[];
  //   users=userMap.get(previousId);
  //   users=users.filter(user=>user!=tempusernamer);
  //   userMap.set(previousId,users);
  //     io.to(previousId).emit('players',userMap.get(previousId));
  //   // io.to(previousId).emit("players", {name:userMap.get(previousId),score:0});
  //     if(users.length==0){
  //       rooms=rooms.filter(place => place != previousId);
  //       console.log(rooms);
//   //     }
//   //     io.emit('room list', rooms);
//   // }
// });
});

server.listen(process.env.PORT||3000, () => {
  console.log('listening on *:3000');
});