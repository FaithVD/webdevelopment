const setup = () => {
    let i;
    const classBelangrijk = document.getElementsByClassName("belangrijk");
    for(i=0; i<classBelangrijk.length;i++){
        classBelangrijk[i].classList.add("opvallend");
    }
}
window.addEventListener("load", setup);