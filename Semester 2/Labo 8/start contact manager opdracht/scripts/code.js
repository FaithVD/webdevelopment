let personen = [
    {
        voornaam: 'Jan',
        familienaam: 'Janssens',
        geboorteDatum: new Date('2010-10-10'),
        email: 'jan@example.com',
        aantalKinderen: 0
    },
    {
        voornaam: 'Mieke',
        familienaam: 'Mickelsen',
        geboorteDatum: new Date('1980-01-01'),
        email: 'mieke@example.com',
        aantalKinderen: 1
    },
    {
        voornaam: 'Piet',
        familienaam: 'Pieters',
        geboorteDatum: new Date('1970-12-31'),
        email: 'piet@example.com',
        aantalKinderen: 2
    }
];

const errors = () => {
    let spans = document.getElementsByClassName("errorMessage");
    let heeftErrors = false;

    for (let i = 0; i < spans.length; i++) {
        if (spans[i].textContent.length !== 0) {
            heeftErrors = true;
        }
    }
    return heeftErrors;
};

const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");
    let txtVoornaam = document.getElementById("txtVoornaam").value;
    let txtFamilienaam = document.getElementById("txtFamilienaam").value;
    let txtGeboorteDatum = new Date(document.getElementById("txtGeboorteDatum").value);
    let txtEmail = document.getElementById("txtEmail").value;
    let txtAantalKinderen = parseInt(document.getElementById("txtAantalKinderen").value);
    let lstPersonen = document.getElementById("lstPersonen");
    valideer();

    if (!errors()) {
        // Zoek naar de index van de geselecteerde persoon
        let selectedIndex = lstPersonen.selectedIndex;
        // Als de geselecteerde index -1 is, voeg dan een nieuwe persoon toe
        if (selectedIndex === -1) {
            let nieuwePersoon = {
                voornaam: txtVoornaam,
                familienaam: txtFamilienaam,
                geboorteDatum: txtGeboorteDatum,
                email: txtEmail,
                aantalKinderen: txtAantalKinderen
            };
            personen.push(nieuwePersoon);

            // Voeg een nieuwe optie toe aan de lijst
            let optie = document.createElement("option");
            optie.value = (personen.length - 1).toString();
            optie.textContent = txtVoornaam + " " + txtFamilienaam;
            lstPersonen.appendChild(optie);

            // Selecteer de nieuwe persoon in de lijst
            lstPersonen.selectedIndex = personen.length - 1;
        } else {
            // Als de persoon al bestaat en is geselecteerd, update dan de gegevens
            personen[selectedIndex].voornaam = txtVoornaam;
            personen[selectedIndex].familienaam = txtFamilienaam;
            personen[selectedIndex].geboorteDatum = txtGeboorteDatum;
            personen[selectedIndex].email = txtEmail;
            personen[selectedIndex].aantalKinderen = txtAantalKinderen;
            lstPersonen.options[selectedIndex].textContent = txtVoornaam + " " + txtFamilienaam;
        }
    }
};


const bewerkNieuwePersoon = () => {
    console.log("Klik op de knop nieuw");
    let txtVoornaam = document.getElementById("txtVoornaam");
    let txtFamilienaam = document.getElementById("txtFamilienaam");
    let txtGeboorteDatum = document.getElementById("txtGeboorteDatum");
    let txtEmail = document.getElementById("txtEmail");
    let txtAantalKinderen = document.getElementById("txtAantalKinderen");
    let lstPersonen = document.getElementById("lstPersonen");

    txtEmail.value = "";
    txtFamilienaam.value = "";
    txtAantalKinderen.value = "";
    txtGeboorteDatum.value = "";
    txtVoornaam.value = "";

    lstPersonen.selectedIndex = -1;
};

const toonDataNaKlikken = () => {
    let lstPersonen = document.getElementById("lstPersonen");
    let index = lstPersonen.selectedIndex;

    if (index !== -1) {
        let gekozenPersoon = personen[index];
        document.getElementById("txtVoornaam").value = gekozenPersoon.voornaam;
        document.getElementById("txtFamilienaam").value = gekozenPersoon.familienaam;
        document.getElementById("txtGeboorteDatum").value = gekozenPersoon.geboorteDatum.toISOString().substring(0, 10);
        document.getElementById("txtEmail").value = gekozenPersoon.email;
        document.getElementById("txtAantalKinderen").value = gekozenPersoon.aantalKinderen;
    }
};

const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");

    personen.forEach((persoon, index) => {
        let optie = document.createElement("option");
        optie.value = index.toString();
        optie.textContent = `${persoon.voornaam} ${persoon.familienaam}`;
        lstPersonen.appendChild(optie);
    });

    lstPersonen.addEventListener("change", toonDataNaKlikken);
};

window.addEventListener("load", setup);
