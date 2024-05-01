let settingsArray = [];
const setup = () => {
    let sliders = document.getElementsByClassName("slider");
    for (let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener("change", update);
        sliders[i].addEventListener("input", update);
    }
    let btnSave = document.getElementById("btnSave");
    btnSave.addEventListener("click", save);

    update();
    opgeslagenGegevens();
}

const opgeslagenGegevens = () => {
    let opgeslagenSliders = localStorage.getItem("slider.settings");
    let opgeslagenFavorieten = localStorage.getItem("favorieten.settings");

    if (opgeslagenSliders) {
        let gegevens = JSON.parse(opgeslagenSliders);

        document.getElementById("slider1").value = gegevens.valueRood;
        document.getElementById("slider2").value = gegevens.valueGroen;
        document.getElementById("slider3").value = gegevens.valueBlauw;

        update();
    }

    if (opgeslagenFavorieten) {
        const settings = JSON.parse(opgeslagenFavorieten);
        settingsArray.push(...settings);
        settings.forEach(setting => {
            maakVierkant(setting.valueRood, setting.valueGroen, setting.valueBlauw);
        });
    }
}

const update = () => {
    let settingsJson;

    let vierkant = document.querySelector(".vierkant");
    let sliders = document.querySelectorAll(".slider");
    let valueRood = sliders[0].value;
    let valueGroen = sliders[1].value;
    let valueBlauw = sliders[2].value;

    vierkant.style.backgroundColor = "rgb(" + valueRood + "," + valueGroen + "," + valueBlauw + ")";

    let span = document.getElementsByTagName("span");
    span[0].textContent = "Rood " + valueRood;
    span[1].textContent = "Groen " + valueGroen;
    span[2].textContent = "Blauw " + valueBlauw;

    settingsJson = JSON.stringify({valueRood,valueGroen,valueBlauw});
    localStorage.setItem("slider.settings", settingsJson);
}


const save = () => {
    let settingsJson;

    let opgeslagenFavorieten = localStorage.getItem("favorieten.settings");
    let settingsArray = JSON.parse(opgeslagenFavorieten || '[]');

    let kleur = document.getElementsByClassName("vierkant");
    let sliders = document.getElementsByClassName("slider");
    let valueRood = sliders[0].value;
    let valueGroen = sliders[1].value;
    let valueBlauw = sliders[2].value;

    maakVierkant(valueRood, valueGroen, valueBlauw); // Voeg eerst het nieuwe vierkant toe

    kleur[kleur.length - 1].style.backgroundColor = "rgb(" + valueRood + "," + valueGroen + "," + valueBlauw + ")";

    settingsArray.push({
        valueRood, valueGroen, valueBlauw
    });

    settingsJson = JSON.stringify(settingsArray);
    localStorage.setItem("favorieten.settings", settingsJson);

    drukOpVierkant();
}



const maakVierkant = (valueRood,valueGroen,valueBlauw) =>{
    let nieuwVierkant = document.createElement("div");
    let binnenNieuwVierkant = document.createElement("div");
    binnenNieuwVierkant.className = "vierkant";
    nieuwVierkant.className = "nieuwVierkant";
    binnenNieuwVierkant.style.backgroundColor =`rgb(${valueRood},${valueGroen},${valueBlauw})`;

    let btnVerwijder = document.createElement("input");
    btnVerwijder.className = "verwijderVierkant"
    btnVerwijder.setAttribute("type", "button");
    btnVerwijder.setAttribute("value", "X");
    btnVerwijder.addEventListener("click", verwijderVierkant);

    binnenNieuwVierkant.appendChild(btnVerwijder);
    nieuwVierkant.appendChild(binnenNieuwVierkant);
    document.body.appendChild(nieuwVierkant);
    drukOpVierkant();
}

const verwijderVierkant = (event) => {
    let verwijderElement = event.target.closest(".nieuwVierkant");

    verwijderElement.remove();

    let opgeslagenFavorieten = localStorage.getItem("favorieten.settings");
    let settingsArray = JSON.parse(opgeslagenFavorieten || '[]');

    let index = settingsArray.findIndex(setting =>
        setting.valueRood === verwijderElement.querySelector(".vierkant").style.backgroundColor.split(",")[0].trim() &&
        setting.valueGroen === verwijderElement.querySelector(".vierkant").style.backgroundColor.split(",")[1].trim() &&
        setting.valueBlauw === verwijderElement.querySelector(".vierkant").style.backgroundColor.split(",")[2].trim()
    );

    if (index !== -1) {
        settingsArray.splice(index,1);
        localStorage.setItem("favorieten.settings", JSON.stringify(settingsArray));
    }
}



const drukOpVierkant = () => {
    let drukVierkant = document.getElementsByClassName("vierkant");
    for (let i = 0; i < drukVierkant.length; i++) {
        drukVierkant[i].addEventListener("click", kleurOrgineelVierkant);
    }
}

const kleurOrgineelVierkant = (event) => {
    let backgroundColor = event.target.closest(".vierkant").style.backgroundColor;
    let rgb = backgroundColor.slice(21).trim().replace("(", "").replace(")", "").replace(";", "").split(",");

    let valueRood = rgb[0].trim();
    let valueGroen = rgb[1].trim();
    let valueBlauw = rgb[2].trim();

    event.target.closest(".vierkant").style.backgroundColor = "rgb(" + valueRood + "," + valueGroen + "," + valueBlauw + ")";

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