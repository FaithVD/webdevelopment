const setup = () => {
    let btnSpatiesToevoegen = document.getElementById("btnAddSpaces");
    btnSpatiesToevoegen.addEventListener("click", functie);
}
const maakMetSpaties = (inputText) => {
    let result = "" ;
    for (let i = 0; i < inputText.length; i++){
        if (inputText.charAt(i) !== " "){
            result += inputText.charAt(i) + " ";
        }
    }
    return result;
}
const functie = () => {
    let tekst = document.getElementById("tekst").value;
    console.log(maakMetSpaties(tekst));
}

window.addEventListener("load", setup);