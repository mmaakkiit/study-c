input.onButtonPressed(Button.A, function () {
    停止 = 0
})
input.onButtonPressed(Button.AB, function () {
    秒数 = 0
    停止 = 1
    basic.showString("Reset!")
    basic.clearScreen()
    basic.showNumber(秒数)
})
input.onButtonPressed(Button.B, function () {
    停止 = 1
})
let 停止 = 0
let 秒数 = 0
秒数 = 0
停止 = 1
basic.showString("Hello!")
basic.clearScreen()
basic.showString("Ready!")
basic.clearScreen()
basic.showNumber(秒数)
basic.forever(function () {
    if (停止 == 1) {
        basic.showNumber(秒数)
    } else {
        basic.pause(1000)
        秒数 += 1
        basic.showNumber(秒数)
    }
})
