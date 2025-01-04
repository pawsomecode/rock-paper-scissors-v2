let hand = 0
input.onGesture(Gesture.Shake, function () {
    hand = randint(1, 3)
    if (hand == 1) {
        basic.showLeds(`
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        music.playSoundEffect(music.createSoundEffect(
        WaveShape.Noise,
        4805,
        3063,
        109,
        51,
        612,
        SoundExpressionEffect.Warble,
        InterpolationCurve.Logarithmic
        ), SoundExpressionPlayMode.UntilDone)
    } else if (hand == 2) {
        basic.showLeds(`
            . . . . .
            . # # . .
            # # # # .
            # # # # .
            . # # . .
            `)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sawtooth, 1435, 0, 255, 255, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    } else {
        basic.showLeds(`
            . . . . .
            # # . # #
            # # . # #
            # . . . #
            . # . # .
            `)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 5000, 0, 255, 0, 200, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    }
})
