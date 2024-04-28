var answerCordinates;
function getCountryCoordinates(countryName, callback) {
    var api_key = "c4e5fbb881964129b556098ba89ad5c6";
    var api_url = "https://api.opencagedata.com/geocode/v1/json";
    var query = encodeURIComponent(countryName);
    var request_url = api_url + "?q=" + query + "&key=" + api_key;

    var request = new XMLHttpRequest();
    request.open("GET", request_url, true);

    request.onload = function () {
        if (request.status === 200) {
            var data = JSON.parse(request.responseText);
            var coordinates = null;
            if (data.results.length > 0) {
                coordinates = data.results[0].geometry;
            }
            callback(null, coordinates);
        } else if (request.status <= 500) {
            var error = "Unable to geocode! Response code: " + request.status;
            if (request.responseText) {
                var errorData = JSON.parse(request.responseText);
                if (errorData.status && errorData.status.message) {
                    error += "\nError message: " + errorData.status.message;
                }
            }
            callback(error, null);
        } else {
            callback("Server error", null);
        }
    };

    request.onerror = function () {
        callback("Unable to connect to server", null);
    };

    request.send();
}


getCountryCoordinates(countrynames[randomnum], function(error, coordinates) {
    if (error) {
        console.error("Error:", error);
    } else {
        answerCordinates = coordinates;
    }
});
