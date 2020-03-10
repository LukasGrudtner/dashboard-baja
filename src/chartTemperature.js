let dataArrayAmbiente = [];
let dataArrayObjeto = [];

var optionsChartTemperature = {
    title: {
        text: 'Temperatura CVT',
        align: 'left',
        style: {
            fontSize: '14px'
        }
    },
    series: [{
        name: 'Ambiente',
        type: 'area',
        data: dataArrayAmbiente.slice(),
    }, {
        name: 'CVT',
        type: 'line',
        data: dataArrayObjeto.slice(),
    }],
    chart: {
        height: 350,
        type: 'line',
        id: 'realtime',
        animations: {
            enabled: true,
            easing: 'linear',
            dynamicAnimation: {
                speed: 1000
            }
        },
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
    xaxis: {
        type: 'datetime',
        axisBorder: {
            show: false
        },
        axisTicks: {
            show: false
        },
        labels: {
            show: false
        },
        range: 30000,
    },
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

var counterTemperature = 0;
window.setInterval(function () {

    let lengthEnvironment = dataArray['temperatureEnvironment'].length;
    let lengthObject = dataArray['temperatureObject'].length;

    var dataAmbiente = dataArray['temperatureEnvironment'][lengthEnvironment - 1];
    if (dataAmbiente == null) {
        dataAmbiente = 0;
    }

    var dataObjeto = dataArray['temperatureObject'][lengthObject - 1];
    if (dataObjeto == null) {
        dataObjeto = 0;
    }

    dataArrayAmbiente.push([base, dataAmbiente]);
    dataArrayObjeto.push([base, dataObjeto]);

    updateData();
    base += INTERVAL;

    chartTemperature.updateSeries(
        [
            {
                data: dataArrayAmbiente
            },
            {
                data: dataArrayObjeto
            }
        ]
    );

    if (counterTemperature++ >= 120) {
        counterTemperature = 0;
        resetDataTemperature();
    }

}, INTERVAL);

function resetDataTemperature() {
    dataArrayAmbiente = dataArrayAmbiente.slice(dataArrayAmbiente.length - 60, dataArrayAmbiente.length);
    dataArrayObjeto = dataArrayObjeto.slice(dataArrayObjeto.length - 60, dataArrayObjeto.length);
}

function updateData() {
    for (var i = 0; i < dataArrayX.length - 60; i++) {
        dataArrayX[i] = [dataArrayX[i][0], 0];
        dataArrayY[i] = [dataArrayY[i][0], 0];
        dataArrayZ[i] = [dataArrayZ[i][0], 0];
    }
}