let strip = neopixel.create(DigitalPin.P14, 4, NeoPixelMode.RGB)
basic.forever(function () {
    for (let índice = 0; índice <= 3; índice++) {
        strip.clear()
        strip.setPixelColor(índice, neopixel.colors(NeoPixelColors.Red))
        strip.show()
        basic.pause(500)
    }
})
