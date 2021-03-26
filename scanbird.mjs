/* Eddystone Beacon Example provided within the module found here : Practical-IoT5-WearbleAndEmbeddedComputing
Original Author Dan Jackson Editing Author Scarlett Rowland */

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
 function x() {
    console.log('Bird')
    clearTimeout(myTimeout);
    myTimeout = setTimeout(birdLeft, 5000);
 }
 
 setTimeout(x, 1000)
 setTimeout(x, 2000)
 setTimeout(x, 3000) */