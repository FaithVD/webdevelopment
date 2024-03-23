const setup = () => {
    let select = document.getElementById("staatKip");
    let img = document.getElementsByClassName("img");
    let note1 = document.getElementById("note1");

    if (select.selected.value === "Met een ei") {
        //afbeelding

        //zinVanonder
        note1.textContent = "Hierboven, een kip " + select.selected.value;
    } else {
        //afbeelding

        //zinVanonder
        note1.textContent = "Hierboven, een kip " + select.selected.value;
    }
    geefLetter();
}

const geefLetter = () => {
    let input = document.getElementById("input");
    let note2 = document.getElementById("note2");
    if (input.value === 1) {
        let aantalKeer = 0;
        //overlopen van note1 en dan aantalkeer++
        for (let i = 0; i < note1.length; i++){
            if (input.value === note1){
                aantalKeer++;
            }
        }
        note2.textContent = "Letter" + "\"" + input.value + "\"" + "komt" + aantalKeer + "keer voor in bovenstaande zin."
    }
}
window.addEventListener("load", setup);