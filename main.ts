input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    Korb.change(LedSpriteProperty.X, -1)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    Korb.change(LedSpriteProperty.X, 1)
})
let Ball: game.LedSprite = null
let Korb: game.LedSprite = null
Korb = game.createSprite(2, 4)
game.setLife(3)
game.setScore(0)
basic.forever(function () {
    Ball = game.createSprite(randint(0, 4), 0)
    for (let index = 0; index < 4; index++) {
        Korb.change(LedSpriteProperty.Y, -1)
        basic.pause(400)
    }
    if (Korb.isTouching(Ball)) {
        game.addScore(1)
        Ball.delete()
    } else {
        Ball.delete()
        game.removeLife(1)
    }
})
