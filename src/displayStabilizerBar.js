var stabilizerBar = document.querySelector("#stabilizer-bar");
var ENABLED_CLASS = "enabled";
var DISABLED_CLASS = "disabled";

function setStabilizerBar(hasStabilizerBar) {
    if (hasStabilizerBar) {
        stabilizerBar.classList.remove(DISABLED_CLASS);
        stabilizerBar.classList.add(ENABLED_CLASS);
    } else {
        stabilizerBar.classList.remove(ENABLED_CLASS);
        stabilizerBar.classList.add(DISABLED_CLASS);
    }
}

window.setInterval(function () {

    let length = dataArray['stabilizerBar'].length;
    let value = dataArray['stabilizerBar'][length - 1];

    setStabilizerBar(value);
}, 1000);
