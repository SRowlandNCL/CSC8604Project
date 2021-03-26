BirdFeeder-01 Read Me File

This project is for CSC8604 - Technologies for HCI, Newcastle University MSc HCI
This project was built within Visual Code Studio, and the Micro:Bit code was created using blocks at https://makecode.microbit.org/
This prototype is a way of using accelerometer and PIR sensors to trigger BlueTooth advertising. These BlueTooth signals are formatted by the scanbird.mjs into event variables. Using the event variable, different images are diplayed within a webpage to represent the data. 

SCAN BIRD

Eddystone Beacon Example provided within the module found here : Practical-IoT5-WearbleAndEmbeddedComputing
Original Author Dan Jackson Editing Author Scarlett Rowland

The scan bird file recieves BlueTooth connection through EddystoneBeaconScanner. 
When it recieves a blueTooth connection a timer is triggered, and restarts while it is recieving a connection.
When connection ceases, and 5 seconds has passed without another connection being recieved, the timer completes.
Upon the completion of the timer, 1 is added to the birdCount variable.

SERVER

Server Example provided within the module found here : Practical-Web4-ServerSide Web API
Original Author Dan Jackson Editing Author Scarlett Rowland

This server passes the event variable to the HTML file.

HTML

HTML Example provided within the module found here : Practical-Web1-HelloHTML
Original Author Dan Jackson Editing Author Scarlett Rowland

Using an async function, the html dislpays a different image dependant of the variable passed through it.
This function is called using a button (Update) on the webpage. 

CSS
CSS Example provided within the module found here : Practical-Web1-HelloHTML
Original Author Dan Jackson Editing Author Scarlett Rowland


