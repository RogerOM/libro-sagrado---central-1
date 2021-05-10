radio.onReceivedString(function (receivedString) {
    basic.showIcon(IconNames.Angry)
    music.setBuiltInSpeakerEnabled(true)
    music.startMelody(music.builtInMelody(Melodies.Ringtone), MelodyOptions.Forever)
})
radio.setGroup(80)
music.playTone(988, music.beat(BeatFraction.Whole))
basic.showIcon(IconNames.Happy)
basic.pause(100)
basic.clearScreen()
basic.forever(function () {
    led.toggle(0, 0)
    basic.pause(200)
})
