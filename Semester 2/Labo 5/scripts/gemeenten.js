const setup = () => {
    let gemeentes = document.getElementById("gemeentes");
    let stop = "stop";
    let steden = [];
    while (1) {
        let stad = prompt("Geef een gemeente.(typ stop om te stoppen)");
        if (stad === stop) break;
        steden.push(stad);
    }
    steden.sort(compare);
    for (let i = 0; i < steden.length; i++)
        gemeentes.innerHTML += `<option value = "${steden[i]}">${steden[i]}</option>`;
}
const compare = (a,b) =>{
    return a.localeCompare(b);
}
window.addEventListener("load", setup);