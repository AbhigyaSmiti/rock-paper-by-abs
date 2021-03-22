input.onGesture(Gesture.Shake, function () {
    if (randint(0, 2) == 0) {
        basic.showIcon(IconNames.SmallSquare)
    } else {
        if (randint(0, 2) == 1) {
            basic.showIcon(IconNames.Chessboard)
        } else {
            basic.showIcon(IconNames.Scissors)
        }
    }
})
radio.setGroup(2)
radio.setTransmitPower(1)
