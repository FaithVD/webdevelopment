const setup = () => {
    let sliders = document.getElementsByClassName("slider");
    for (let i = 0; i < sliders.length; i++){
        sliders[i].addEventListener("change",update);
        sliders[i].addEventListener("input", update);
    }
    let btnSave = document.getElementById("btnSave");
    btnSave.addEventListener("click", save);

    update();
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

const save = () => {
    let nieuwVierkant = document.createElement("div");
    let binnenNieuwVierkant = document.createElement("div");
    binnenNieuwVierkant.className = "vierkant";
    nieuwVierkant.className = "nieuwVierkant";

    let btnVerwijder = document.createElement("input");
    btnVerwijder.className = "verwijderVierkant"
    btnVerwijder.setAttribute("type","button");
    btnVerwijder.setAttribute("value","X");
    btnVerwijder.addEventListener("click", verwijderVierkant);

    binnenNieuwVierkant.appendChild(btnVerwijder);
    nieuwVierkant.appendChild(binnenNieuwVierkant);
    document.body.appendChild(nieuwVierkant);

    let kleur = document.getElementsByClassName("vierkant");
    let sliders = document.getElementsByClassName("slider");
    let valueRood = sliders[0].value;
    let valueGroen = sliders[1].value;
    let valueBlauw = sliders[2].value;

    kleur[kleur.length-1].style.backgroundColor = "rgb("+valueRood+","+valueGroen+","+valueBlauw+")";

    drukOpVierkant();
}

const verwijderVierkant = (event) => {
    event.target.parentElement.parentElement.remove();
}

const drukOpVierkant = () => {
    let drukVierkant = document.getElementsByClassName("vierkant");
    for (let i = 0; i < drukVierkant.length; i++){
        drukVierkant[i].addEventListener("click",kleurOrgineelVierkant);
    }

}

const kleurOrgineelVierkant = (event) => {
    let kleur = document.getElementsByClassName("vierkant");
    let rgb = event.target.getAttribute("style").slice(21).trim().replace("(","").replace(")","").replace(";","").split(",");

    let valueRood = rgb[0].trim();
    let valueGroen = rgb[1].trim();
    let valueBlauw = rgb[2].trim();

    kleur[0].style.backgroundColor = "rgb("+valueRood+","+valueGroen+","+valueBlauw+")";

    let span = document.getElementsByTagName("span");
    span[0].textContent = "Rood " + valueRood;
    span[1].textContent = "Groen " + valueGroen;
    span[2].textContent = "Blauw " + valueBlauw;

    let elementSlider = document.querySelectorAll(".slider");
    elementSlider[0].value = valueRood;
    elementSlider[1].value = valueGroen;
    elementSlider[2].value = valueBlauw;
}
window.addEventListener("load", setup);