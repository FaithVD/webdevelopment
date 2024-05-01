let global = {
    objecten: [],
    titels: {
        "/g": "Google",
        "/y": "YouTube",
        "/t": "Twitter",
        "/i": "Instagram"
    }
}
const setup = () => {
    let go = document.getElementById("go")
    go.addEventListener("click", goKnop)

    if (localStorage.getItem("history")) {
        global.objecten = JSON.parse(localStorage.getItem("history"));
        global.objecten.forEach((object) => {
            nieuweKaartToevoegen(object);
        });
    }
}

const goKnop = () => {
    let commando = document.getElementById("commando").value;
    //commando valideren & laten url genereren en opslaan in array
    if (valideren(commando)) {
        verwerkCommando(commando);
        document.getElementById("commando").value = "";
    }
}

const valideren = (commando) => {
    //kijken of het commando start met /x
    //onderscheid maken tussen prefix vergeten en foute prefix
    if (commando.split(" ").length < 2 || !commando.startsWith("/")) {
        window.alert("Invalid command");
        document.getElementById("commando").value = "";
        return false;
    }

    if (!commando.startsWith("/g") && !commando.startsWith("/y")
        && !commando.startsWith("/y") && !commando.startsWith("/t")
        && !commando.startsWith("/i")) {
        window.alert("Unknown command prefix");
        document.getElementById("commando").value = "";
        return false;
    }

    return true;
}

const verwerkCommando = (commando) => {
    //commando opsplitsen, url genereren,
    // openen in nieuw tabblad en opslaan in array
    let geheel = commando.split(" ");
    let prefix = geheel[0];
    let zoekOpdracht = geheel.slice(1).join(" ");

    let domeinen = {
        "/g": "https://www.google.com/search?q=",
        "/y": "https://www.youtube.com/results?search_query=",
        "/t": "https://twitter.com/hashtag/",
        "/i": "https://www.instagram.com/explore/tags/",
    }

    let domein = domeinen[prefix];
    let url = domein + encodeURIComponent(zoekOpdracht);

    window.open(url, "_blank");

    let object = {
        titel: global.titels[prefix],
        tekst: zoekOpdracht,
        url: url
    }

    global.objecten.push(object);

    localStorage.setItem("history", JSON.stringify(global.objecten));
    nieuweKaartToevoegen(object);
}
const nieuweKaartToevoegen = (object) => {
    // Zorgen dat de gegevens uit objecten in history komen => bootstrap
    // en opslaan in localstorage
    let container = document.querySelector(".container");

    // Kijk of er al een rij bestaat, anders maak er een aan
    let laatsteRij = container.lastChild;
    if (!laatsteRij || laatsteRij.children.length === 3) {
        laatsteRij = document.createElement("div");
        laatsteRij.classList.add("row");
        container.appendChild(laatsteRij);
    }

    let kaartKolom = document.createElement("div");
    kaartKolom.classList.add("col-4"); // Gebruik Bootstrap grid classes

    let kaart = document.createElement("div");
    kaart.classList.add("kaart");

    let titelLowerCase = object.titel.toLowerCase();
    if (titelLowerCase === "google") {
        kaart.classList.add("google");
    } else if (titelLowerCase === "youtube") {
        kaart.classList.add("youtube");
    } else if (titelLowerCase === "twitter") {
        kaart.classList.add("twitter");
    } else if (titelLowerCase === "instagram") {
        kaart.classList.add("instagram");
    } else {
        console.log("Unknown titel");
    }

    kaart.innerHTML = `
        <div class="kaartje">
            <h5 class="kaart-titel">${object.titel}</h5>
            <p class="kaart-tekst">${object.tekst}</p>
            <button onclick="window.open('${object.url}', '_blank')" class="btnGo">Go!</button>
        </div>
    `;

    kaartKolom.appendChild(kaart);
    laatsteRij.appendChild(kaartKolom);
}






window.addEventListener("load", setup);