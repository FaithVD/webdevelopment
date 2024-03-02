const setup = () => {
let sliders = document.getElementsByClassName("slider");
    sliders[0].addEventListener("change", update);
    sliders[0].addEventListener("input", update);
    sliders[1].addEventListener("change", update);
    sliders[1].addEventListener("input", update);
    sliders[2].addEventListener("change", update);
    sliders[2].addEventListener("input", update);
}

const update = () => {
    let vierkant = document.getElementsByClassName("vierkant");
    let sliders = document.getElementsByClassName("slider");
    let valueRood = sliders[0].value;
    let valueGroen = sliders[1].value;
    let valueBlauw = sliders[2].value;

    vierkant[0].style.backgroundColor = "rgb("+valueRood+","+valueGroen+","+valueBlauw+")";

    let span = document.getElementsByTagName("span");
    span[0].textContent = "Rood " + valueRood;
    span[1].textContent = "Groen " + valueGroen;
    span[2].textContent = "Blauw " + valueBlauw;
}
window.addEventListener("load", setup);