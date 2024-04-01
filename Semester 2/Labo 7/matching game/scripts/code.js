let global = {
    AANTAL_HORIZONTAAL: 4,
    AANTAL_VERTICAAL: 3,
    AANTAL_KAARTEN: 6,
    geselecteerdeKaarten: []
}

const setup = () => {
    let array = ["kaart1.png", "kaart2.png", "kaart3.png", "kaart4.png", "kaart5.png", "kaart6.png"];
    array = shuffleArray(array);
    let kaarten = document.getElementById('kaarten');

    let index = 0;

    for (let i = 0; i < global.AANTAL_VERTICAAL; i++) {
        for (let j = 0; j < global.AANTAL_HORIZONTAAL; j++) {
            let kaart = document.createElement('div');
            kaart.className = 'kaartje';
            kaart.dataset.image = array[index % array.length]; // Use modulo to loop back to the beginning of the array if needed
            kaart.style.backgroundImage = `url('images/achterkant.png')`;

            kaarten.appendChild(kaart);
            kaart.addEventListener("click", klikOpKaartje);

            console.log("Added kaartje with image: ", kaart.dataset.image);


            index++;
        }
    }
}

const shuffleArray = (array) =>{
    for (let i = array.length -1; i > 0; i--){
        let j = Math.floor(Math.random() * (i+1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const klikOpKaartje = (event) => {
    let kaart = event.target;
    if (!kaart.classList.contains("draaien") && global.geselecteerdeKaarten.length < 2) {
        kaart.classList.add("draaien");
        kaart.style.backgroundImage = `url('images/${kaart.dataset.image}')`;
        global.geselecteerdeKaarten.push(kaart);
        if (global.geselecteerdeKaarten.length === 2) {
            setTimeout(matchendeKaarten, 1000);
        }
    }
}

const matchendeKaarten = () => {
    let gedraaideKaarten = global.geselecteerdeKaarten;
    if (gedraaideKaarten.length === 2) {
        let [kaart1, kaart2] = gedraaideKaarten;
        if (kaart1.dataset.image === kaart2.dataset.image) {
            verwijderKaartje(kaart1)
            verwijderKaartje(kaart2)
            global.geselecteerdeKaarten = [];
            if (document.querySelectorAll(".kaartje").length === 0) {
                eindeSpel();
            }
        } else {
            kaart1.classList.remove("draaien");
            kaart2.classList.remove("draaien");

            kaart1.style.backgroundImage = `url('images/achterkant.png')`;
            kaart2.style.backgroundImage = `url('images/achterkant.png')`;

            global.geselecteerdeKaarten = [];
        }
    }
}

const verwijderKaartje = (kaart) => {
    let legePlaats = document.createElement("div");
    legePlaats.className = "kaartjePlaceholder";
    kaart.parentElement.replaceChild(legePlaats,kaart);
}

const eindeSpel = () => {
    alert('Goed zo!');
}
window.addEventListener("load", setup);