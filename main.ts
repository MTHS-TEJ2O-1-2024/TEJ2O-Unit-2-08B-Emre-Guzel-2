/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Mr. Coxall
 * Created on: Oct 3 2024
 * This program runs RGB lights 
*/
    //seting up my mcrobit
basic.clearScreen()
basic.showIcon(IconNames.Happy)
input.onButtonPressed(Button.A, function () {
pins.digitalWritePin(DigitalPin.P13, 0)
pins.digitalWritePin(DigitalPin.P14, 0)
pins.digitalWritePin(DigitalPin.P15, 0)

    // red LED
   pins.digitalWritePin(DigitalPin.P13,1)
   pins.digitalWritePin(DigitalPin.P14,0)
   pins.digitalWritePin(DigitalPin.P15,0)
   basic.pause(1000)

     //Setting blue for
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P15, 0)
    basic.pause(1000)

    //setting the green
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 1)
    basic.pause(1000)

    //Purple
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P15, 0)
    basic.pause(1000)
    // lgith blue
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P15, 1)
    basic.pause(1000)

   // white
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P15, 1)
    basic.pause(1000)

})
