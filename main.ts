function CO2_RGB () {
    let Index = 0
    if (map >= 0 && map <= 5) {
        for (let Index = 0; Index <= 19; Index++) {
            strip.setPixelColor(Index, neopixel.colors(NeoPixelColors.Green))
            strip.show()
            basic.pause(500)
        }
    } else if (map >= 5 && map <= 14) {
        for (let Index = 0; Index <= 19; Index++) {
            strip.setPixelColor(Index, neopixel.colors(NeoPixelColors.Orange))
            strip.show()
            basic.pause(500)
        }
    } else if (map > 14) {
        for (let Index = 0; Index <= 19; Index++) {
            strip.setPixelColor(Index, neopixel.colors(NeoPixelColors.Red))
            strip.show()
            basic.pause(500)
        }
    }
    strip.setPixelColor(Index, neopixel.colors(NeoPixelColors.White))
}
input.onButtonPressed(Button.A, function () {
    basic.showNumber(SCD30.readCO2())
})
input.onButtonPressed(Button.AB, function () {
    SCD30.setCalibration400ppm()
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(SCD30.readTemperature())
})
let map = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.C16, 20, NeoPixelMode.RGB)
strip.setBrightness(10)
strip.showColor(neopixel.colors(NeoPixelColors.White))
basic.pause(1000)
for (let Index = 0; Index <= 19; Index++) {
    strip.setPixelColor(Index, neopixel.colors(NeoPixelColors.Green))
    strip.show()
    basic.pause(500)
}
basic.forever(function () {
    map = pins.map(
    SCD30.readCO2(),
    300,
    1200,
    0,
    19
    )
    CO2_RGB()
})
