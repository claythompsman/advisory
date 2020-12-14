input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 5; index++) {
        count += 1
        if (count == 100) {
            count = 0
        }
    }
})
let count = 0
count = 0
basic.showLeds(`
    . # . # .
    . . . . .
    # . . . #
    # . # . #
    . # # . .
    `)
basic.forever(function () {
    basic.showNumber(count)
})
