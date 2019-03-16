var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");  //selektovanje body-a zbog promene pozadine u css


function setGradient() {
    body.style.background = "linear-gradient(to right,"     // menja css i kupi vrednosti color inputa
        + color1.value
        + ","
        + color2.value
        + ")";

    css.textContent = body.style.background; // kreira tekst u h3 koji ima vrednost css-a izabranog gradienta
}

color1.addEventListener("input", setGradient);  //odabirom boje pokrece funkciju
color2.addEventListener("input", setGradient);




//bonus

color1.value = "#ff0000";  // definise vrednost pocetnog inputa
color2.value = "#ffff00";
css.textContent = "linear-gradient(to right, rgb(255, 0, 0), rgb(255, 255, 0))"; // ispisuje vrednost pocetnih boja
var random = document.querySelector("button");


random.addEventListener("click", randomize);


function randomHashtag() {
   c1 = "#" + ((1 << 24) * Math.random() | 0).toString(16);
    c2 = "#" + ((1 << 24) * Math.random() | 0).toString(16);
}

function randomize() {

    randomHashtag();

    body.style.background = "linear-gradient(to right,"     // menja css i kupi vrednosti color inputa
        + c1
        + ","
        + c2
        + ")";

    css.textContent = body.style.background;

    color1.value = c1;
    color2.value = c2;
}

