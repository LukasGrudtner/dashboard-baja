function getRangeRandom(yrange) {
    let valorRetonado = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
    return valorRetonado;
}

function getRandom() {
    var i = iteration;
    return (Math.sin(i / trigoStrength) * (i / trigoStrength) + i / trigoStrength + 1) * (trigoStrength * 2)
}

function generateMinuteWiseTimeSeries(baseval, count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
        var x = baseval;
        var y = ((Math.sin(i / trigoStrength) * (i / trigoStrength) + i / trigoStrength + 1) * (trigoStrength * 2))

        series.push([x, y]);
        baseval += 9000;
        i++;
    }
    return series;
}