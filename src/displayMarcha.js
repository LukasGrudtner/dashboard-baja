var displayMarcha = document.querySelector("#display-marcha")
displayMarcha.textContent = '2';


window.setInterval(function () {

    displayMarcha.textContent = getRangeRandom({ min: 0, max: 3 });
}, 1000);
