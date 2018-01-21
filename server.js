const express = require('express');

const app = express();

app.use(express.static('public'));
const server = app.listen(3000);

console.log("Server is running...");

const socket = require('socket.io');

let io = socket(server);

io.sockets.on('connection', 
    (socket) => { console.log( "New Socket:" + socket.id );
        socket.on('mouse', (data) => {
            socket.broadcast.emit('mouse', data);
        })
      });