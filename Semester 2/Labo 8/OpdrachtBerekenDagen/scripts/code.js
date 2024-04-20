const setup = () => {
    let verjaardag = new Date('2005,3,17');
    let vandaag = new Date();

    console.log(vandaag);
    console.log(verjaardag);

    console.log("dagen: " + Math.floor((vandaag - verjaardag)/(1000*60*60*24)));
}
window.addEventListener("load", setup);