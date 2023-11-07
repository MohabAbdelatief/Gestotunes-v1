const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 1234 });

const connectedClients = [];

wss.on('connection', function connection(ws) {
  console.log('Client connected');
  connectedClients.push(ws);

  ws.on('message', function incoming(message) {
    const decodedMessage = Buffer.from(message).toString('utf-8');
    console.log('Received message from client:', decodedMessage);

    // Forward the message to all connected clients
    for (let i = 0; i < connectedClients.length; i++) {
      const client = connectedClients[i];
      client.send(decodedMessage);
    }
  });

  ws.on('close', function close() {
    console.log('Client disconnected');
    connectedClients.splice(connectedClients.indexOf(ws), 1);
  });
});
