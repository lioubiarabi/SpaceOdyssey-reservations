// get destinations
(async ()=>{
    //get destinations
    let destinationData = await fetch("./assets/destinations.json");
    let destinationArray = await destinationData.json();


})()

let booking = [];
let destination = document.getElementById("destination");

destination.addEventListener("change", ()=>{

});