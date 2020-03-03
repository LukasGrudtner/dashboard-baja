var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://192.168.25.4');

function getRangeRandom(yrange) {
    return Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
}

client.on('connect', () => {
    setInterval(() => {
        let data = generateData();

        client.publish('mqtt/data', JSON.stringify(data));
        console.log('Message sent');
    }, 1000);
});

function generateData() {
    return {
        speed: getRangeRandom({min: 0, max: 100}),
        rotation: getRangeRandom({min: 0, max: 4000}),
        gear: getRangeRandom({min: 0, max: 3}),
        temperatureEnviroment: getRangeRandom({min: 0, max: 125}),
        temperatureObject: getRangeRandom({min: 0, max: 125}),
        stabilizerBar: getRangeRandom({min: 0, max: 1}),
        fuelTank: getRangeRandom({min: 0, max: 1}),
        accelerometer: {
            x: getRangeRandom({min: 0, max: 100}),
            y: getRangeRandom({min: 0, max: 100}),
            z: getRangeRandom({min: 0, max: 100}),
        }
    }
}