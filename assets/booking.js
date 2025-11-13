let booking = [];
let destination = document.getElementById("destination");
let destinationInfoCard = document.getElementById("destination-info-card");

// get destinations
(async () => {
    //get destinations
    try {
        let destinationData = await fetch("./assets/destinations.json");
        let destinationArray = await destinationData.json();

        //render the destinations in select destination
        destinationArray.forEach((dest, index) => {
            destination.innerHTML += `<option value="${index}">${dest.name}</option>`;
        });

        // when select:
        destination.addEventListener("change", (e) => {
            let index = e.target.value;
            destinationInfoCard.style.display = "block";
            document.getElementById("destination-name").innerHTML = destinationArray[index].name ;
            document.getElementById("destination-description").innerHTML = destinationArray[index].description ;
            document.getElementById("destination-duration").innerHTML = destinationArray[index].travelDuration ;
            document.getElementById("destination-distance").innerHTML = destinationArray[index].distance ;
            document.getElementById("destination-temperature").innerHTML = destinationArray[index].temperature ;
            document.getElementById("destination-price").innerHTML = destinationArray[index].price + " $" ;
        });




    } catch (error) {
        console.log(error)
    }
})();
