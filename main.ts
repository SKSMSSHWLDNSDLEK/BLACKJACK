let _1 = 0
let _2 = 0
let _3 = 0
let 합 = 0
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    합 = _1 + (_2 + _3)
    if (합 < 21) {
        basic.showNumber(합)
    } else if (합 == 21) {
        basic.showString("BLACK JACK")
    } else {
        basic.showIcon(IconNames.Angry)
        basic.showString("game over")
    }
})
input.onButtonPressed(Button.A, function () {
    if (input.isGesture(Gesture.Shake)) {
        _1 = 0
        basic.showString("" + (_1))
    } else {
        _1 = randint(1, 11)
        basic.showString("" + (_1))
    }
    basic.pause(100)
    basic.clearScreen()
})
input.onGesture(Gesture.ScreenDown, function () {
    _1 = 0
    _2 = 0
    _3 = 0
})
input.onButtonPressed(Button.AB, function () {
    if (input.isGesture(Gesture.Shake)) {
        _3 = 0
        basic.showString("" + (_3))
    } else {
        _3 = randint(1, 11)
        basic.showString("" + (_3))
    }
    basic.pause(100)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    if (input.isGesture(Gesture.Shake)) {
        _2 = 0
        basic.showString("" + (_2))
    } else {
        _2 = randint(1, 11)
        basic.showString("" + (_2))
    }
    basic.pause(100)
    basic.clearScreen()
})
