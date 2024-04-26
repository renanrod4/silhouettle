var imgdiv = document.querySelector("div.challenge");

var distancediv = document.querySelector("div.attempt.distance");
var directiondiv = document.querySelector("div.attempt.direction");
let input = document.querySelector("input[type='text']");
let datalist = document.querySelector("ul");
let dataelement = document.querySelectorAll("li");
let attemptsDiv = document.querySelector("div.attempts");
let answerDiv = document.querySelector("div#answer");
let attemptsContriesDiv = document.querySelectorAll("div.attempt.contry");

let won = false;
let gameover = false;
let attemptsList = [];
let randomnum = Math.floor(Math.random() * (contrynames.length-1 - 0)) + 0;

let AttemptCordinates;
let distance;
var attemptsdivelements;
let countriesWithoutIslands;
contryimage = abr[randomnum].toLowerCase();
if (islands.includes(contrynames[randomnum])) {

    let reducechance = Math.floor(Math.random() * (8 - 0)) + 0;
    console.log(reducechance);
    if (reducechance != 1) {
        countriesWithoutIslands = contrynames.filter(function (el) {
            return !islands.includes(el);
            
        });
        let runloop = true;
        while(runloop){
            randomnum = Math.floor(Math.random() * (contrynames.length-1 - 0)) + 0;
            contryimage = abr[randomnum].toLowerCase();
            if(!islands.includes(contrynames[randomnum])){
                runloop = false;
            }
        }
    }
} else {
}
console.log(contrynames[randomnum]+"  "+abr[randomnum]);

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
    div[div.length - 1].style.transform = "rotate(" + angulo + "deg)";
}

function win(attempts) {
    won = true;
    attemptsContriesDiv = document.querySelectorAll("div.attempt.contry>div");

    input.style.display = "none";
}
function lose() {
    gameover = true;
    input.style.display = "none";
    datalist.style.display = "none!important";
    answerDiv.style.display = "flex";
    answerDiv.innerHTML = "<p>" + contrynames[randomnum] + "</p>";
    fadeoff(answerDiv);
}
function fadeoff(element) {
    setTimeout(() => {
        element.style.display = "none";
    }, 5000);
}
