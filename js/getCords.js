var answerCordinates;

function getCountryCoordinates(countryName, callback) {
    let abrCountryName;
    countrynames.forEach((i) => {
        if (clearstr(i) == clearstr(countryName)) {
            abrCountryName = abr[countrynames.indexOf(countryName)];
        }
    });

    var jsonUrl = document.location.href.replace("#","")+"cords/" + clearstr(abrCountryName) + ".json";
    var request = new XMLHttpRequest();
    request.open("GET", jsonUrl, true);

    request.onload = function () {
        if (request.status === 200) {
            var data = JSON.parse(request.responseText);
            var coordinates = null;

            if (data.results && data.results.length > 0 && data.results[0].geometry) {
                coordinates = data.results[0].geometry;
            }
            callback(null, coordinates);
        } else {
            callback("Failed to load JSON file", null);
        }
    };

    request.onerror = function () {
        callback("Unable to connect to server", null);
    };

    request.send();
}

getCountryCoordinates(countrynames[randomnum], function (error, coordinates) {
    if (error) {
        console.error("Error:", error);
    } else {
        answerCordinates = coordinates;
    }
});
