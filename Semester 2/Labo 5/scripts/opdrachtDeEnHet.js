const setup = () => {
let btnVerander = document.getElementById("button");
btnVerander.addEventListener("click",verander);
}

const verander = () =>{
    let input = document.getElementById("input").value;
    let zinSplitsen = input.toLowerCase().split(" ");

    for (let i = 0; i < zinSplitsen.length ; i++){
        if(zinSplitsen[i] === "de"){
            zinSplitsen[i] = "het";
        }
    }
    let output = zinSplitsen.join(" ");
    console.log(output);
}
window.addEventListener("load", setup);