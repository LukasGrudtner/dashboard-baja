// var cliente = mqtt.connect(SUBSCRIBER_ADDRESS);
// var mqtt = require('mqtt');
// var cliente = mqtt.connect("ws://192.168.25.4:3000/mqtt");
var cliente = mqtt.connect("ws://192.168.0.100:3000/mqtt");
// var cliente = mqtt.connect("ws://10.42.0.1:3000/mqtt");

cliente.on('connect', () => {
    console.log("Connected");
    cliente.subscribe("mqtt/data");
});

let countMessages = -5;

cliente.on('message', (topic, message) => {

    let data = JSON.parse(message.toString());

    dataArray['speed'].push(data.s);
    dataArray['rotation'].push(data.r);
    dataArray['gear'].push(data.g);
    dataArray['temperatureEnvironment'].push(data.te);
    dataArray['temperatureObject'].push(data.to);
    dataArray['stabilizerBar'].push(data.sb);
    dataArray['fuelTank'].push(data.f);
    dataArray['accelerometer'].push(data.a);


    if (countMessages++ >= 20) {
        countMessages = 0;

        dataArray['speed'].splice(0, 20);
        dataArray['rotation'].splice(0, 20);
        dataArray['gear'].splice(0, 20);
        dataArray['temperatureEnvironment'].splice(0, 20);
        dataArray['temperatureObject'].splice(0, 20);
        dataArray['stabilizerBar'].splice(0, 20);
        dataArray['fuelTank'].splice(0, 20);
        dataArray['accelerometer'].splice(0, 20);
    }
    console.log(data);
});
