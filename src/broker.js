var mosca = require('mosca');
var settings = {
    http: {
        port: MQTT_PORT,
        bundle: true,
        static: './',
    }
};

var server = new mosca.Server(settings);

server.on('ready', function () {
    console.log("ready");
});

// server.on('published', function (packet, client) {
//     console.log("Published: ", packet);
//     console.log("Client: ", client);
// });

// server.on('clientConnected', function (client) {
// console.log("Client: ", client.id);
// });

// server.on('clientDisconnected', function (client) {
// console.log("Client Disconnected: ", client.id);
// });