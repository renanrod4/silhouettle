var abr = [
    "AF",
    "ZA",
    "AX",
    "AL",
    "DE",
    "AD",
    "AO",
    "AI",
    "AQ",
    "AG",
    "SA",
    "DZ",
    "AR",
    "AM",
    "AW",
    "AU",
    "AT",
    "AZ",
    "BS",
    "BH",
    "BD",
    "BB",
    "BE",
    "BZ",
    "BJ",
    "BM",
    "BY",
    "BT",
    "BO",
    "BA",
    "BW",
    "BV",
    "BR",
    "BN",
    "BG",
    "BF",
    "BI",
    "KH",
    "CM",
    "CA",
    "CV",
    "KY",
    "KZ",
    "TD",
    "CL",
    "CN",
    "CY",
    "CX",
    "CC",
    "CO",
    "KM",
    "CG",
    "CK",
    "KP",
    "KR",
    "CR",
    "CI",
    "HR",
    "CU",
    "CW",
    "DK",
    "DJ",
    "DM",
    "EC",
    "EG",
    "SV",
    "AE",
    "ER",
    "SK",
    "SI",
    "ES",
    "US",
    "UM",
    "EE",
    "ET",
    "FO",
    "FJ",
    "PH",
    "FI",
    "FR",
    "TF",
    "GA",
    "GH",
    "GM",
    "GE",
    "GS",
    "GI",
    "GD",
    "GR",
    "GL",
    "GP",
    "GU",
    "GT",
    "GG",
    "GN",
    "GW",
    "GQ",
    "GY",
    "GF",
    "HT",
    "HM",
    "HN",
    "HK",
    "HU",
    "YE",
    "IN",
    "ID",
    "IR",
    "IQ",
    "IE",
    "IM",
    "IS",
    "IL",
    "IT",
    "JM",
    "JP",
    "JE",
    "JO",
    "KI",
    "KW",
    "LA",
    "LV",
    "LS",
    "LB",
    "LR",
    "LY",
    "LI",
    "LT",
    "LU",
    "MO",
    "MK",
    "MG",
    "MY",
    "MW",
    "MV",
    "ML",
    "MT",
    "FK",
    "MH",
    "MP",
    "MA",
    "MQ",
    "MR",
    "MU",
    "YT",
    "MX",
    "MM",
    "FM",
    "MD",
    "MC",
    "MN",
    "ME",
    "MS",
    "MZ",
    "NA",
    "NR",
    "NP",
    "NC",
    "NZ",
    "NI",
    "NE",
    "NG",
    "NU",
    "NF",
    "NO",
    "OM",
    "NL",
    "PW",
    "PS",
    "PA",
    "PG",
    "PK",
    "PY",
    "PE",
    "PN",
    "PF",
    "PL",
    "PT",
    "PR",
    "QA",
    "KE",
    "KG",
    "GB",
    "IO",
    "VG",
    "CF",
    "CZ",
    "CD",
    "DO",
    "TW",
    "RE",
    "RO",
    "RU",
    "RW",
    "EH",
    "SB",
    "WS",
    "AS",
    "BL",
    "SH",
    "LC",
    "MF",
    "KN",
    "PM",
    "VC",
    "SM",
    "ST",
    "SN",
    "SL",
    "RS",
    "SC",
    "SG",
    "SY",
    "SO",
    "LK",
    "SD",
    "SS",
    "SE",
    "SZ",
    "CH",
    "SR",
    "SJ",
    "TJ",
    "TH",
    "TZ",
    "TL",
    "TG",
    "TK",
    "TO",
    "TT",
    "TN",
    "TM",
    "TR",
    "TC",
    "TV",
    "UA",
    "UG",
    "VI",
    "UY",
    "UZ",
    "VU",
    "VA",
    "VE",
    "VN",
    "WF",
    "ZM",
    "ZW",
];
let countrynames = [
    "Afeganistão",
    "África do Sul",
    "Ilhas Alanda",
    "Albânia",
    "Alemanha",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antárctida",
    "Antígua e Barbuda",
    "Arábia Saudita",
    "Argélia",
    "Argentina",
    "Arménia",
    "Aruba",
    "Austrália",
    "Austria",
    "Azerbaijão",
    "Bahamas",
    "Bahrein",
    "Bangladesh",
    "Barbados",
    "Bélgica",
    "Belize",
    "Benim",
    "Bermudas",
    "Bielorrússia",
    "Butão",
    "Bolívia",
    "Bósnia e Herzegovina",
    "Botsuana",
    "Ilha Bouvet",
    "Brasil",
    "Brunei",
    "Bulgária",
    "Burkina Faso",
    "Burundi",
    "Camboja",
    "Camarões",
    "Canadá",
    "Cabo Verde",
    "Ilhas Cayman",
    "Cazaquistão",
    "Chade",
    "Chile",
    "China",
    "Chipre",
    "Ilha Christmas",
    "Ilhas Cocos",
    "Colômbia",
    "Comores",
    "Congo",
    "Ilhas Cook",
    "Coreia do Norte",
    "Coreia do Sul",
    "Costa Rica",
    "Costa do Marfim",
    "Croácia",
    "Cuba",
    "Curaçao",
    "Dinamarca",
    "Djibouti",
    "Dominica",
    "Equador",
    "Egito",
    "El Salvador",
    "Emirados Árabes Unidos",
    "Eritreia",
    "Eslováquia",
    "Eslovênia",
    "Espanha",
    "Estados Unidos",
    "Ilhas Menores Distantes dos Estados Unidos",
    "Estônia",
    "Etiópia",
    "Ilhas Faroé",
    "Fiji",
    "Filipinas",
    "Finlândia",
    "França",
    "Terras Austrais e Antárticas Francesas",
    "Gabão",
    "Gana",
    "Gâmbia",
    "Geórgia",
    "Ilhas Geórgia do Sul e Sandwich do Sul",
    "Gibraltar",
    "Granada",
    "Grécia",
    "Groenlândia",
    "Guadalupe",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guiné",
    "Guiné-Bissau",
    "Guiné Equatorial",
    "Guiana",
    "Guiana Francesa",
    "Haiti",
    "Ilha Heard e Ilhas McDonald",
    "Honduras",
    "Hong Kong",
    "Hungria",
    "Iémen",
    "Índia",
    "Indonésia",
    "Irã",
    "Iraque",
    "Irlanda",
    "Ilha de Man",
    "Islândia",
    "Israel",
    "Itália",
    "Jamaica",
    "Japão",
    "Jersey",
    "Jordânia",
    "Kiribati",
    "Kuwait",
    "Laos",
    "Letônia",
    "Lesoto",
    "Líbano",
    "Libéria",
    "Líbia",
    "Liechtenstein",
    "Lituânia",
    "Luxemburgo",
    "Macau",
    "Macedónia",
    "Madagáscar",
    "Malásia",
    "Malaui",
    "Maldivas",
    "Mali",
    "Malta",
    "Ilhas Malvinas",
    "Ilhas Marshall",
    "Marianas Setentrionais",
    "Marrocos",
    "Martinica",
    "Mauritânia",
    "Maurícia",
    "Mayotte",
    "México",
    "Mianmar",
    "Estados Federados da Micronésia",
    "Moldávia",
    "Mónaco",
    "Mongólia",
    "Montenegro",
    "Montserrat",
    "Moçambique",
    "Namíbia",
    "Nauru",
    "Nepal",
    "Nova Caledônia",
    "Nova Zelândia",
    "Nicarágua",
    "Níger",
    "Nigéria",
    "Niue",
    "Ilha Norfolk",
    "Noruega",
    "Omã",
    "Países Baixos",
    "Palau",
    "Palestina",
    "Panamá",
    "Papua-Nova Guiné",
    "Paquistão",
    "Paraguai",
    "Peru",
    "Pitcairn",
    "Polinésia Francesa",
    "Polónia",
    "Portugal",
    "Porto Rico",
    "Qatar",
    "Quênia",
    "Quirguistão",
    "Reino Unido",
    "Território Britânico do Oceano Índico",
    "Ilhas Virgens Britânicas",
    "República Centro-Africana",
    "República Checa",
    "República Democrática do Congo",
    "República Dominicana",
    "Taiwan",
    "Reunião",
    "Romênia",
    "Rússia",
    "Ruanda",
    "Saara Ocidental",
    "Ilhas Salomão",
    "Samoa",
    "Samoa Americana",
    "Saint-Barthélemy",
    "Santa Helena (território)",
    "Santa Lúcia",
    "Saint Martin",
    "São Cristóvão e Névis",
    "São Pedro e Miquelão",
    "São Vicente e Granadinas",
    "São Marinho",
    "São Tomé e Príncipe",
    "Senegal",
    "Serra Leoa",
    "Sérvia",
    "Seychelles",
    "Singapura",
    "Síria",
    "Somália",
    "Sri Lanka",
    "Sudão",
    "Sudão do Sul",
    "Suécia",
    "Suazilândia",
    "Suíça",
    "Suriname",
    "Svalbard",
    "Tadjiquistão",
    "Tailândia",
    "Tanzânia",
    "Timor-Leste",
    "Togo",
    "Toquelau",
    "Tonga",
    "Trinidad e Tobago",
    "Tunísia",
    "Turcomenistão",
    "Turquia",
    "Turcas e Caicos",
    "Tuvalu",
    "Ucrânia",
    "Uganda",
    "Ilhas Virgens Americanas",
    "Uruguai",
    "Uzbequistão",
    "Vanuatu",
    "Vaticano",
    "Venezuela",
    "Vietname",
    "Wallis e Futuna",
    "Zâmbia",
    "Zimbábue",
];
let islands = [
    "Ilhas Alanda",
    "Antígua e Barbuda",
    "Anguilla",
    "Aruba",
    "Bahamas",
    "Barbados",
    "Bermudas",
    "Ilha Bouvet",
    "Ilhas Cayman",
    "Ilha Christmas",
    "Ilhas Cocos",
    "Comores",
    "Cabo Verde",
    "Ilhas Cook",
    "Curaçao",
    "Dominica",
    "Ilhas Menores Distantes dos Estados Unidos",
    "Ilhas Faroé",
    "Terras Austrais e Antárticas Francesas",
    "Ilhas Geórgia do Sul e Sandwich do Sul",
    "Fiji",
    "Granada",
    "Guadalupe",
    "Guam",
    "Guernsey",
    "Haiti",
    "Ilha Heard e Ilhas McDonald",
    "Ilha de Man",
    "Kiribati",
    "Jamaica",
    "Jersey",
    "Maldivas",
    "Malta",
    "Ilhas Malvinas",
    "Marianas Setentrionais",
    "Martinica",
    "Ilhas Marshall",
    "Maurícia",
    "Mayotte",
    "Estados Federados da Micronésia",
    "Montserrat",
    "Nauru",
    "Nova Caledônia",
    "Niue",
    "Ilha Norfolk",
    "Palau",
    "Pitcairn",
    "Polinésia Francesa",
    "Porto Rico",
    "Território Britânico do Oceano Índico",
    "Ilhas Virgens Britânicas",
    "Ilhas Virgens Americanas",
    "Reunião",
    "Samoa Americana",
    "São Bartolomeu",
    "Santa Helena (território)",
    "Santa Lúcia",
    "São Vicente e Granadinas",
    "Saint Martin",
    "São Tomé e Príncipe",
    "São Cristóvão e Névis",
    "São Pedro e Miquelão",
    "Ilhas Salomão",
    "Samoa",
    "Saint-Barthélemy",
    "Seychelles",
    "Sri Lanka",
    "Svalbard",
    "Toquelau",
    "Tonga",
    "Trinidad e Tobago",
    "Turcas e Caicos",
    "Tuvalu",
    "Vanuatu",
    "Wallis e Futuna",
];
