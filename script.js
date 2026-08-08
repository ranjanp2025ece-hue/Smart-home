// Store appliance status
let devices = {
    light: false,
    fan: false,
    tv: false,
    ac: false
};


// Function to turn appliance ON/OFF
function toggleDevice(device) {

    // Change status
    devices[device] = !devices[device];

    // Get HTML elements
    let statusElement =
        document.getElementById(device + "Status");

    let button =
        statusElement.parentElement.nextElementSibling;


    if (devices[device]) {

        // Appliance ON
        statusElement.textContent = "ON";

        statusElement.className = "on";

        button.textContent = "Turn OFF";

    } else {

        // Appliance OFF
        statusElement.textContent = "OFF";

        statusElement.className = "off";

        button.textContent = "Turn ON";
    }

    console.log(
        device + " is " +
        (devices[device] ? "ON" : "OFF")
    );
}
