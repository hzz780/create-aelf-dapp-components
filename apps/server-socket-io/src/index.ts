import { Server } from "socket.io";

console.log('hello');
const io = new Server({
  path: '/socket-io/'
});

io.on('connection', (socket) => {
  // ...
  socket.on('disconnect', (reason) => {
    console.log('disconnect reason:', reason);
  });

  socket.on('hello', (arg) => {
    console.log(arg); // world
    socket.emit('answer', arg);
  });

  setInterval(() => {
    socket.emit('time', Date.now());
  }, 3000);

  socket.on('question-chat-gpt', (arg, callback) => {
    console.log(arg); // world
    callback({
      status: 'ok',
      text: 'question-chat-gpt callback text' + Math.floor(Math.random() * 1000)
    })
  });
});

io.listen(3006);
