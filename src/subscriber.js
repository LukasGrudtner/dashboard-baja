// /**
//  * Create a client instance.
//  */
// var client = new Paho.MQTT.Client("192.168.25.4", Number(1883), "clientId");
//
// /**
//  * Set callback handlers.
//  */
// client.onConnectionLost = onConnectionLost;
// client.onMessageArrived = onMessageArrived;
//
// /**
//  * Connect the client.
//  */
// client.connect({onSuccess: onConnect});
//
// /**
//  * Called when the client connects.
//  */
// function onConnect() {
//     /* Once a connection has been made, make a subscription and send a message */
//     console.log("onConnect");
//     client.subscribe("data");
//     // message = new Paho.MQTT.Message("Hello");
//     // message.destinationName = "World";
//     // client.send(message);
//
// }
//
// /**
//  * Subscribe.
//  */
// function subscribe() {
//     client.subscribe("data");
// }
//
// /**
//  * Called when the client loses its connection.
//  */
// function onConnectionLost(responseObject) {
//     if (responseObject.errorCode !== 0) {
//         console.log("onConnectionLost: " + responseObject.errorMessage);
//     }
// }
//
// /**
//  * Called when a message arrives.
//  */
// function onMessageArrived(message) {
//     console.log("onMessageArrived: " + message.payloadString);
// }

// var mqtt = require('mqtt');
var cliente = mqtt.connect('ws://192.168.25.4:3000/mqtt');
// var cliente = mqtt.connect("mqtt://localhost");
// var cliente = mqtt.connect();
cliente.subscribe('mqtt/data');

cliente.on('connect', () => {
    cliente.subscribe('mqtt/data');
});

let countMessages = 0;

cliente.on('message', (topic, message) => {
    let data = JSON.parse(message.toString());
    // console.log(data);

    dataArray['speed'].push(data.speed);
    dataArray['rotation'].push(data.rotation);
    dataArray['gear'].push(data.gear);
    dataArray['temperatureEnviroment'].push(data.temperatureEnviroment);
    dataArray['temperatureObject'].push(data.temperatureObject);
    dataArray['stabilizerBar'].push(data.stabilizerBar);
    dataArray['fuelTank'].push(data.fuelTank);
    dataArray['accelerometer'].push(data.accelerometer);

    if (dataArray.length > 20) {
        dataArray.slice(0, 1);
    }

    if (countMessages >= 25) {
        dataArray.slice(0, 20);
        countMessages = 0;
    }
});
