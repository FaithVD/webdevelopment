const setup = () => {
    let btnwijzig =document.getElementById("btnwijzig");
    btnwijzig.addEventListener("click", wijzig);
}

const wijzig = () =>{
    let pElement=document.getElementById("txtOutput");
    pElement.innerHTML="Welkom!";

}
window.addEventListener("load", setup);