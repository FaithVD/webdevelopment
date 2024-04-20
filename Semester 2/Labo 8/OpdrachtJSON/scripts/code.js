const setup = () => {
   let student1 = {
       voornaam: "Jan",
       familienaam:"Janssens",
       geboorteDatum: new Date("1993-12-31"),
       adres:{
           straat: "Kerkstraat 12",
           postcode: "8500",
           gemeente: "Kortrijk"
       }
   }

   let tekst = JSON.stringify(student1);
   console.log(tekst);
   console.log(student1);
}
window.addEventListener("load", setup);