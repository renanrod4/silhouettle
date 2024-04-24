var imgdiv = document.querySelector("div.challenge");
var attemptsdiv = document.querySelector("div.attempt.contry");
var distancediv = document.querySelector("div.attempt.distance");
var directiondiv = document.querySelector("div.attempt.direction");
let won = false;
let gameover = false;
let attemptsList = [];
let randomnum = Math.floor(Math.random() * (246 - 0)) + 0;
let AttemptCordinates;
let distance;
var attemptsdivelements;
let answerDiv = document.querySelector("div#answer")
contryimage = abr[randomnum].toLowerCase();
console.log(abr[randomnum]);
imgdiv.innerHTML =
    "<img src='svgs/" + contryimage + ".svg' alt='" + contryimage + "'>";

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

function calcularAngulo(x, y) {
    return Math.atan2(y, x) * (180 / Math.PI);
}

function rotacionarSeta(x, y) {
    let angulo = calcularAngulo(x, y);
    let div = document.querySelectorAll(".arrow");
    //        i.style.transform = "rotate(" + angulo + "deg)";
    div[div.length-1].style.transform = "rotate(" + angulo + "deg)";


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
        attemptsdivelements = document.querySelectorAll(
            "div.attempt.contry>div"
        );
        attemptsdivelements.forEach((self) => {
            if (self.innerText != contrynames[randomnum]) {
                self.style.color = "#BF616A";
            }
        });
        let AnswerContry = input.value;
        if (clearstr(input.value) == clearstr("Geórgia")) {
            AnswerContry = "Sakartvelo";
        }

        getCountryCoordinates(AnswerContry, function (error, coordinates) {
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

            let deltaLat = answerCordinates.lat - AttemptCordinates.lat;
            let deltaLng = answerCordinates.lng - AttemptCordinates.lng;
            if(deltaLat != 0 && deltaLng!=0){
                directiondiv.innerHTML += "<div class='arrow'>⬆️</div>";
            }else{
                directiondiv.innerHTML += "<div class='arrow'>🎉</div>";
            }
            rotacionarSeta(deltaLat, deltaLng);
        });
    }

    if (input.value == contrynames[randomnum]) {
        if(!won){
            win(attemptsList.length + 1);
        }
    } else {
        if (attemptsList.length > 5 - 1) {
            if(!gameover){
                lose();
            }
        }
    }
}
function win(attempts) {
    won = true
    attemptsdivelements = document.querySelectorAll("div.attempt.contry>div");

    attemptsdivelements.forEach((self) => {
        if (self.innerText == contrynames[randomnum]) {
            self.style.color = "#A3BE8C";
        }
    });
    input.style.display = "none";
}
function lose() {
    gameover = true
    input.style.display = "none";
    datalist.style.display = "none!important";
    answerDiv.style.display = "flex";
    answerDiv.innerHTML = "<p>"+contrynames[randomnum]+"</p>";
    fadeoff(answerDiv)
}
function fadeoff(element){
    setTimeout(() => {
        element.style.display = "none";
    }, 5000);
}