let dataArrayX = [];
let dataArrayY = [];
let dataArrayZ = [];

var optionsChartAccelerometer = {
    series: [{
        name: 'x',
        data: dataArrayX
    }, {
        name: 'y',
        data: dataArrayY
    }, {
        name: 'z',
        data: dataArrayZ
    }],
    chart: {
        type: 'area',
        height: 350
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'straight'
    },

    title: {
        text: 'Acelerômetro',
        align: 'left',
        style: {
            fontSize: '14px'
        }
    },
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
        range: 60000,
    },
    yaxis: {
        tickAmount: 4,
        floating: false,

        labels: {
            style: {
                colors: '#8e8da4',
            },
            offsetY: -7,
            offsetX: 0,
        },
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false
        }
    },
    fill: {
        opacity: 0.5
    },
    tooltip: {
        x: {
            format: "yyyy",
        },
        fixed: {
            enabled: false,
            position: 'topRight'
        }
    },
    grid: {
        yaxis: {
            lines: {
                offsetX: -30
            }
        },
        padding: {
            left: 20
        }
    }
};

var chartAccelerometer = new ApexCharts(document.querySelector("#chartAccelerometer"), optionsChartAccelerometer);
chartAccelerometer.render();

window.setInterval(function () {

    var dataX = getRandom();
    var dataY = getRandom()*(-1.2);
    var dataZ = getRandom()*(-1.5);

    dataArrayX.push([base, dataX]);
    dataArrayY.push([base, dataY]);
    dataArrayZ.push([base, dataZ]);

    base += INTERVAL;

    chartAccelerometer.updateSeries(
        [
            {
                data: dataArrayX
            },
            {
                data: dataArrayY
            },
            {
                data: dataArrayZ
            }
        ]
    );

    if (dataArray1.length >= 60) {
        dataArray1.shift();
    }

    if (dataArray2.length >= 60) {
        dataArray2.shift();
    }

    console.log(dataArray1);

}, INTERVAL);