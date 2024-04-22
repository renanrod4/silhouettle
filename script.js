var imgdiv = document.querySelector("div.challenge");
var attemptsdiv = document.querySelector("div.attempt.contry");
var distancediv = document.querySelector("div.attempt.distance");
var directiondiv = document.querySelector("div.attempt.direction");
let attemptsList = [];
let randomnum = Math.floor(Math.random() * (246 - 0)) + 0;
let AttemptCordinates;
let distance;
console.log(abr[randomnum]);
imgdiv.innerHTML =
    "<img src='svgs/" +
    abr[randomnum].toLowerCase() +
    ".svg' alt='" +
    abr[randomnum].toLowerCase() +
    "'>";

function Calculatedistance(lat1, lon1, lat2, lon2, unit) {
    if (lat1 == lat2 && lon1 == lon2) {
        return 0;
    } else {
        var radlat1 = (Math.PI * lat1) / 180;
        var radlat2 = (Math.PI * lat2) / 180;
        var theta = lon1 - lon2;
        var radtheta = (Math.PI * theta) / 180;
        var dist =
            Math.sin(radlat1) * Math.sin(radlat2) +
            Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        if (dist > 1) {
            dist = 1;
        }
        dist = Math.acos(dist);
        dist = (dist * 180) / Math.PI;
        dist = dist * 60 * 1.1515;
        if (unit == "K") {
            dist = dist * 1.609344;
        }
        if (unit == "N") {
            dist = dist * 0.8684;
        }
        return dist;
    }
}

function direction(latattempt, lngattempt, latanswer, lnganswer) {
    // Parei aqui
}



function verify() {
    if (attemptsdiv.childElementCount > 0) {
        attemptsList = [];
        attemptsdiv.childNodes.forEach((i) => {
            attemptsList.push(i.innerText);
        });
    }
    if (!attemptsList.includes(input.value)) {
        attemptsdiv.innerHTML += "<div>" + input.value + "</div>";
        getCountryCoordinates(input.value, function (error, coordinates) {
            if (error) {
                console.error("Error:", error);
            } else {
                AttemptCordinates = coordinates;

                distance = Calculatedistance(
                    AttemptCordinates.lat,
                    AttemptCordinates.lng,
                    answerCordinates.lat,
                    answerCordinates.lng,
                    "K"
                );

                
                distancediv.innerHTML +=
                    "<div>" + Math.floor(distance) + " Km</div>";
            }
        });
    }

    if (input.value == contrynames[randomnum]) {
        win(attemptsList.length + 1);
    } else {
        if (attemptsList.length > 5 - 1) {
            lose();
        }
    }
}
function win(attempts) {
    console.log("você venceu em " + attempts + " tentativas!");
}
function lose() {
    console.log("PERDEU ");
}
