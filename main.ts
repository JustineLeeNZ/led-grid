let xvalue = 0
input.onButtonPressed(Button.A, function () {
    led.plot(xvalue, 2)
})
input.onButtonPressed(Button.AB, function () {
    led.toggle(0, 0)
})
input.onButtonPressed(Button.B, function () {
    led.unplot(xvalue, 2)
})
input.onGesture(Gesture.Shake, function () {
    xvalue = randint(0, 4)
})
