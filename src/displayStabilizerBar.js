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
    setStabilizerBar(getRangeRandom({ min: 0, max: 100 }) % 2);
}, 1000);
