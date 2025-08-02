input.onButtonPressed(Button.AB, function () {
    led.plot(2, 4)
    basic.showLeds(`
        # # # # #
        # . . . .
        # . # # #
        # . . . #
        # # # # #
        `)
})
basic.forever(function () {
	
})
