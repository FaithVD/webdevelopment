const setup = () => {
    let btnHerbereken = document.getElementById("btnHerbereken");
    btnHerbereken.addEventListener("click",herbereken);
}

const herbereken = () => {
    let prijs = document.getElementsByClassName("prijs");
    let inputAantal = document.getElementsByClassName("inputAantal");
    let btw = document.getElementsByClassName("btw");
    let subtotaal = document.getElementsByClassName("subtotaal");
    let totaal = document.getElementById("totaal");

    let subtotaalProduct1 = (parseFloat(prijs[0].textContent) * inputAantal[0].value) * (1 + parseFloat(btw[0].textContent)/100);
    subtotaal[0].textContent = subtotaalProduct1.toFixed(2) + " Eur";

    let subtotaalProduct2 = (parseFloat(prijs[1].textContent) * inputAantal[1].value) * (1 + parseFloat(btw[1].textContent)/100);
    subtotaal[1].textContent = subtotaalProduct2.toFixed(2) + " Eur";

    let subtotaalProduct3 = (parseFloat(prijs[0].textContent) * inputAantal[2].value) * (1 + parseFloat(btw[2].textContent)/100);
    subtotaal[2].textContent = subtotaalProduct3.toFixed(2) + " Eur";

    totaal.textContent = (subtotaalProduct1 + subtotaalProduct2 + subtotaalProduct3).toFixed(2) + " Eur";
}
window.addEventListener("load", setup);