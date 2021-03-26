/* Eddystone Beacon Example provided within the module found here : Practical-IoT5-WearbleAndEmbeddedComputing
Original Author Dan Jackson Editing Author Scarlett Rowland 
This code processes sensor input from the Micro:Bit, creating events with a timeout function */

// import eddystone beacon to recieve bluetooth signal from Micro:Bit
import EddystoneBeaconScanner from '@abandonware/eddystone-beacon-scanner'

const filter = [
    ''  // Put your ID in this string
]

// when the server recieves updated bluetooth signal, timer clears and restarts
EddystoneBeaconScanner.on('updated', (beacon) => {
    if (filter.join() && !filter.includes(beacon.id)) return
    console.log('Bird moving')
    clearTimeout(myTimeout);
    myTimeout = setTimeout(birdLeft, 5000);;
});

EddystoneBeaconScanner.startScanning(true)

//sets the event variable to one on starting the programme
var birdCount = 0

// when birdLeft is called +1 is added to the bird count 
function birdLeft() {
    console.log('No event for 5 seconds (bird left)')
    birdCount = birdCount +1;
    console.log(birdCount);
 } 
 
 // to server
 export { birdCount};
 
 var myTimeout;
 
 /*
 This portion of the code was used for testing. Function x is called after 1,2,3 seconds, and after five seconds of inactivity - the bird left function is called
 
 function x() {
    console.log('Bird')
    clearTimeout(myTimeout);
    myTimeout = setTimeout(birdLeft, 5000);
 }
 
 setTimeout(x, 1000)
 setTimeout(x, 2000)
 setTimeout(x, 3000) */
