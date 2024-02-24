const setup = () => {
    let btnSubstring =document.getElementById("btnSubstring");
    btnSubstring.addEventListener("click", resultaatSubstring);
}

const resultaatSubstring = () =>{
    let txtOutput = document.getElementById("txtOutput")
    let txtInput = document.getElementById("txtInput").value;
    let btnStartInput = document.getElementById("btnStartInput").value;
    let btnEindeInput = document.getElementById("btnEindeInput").value;
    txtOutput.innerHTML= txtInput.substring(btnStartInput, btnEindeInput);
}
window.addEventListener("load", setup);