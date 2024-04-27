function verify() {
    if(contrynames.includes(input.value)){
        let AttemptBoxContent = [];

        if (!attemptsList.includes(input.value)) {
            AttemptBoxContent[0] =
                "<div class='attemptbox'><div class='attempt contry'><div>" +
                input.value +
                "</div></div>";
            attemptsdivelements = document.querySelectorAll(
                "div.attempt.contry>div"
            );
    
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
    
                    AttemptBoxContent[1] =
                        "<div class='attempt distance'><div>" +
                        Math.floor(distance) +
                        " Km</div></div>";
                }
    
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
                    if (self.innerText == contrynames[randomnum]) {
                        self.style.color = "#A3BE8C";
                    }
                });
                attemptsContriesDiv.forEach((self) => {
                    if (self.innerText != contrynames[randomnum]) {
                        self.style.color = "#BF616A";
                    }
                });
    
    
                rotacionarSeta(deltaLat, deltaLng);
            });
            console.log(AttemptBoxContent);
        }
    
        if (input.value == contrynames[randomnum]) {
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
