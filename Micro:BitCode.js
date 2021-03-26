//
control.onEvent(EventBusSource.MICROBIT_ID_IO_P1, EventBusValue.MICROBIT_PIN_EVT_RISE, function () {
	
})
basic.forever(function () {
    if (input.isGesture(Gesture.Shake) && pins.digitalReadPin(DigitalPin.P0) == 0) { //
        let events = 0
        basic.showString("B")
        bluetooth.advertiseUid(
        events,
        0,
        7,
        false
        )
    } else {
        basic.showString("A")
        bluetooth.stopAdvertising()
    }
})
