var imgdiv = document.querySelector("div.challenge");

var distancediv = document.querySelector("div.attempt.distance");
var directiondiv = document.querySelector("div.attempt.direction");
let input = document.querySelector("input[type='text']");
let submitbutton = document.querySelector("input[type='button']");
let datalist = document.querySelector("ul");
datalist.innerHTML=`<li>Afeganistão</li><li>África do Sul</li><li>Ilhas Alanda</li><li>Albânia</li><li>Alemanha</li><li>Andorra</li><li>Angola</li><li>Anguilla</li><li>Antárctida</li><li>Antígua e Barbuda</li><li>Arábia Saudita</li><li>Argélia</li><li>Argentina</li><li>Arménia</li><li>Aruba</li><li>Austrália</li><li>Austria</li><li>Azerbaijão</li><li>Bahamas</li><li>Bahrein</li><li>Bangladesh</li><li>Barbados</li><li>Bélgica</li><li>Belize</li><li>Benim</li><li>Bermudas</li><li>Bielorrússia</li><li>Butão</li><li>Bolívia</li><li>Bósnia e Herzegovina</li><li>Botsuana</li><li>Ilha Bouvet</li><li>Brasil</li><li>Brunei</li><li>Bulgária</li><li>Burkina Faso</li><li>Burundi</li><li>Camboja</li><li>Camarões</li><li>Canadá</li><li>Cabo Verde</li><li>Ilhas Cayman</li><li>Cazaquistão</li><li>Chade</li><li>Chile</li><li>China</li><li>Chipre</li><li>Ilha Christmas</li><li>Ilhas Cocos</li><li>Colômbia</li><li>Comores</li><li>Congo</li><li>Ilhas Cook</li><li>Coreia do Norte</li><li>Coreia do Sul</li><li>Costa Rica</li><li>Costa do Marfim</li><li>Croácia</li><li>Cuba</li><li>Curaçao</li><li>Dinamarca</li><li>Djibouti</li><li>Dominica</li><li>Equador</li><li>Egito</li><li>El Salvador</li><li>Emirados Árabes Unidos</li><li>Eritreia</li><li>Eslováquia</li><li>Eslovênia</li><li>Espanha</li><li>Estados Unidos</li><li>Ilhas Menores Distantes dos Estados Unidos</li><li>Estônia</li><li>Etiópia</li><li>Ilhas Feroé</li><li>Fiji</li><li>Filipinas</li><li>Finlândia</li><li>França</li><li>Terras Austrais e Antárticas Francesas</li><li>Gabão</li><li>Gana</li><li>Gâmbia</li><li>Geórgia</li><li>Ilhas Geórgia do Sul e Sandwich do Sul</li><li>Gibraltar</li><li>Granada</li><li>Grécia</li><li>Groenlândia</li><li>Guadalupe</li><li>Guam</li><li>Guatemala</li><li>Guernsey</li><li>Guiné</li><li>Guiné-Bissau</li><li>Guiné Equatorial</li><li>Guiana</li><li>Guiana Francesa</li><li>Haiti</li><li>Ilha Heard e Ilhas McDonald</li><li>Honduras</li><li>Hong Kong</li><li>Hungria</li><li>Iémen</li><li>Índia</li><li>Indonésia</li><li>Irã</li><li>Iraque</li><li>Irlanda</li><li>Ilha de Man</li><li>Islândia</li><li>Israel</li><li>Itália</li><li>Jamaica</li><li>Japão</li><li>Jersey</li><li>Jordânia</li><li>Kiribati</li><li>Kuwait</li><li>Laos</li><li>Letônia</li><li>Lesoto</li><li>Líbano</li><li>Libéria</li><li>Líbia</li><li>Liechtenstein</li><li>Lituânia</li><li>Luxemburgo</li><li>Macau</li><li>Macedónia</li><li>Madagáscar</li><li>Malásia</li><li>Malaui</li><li>Maldivas</li><li>Mali</li><li>Malta</li><li>Ilhas Malvinas</li><li>Ilhas Marshall</li><li>Marianas Setentrionais</li><li>Marrocos</li><li>Martinica</li><li>Mauritânia</li><li>Maurícia</li><li>Mayotte</li><li>México</li><li>Mianmar</li><li>Estados Federados da Micronésia</li><li>Moldávia</li><li>Mónaco</li><li>Mongólia</li><li>Montenegro</li><li>Montserrat</li><li>Moçambique</li><li>Namíbia</li><li>Nauru</li><li>Nepal</li><li>Nova Caledônia</li><li>Nova Zelândia</li><li>Nicarágua</li><li>Níger</li><li>Nigéria</li><li>Niue</li><li>Ilha Norfolk</li><li>Noruega</li><li>Omã</li><li>Países Baixos</li><li>Palau</li><li>Palestina</li><li>Panamá</li><li>Papua-Nova Guiné</li><li>Paquistão</li><li>Paraguai</li><li>Peru</li><li>Pitcairn</li><li>Polinésia Francesa</li><li>Polónia</li><li>Portugal</li><li>Porto Rico</li><li>Qatar</li><li>Quênia</li><li>Quirguistão</li><li>Reino Unido</li><li>Território Britânico do Oceano Índico</li><li>Ilhas Virgens Britânicas</li><li>República Centro-Africana</li><li>República Checa</li><li>República Democrática do Congo</li><li>República Dominicana</li><li>Taiwan</li><li>Reunião</li><li>Romênia</li><li>Rússia</li><li>Ruanda</li><li>Saara Ocidental</li><li>Ilhas Salomão</li><li>Samoa</li><li>Samoa Americana</li><li>Saint-Barthélemy</li><li>Santa Helena (território)</li><li>Santa Lúcia</li><li>Saint Martin</li><li>São Cristóvão e Névis</li><li>São Pedro e Miquelão</li><li>São Vicente e Granadinas</li><li>São Marinho</li><li>São Tomé e Príncipe</li><li>Senegal</li><li>Serra Leoa</li><li>Sérvia</li><li>Seychelles</li><li>Singapura</li><li>Síria</li><li>Somália</li><li>Sri Lanka</li><li>Sudão</li><li>Sudão do Sul</li><li>Suécia</li><li>Suazilândia</li><li>Suíça</li><li>Suriname</li><li>Svalbard</li><li>Tadjiquistão</li><li>Tailândia</li><li>Tanzânia</li><li>Timor-Leste</li><li>Togo</li><li>Toquelau</li><li>Tonga</li><li>Trinidad e Tobago</li><li>Tunísia</li><li>Turcomenistão</li><li>Turquia</li><li>Turcas e Caicos</li><li>Tuvalu</li><li>Ucrânia</li><li>Uganda</li><li>Ilhas Virgens Americanas</li><li>Uruguai</li><li>Uzbequistão</li><li>Vanuatu</li><li>Vaticano</li><li>Venezuela</li><li>Vietname</li><li>Wallis e Futuna</li><li>Zâmbia</li><li>Zimbábue</li>`
let dataelement = document.querySelectorAll("li");
let attemptsDiv = document.querySelector("div.attempts");
let answerDiv = document.querySelector("div#answer");
let attemptsContriesDiv = document.querySelectorAll("div.attempt.contry");

let won = false;
let gameover = false;
let attemptsList = [];
let randomnum = Math.floor(Math.random() * (countrynames.length - 0)) + 0;

let AttemptCordinates;
let distance;
var attemptsdivelements;
let countriesWithoutIslands;
countryimage = abr[randomnum].toLowerCase();
if (islands.includes(countrynames[randomnum])) {

    let reducechance = Math.floor(Math.random() * (8 - 0)) + 0;
    console.log(reducechance);
    if (reducechance != 1) {
        countriesWithoutIslands = countrynames.filter(function (el) {
            return !islands.includes(el);
            
        });
        let runloop = true;
        while(runloop){
            randomnum = Math.floor(Math.random() * (countrynames.length - 0)) + 0;
            countryimage = abr[randomnum].toLowerCase();
            if(!islands.includes(countrynames[randomnum])){
                runloop = false;
            }
        }
    }
} else {
}
console.log(countrynames[randomnum]+"  "+abr[randomnum]);

imgdiv.innerHTML =
    "<img src='svgs/" + countryimage + ".svg' alt='" + countryimage + "'>";

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

    prepareNextRound();
}
function lose() {
    gameover = true;
    answerDiv.innerHTML = "<p>" + countrynames[randomnum] + "</p>";
    answerDiv.style.display = "flex";
    fadeoff(answerDiv);
    prepareNextRound();

}
function prepareNextRound(){
    
    input.style.display = "none";
    submitbutton.value = "Próximo"
}


function fadeoff(element) {
    setTimeout(() => {
        element.style.display = "none";
    }, 5000);
}
