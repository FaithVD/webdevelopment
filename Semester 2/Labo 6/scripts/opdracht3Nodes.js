const setup = () => {
    let btnCreate = document.getElementById("btnCreate");
    btnCreate.addEventListener("click", addPElement);
}

const addPElement = () =>{
    let elementP = document.createElement("p");
    elementP.textContent = "Congrats! You've created a P element."

    let elementDIV = document.querySelector("#myDIV");
    elementDIV.appendChild(elementP);
}
window.addEventListener("load", setup);