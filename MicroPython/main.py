"""
Created by: Emre Guzel
Created on: Oct4 2024
This module is a Micro:bit MicroPython program runs RGB lights 
"""

from microbit import *

# setting the colors
if button_a.is_pressed():
    display.clear()
    display.show(Image.HAPPY)
    pin13.write_digital(0)
    pin14.write_digital(0)
    pin15.write_digital(0)

    # red ligth
    pin13.write_analog(1)
    pin14.write_digital(0)
    pin15.write_digital(0)

    # blue ligth
    pin13.write_analog(0)
    pin14.write_digital(1)
    pin15.write_digital(0)

    # green light
    pin13.write_analog(0)
    pin14.write_digital(0)
    pin15.write_digital(1)

    # purple
    pin13.write_analog(1)
    pin14.write_digital(1)
    pin15.write_digital(0)

    # light blue
    pin13.write_analog(0)
    pin14.write_digital(1)
    pin15.write_digital(1)

    # white
    pin13.write_analog(1)
    pin14.write_digital(1)
    pin15.write_digital(1)
