let iterations = 0;
let data1 = 0;
let data2 = 0;

window.Apex = {
    chart: {
        foreColor: '#fff',
        toolbar: {
            show: false
        },
    },
    colors: ['#de9c1e', '#06c888', '#0680de'],
    stroke: {
        width: 2
    },
    dataLabels: {
        enabled: false
    },
    grid: {
        borderColor: "#40475D",
    },
    xaxis: {
        axisTicks: {
            color: '#333'
        },
        axisBorder: {
            color: "#333"
        }
    },
    fill: {
        type: 'gradient',
        gradient: {
            gradientToColors: ['#835c12', '#047b54', '#014981']
        },
    },
    tooltip: {
        theme: 'dark',
        x: {
            formatter: function (val) {
                return moment(new Date(val)).format("HH:mm:ss")
            }
        },
    },
    yaxis: {
        decimalsInFloat: 2,
        opposite: true,
        labels: {
            offsetX: -10
        }
    }
};

var dataArraySpeed = [];
var dataArrayRotation = [];
var base = moment.now();

var optionsChartSpeedVsRotation = {
    series: [{
        name: 'Velocidade',
        data: dataArraySpeed,
    }, {
        name: 'Rotação',
        data: dataArrayRotation
    }],
    chart: {
        id: 'realtime',
        animations: {
            enabled: true,
            easing: 'linear',
            dynamicAnimation: {
                speed: 1000
            }
        },
        height: 350,
        type: 'line',
        zoom: {
            enabled: false
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth',
        width: 2,
    },
    title: {
        text: 'Velocidade vs. Rotação',
        align: 'left'
    },
    // grid: {
    //     row: {
    //         colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
    //         opacity: 0.5
    //     },
    // },
    xaxis: {
        type: 'datetime',
        range: 40000,
        labels: {
            formatter: function (value, timestamp, index) {
                return moment(new Date(value)).format("HH:mm:ss")
            },
        }
    },
    yaxis: [
        {
            opposite: true,
            axisTicks: {
                show: true
            },
            axisBorder: {
                show: true,
                color: "#de9c1e"
            },
            labels: {
                style: {
                    colors: "#de9c1e"
                },
                formatter: (value) => {
                    return parseFloat(value.toFixed(2));
                },
            },
            title: {
                text: "Velocidade",
                style: {
                    color: "#de9c1e"
                }
            }
        },
        {
            opposite: false,
            axisTicks: {
                show: true
            },
            axisBorder: {
                show: true,
                color: "#06c888"
            },
            labels: {
                style: {
                    colors: "#06c888",
                },
                formatter: (value) => {
                    return parseFloat(value.toFixed(2));
                },
            },
            title: {
                text: "Rotação",
                style: {
                    color: "#06c888",
                }
            }
        }
    ],
};

var chartSpeedVsRotation = new ApexCharts(document.querySelector("#chartSpeedVsRotation"), optionsChartSpeedVsRotation);
chartSpeedVsRotation.render();

let counterSpeedVsRotation = 0;
window.setInterval(function () {

    let length = dataArray['speed'].length;

    dataArraySpeed.push([base, dataArray['speed'][length - 1]]);
    dataArrayRotation.push([base, dataArray['rotation'][length - 1]]);

    base += INTERVAL;

    chartSpeedVsRotation.updateSeries(
        [
            {
                data: dataArraySpeed
            },
            {
                data: dataArrayRotation
            }
        ]
    );

    if (counterSpeedVsRotation++ === 120) {
        counter = 0;
        resetDataAccelerometer();
    }

}, INTERVAL);

function resetDataAccelerometer() {
    dataArraySpeed = dataArraySpeed.slice(dataArraySpeed.length - 60, dataArraySpeed.length);
    dataArrayRotation = dataArrayRotation.slice(dataArrayRotation.length - 60, dataArrayRotation.length);
}