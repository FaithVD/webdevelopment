const setup = () => {
   let woord = "onoorbaar";

   for (let i = 0; i < (woord.length-2);i++){
       console.log(woord.slice(i,i+3));
}

}
window.addEventListener("load", setup);