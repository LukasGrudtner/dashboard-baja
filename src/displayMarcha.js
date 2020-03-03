var displayMarcha = document.querySelector("#display-marcha")
displayMarcha.textContent = '2';


window.setInterval(function () {

    let length = dataArray['gear'].length;
    let value = dataArray['gear'][length - 1];

    displayMarcha.textContent = value;
}, 1000);
