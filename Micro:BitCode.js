// This is the code for the Micro:Bit. To run this code you will also need a PIR (infrared) sensor.

basic.forever(function () { //While the sensors are connected to a power source, this function runs
    if (input.isGesture(Gesture.Shake) && pins.digitalReadPin(DigitalPin.P0) == 0) { //Requires both shake gesture and PIR sensor to advertise BlueTooth
        let events = 0
        basic.showString("B")
        bluetooth.advertiseUid(
        events,
        0,
        7,
        false
        )
    } else { // if the sensors are not being triggered, BlueTooth does not advertise
        basic.showString("A")
        bluetooth.stopAdvertising()
    }
})
