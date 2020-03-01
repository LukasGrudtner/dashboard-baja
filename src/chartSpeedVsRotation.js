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
    colors: ['#ff0000', '#ffd900', '#ffffff'],
    stroke: {
        width: 3
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
            gradientToColors: ['#870000', '#806d00', '#808080']
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

var dataArray1 = [];
var dataArray2 = [];
var base = moment.now();

var optionsChartSpeedVsRotation = {
    series: [{
        name: 'Velocidade',
        data: dataArray1,
    }, {
        name: 'Rotação',
        data: dataArray2
    }],
    chart: {
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
        curve: 'straight',
        width: 5,
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
        range: 300000,
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
                color: "#ff0000"
            },
            labels: {
                style: {
                    colors: "#ff0000"
                },
                formatter: (value) => {
                    return parseFloat(value.toFixed(2));
                },
            },
            title: {
                text: "Velocidade",
                style: {
                    color: "#ff0000"
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
                color: "#ffd900"
            },
            labels: {
                style: {
                    colors: "#ffd900",
                },
                formatter: (value) => {
                    return parseFloat(value.toFixed(2));
                },
            },
            title: {
                text: "Rotação",
                style: {
                    color: "#ffd900",
                }
            }
        }
    ],
};

var chartSpeedVsRotation = new ApexCharts(document.querySelector("#chartSpeedVsRotation"), optionsChartSpeedVsRotation);
chartSpeedVsRotation.render();

window.setInterval(function () {

    var data1 = getRandom();
    var data2 = getRandom()*(-1.2);


    dataArray1.push([base, data1]);
    dataArray2.push([base, data2]);

    base += INTERVAL;

    chartSpeedVsRotation.updateSeries(
        [
            {
                data: dataArray1
            },
            {
                data: dataArray2
            }
        ]
    );

    if (dataArray1.length >= 300) {
        dataArray1.shift();
    }

    if (dataArray2.length >= 300) {
        dataArray2.shift();
    }

    console.log(dataArray1);
}, INTERVAL);