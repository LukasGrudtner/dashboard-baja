var displayTank = document.querySelector("#display-tanque");
var ENABLED_CLASS = "enabled";
var DISABLED_CLASS = "disabled";

function setReserveTank(isTankOnReserve) {
    if (isTankOnReserve) {
        displayTank.classList.remove(DISABLED_CLASS);
        displayTank.classList.add(ENABLED_CLASS);
    } else {
        displayTank.classList.remove(ENABLED_CLASS);
        displayTank.classList.add(DISABLED_CLASS);
    }
}

window.setInterval(function () {

    let length = dataArray['fuelTank'].length;
    let value = dataArray['fuelTank'][length - 1];

    setReserveTank(value);
}, 1000);
