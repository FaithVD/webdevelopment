const setup = () => {
    let btnKopieer = document.getElementById("btnKopieer");
    btnKopieer.addEventListener("click", kopieer);
}

const kopieer = () => {
    let txtInput = document.getElementById("txtInput");
    let tekst = txtInput.value;
    document.getElementById("txtOutput").innerHTML = tekst;
    console.log(tekst);
}

window.addEventListener("load", setup);