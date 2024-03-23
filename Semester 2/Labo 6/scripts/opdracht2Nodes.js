const setup = () => {
    let elementenLi = document.getElementsByTagName("li");
    for (let i = 0; i < elementenLi.length; i++){
        elementenLi[i].className = "listitem";
    }

    let mijnFoto = document.createElement("img");
    mijnFoto.setAttribute('src','../images/profilepicture.jpg');
    document.body.appendChild(mijnFoto);
}
window.addEventListener("load", setup);