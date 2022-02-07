function inputAnswer (text: string) {
    match = 0
    for (let index = 0; index <= 4; index++) {
        if (text == describeFood[index]) {
            match += 1
        } else {
            misses = 1
        }
        if (match == 1) {
            music.baDing.play()
            info.changeScoreBy(1)
            match = 0
        }
        game.splash(info.score())
    }
}
let match = 0
let describeFood: string[] = []
let misses = 0
scene.setBackgroundImage(img`
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    `)
let picnicFood = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
picnicFood.setImage(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `)
misses = 0
info.setScore(0)
let foodOptions = [
img`
    . . . . . . . e c 7 . . . . . . 
    . . . . e e e c 7 7 e e . . . . 
    . . c e e e e c 7 e 2 2 e e . . 
    . c e e e e e c 6 e e 2 2 2 e . 
    . c e e e 2 e c c 2 4 5 4 2 e . 
    c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
    c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
    c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
    c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
    c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
    c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
    . e e e 2 2 2 2 2 2 2 2 2 4 e . 
    . 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
    . . 2 e e 2 2 2 2 2 4 4 2 e . . 
    . . . 2 2 e e 4 4 4 2 e e . . . 
    . . . . . 2 2 e e e e . . . . . 
    `,
img`
    . . . . . . . 6 . . . . . . . . 
    . . . . . . 8 6 6 . . . 6 8 . . 
    . . . e e e 8 8 6 6 . 6 7 8 . . 
    . . e 2 2 2 2 e 8 6 6 7 6 . . . 
    . e 2 2 4 4 2 7 7 7 7 7 8 6 . . 
    . e 2 4 4 2 6 7 7 7 6 7 6 8 8 . 
    e 2 4 5 2 2 6 7 7 6 2 7 7 6 . . 
    e 2 4 4 2 2 6 7 6 2 2 6 7 7 6 . 
    e 2 4 2 2 2 6 6 2 2 2 e 7 7 6 . 
    e 2 4 2 2 4 2 2 2 4 2 2 e 7 6 . 
    e 2 4 2 2 2 2 2 2 2 2 2 e c 6 . 
    e 2 2 2 2 2 2 2 4 e 2 e e c . . 
    e e 2 e 2 2 4 2 2 e e e c . . . 
    e e e e 2 e 2 2 e e e c . . . . 
    e e e 2 e e c e c c c . . . . . 
    . c c c c c c c . . . . . . . . 
    `,
img`
    . . . . . . . . . . . 6 6 6 6 6 
    . . . . . . . . . 6 6 7 7 7 7 8 
    . . . . . . 8 8 8 7 7 8 8 6 8 8 
    . . e e e e c 6 6 8 8 . 8 7 8 . 
    . e 2 5 4 2 e c 8 . . . 6 7 8 . 
    e 2 4 2 2 2 2 2 c . . . 6 7 8 . 
    e 2 2 2 2 2 2 2 c . . . 8 6 8 . 
    e 2 e e 2 2 2 2 e e e e c 6 8 . 
    c 2 e e 2 2 2 2 e 2 5 4 2 c 8 . 
    . c 2 e e e 2 e 2 4 2 2 2 2 c . 
    . . c 2 2 2 e e 2 2 2 2 2 2 2 e 
    . . . e c c e c 2 2 2 2 2 2 2 e 
    . . . . . . . c 2 e e 2 2 e 2 c 
    . . . . . . . c e e e e e e 2 c 
    . . . . . . . . c e 2 2 2 2 c . 
    . . . . . . . . . c c c c c . . 
    `,
img`
    . . . . . . b b b b a a . . . . 
    . . . . b b d d d 3 3 3 a a . . 
    . . . b d d d 3 3 3 3 3 3 a a . 
    . . b d d 3 3 3 3 3 3 3 3 3 a . 
    . b 3 d 3 3 3 3 3 b 3 3 3 3 a b 
    . b 3 3 3 3 3 a a 3 3 3 3 3 a b 
    b 3 3 3 3 3 a a 3 3 3 3 d a 4 b 
    b 3 3 3 3 b a 3 3 3 3 3 d a 4 b 
    b 3 3 3 3 3 3 3 3 3 3 d a 4 4 e 
    a 3 3 3 3 3 3 3 3 3 d a 4 4 4 e 
    a 3 3 3 3 3 3 3 d d a 4 4 4 e . 
    a a 3 3 3 d d d a a 4 4 4 e e . 
    . e a a a a a a 4 4 4 4 e e . . 
    . . e e b b 4 4 4 4 b e e . . . 
    . . . e e e e e e e e . . . . . 
    . . . . . . . . . . . . . . . . 
    `,
img`
    . . . . . . . . . . b b b . . . 
    . . . . . . . . b e e 3 3 b . . 
    . . . . . . b b e 3 2 e 3 a . . 
    . . . . b b 3 3 e 2 2 e 3 3 a . 
    . . b b 3 3 3 3 3 e e 3 3 3 a . 
    b b 3 3 3 3 3 3 3 3 3 3 3 3 3 a 
    b 3 3 3 d d d d 3 3 3 3 3 d d a 
    b b b b b b b 3 d d d d d d 3 a 
    b d 5 5 5 5 d b b b a a a a a a 
    b 3 d d 5 5 5 5 5 5 5 d d d d a 
    b 3 3 3 3 3 3 d 5 5 5 d d d d a 
    b 3 d 5 5 5 3 3 3 3 3 3 b b b a 
    b b b 3 d 5 5 5 5 5 5 5 d d b a 
    . . . b b b 3 d 5 5 5 5 d d 3 a 
    . . . . . . b b b b 3 d d d b a 
    . . . . . . . . . . b b b a a . 
    `
]
describeFood = [
"apple",
"strawberry",
"cherry",
"donut",
"cake"
]
for (let index = 0; index <= 4; index++) {
    picnicFood.setImage(foodOptions[index])
    pause(200)
}
picnicFood.destroy()
let userInput = game.askForString("What was in Yogi's basket?")
inputAnswer(userInput)
