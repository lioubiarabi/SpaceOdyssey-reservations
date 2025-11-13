let booking = [];
let destination = document.getElementById("destination");

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

    } catch (error) {
        console.log(error)
    }
})()



destination.addEventListener("change", () => {

});