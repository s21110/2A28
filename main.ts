input.onButtonPressed(Button.A, function () {
    _1 = false
    music.play(music.stringPlayable("E F G F E - - - ", 120), music.PlaybackMode.InBackground)
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        # # # # #
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        # . . . #
        # # # # #
        `)
    basic.pause(100)
    basic.showLeds(`
        . # . # .
        # # # # #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.pause(100)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.pause(100)
    _1 = true
    _2 += 1
    _3 += 1
})
input.onButtonPressed(Button.B, function () {
    _1 = false
    music.play(music.stringPlayable("E F G F E - - - ", 120), music.PlaybackMode.InBackground)
    basic.showLeds(`
        # . . . .
        . # . . .
        . # # # .
        . # # # .
        . # . # .
        `)
    basic.showLeds(`
        . . # . .
        . . # . .
        . # # # .
        . # # # .
        . # . # .
        `)
    basic.showLeds(`
        . . . . #
        . . . # .
        . # # # .
        . # # # .
        . # . # .
        `)
    basic.showLeds(`
        . . # . .
        . . # . .
        . # # # .
        . # # # .
        . # . # .
        `)
    basic.showLeds(`
        # . . . .
        . # . . .
        . # # # .
        . # # # .
        . # . # .
        `)
    _1 = true
    _2 += 1
    _3 += 1
})
let _3 = 0
let _1 = false
_1 = true
let _2 = 0
basic.forever(function () {
    if (_1) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            . # # # .
            `)
    }
    if (_2 == 3) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Birthday), music.PlaybackMode.InBackground)
    }
    if (_2 > 3) {
        _2 = 1
    }
    if (_3 == 30) {
        _1 = false
        basic.clearScreen()
        basic.showLeds(`
            # . # . #
            . # . # .
            # . # . #
            . . . . .
            # # # # #
            `)
    }
})
