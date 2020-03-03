var optionsCircle = {
    series: [0],
    colors: ["#421309"],
    chart: {
        height: 450,
        type: 'radialBar',
        offsetY: -10,
        offsetX: 100
    },
    plotOptions: {
        radialBar: {
            startAngle: -135,
            endAngle: -40,
            hollow: {
                margin: 0,
                size: "70%",
            },
            track: {
                background: '#1b213b',
                startAngle: -135,
                endAngle: -40,
                dropShadow: {
                    enabled: true,
                    top: 2,
                    left: 0,
                    blur: 4,
                    opacity: 0.15
                }
            },
            dropShadow: {
                enabled: true,
                top: 2,
                left: 0,
                blur: 4,
                opacity: 0.15
            },
            dataLabels: {
                name: {
                    fontSize: '0px',
                    color: '#fff',
                    offsetY: -130
                },
                value: {
                    offsetY: 76,
                    fontSize: '0px',
                    color: '#fff',
                    dropShadow: {
                        enabled: true,
                        top: 2,
                        left: 0,
                        blur: 4,
                        opacity: 0.15
                    },
                    formatter: function (val) {
                        return val + ' Km/h';
                    }
                }
            }
        }
    },
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'light',
            type: "vertical",
            inverseColors: true,
            gradientToColors: ["#992109"],
            stops: [0, 100]
        },
    },
    stroke: {
        dashArray: 2
    },
};

var chartRotacao = new ApexCharts(document.querySelector("#chartRotacao"), optionsCircle);
chartRotacao.render();

var labelRotacao = document.querySelector("#label-rotacao");

window.setInterval(function () {

    let length = dataArray['rotation'].length;
    let value = dataArray['rotation'][length - 1];

    chartRotacao.updateSeries([value / 40]);
    labelRotacao.textContent = value;

}, INTERVAL);