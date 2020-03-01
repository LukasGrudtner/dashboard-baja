let INTERVAL = 1000;

let iteration = 0;
let trigoStrength = 3;

function getRangeRandom(yrange) {
    return Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
}

function getRandom() {
    const i = iteration++;
    return (Math.sin(i / trigoStrength) * (i / trigoStrength) + i / trigoStrength + 1) * (trigoStrength * 2);
}

function generateMinuteWiseTimeSeries(baseval, count, yrange) {
    let i = 0;
    let series = [];
    while (i < count) {
        const x = baseval;
        const y = ((Math.sin(i / trigoStrength) * (i / trigoStrength) + i / trigoStrength + 1) * (trigoStrength * 2));

        series.push([x, y]);
        baseval += 9000;
        i++;
    }
    return series;
}