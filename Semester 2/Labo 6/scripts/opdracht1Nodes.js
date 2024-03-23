const setup = () => {
    let pElement = document.querySelectorAll("p");
    for (let i = 0; i < pElement.length;i++){
        pElement[i].textContent = "Good Job!";
    }
}
window.addEventListener("load", setup);