"""
Created by: Mr. Coxall
Created on: Sep 2020
This module is a Micro:bit MicroPython program runs RGB lights 
"""

from microbit import *

# setting the microbit
display.clear()
# setting the colors
if button_a.get_presses():
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