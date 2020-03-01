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
    setReserveTank(getRangeRandom({ min: 0, max: 100 }) % 2);
}, 1000);
