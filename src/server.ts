import { Server } from 'socket.io';
import { createServer } from 'node:http';
import express from 'express';
import path from 'node:path';

import { serverConfig } from './config/server.config';

const app = express();
const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: '*',
    }
})

app.use(express.static(path.resolve(__dirname, '..', 'public')));

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.emit('message', 'Hello from server');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});


server.listen(serverConfig.port, () => {
    console.log(`Server running at http://localhost:${serverConfig.port}`);
});

