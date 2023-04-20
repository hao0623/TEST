radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber > _1) {
        basic.showIcon(IconNames.Sad)
    } else {
        basic.showIcon(IconNames.Happy)
        music.playMelody("- - - - - - - - ", 120)
    }
    if (receivedNumber == _1) {
        basic.showIcon(IconNames.Heart)
    }
})
input.onGesture(Gesture.Shake, function () {
    _1 = randint(1, 6)
    basic.showNumber(_1)
    radio.sendNumber(_1)
})
let _1 = 0
radio.setGroup(1)
basic.forever(function () {
	
})
