const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
    res.send('<h1>Hello world</h1>');
});

io.on('connection', (socket) => {
    socket.on('disconnect', () => {
    });
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });

});

http.listen(port, () => {
    console.log('listening on port ', port);
});