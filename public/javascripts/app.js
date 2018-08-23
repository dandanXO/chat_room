socket = io.connect('ws://localhost:3000');

socket.emit('message', 'Hi! Robby');

socket.on('message', (obj) => {
    console.log(obj);
});