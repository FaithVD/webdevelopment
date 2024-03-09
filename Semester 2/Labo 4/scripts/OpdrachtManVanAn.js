const setup = () => {
let btnIndexOf = document.getElementById("indexOf");
let btnLastIndexOf = document.getElementById("lastIndexOf");

btnIndexOf.addEventListener("click",indexOf);
btnLastIndexOf.addEventListener("click",lastIndexOf);

}

const indexOf = () => {
    let output1 = document.getElementById("output1");
    let zin = document.getElementById("manVanAn").value;
    zin = zin.toLowerCase();

    let aantalKeer = 0;
    for (let i = 0; i < zin.length; i++) {
        let gevonden = zin.indexOf("an",i);
        if (gevonden !== -1) {
            aantalKeer ++;
            i = gevonden;
        }
    }
    output1.innerHTML = aantalKeer + " keer";
}

const lastIndexOf = () => {
    let output2 = document.getElementById("output2");
    let zin = document.getElementById("manVanAn").value;
    zin = zin.toLowerCase();

    let aantalKeer = 0;
    for (let i = zin.length; i>0; i--) {
        let gevonden = zin.lastIndexOf("an",i);
        if (gevonden !== -1) {
            aantalKeer ++;
            i = gevonden;
        }
    }
    output2.innerHTML = aantalKeer + " keer";
}
window.addEventListener("load", setup);