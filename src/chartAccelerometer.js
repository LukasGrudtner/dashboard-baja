let dataArrayX = [];
let dataArrayY = [];
let dataArrayZ = [];

var optionsChartAccelerometer = {

    series: [{
        name: 'x',
        data: dataArrayX.slice()
    }, {
        name: 'y',
        data: dataArrayY.slice()
    }, {
        name: 'z',
        data: dataArrayZ.slice()
    }],
    chart: {
        // id: 'realtime',
        type: 'area',
        height: 350,
        // animations: {
        //     enabled: true,
        //     easing: 'linear',
        //     dynamicAnimation: {
        //         speed: 1000
        //     }
        // },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth',
        width: 2,
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
        range: 30000,
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
            formatter: (value) => {
                return parseFloat(value.toFixed(2));
            },
        },
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false
        }
    },
    fill: {
        gradient: {
            enabled: true,
            opacityFrom: 0.75,
            opacityTo: 0.25
        }
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

var counter = -60;
window.setInterval(function () {

    let length = dataArray['accelerometer'].length;
    let data = dataArray['accelerometer'][length - 1];

    if (data == null) {
        data = {
            x: 0,
            y: 0,
            z: 0
        };
    }

    updateData();

    dataArrayX.push([base, data.x]);
    dataArrayY.push([base, data.y]);
    dataArrayZ.push([base, data.z]);

    base += INTERVAL;

    chartAccelerometer.updateSeries(
        [
            {
                data: dataArrayX,
            },
            {
                data: dataArrayY,
            },
            {
                data: dataArrayZ
            }
        ]
    );

    if (counter++ === 60) {
        counter = 0;
        resetDataAccelerometer();
    }

}, INTERVAL);

function resetDataAccelerometer() {
    dataArrayX = dataArrayX.slice(dataArrayX.length - 60, dataArrayX.length);
    dataArrayY = dataArrayY.slice(dataArrayY.length - 60, dataArrayY.length);
    dataArrayZ = dataArrayZ.slice(dataArrayZ.length - 60, dataArrayZ.length);
}

function updateData() {
    for (var i = 0; i < dataArrayX.length - 60; i++) {
        dataArrayX[i] = [dataArrayX[i][0], 0];
        dataArrayY[i] = [dataArrayY[i][0], 0];
        dataArrayZ[i] = [dataArrayZ[i][0], 0];
    }
}