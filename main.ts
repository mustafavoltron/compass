let degrees = 0
basic.forever(function () {
    degrees = input.compassHeading()
    if (degrees < 45) {
        basic.showString("N")
    } else if (degrees == 45) {
        basic.showString("NE")
    } else if (degrees < 135) {
        basic.showString("E")
    } else if (degrees == 135) {
        basic.showString("SE")
    } else if (degrees == 119) {
        basic.showString("Q")
    } else if (degrees < 225) {
        basic.showString("S")
    } else if (degrees == 225) {
        basic.showString("SW")
    } else if (degrees < 315) {
        basic.showString("W")
    } else if (degrees == 315) {
        basic.showString("NW")
    } else {
        basic.showString("N")
    }
})
