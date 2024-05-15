let previous_countries = [];
function verify() {
    if (submitbutton.value == "Enviar") {
        if (attemptsList.length == 0) {
            submited();
        } else {
            let countryAlreadySubmitted = "";
            attemptsList.forEach((i) => {
                if (clearstr(i) == clearstr(input.value)) {
                    countryAlreadySubmitted += "a";
                } else {
                    countryAlreadySubmitted += "e";
                }
            });
            if (!countryAlreadySubmitted.includes("a")) {
                submited();
            }
        }
    } else if (submitbutton.value == "Próximo") {
        previous_countries.push(countrynames[randomnum]);

        //console.log(previous_countries);
        attemptsList = [];
        gameover = false;
        won = false;
        randomnum = Math.floor(Math.random() * (countrynames.length - 0)) + 0;
        if (previous_countries.includes(countrynames[randomnum])) {
            let runloop = true;
            while (runloop) {
                if (previous_countries.includes(countrynames[randomnum])) {
                    console.log(
                        "Caiu um repetido: " +
                            countrynames[randomnum] +
                            ", mas foi substituido"
                    );
                    randomnum =
                        Math.floor(Math.random() * (countrynames.length - 0)) +
                        0;
                } else {
                    if(!previous_countries.includes(countrynames[randomnum])){
                        runloop = false;
                    }
                }
            }
        }

        if (islands.includes(countrynames[randomnum])) {
            let reducechance = Math.floor(Math.random() * (8 - 0)) + 0;
            console.log(reducechance);
            if (reducechance != 1) {
                countriesWithoutIslands = countrynames.filter(function (el) {
                    return !islands.includes(el);
                });
                let runloop = true;
                while (runloop) {
                    randomnum =
                        Math.floor(Math.random() * (countrynames.length - 0)) +
                        0;
                    countryimage = abr[randomnum].toLowerCase();
                    if (!islands.includes(countrynames[randomnum])) {
                        runloop = false;
                    }
                }
            }
        }
        countryimage = abr[randomnum].toLowerCase();

        imgdiv.innerHTML =
            "<img src='svgs/" +
            countryimage +
            ".svg' alt='" +
            countryimage +
            "'>";
        getCountryCoordinates(
            countrynames[randomnum],
            function (error, coordinates) {
                if (error) {
                    console.error("Error:", error);
                } else {
                    answerCordinates = coordinates;
                }
            }
        );
        console.log(countrynames[randomnum] + "  " + abr[randomnum]);
        attemptsDiv.innerHTML = "";
        input.value = "";
        input.style.display = "";
        submitbutton.value = "Enviar";
    }
}
function submited() {
    if (countrynames.includes(input.value)) {
        let AttemptBoxContent = [];
        AttemptBoxContent[0] =
            "<div class='attemptbox'><div class='attempt contry'><div>" +
            input.value +
            "</div></div>";
        attemptsdivelements = document.querySelectorAll(
            "div.attempt.contry>div"
        );

        let AttemptCountry = input.value;


        getCountryCoordinates(AttemptCountry, function (error, coordinates) {
            if (error) {
                console.error("Errora:", error);
            } else {
                AttemptCordinates = coordinates;



            }
            distance = Calculatedistance(
                AttemptCordinates.lat,
                AttemptCordinates.lng,
                answerCordinates.lat,
                answerCordinates.lng,
                "K"
            );

            AttemptBoxContent[1] =
                "<div class='attempt distance'><div>" +
                Math.floor(distance) +
                " Km</div></div>";
            let deltaLat = answerCordinates.lat - AttemptCordinates.lat;
            let deltaLng = answerCordinates.lng - AttemptCordinates.lng;
            if (deltaLat != 0 && deltaLng != 0) {
                AttemptBoxContent[2] =
                    "<div class='attempt direction'><div class='arrow'><i class='fa-solid fa-arrow-up'></i></div></div></div>";
            } else {
                AttemptBoxContent[2] =
                    "<div class='attempt direction'><div class='arrow'>🎉</div></div></div>";
            }
            attemptsDiv.innerHTML +=
                AttemptBoxContent[0] +
                AttemptBoxContent[1] +
                AttemptBoxContent[2];

            if (attemptsDiv.childElementCount > 0) {
                attemptsList = [];
                attemptsContriesDiv =
                    document.querySelectorAll("div.attempt.contry");
                attemptsContriesDiv.forEach((i) => {
                    attemptsList.push(i.innerText);
                });
            }

            attemptsContriesDiv.forEach((self) => {
                if (self.innerText != countrynames[randomnum]) {
                    self.style.color = "#BF616A";
                }
            });
            attemptsContriesDiv.forEach((self) => {
                if (
                    clearstr(self.innerText) ==
                    clearstr(countrynames[randomnum])
                ) {
                    self.style.color = "#A3BE8C";
                }
            });

            rotacionarSeta(deltaLat, deltaLng);
        });

        if (input.value == countrynames[randomnum]) {
            if (!won) {
                win(attemptsList.length + 1);
            }
        } else {
            if (attemptsList.length > 5 - 1) {
                if (!gameover) {
                    lose();
                }
            }
        }
    }
}
