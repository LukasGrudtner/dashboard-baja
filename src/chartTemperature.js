let dataArrayAmbiente = [];
let dataArrayObjeto = [];

var optionsChartTemperature = {
    series: [{
        name: 'Ambiente',
        type: 'area',
        data: dataArrayAmbiente,
    }, {
        name: 'Objeto',
        type: 'line',
        data: dataArrayObjeto,
    }],
    chart: {
        height: 350,
        type: 'line',
    },
    stroke: {
        curve: 'smooth'
    },
    fill: {
        type: 'solid',
        opacity: [0.35, 1],
    },
    markers: {
        size: 0
    },
    yaxis: [
        {
            title: {
                text: 'Temperatura',
            },
        }
    ],
    // tooltip: {
    //     shared: true,
    //     intersect: false,
    //     // y: {
    //     //     formatter: function (y) {
    //     //         return y.toFixed(2) + "°C";
    //     //     }
    //     // }
    // }
};

var chartTemperature = new ApexCharts(document.querySelector("#chartTemperature"), optionsChartTemperature);
chartTemperature.render();

window.setInterval(function () {

    var dataAmbiente = getRandom();
    var dataObjeto = getRandom();

    dataArrayAmbiente.push([base, dataAmbiente]);
    dataArrayObjeto.push([base, dataObjeto]);

    base += INTERVAL;

    chartTemperature.updateSeries(
        [
            {
                data: dataAmbiente
            },
            {
                data: dataObjeto
            }
        ]
    );

    if (dataArrayAmbiente.length >= 300) {
        dataArrayAmbiente.shift();
    }

    if (dataArrayObjeto.length >= 300) {
        dataArrayObjeto.shift();
    }
}, INTERVAL);