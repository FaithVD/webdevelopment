const setup = () => {
    let tekst = "{\"voornaam\":\"Jan\",\"familienaam\":\"Janssens\",\"geboorteDatum\":\"1993-12-31T00:00:00.000Z\",\"adres\":{\"straat\":\"Kerkstraat 12\",\"postcode\":\"8500\",\"gemeente\":\"Kortrijk\"}}";
    let student1 = JSON.parse(tekst);
    console.log(tekst);
    console.log(student1);

}
window.addEventListener("load", setup);