scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    mySprite.setPosition(13, 250)
    tiles.setCurrentTilemap(tilemap`level4`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.jewels.jewel1, function (sprite, location) {
    for (let index = 0; index < 10000; index++) {
        tiles.setCurrentTilemap(tilemap`level2`)
        mySprite.setPosition(13, 250)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.skillmap.islandTile4, function (sprite, location) {
    for (let index = 0; index < 10000; index++) {
        mySprite.setPosition(13, 250)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.jewels.jewel3, function (sprite, location) {
    mySprite.setPosition(13, 250)
    tiles.setCurrentTilemap(tilemap`level3`)
})
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 6 6 6 6 6 . . . . . 
    . . . . . . 6 f 6 f 6 . . . . . 
    . . . . . . 6 6 6 6 6 . . . . . 
    . . . . . . 6 f f f 6 . . . . . 
    . . . . . . 6 6 6 6 6 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.player1.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
mySprite.setPosition(13, 250)
