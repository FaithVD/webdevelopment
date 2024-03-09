const setup = () => {
    let leeftijd = 34;
    console.log(typeof leeftijd);

    let intrest = 0.12;
    console.log(typeof intrest);

    let isGevaarlijk=true;
    console.log(typeof isGevaarlijk);

    let vandaag = new Date();
    console.log(typeof vandaag);
    const print = (message) => {
        console.log(message);
    }
    console.log(typeof print);

    let tekst ="Hello world";
    console.log(tekst.length);
    console.log(tekst.charAt(1));

}
window.addEventListener("load", setup);