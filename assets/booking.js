let booking = { passengerNumber: 1 };
let destination = document.getElementById("destination");
let destinationInfoCard = document.getElementById("destination-info-card");
let passengerNumber = document.getElementById("passengers-number");
let accommodationCards = document.querySelectorAll('.accommodation-card');
let accommodationsCardInfo = document.getElementById("accommodations-card-info");
let form = document.getElementById("booking-form");

// get destinations
(async () => {
    //get destinations
    try {
        let destinationData = await fetch("./assets/destinations.json");
        let destinationArray = await destinationData.json();
        let accommodationsData = await fetch("./assets/accommodations.json");
        let accommodationsArray = await accommodationsData.json();

        //render the destinations in select destination
        destinationArray.forEach((dest, index) => {
            destination.innerHTML += `<option value="${index}">${dest.name}</option>`;
        });

        // when select:
        destination.addEventListener("change", (e) => {
            let index = e.target.value;
            destinationInfoCard.style.display = "block";
            document.getElementById("destination-img").src = destinationArray[index].image;
            document.getElementById("destination-name").innerHTML = destinationArray[index].name;
            document.getElementById("destination-description").innerHTML = destinationArray[index].description;
            document.getElementById("destination-duration").innerHTML = destinationArray[index].travelDuration;
            document.getElementById("destination-distance").innerHTML = destinationArray[index].distance;
            document.getElementById("destination-temperature").innerHTML = destinationArray[index].temperature;
            document.getElementById("destination-price").innerHTML = destinationArray[index].price + " $";

            // add the destination to booking object
            booking.destination = destinationArray[index];

            // display the accommodations section
            document.getElementById("accommodations").style.display = "block";
            accommodationCards.forEach(c => c.classList.add('hidden'));
            destinationArray[index].accommodations.forEach(v => document.getElementById(v).classList.remove('hidden'));

            // update total price
            updatePrice();

        });

        // when change passenger number
        let addPassangerButton = document.getElementById("addPassangerButton"),
            passengersContainer = document.getElementById("passengers-container");

        passengerNumber.addEventListener("change", (e) => {
            switch (e.target.value) {
                case "solo":
                    booking.passengerNumber = 1;
                    passengersContainer.innerHTML = "";
                    addPassangerButton.style.display = "none";


                    break;
                case "couple":
                    // add another form for the second passenger
                    booking.passengerNumber = 2;
                    addPassangerButton.style.display = "none";

                    passengersContainer.innerHTML = `
                        <div class="passenger-block mb-6 p-6 border border-neon-purple/30 rounded-xl bg-space-purple/30">
                                    <div class="flex justify-between items-center mb-4">
                                        <h3 class="font-orbitron text-lg text-neon-purple">Partner Info</h3>
                                    </div>
                                    
                                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                        <div>
                                            <label class="block mb-2 text-gray-300">First Name</label>
                                            <input type="text" name="firstName" placeholder="Enter first name" required>
                                        </div>
                                        <div>
                                            <label class="block mb-2 text-gray-300">Last Name</label>
                                            <input type="text" name="lastName" placeholder="Enter last name" required>
                                        </div>
                                    </div>
                                    
                                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                        <div>
                                            <label class="block mb-2 text-gray-300">Email Address</label>
                                            <input type="email" name="email" placeholder="Enter email" required>
                                        </div>
                                        <div>
                                            <label class="block mb-2 text-gray-300">Phone Number</label>
                                            <input type="tel" name="phone" placeholder="Enter phone number" required>
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <label class="block mb-2 text-gray-300">Special Requirements</label>
                                        <textarea class="p-4" name="note" rows="3" placeholder="Any special requirements or notes..."></textarea>
                                    </div>
                                </div>
                    `;

                    break;
                case "group":
                    booking.passengerNumber = 1;

                    passengersContainer.innerHTML = "";
                    addPassangerButton.style.display = "block";

                    // event listener when adding a new button:
                    addPassangerButton.addEventListener("click", () => {
                        booking.passengerNumber++;
                        console.log(booking.passengerNumber)
                        passengersContainer.innerHTML += `
                                <div class="passenger-block mb-6 p-6 border border-neon-purple/30 rounded-xl bg-space-purple/30">
                                            <div class="flex justify-between items-center mb-4">
                                                <h3 class="font-orbitron text-lg text-neon-purple">Passenger Informations</h3>
                                                <button type="button" class="delete-passenger-btn">
                                                    <i class="fas fa-times"></i>
                                                </button>
                                            </div>
                                            
                                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                                <div>
                                                    <label class="block mb-2 text-gray-300">First Name</label>
                                                    <input type="text" name="firstName" placeholder="Enter first name" required>
                                                </div>
                                                <div>
                                                    <label class="block mb-2 text-gray-300">Last Name</label>
                                                    <input type="text" name="lastName"  placeholder="Enter last name" required>
                                                </div>
                                            </div>
                                            
                                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                                <div>
                                                    <label class="block mb-2 text-gray-300">Email Address</label>
                                                    <input type="email" name="email" placeholder="Enter email" required>
                                                </div>
                                                <div>
                                                    <label class="block mb-2 text-gray-300">Phone Number</label>
                                                    <input type="tel" name="phone" placeholder="Enter phone number" required>
                                                </div>
                                            </div>
                                            
                                            <div>
                                                <label class="block mb-2 text-gray-300">Special Requirements</label>
                                                <textarea class="p-4" name="note" rows="3" placeholder="Any special requirements or notes..."></textarea>
                                            </div>
                                        </div>
                            `;
                        if (booking.passengerNumber == 6) addPassangerButton.style.display = "none";
                    });

                    break;
            }

            // update total price
            updatePrice();
        })

        // when change accomendation

        accommodationCards.forEach(card => {
            card.addEventListener('click', function () {

                accommodationCards.forEach(c => c.classList.remove('selected'));
                this.classList.add('selected');
                const radio = this.querySelector('.accommodation-radio');
                if (radio) {
                    radio.checked = true;
                }
                let targetAccommodation = accommodationsArray[radio.value];
                console.log(accommodationsArray)

                // display the card info and change the info
                accommodationsCardInfo.style.display = "block";

                document.getElementById("accommodation-category").innerText = targetAccommodation.category;
                document.getElementById("accommodation-space").innerText = targetAccommodation.size;
                document.getElementById("accommodation-cost").innerText = targetAccommodation.pricePerDay + "$/Day";

                // update booking info
                booking.accommodation = targetAccommodation;

                // update total price
                updatePrice();
            });
        });

        form.addEventListener("submit", (e)=>{
            e.preventDefault();

            // get personal info
            let personalInfo = {};
            let personalInputs = document.getElementById("personal-info").querySelectorAll("input, textarea");
            for(let input of personalInputs) {
                personalInfo[input.getAttribute("name")] = input.value;
            }
            booking.personalInfo = personalInfo;
        })


    } catch (error) {
        console.log(error)
    }
})();

// update total price function

function updatePrice() {
    let duration = booking.destination?.TotalDuration || 0;
    let pricePerDay = booking.accommodation?.pricePerDay || 0;
    let accommodationTotal = duration * pricePerDay;
    let destinationPrice = booking.destination?.price || 0;

    document.getElementById("breakdown-destination-name").innerText = booking.destination.name;
    document.getElementById("breakdown-destination-price").innerText = destinationPrice + "$";
    document.getElementById("breakdown-accommodation-name").innerText = booking.accommodation?.name || "Not selected";
    document.getElementById("breakdown-accommodation-price").innerText = pricePerDay;
    document.getElementById("breakdown-destination-duration").innerText = duration;
    document.getElementById("breakdown-passengers-count").innerText = booking.passengerNumber;

    // calculat the total
    let total = accommodationTotal + destinationPrice;
    document.getElementById("breakdown-total").innerText = total;

    booking.totalPrice = total;

}

function validate() {
    
}