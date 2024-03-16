const setup = () => {
    let btnResultaat = document.getElementById("btnResultaat");
    btnResultaat.addEventListener("click",resultaat);
}

const resultaat = () => {
    let isRoker = document.getElementById("roker");
    let moedertaal = document.getElementsByName("moedertaal");
    let favBuurland = document.getElementById("FavBuurland");
    let bestelling = document.getElementById("bestelling");

    if (isRoker.checked){
        console.log("is roker")
    }else{
        console.log("is geen roker");
    }

    for (let i = 0; i < moedertaal.length;i++){
        if (moedertaal[i].checked){
            console.log("moedertaal is " + moedertaal[i].value);
        }
    }


    for (let a = 0; a < favBuurland.length;a++){
        if (favBuurland[a].selected){
            console.log("favoriete buurland is " + favBuurland[a].value);
        }
    }

    let bestellingen = "";
    for(let b = 0; b < bestelling.length;b++){
        if(bestelling[b].selected){
            bestellingen += bestelling[b].value + " ";
        }
    }
    console.log("bestelling bestaat uit " + bestellingen);


}
window.addEventListener("load", setup);