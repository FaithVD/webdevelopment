const setup = () => {
    let form = document.getElementById("form");
    form.addEventListener("click", valideer);
}

const valideer = () => {
    valideerVoornaam();
    valideerFamilienaam();
    valideerGeboortedatum();
    valideerEmail();
    valideerAantalKinderen();
    popUpProficiat();
}

const valideerVoornaam = () => {
    let txtVoornaam = document.getElementById("voornaam")
    let errorVoornaam = document.getElementById("errorVoornaam");
    let voornaam = txtVoornaam.value.trim();
    if (voornaam.length > 30) {
        txtVoornaam.className = "invalid";
        errorVoornaam.innerHTML = "error: max. 30 karakters";
    } else {
        txtVoornaam.className = "";
        errorVoornaam.innerHTML = "";
    }
}

const valideerFamilienaam = () => {
    let txtFamilienaam = document.getElementById("familienaam")
    let errorFamilienaam = document.getElementById("errorFamilienaam");
    let familienaam = txtFamilienaam.value.trim();
    if (familienaam.length > 50) {
        txtFamilienaam.className = "invalid";
        errorFamilienaam.innerHTML = "error: max. 50 karakters";
    } else if (familienaam.length === 0) {
        txtFamilienaam.className = "invalid";
        errorFamilienaam.innerHTML = "error: verplicht veld";
    } else {
        txtFamilienaam.className = "";
        errorFamilienaam.innerHTML = "";
    }
}

const valideerGeboortedatum = () => {
    let txtgeboortedatum = document.getElementById("geboortedatum")
    let errorGeboortedatum = document.getElementById("errorGeboortedatum")
    let geboortedatum = txtgeboortedatum.value.trim();
    let patroon = /^\d{4}-\d{2}-\d{2}$/
    if (patroon.test(geboortedatum)) {
        txtgeboortedatum.className = "";
        errorGeboortedatum.innerHTML = "";
    } else if(geboortedatum.length === 0){
        txtgeboortedatum.className = "invalid";
        errorGeboortedatum.innerHTML = "error: verplicht veld";
    } else {
        txtgeboortedatum.className = "invalid"
        errorGeboortedatum.innerHTML = "error: formaat is niet jjjj-mm-dd";
    }
}

const valideerEmail = () => {
    let txtEmail = document.getElementById("email");
    let errorEmail = document.getElementById("errorEmail");
    let email = txtEmail.value.trim();
    if(email.length === 0){
        txtEmail.className="invalid";
        errorEmail.innerHTML = "error: verplicht veld";
    }else if(!email.match(/^[A-Za-z._\-0-9]*@[A-Za-z]*\.[a-z]{2,4}$/)){
        txtEmail.className="invalid";
        errorEmail.innerHTML = "error: geen geldig email adres";
    }else{
        txtEmail.className="";
        errorEmail.innerHTML = "";
    }
}

const valideerAantalKinderen = () => {
    let txtAantalKinderen = document.getElementById("aantalKinderen");
    let errorAantalKinderen = document.getElementById("errorAantalKinderen");
    let kinderen = txtAantalKinderen.value.trim();
    if (isGetal(kinderen)){
        if (kinderen > 98) {
            txtAantalKinderen.className="invalid";
            errorAantalKinderen.innerHTML = "is te vruchtbaar";
        } else if(kinderen<0){
            txtAantalKinderen.className="invalid";
            errorAantalKinderen.innerHTML = "is geen positief getal";

        } else {
            txtAantalKinderen.className="";
            errorAantalKinderen.innerHTML = "";
        }
    }
}

const isGetal = (kinderen) => {
    return !isNaN(kinderen)
}

const popUpProficiat = () => {
    let invalids = document.getElementsByClassName("invalid");
    if (invalids.length === 0) {
        window.alert("Proficiat!")
    }
}
window.addEventListener("load", setup);