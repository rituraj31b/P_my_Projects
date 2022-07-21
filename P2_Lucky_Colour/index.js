const zodiac = document.getElementById("zodiac");

const body = document.body;

const changeBackgroundColor = () => {
    switch(zodiac.value){
        case "aries":
            body.style.backgroundColor = "#ed9885";
            break;
        case "taurus":
            body.style.backgroundColor = "#f7f09c";
            break;
        case "gemini":
            body.style.backgroundColor = "#9ceb6c";
            break;
        case "cancer":
            body.style.backgroundColor = "#39917d";
            break;
        case "leo":
            body.style.backgroundColor = "#5caced";
            break;
        case "virgo":
            body.style.backgroundColor = "#f28db7";
            break;
        case "libra":
            body.style.backgroundColor = "#291a30";
            break;
        case "scorpio":
            body.style.backgroundColor = "#ff8c90";
            break;
        case "sagittarius":
            body.style.backgroundColor = "#767cd6";
            break;
        case "aquarius":
            body.style.backgroundColor = "#9de3e2";
            break;
        case "capricorn":
            body.style.backgroundColor = "#429956";
            break;
        case "pisces":
            body.style.backgroundColor = "#6b5752";
            break;
    }
}