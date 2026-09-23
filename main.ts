namespace SpriteKind {
    export const Light = SpriteKind.create()
    export const enemy2 = SpriteKind.create()
    export const enemy3 = SpriteKind.create()
    export const ui = SpriteKind.create()
    export const ded = SpriteKind.create()
}
/**
 * Max acceleration should be 10-12
 */
/**
 * default is 0.9
 * 
 * add more decmials for a slower deaccleration
 */
/**
 * 0/360, 90, 180, 270
 */
/**
 * speed is how fast the car accelerates
 */
function Load_Menu_Info () {
    Main_Menu_Open = false
    Info_Menu_Open = true
    Car_Menu_Open = false
    myTextSprite3 = fancyText.create("abc")
    myTextSprite3.setPosition(81, 10)
    fancyText.setMaxWidth(myTextSprite3, 100)
    fancyText.setColor(myTextSprite3, fancyText.twoToneColor(13, 4))
    myMenu2 = miniMenu.createMenu(
    miniMenu.createMenuItem("Controls"),
    miniMenu.createMenuItem("Pit lane"),
    miniMenu.createMenuItem("Tires"),
    miniMenu.createMenuItem("Fuel"),
    miniMenu.createMenuItem("Damage"),
    miniMenu.createMenuItem("Back")
    )
    myMenu2.setPosition(28, 38)
    miniMenu.setMenuStyleProperty(myMenu2, miniMenu.MenuStyleProperty.Width, 65)
    miniMenu.setMenuStyleProperty(myMenu2, miniMenu.MenuStyleProperty.Columns, 1)
    miniMenu.setStyleProperty(myMenu2, miniMenu.StyleKind.Default, miniMenu.StyleProperty.Margin, 3)
    miniMenu.setStyleProperty(myMenu2, miniMenu.StyleKind.Default, miniMenu.StyleProperty.Background, -1)
    miniMenu.setStyleProperty(myMenu2, miniMenu.StyleKind.Default, miniMenu.StyleProperty.Foreground, -5)
    miniMenu.setStyleProperty(myMenu2, miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Background, 4)
    miniMenu.setStyleProperty(myMenu2, miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Foreground, 1)
    miniMenu.setStyleProperty(myMenu2, miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Border, 1)
    miniMenu.onSelectionChanged(myMenu2, function (selection, selectedIndex) {
        music.play(music.createSoundEffect(WaveShape.Triangle, 298, 0, 255, 255, 20, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        if (selectedIndex == 0) {
            scene.setBackgroundImage(img`
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                `)
            fancyText.setText(myTextSprite3, "Up to Accelerate, Down to Brake/Reverse Right and Left to turn")
            myTextSprite3.setPosition(119, 29)
            spriteutils.moveTo(myTextSprite3, spriteutils.point(119, 29), 50)
        } else if (selectedIndex == 1) {
            fancyText.setText(myTextSprite3, "The pit lane is a lane separate from the track. This is where you refuel, repair, or change tires. Some races may require you to pit.")
            myTextSprite3.setPosition(119, 55)
            spriteutils.moveTo(myTextSprite3, spriteutils.point(119, 55), 50)
        } else if (selectedIndex == 2) {
            fancyText.setText(myTextSprite3, "Tires can influence your handling and how long you stay on track. Different tires have different amounts of tire life. Once your tire life reaches zero your handling will be impacted significantly for the worse. Different tire types are as follows: Hard tries last the longest but give the least amount of grip on a track. Soft Tires last the shortest but give you the most amount of grip on the track. Medium tires last an average amount of time and have little to no effect on performance. ")
            myTextSprite3.setPosition(119, 205)
            spriteutils.moveTo(myTextSprite3, spriteutils.point(myTextSprite3.x, myTextSprite3.y - 285), 20000)
        } else if (selectedIndex == 3) {
            fancyText.setText(myTextSprite3, "As long as you have fuel, you'll be able to race. As you race and you use it up, your car becomes lighter and faster.")
            myTextSprite3.setPosition(119, 55)
            spriteutils.moveTo(myTextSprite3, spriteutils.point(119, 55), 50)
        } else if (selectedIndex == 4) {
            fancyText.setText(myTextSprite3, "Damage comes from crashing into walls and barriers. If you reach 100 damage, game over.")
            myTextSprite3.setPosition(119, 55)
            spriteutils.moveTo(myTextSprite3, spriteutils.point(119, 55), 50)
        } else {
            fancyText.setText(myTextSprite3, "")
        }
    })
    miniMenu.onButtonPressed(myMenu2, miniMenu.Button.A, function (selection, selectedIndex) {
        if (selectedIndex == 0) {
        	
        } else if (selectedIndex == 1) {
        	
        } else if (selectedIndex == 5) {
            music.play(music.createSoundEffect(WaveShape.Triangle, 298, 305, 202, 255, 20, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
            color.startFade(color.originalPalette, color.Black, 300)
            color.pauseUntilFadeDone()
            sprites.destroy(myMenu2)
            sprites.destroy(myTextSprite3)
            color.startFade(color.Black, color.originalPalette, 300)
            Load_Menu()
        }
    })
}
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (sprites.readDataNumber(sprite, "damage") > 100) {
        scene.cameraShake(5, 2000)
        sprites.setDataNumber(sprite, "fuel", 0)
        extraEffects.createSpreadEffectAt(Explosion_Dense, sprite.x, sprite.y, 5000)
        extraEffects.createSpreadEffectAt(Explosion, sprite.x, sprite.y, 5000)
        for (let index = 0; index <= 15; index++) {
            spriteFx.recolor(sprite, index + 1, 15)
        }
        spriteFx.recolor(sprite, 0, 0)
        timer.background(function () {
            for (let index = 0; index < 5; index++) {
                spriteFx.smoothRotate(sprite, spriteFx.rotation(sprite) + randint(5, 10), 2)
                pause(100)
            }
        })
    }
    if (Math.abs(sprites.readDataNumber(sprite, "speed")) > 50 || sprites.readDataNumber(sprite, "speed") > 50) {
        scene.cameraShake(2, 100)
        sprites.changeDataNumberBy(sprite, "damage", 0.2)
    }
})
function ProtoypeCarsStats () {
    PrototypeCarImages = [
    img`
        ....................
        ....................
        ....................
        ....................
        ...ffaafff.....cffff
        .aa21affccf...cffbb2
        a121111aaaac.ccaa1a2
        a2111ffffccacb1111af
        c111fb1bbffca1111acf
        c11fb11111ffffffffff
        c111fb1bbffca1111acf
        a2111ffffccacb1111af
        a121111aaaac.ccaa1a2
        .aa21affccf...cffbb2
        ...ffaafff.....cffff
        ....................
        ....................
        ....................
        ....................
        `,
    img`
        ....................
        ....................
        ....................
        ....................
        ....aaccc......ccc2f
        .a22a11aac.acaaccb2f
        a2ff111111cbbbb11f2f
        2ff11aaaa11111111111
        c111aab1aabb1bb11bba
        c11aab111aaaaaaaaaaa
        c111aab1aabb1bb11bba
        2ff11aaaa11111111111
        a2ff111111cbbbb11f2f
        .a22a11aac.acaaccb2f
        ....aaccc......ccc2f
        ....................
        ....................
        ....................
        ....................
        `,
    img`
        ....................
        ....................
        ....................
        ..................c2
        ...ffaafff...faafff2
        .aaccaffcacccaaffaaf
        a11ccccaaaaaaaccfac2
        a1cccffffccaaacfaac2
        cccaff1bbffcccfaaccf
        cccafb111bbfffaaaaaf
        cccaff1bbffcccfaaccf
        a1cccffffccaaacfaac2
        a11ccccaaaaaaaccfac2
        .aaccaffcacccaaffaaf
        ...ffaafff...faafff2
        ..................c2
        ....................
        ....................
        ....................
        `,
    img`
        ....................
        ....................
        ....................
        ..................c2
        ...ffaafff...f77fff2
        .aa11aff1711177ff88f
        a991111777777711f812
        a9111ffff117771f8812
        111aff1bbff111f8811f
        111afb111bbfff88888f
        111aff1bbff111f8811f
        a9111ffff117771f8812
        a991111777777711f812
        .aa11aff1711177ff88f
        ...ffaafff...f77fff2
        ..................c2
        ....................
        ....................
        ....................
        `,
    img`
        ....................
        ....................
        ....................
        ..................c2
        ...ffaafff...f22fff2
        .aa11aff1211122ffccf
        a331111222222211fc12
        a3111ffff112221fcc12
        111aff1bbff111fcc11f
        111afb111bbfffcccccf
        111aff1bbff111fcc11f
        a3111ffff112221fcc12
        a331111222222211fc12
        .aa11aff1211122ffccf
        ...ffaafff...f22fff2
        ..................c2
        ....................
        ....................
        ....................
        `,
    img`
        ....................
        ....................
        ....................
        ..................c2
        ...ffaafff...fbbfff2
        .1111affcbcccbbffbbf
        1ff1111bbbbbbbccfbc2
        ff111ffffccbbbcfbbc2
        111aff1bbffcccfbbccf
        111afb111bbfffbbbbbf
        111aff1bbffcccfbbccf
        ff111ffffccbbbcfbbc2
        1ff1111bbbbbbbccfbc2
        .1111affcbcccbbffbbf
        ...ffaafff...fbbfff2
        ..................c2
        ....................
        ....................
        ....................
        `,
    img`
        ....................
        ....................
        ....................
        ....................
        ....aaccc......ccc2f
        .a44addaac.acaaccb2f
        a4ffddddddcbbbbddf2f
        4ffddaaaaddddddddddd
        cdddaab1aabbdbbddbba
        cddaab111aaaaaaaaaaa
        cdddaab1aabbdbbddbba
        4ffddaaaaddddddddddd
        a4ffddddddcbbbbddf2f
        .a44addaac.acaaccb2f
        ....aaccc......ccc2f
        ....................
        ....................
        ....................
        ....................
        `,
    img`
        ....................
        ....................
        ....................
        ....................
        ...ffaafff.....cffff
        .aa65affccf...cffbb2
        a565555aaaac.ccaa5a2
        a6555ffffccacb5555af
        c555fb1bbffca5555acf
        c55fb11111ffffffffff
        c555fb1bbffca5555acf
        a6555ffffccacb5555af
        a565555aaaac.ccaa5a2
        .aa65affccf...cffbb2
        ...ffaafff.....cffff
        ....................
        ....................
        ....................
        ....................
        `
    ]
}
function PitFunction2 (Sprite2: Sprite, playernumber: number) {
    if (Game_Staretd) {
        timer.background(function () {
            if (Track_Number == 1) {
                sprites.setDataBoolean(Sprite2, "pitting", false)
                if (playernumber == 1) {
                    spriteutils.moveToAtSpeed(Sprite2, spriteutils.point(272, 176), 30, true)
                    spriteFx.smoothRotate(Sprite2, 90, 1000)
                    Pitting = false
                    sprites.setDataNumber(The_Player, "speed", -30)
                    sprites.setDataNumber(The_Player, "direction", 90)
                } else if (playernumber == 2) {
                    Sprite2.vx = 0
                    Sprite2.vy = 0
                    spriteFx.smoothRotate(Sprite2, 90, 1000)
                    spriteutils.moveToAtSpeed(Sprite2, spriteutils.point(272, 137), 30, true)
                    spriteFx.smoothRotate(Sprite2, 90, 1000)
                    spriteutils.moveToAtSpeed(Sprite2, spriteutils.point(269, 98), 30, true)
                    spriteFx.smoothRotate(Sprite2, 35, 1000)
                    spriteutils.moveToAtSpeed(Sprite2, spriteutils.point(261, 75), 50, true)
                    spriteFx.smoothRotate(Sprite2, 7, 1000)
                    spriteutils.moveToAtSpeed(Sprite2, spriteutils.point(228, 59), 50, true)
                    spriteFx.smoothRotate(Sprite2, 0, 500)
                    spriteutils.moveToAtSpeed(Sprite2, spriteutils.point(110, 60), 60 + randint(-1, 20), true)
                } else if (playernumber == 3) {
                    Sprite2.vx = 0
                    Sprite2.vy = 0
                    spriteFx.smoothRotate(Sprite2, 90, 1000)
                    spriteutils.moveToAtSpeed(Sprite2, spriteutils.point(269, 98), 30, true)
                    spriteFx.smoothRotate(Sprite2, 35, 1000)
                    spriteutils.moveToAtSpeed(Sprite2, spriteutils.point(261, 75), 50, true)
                    spriteFx.smoothRotate(Sprite2, 7, 1000)
                    spriteutils.moveToAtSpeed(Sprite2, spriteutils.point(228, 59), 50, true)
                    spriteFx.smoothRotate(Sprite2, 0, 500)
                    spriteutils.moveToAtSpeed(Sprite2, spriteutils.point(110, 60), 60 + randint(-1, 20), true)
                } else {
                    Sprite2.vx = 0
                    Sprite2.vy = 0
                    spriteFx.smoothRotate(Sprite2, 0, 1000)
                    spriteutils.moveToAtSpeed(Sprite2, spriteutils.point(264, 51), 30, true)
                    spriteFx.smoothRotate(Sprite2, 352, 500)
                    spriteutils.moveToAtSpeed(Sprite2, spriteutils.point(110, 60), 60 + randint(-1, 20), true)
                }
            } else if (Track_Number == 2) {
                if (playernumber == 1) {
                    spriteutils.moveToAtSpeed(Sprite2, spriteutils.point(694, 258), 40, true)
                    Pitting = false
                    sprites.setDataNumber(The_Player, "speed", -30)
                    sprites.setDataNumber(The_Player, "direction", 180)
                } else {
                    spriteutils.moveToAtSpeed(Sprite2, spriteutils.point(873, 255), 40, true)
                    spriteFx.smoothRotate(Sprite2, 192, 500)
                    spriteutils.moveToAtSpeed(Sprite2, spriteutils.point(916, 259), 40, true)
                    spriteFx.smoothRotate(Sprite2, 206, 500)
                    spriteutils.moveToAtSpeed(Sprite2, spriteutils.point(962, 279), 40, true)
                    spriteFx.smoothRotate(Sprite2, 197, 500)
                    spriteutils.moveToAtSpeed(Sprite2, spriteutils.point(1000, 300), 40, true)
                    spriteFx.smoothRotate(Sprite2, 180, 500)
                    spriteutils.moveToAtSpeed(Sprite2, spriteutils.point(1047, 310), 40, true)
                }
            } else if (Track_Number == 3) {
                if (playernumber == 1) {
                    spriteutils.moveToAtSpeed(Sprite2, spriteutils.point(199, 56), 40, true)
                    Pitting = false
                    sprites.setDataNumber(The_Player, "speed", -30)
                    sprites.setDataNumber(The_Player, "direction", 180)
                } else {
                    spriteFx.smoothRotate(Sprite2, 180, 550)
                    spriteutils.moveToAtSpeed(Sprite2, spriteutils.point(230, 48), 40, true)
                    spriteFx.smoothRotate(Sprite2, 230, 500)
                    spriteutils.moveToAtSpeed(Sprite2, spriteutils.point(255, 60), 40, true)
                    spriteFx.smoothRotate(Sprite2, 208, 500)
                    spriteutils.moveToAtSpeed(Sprite2, spriteutils.point(290, 90), 40, true)
                    spriteFx.smoothRotate(Sprite2, 180, 500)
                    spriteutils.moveToAtSpeed(Sprite2, spriteutils.point(307, 96), 40, true)
                }
            }
        })
    }
}
function PlayerSpecs (PlayerInRacingSpeed: number, PlayerInRacingHandling: number, PlayerInRacingDeacllerate: number, PlayerInRacingAccleration: number, PlayerInRacingLook: Image) {
    PlayerInRaceSpeed = PlayerInRacingSpeed
    PlayerInRaceHandling = PlayerInRacingHandling
    PlayerInRaceDeaccleration = PlayerInRacingDeacllerate
    PlayerInRaceAcceleration = PlayerInRacingAccleration
    PlayerInRacingImage = PlayerInRacingLook
}
function Open_Pit_Menu () {
    myMenu = miniMenu.createMenu(
    miniMenu.createMenuItem("Tire Compound", img`
        . 4 4 4 4 4 4 . 
        4 4 4 4 4 4 4 4 
        4 4 4 . . 4 4 4 
        4 4 . . . . 4 4 
        4 4 . . . . 4 4 
        4 4 4 . . 4 4 4 
        4 4 4 4 4 4 4 4 
        . 4 4 4 4 4 4 . 
        `),
    miniMenu.createMenuItem("Refuel", img`
        . 4 4 4 4 4 . . 
        . . 4 4 4 . . . 
        . 4 4 4 4 4 . . 
        4 . . . . . 4 . 
        4 . . . . . . 4 
        4 4 . . . . . 4 
        . 4 4 4 4 4 4 . 
        . . 4 4 . . . . 
        `),
    miniMenu.createMenuItem("Repair", img`
        . . 4 4 . . . . 
        . . . 4 . . . . 
        4 . . 4 4 . . . 
        4 4 4 4 4 . . . 
        . . 4 4 4 4 . . 
        . . . . 4 4 4 . 
        . . . . . 4 4 4 
        . . . . . . 4 4 
        `),
    miniMenu.createMenuItem("Exit", img`
        . . . . . . . . 
        . . 4 . . . . . 
        . 4 4 . . . . . 
        4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 
        . 4 4 . . . . . 
        . . 4 . . . . . 
        . . . . . . . . 
        `)
    )
    myMenu.z = 150
    miniMenu.setDimensions(myMenu, 100, 100)
    miniMenu.setTitle(myMenu, "Pit")
    miniMenu.setStyleProperty(myMenu, miniMenu.StyleKind.DefaultAndSelected, miniMenu.StyleProperty.Background, 15)
    miniMenu.setStyleProperty(myMenu, miniMenu.StyleKind.Default, miniMenu.StyleProperty.Foreground, 14)
    miniMenu.setStyleProperty(myMenu, miniMenu.StyleKind.DefaultAndSelected, miniMenu.StyleProperty.Border, 1)
    miniMenu.setStyleProperty(myMenu, miniMenu.StyleKind.DefaultAndSelected, miniMenu.StyleProperty.BorderColor, 4)
    miniMenu.setStyleProperty(myMenu, miniMenu.StyleKind.Title, miniMenu.StyleProperty.BorderColor, 4)
    myMenu.setFlag(SpriteFlag.RelativeToCamera, true)
    myMenu.setPosition(52, 99)
    miniMenu.onButtonPressed(myMenu, miniMenu.Button.A, function (selection, selectedIndex) {
        if (selectedIndex == 3) {
            miniMenu.close(myMenu)
            PitFunction2(The_Player, sprites.readDataNumber(The_Player, "playernumber"))
        } else if (selectedIndex == 0) {
            miniMenu.close(myMenu)
            Open_Pit_Menu2()
        } else if (selectedIndex == 1) {
            miniMenu.setStyleProperty(myMenu, miniMenu.StyleKind.Default, miniMenu.StyleProperty.Foreground, 10)
            miniMenu.setStyleProperty(myMenu, miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Foreground, 11)
            sprites.setDataNumber(The_Player, "fuel", 100)
            sprites.setDataNumber(The_Player, "fuelspeedchange", 0)
            Notification("Filled", img`
                . 5 5 5 5 5 . . 
                . . 5 5 5 . . . 
                . 5 5 5 5 5 . . 
                5 . . . . . 5 . 
                5 . . . . . . 5 
                5 5 . . . . . 5 
                . 5 5 5 5 5 5 . 
                . . 5 5 . . . . 
                `)
            miniMenu.setButtonEventsEnabled(myMenu, false)
            timer.after(4000, function () {
                miniMenu.setButtonEventsEnabled(myMenu, true)
                miniMenu.setStyleProperty(myMenu, miniMenu.StyleKind.Default, miniMenu.StyleProperty.Foreground, 14)
                miniMenu.setStyleProperty(myMenu, miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Foreground, 1)
            })
        } else if (selectedIndex == 2) {
            miniMenu.setStyleProperty(myMenu, miniMenu.StyleKind.Default, miniMenu.StyleProperty.Foreground, 10)
            miniMenu.setStyleProperty(myMenu, miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Foreground, 11)
            sprites.setDataNumber(The_Player, "damage", 0)
            Notification("Fixed", img`
                . . 5 5 . . . . 
                . . . 5 . . . . 
                5 . . 5 5 . . . 
                5 5 5 5 5 . . . 
                . . 5 5 5 5 . . 
                . . . . 5 5 5 . 
                . . . . . 5 5 5 
                . . . . . . 5 5 
                `)
            miniMenu.setButtonEventsEnabled(myMenu, false)
            timer.after(4000, function () {
                miniMenu.setButtonEventsEnabled(myMenu, true)
                miniMenu.setStyleProperty(myMenu, miniMenu.StyleKind.Default, miniMenu.StyleProperty.Foreground, 14)
                miniMenu.setStyleProperty(myMenu, miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Foreground, 1)
            })
        }
    })
}
spriteutils.createRenderable(120, function (screen2) {
    if (Custom_Menu_Open) {
        if (truefalse_gen) {
            images.print(screen2, "Night", 95, 5, 5)
        } else {
            images.print(screen2, "Night", 95, 5, 2)
        }
        images.print(screen2, "Laps: " + CustomLaps, 95, 14, 5)
        images.print(screen2, "Pits: " + Custom_Pits, 95, 23, 5)
        if (Custom_Track_Name == "Halbmond Pass") {
            spriteutils.drawTransparentImage(img`
                ccccccccccccccccc5566666665566666665666666655666cccccccccccccccc
                cccccccccccccccc55111111111111111111111111111115cccccccccccccccc
                cccccccccccccccc651aaaaaaaaa1a1aaaaaaaaaaaaaaa16cccccccccccccccc
                cccccccccccccccc651aaaaaaaa1a1aaaaaaaaaaaaaaaa16cccccccccccccccc
                cccccccccccccccc661aaaaaaaaa1a1aaaaaaaaaaaaaaa16cccccccccccccccc
                cccccccccccccccc661aaaaaaaa1a1aaaaaaaaaaaaaaaa16cccccccccccccccc
                cccccccccccccccc661aaaa1111111111111111111aaaa16cccccccccccccccc
                cccccccccccccc55561aaaa1556666666655555551aaaa155ccccccccccccccc
                cccccccccccccc56551aaaa1565555555555655651aaaa156ccccccccccccccc
                cccccccccccccc56661aaaa1665ccccccccc555551aaaa165ccccccccccccccc
                cccccccccccccc55661aaaa16555cccccccccc5551aaaa16cccccccccccccccc
                cccccccccccccc56651aaaa166555ccc555ccccc61aaaa16cccccccccccccccc
                cccccccccccccc55661aaaa1566666666655ccc561aaaa15cccccccccccccccc
                ccccccccccccccc5661aaaa11111111111155cc561aaaa156ccccccccccccccc
                ccccccccccccccc5661aaaaaaaaaaaaaaa155c5551aaaa166ccccccccccccccc
                ccccccccccccccc5661aaaaaaaaaaaaaaa165c5551aaaa165ccccccccccccccc
                cccccccccccccccc561aaaaaaaaaaaaaaa165c5651aaaa166ccccccccccccccc
                cccccccccccccccc561aaaaaaaaaaaaaaa16ccc661aaaa166ccccccccccccccc
                cccccccccccccccc55111111111111aaaa15cc5661aaaa166ccccccccccccccc
                ccccccccccccccccc6655566666651aaaa15cc5661aaaa156ccccccccccccccc
                cccccccccccccccccccccc55556561aaaa155c6651aaaa156ccccccccccccccc
                cccccccccccccccccccccccccc5661aaaa155c6651aaaa16cccccccccccccccc
                ccccccccccccccccccccccccccc661aaaa155c6551aaaa16cccccccccccccccc
                ccccccccccccccccccccccccccc561aaaa165c6551aaaa16cccccccccccccccc
                ccccccccccccccccccccccccccc561aaaa165c6651aaaa16cccccccccccccccc
                ccccccccccccccccccccccccccc561aaaa156c6651aaaa15cccccccccccccccc
                ccccccccccccccccccccccccccc561aaaa156c5551aaaa15cccccccccccccccc
                ccccccccccccccccccccccccccc551aaaa156c5551aaaa15cccccccccccccccc
                cccccccccccccccccccccccccc5561aaaa156c5551aaaa16cccccccccccccccc
                cccccccccccccccccccccccccc5561aaaa156c5551aaaa16cccccccccccccccc
                cccccccccccccccccccccccccc6661aaaa166cc651aaaa165ccccccccccccccc
                cccccccccccccccccccccccccc6661aaaa16ccc561aaaa165ccccccccccccccc
                cccccccccccccccccccccccccc5651aaaa15ccc561aaaa165ccccccccccccccc
                ccccccccccccccccccccccccccc651aaaa165ccc61aaaa165ccccccccccccccc
                ccccccccccccccccccccccccccc551aaaa165ccc51aaaa1655cccccccccccccc
                ccccccccccccccccccccccccccc561aaaa165cc561aaaa1656cccccccccccccc
                ccccccccccccccccccccccccccc561aaaa165cc561aaaa1666cccccccccccccc
                ccccccccccccccccccccccccccc551aaaa155cc561aaaa1666cccccccccccccc
                ccccccccccccccccccccccccccc551aaaa165cc561aaaa1566cccccccccccccc
                cccccccccccccccccccccccccc5651aaaa165cc561aaaa1555cccccccccccccc
                cccccccccccccccccccccccccc5651aaaa165ccc51aaaa1566cccccccccccccc
                ccccccccccccccccccccccccc56651aaaa16cccc61aaaa1665cccccccccccccc
                cccccccccccccccccccccccc556651aaaa16cccc61aaaa165ccccccccccccccc
                cccccccccccccccccccccc55556661aaaa1655cc61aaaa165ccccccccccccccc
                ccccccccccccc55566666656666561aaaa1555cc61aaaa165ccccccccccccccc
                ccccccccccccc61111111111111111aaaa155ccc61aaaa165ccccccccccccccc
                ccccccccccccc51aaaaaaaaaaaaaaaaaaa155ccc51aaaa15cccccccccccccccc
                ccccccccccccc51aaaaaaaaaaaaaaaaaaa155ccc51aaaa16cccccccccccccccc
                ccccccccccccc51aaaaaaaaaaaaaaaaaaa165ccc51aaaa16cccccccccccccccc
                ccccccccccccc51aaaaaaaaaaaaaaaaaaa165ccc51aaaa165ccccccccccccccc
                ccccccccccccc51aaaa111111111111111165cc551aaaa165ccccccccccccccc
                ccccccccccccc51aaaa15555566666656665ccc561aaaa1665cccccccccccccc
                ccccccccccccc61aaaa155666c5555cccc55ccc561aaaa1665cccccccccccccc
                ccccccccccccc61aaaa15cccccccccccccccccc561aaaa1665cccccccccccccc
                cccccccccccc551aaaa155cccccccccccccccc5561aaaa1666cccccccccccccc
                cccccccccccc651aaaa1555c55555c555555666651aaaa1666cccccccccccccc
                cccccccccccc651aaaa15555666666666665566551aaaa1666cccccccccccccc
                cccccccccccc661aaaa11111111111111111111111aaaa156ccccccccccccccc
                cccccccccccc561aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa166ccccccccccccccc
                cccccccccccc561aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa166ccccccccccccccc
                ccccccccccccc61aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa166ccccccccccccccc
                ccccccccccccc61aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa166ccccccccccccccc
                ccccccccccccc611111111111111111111111111111111156ccccccccccccccc
                ccccccccccccc665666555566666666555566655555666556ccccccccccccccc
                `, screen2, 82, 53)
            images.print(screen2, "" + Custom_Track_Name, 74, 44, 1)
        } else if (Custom_Track_Name == "Tani no Kochi") {
            spriteutils.drawTransparentImage(img`
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccc65555556655ccccc
                ccccccccccccccccccccccccccccccccccccccccccccc555555555665565555c
                ccccccccccccccccccccccccccccccccccccccccccccc611111111111111115c
                cccccccccccccccccccccccccccccccccccccccccccc561aaaaaaaaaaaaaa16c
                cc6666ccccc655566ccccccccccccccccccccccccccc651aaaaaaaaaaaaaa16c
                c665555556665555666ccccccccccccccccccccccccc551aa1111111111aa16c
                c611111111111111116ccccccccccccccccccccccccc561aa1655566661aa15c
                661aaaaaaaaaaaaaa15ccccccccccccccccccccccccc651aa156ccccc61aa156
                651aaaaaaaaaaaaaa15ccccccccccccccccccccccccc551aa155cccc661aa156
                551aa1111111111aa166cccccccccccccccccccccccc551aa165cccc651aa155
                551aa1655565561aa166cccccccccccccccccccccccc551aa165cccc551aa155
                551aa156ccccc61aa155cccccccccccccccccccccccc551aa155cccc561aa155
                551aa166ccccc51aa155cccccccccccccccccccccccc551aa156cccc561aa155
                561aa166cccc651aa155cccccccccccccccccccccccc551aa156cccc561aa155
                c51aa1566ccc661aa156cccccccccccccccccccccccc651aa16ccccc561aa155
                c51aa1566ccc661aa165cccccccccccccccccccccccc651aa15ccccc651aa155
                c61aa155555cc51aa16555666ccc6655555655566cccc51aa15ccccc651aa165
                c51aa165666cc51aa166555666555556555556665555651aa16ccccc651aa155
                c51aa111116cc61aa111111111111111111111111111111aa16cccccc51aa156
                c51aaaaaa16cc61aaaaaaaaaaaaaaaaaaaaaaaaaaa1a1a1aa15cccccc51aa165
                c61aaaaaa15c661aaaaaaaaaaaaaaaaaaaaaaaaaaaa1a1aaa15cccccc51aa155
                c611111aa15c561111111111111111111111111111111111115cccccc51aa15c
                c566561aa15c56cccccccccccccccccccccccccccccccccccc55cccc661aa15c
                c5ccc51aa15c56ffffffffffffffffffffffffffffffffffff55ccc6561aa15c
                c6fff51aa16c56ffffffffffffffffffffffffffffffffffff65ccc6561aa15c
                c6fff61aa16566cccccccccccccccccccccccccccccccccccc666665561aa15c
                c6fff61aa11111111111111111111111111111111111111111111111111aa15c
                c6ccc61aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa15c
                c666661aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa16c
                ccc666511111111111111111111111111111111111111111111111111111115c
                ccccc6555555666ccccccccccccccccccccccccccccccccccc6666666666666c
                cccccccccccccc666666666666666cc666666ccccccccccc6666cccccccccccc
                ccccccccccccccccccccccccccccc6666666666666666666666ccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                `, screen2, 82, 53)
            images.print(screen2, "" + Custom_Track_Name, 77, 44, 1)
        } else {
            spriteutils.drawTransparentImage(img`
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccc55555555cccc556555555cccccccccccccccccccccccc
                ccccccccccccccccc55556655565555555663655555ccccccccccccccccccccc
                ccccccccccc555555666667663666655555555554655555c5555cccccccccccc
                ccccccccccc5556666645666655545666657766666666566663555cccccccccc
                cccccccccc56111111111111111111111111111111111111111765cccccccccc
                cccccccccc561bbbbbbbbbbbbbbbbbbbbbbbbb1b1bbbbbbbbb1666cccccccccc
                ccccccccc5551bbbbbbbbbbbbbbbbbbbbbbbbbb1b1bbbbbbbb1666cccccccccc
                ccccccccc5651bbbbbbbbbbbbbbbbbbbbbbbbb1b1bbbbbbbbb1656cccccccccc
                ccccccccc5651bbbbbbbbbbbbbbbbbbbbbbbbbb1b1bbbbbbbb165ccccccccccc
                ccccccccc5461bbbb11111111111111111111111111111bbbb165ccccccccccc
                ccccccccc5561bbbb15565555555466665366656566651bbbb165ccccccccccc
                ccccccccc5661bbbb155466666666664665a5565663551bbbb165ccccccccccc
                ccccccccc5351bbbb111111111111111115a5111111111bbbb167ccccccccccc
                cccccccccc661bbbbbbbbbbbbbbbbbbbb16a61bbbbbbbbbbbb156ccccccccccc
                cccccccccc651bbbbbbbbbbbbbbbbbbbb16a61bbbbbbbbbbbb156ccccccccccc
                ccccccccccc61bbbbbbbbbbbbbbbbbbbb16a61bbbbbbbbbbbb155ccccccccccc
                ccccccccccc61bbbbbbbbbbbbbbbbbbbb16a51bbbbbbbbbbbb135ccccccccccc
                ccccccccccc511111111111111111bbbb13a61bbbb11111111155ccccccccccc
                ccccccccccc556656666656665551bbbb16a61bbbb1576666556cccccccccccc
                cccccccccc5645555567666666661bbbb15a61bbbb1663545556cccccccccccc
                cccccccccc5511111111111111661bbbb16a61bbbb1655cccccccccccccccccc
                cccccccccc561bbbbbbbbbbbb1561bbbb16a61bbbb163ccc55cccccccccccccc
                cccccccccc561bbbbbbbbbbbb1661bbbb15a51bbbb155cc5565ccccccccccccc
                cccccccc56561bbbbbbbbbbbb1661bbbb15a61bbbb1667766665cccccccccccc
                cccccccc54661bbbbbbbbbbbb1111bbbb16a61bbbb11111111155ccccccccccc
                ccccccccc5661bbbb1111bbbbbbbbbbbb16a61bbbbbbbbbbbb135ccccccccccc
                ccccccccc5661bbbb1aa1bbbbbbbbbbbb16a41bbbbbbbbbbbb1565cccccccccc
                ccccccccc5631bbbb1aa1bbbbbbbbbbbb15a51bbbbbbbbbbbb1675cccccccccc
                cccccccccc551bbbb1aa1bbbbbbbbbbbb13a61bbbbbbbbbbbb1676cccccccccc
                cccccccc55651bbbb1aa111111111111115a6111111111bbbb1566cccccccccc
                cccccccc66361bbbb1aa663666666666554a5555554551bbbb1666cccccccccc
                cccccccc65561bbbb1aa56656465566635555664666651bbbb1665cccccccccc
                cccccccc67551bbbb11111111111111111111111111111bbbb1655cccccccccc
                cccccccc65651bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1655cccccccccc
                cccccccc56651bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb163ccccccccccc
                cccccccc55661bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb165ccccccccccc
                ccccccccc5561bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb165ccccccccccc
                cccccccccc551111111111111111111111111111111111111115cccccccccccc
                cccccccccc766666766635666667566666355555555665655555cccccccccccc
                cccccccccc56555656555555666665546555666645666666666ccccccccccccc
                cccccccccc65cccccccccccc5555566656645555557553555ccccccccccccccc
                cccccccccccccccccccccccccccccc56667555666665555ccccccccccccccccc
                cccccccccccccccccccccccccccccccc55555365555c55cccccccccccccccccc
                ccccccccccccccccccccccccccccccccccc566666ccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                `, screen2, 82, 53)
            images.print(screen2, "" + Custom_Track_Name, 84, 44, 1)
        }
    }
})
spriteutils.createRenderable(120, function (screen2) {
    if (Main_Menu_Open) {
        images.print(screen2, "$" + Money, 2, 82, 1)
        images.print(screen2, Carname, 2, 91, 1)
    } else if (Car_Menu_Open) {
        images.print(screen2, "$" + Money, 2, 110, 1)
    } else {
    	
    }
})
spriteutils.createRenderable(120, function (screen2) {
    if (Cutsvene) {
        spriteutils.drawTransparentImage(img`
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            `, screen2, 0, 0)
    }
})
function Start_Race (Player_Image: Image, Player_Class: string, TrackNumber: number) {
    Night = false
    Mandatory_Pit_Stops = 0
    Track_Number = TrackNumber
    if (TrackNumber == 1) {
        tiles.setCurrentTilemap(tilemap`level1`)
    } else if (TrackNumber == 2) {
        tiles.setCurrentTilemap(tilemap`level0`)
    } else {
        tiles.setCurrentTilemap(tilemap`level5`)
    }
    The_Player = sprites.create(PlayerInRacingImage, SpriteKind.Player)
    sprites.setDataNumber(The_Player, "direction", 0)
    sprites.setDataNumber(The_Player, "speed", 0)
    sprites.setDataNumber(The_Player, "playernumber", 1)
    sprites.setDataNumber(The_Player, "laps", 0)
    sprites.setDataNumber(The_Player, "pits", 0)
    sprites.setDataNumber(The_Player, "tireaffect", 0)
    sprites.setDataNumber(The_Player, "tirelife", 100)
    sprites.setDataNumber(The_Player, "fuel", 100)
    sprites.setDataNumber(The_Player, "fuelspeedchange", 0)
    sprites.setDataNumber(The_Player, "damage", 0)
    sprites.setDataNumber(The_Player, "realmiliseconds", 0)
    sprites.setDataNumber(The_Player, "place in race", 0)
    if (Track_Number == 1) {
        The_Player.setPosition(140, 42)
    } else if (Track_Number == 2) {
        The_Player.setPosition(1013, 298)
        sprites.setDataNumber(The_Player, "direction", 180)
        spriteFx.smoothRotate(The_Player, 180, 0)
    } else {
        The_Player.setPosition(260, 90)
        sprites.setDataNumber(The_Player, "direction", 180)
        spriteFx.smoothRotate(The_Player, 180, 0)
    }
    if (Player_Class == "Road") {
        TheEnemy = sprites.create(RoadCarImages[randint(0, 7)], SpriteKind.Enemy)
        TheEnemy2 = sprites.create(RoadCarImages[randint(0, 7)], SpriteKind.Enemy)
        TheEnemy3 = sprites.create(RoadCarImages[randint(0, 7)], SpriteKind.Enemy)
    }
    if (Player_Class == "Sport") {
        TheEnemy = sprites.create(SportsCarImages[randint(0, 7)], SpriteKind.Enemy)
        TheEnemy2 = sprites.create(SportsCarImages[randint(0, 7)], SpriteKind.Enemy)
        TheEnemy3 = sprites.create(SportsCarImages[randint(0, 7)], SpriteKind.Enemy)
    }
    if (Player_Class == "Hyper") {
        TheEnemy = sprites.create(HyperCarImages[randint(0, 7)], SpriteKind.Enemy)
        TheEnemy2 = sprites.create(HyperCarImages[randint(0, 7)], SpriteKind.Enemy)
        TheEnemy3 = sprites.create(HyperCarImages[randint(0, 7)], SpriteKind.Enemy)
    }
    if (Player_Class == "Proto") {
        TheEnemy = sprites.create(PrototypeCarImages[randint(0, 7)], SpriteKind.Enemy)
        TheEnemy2 = sprites.create(PrototypeCarImages[randint(0, 7)], SpriteKind.Enemy)
        TheEnemy3 = sprites.create(PrototypeCarImages[randint(0, 7)], SpriteKind.Enemy)
    }
    sprites.setDataNumber(TheEnemy, "place in race", 0)
    sprites.setDataNumber(TheEnemy2, "place in race", 0)
    sprites.setDataNumber(TheEnemy3, "place in race", 0)
    sprites.setDataNumber(TheEnemy, "realmiliseconds", 0)
    sprites.setDataNumber(TheEnemy2, "realmiliseconds", 0)
    sprites.setDataNumber(TheEnemy3, "realmiliseconds", 0)
    sprites.setDataBoolean(TheEnemy, "pitting", false)
    sprites.setDataBoolean(TheEnemy2, "pitting", false)
    sprites.setDataBoolean(TheEnemy3, "pitting", false)
    sprites.setDataNumber(TheEnemy, "pits", 0)
    sprites.setDataNumber(TheEnemy2, "pits", 0)
    sprites.setDataNumber(TheEnemy3, "pits", 0)
    sprites.setDataNumber(TheEnemy, "laps", 0)
    sprites.setDataNumber(TheEnemy2, "laps", 0)
    sprites.setDataNumber(TheEnemy3, "laps", 0)
    if (Player_Class == "Road") {
        sprites.setDataNumber(TheEnemy, "speed", 60 + randint(-5, 10))
        sprites.setDataNumber(TheEnemy2, "speed", 65 + randint(-5, 10))
        sprites.setDataNumber(TheEnemy3, "speed", 60 + randint(-5, 10))
    }
    if (Player_Class == "Sport") {
        sprites.setDataNumber(TheEnemy, "speed", 90 + randint(-5, 10))
        sprites.setDataNumber(TheEnemy2, "speed", 95 + randint(-5, 10))
        sprites.setDataNumber(TheEnemy3, "speed", 90 + randint(-5, 10))
    }
    if (Player_Class == "Hyper") {
        sprites.setDataNumber(TheEnemy, "speed", 115 + randint(-5, 10))
        sprites.setDataNumber(TheEnemy2, "speed", 120 + randint(-5, 10))
        sprites.setDataNumber(TheEnemy3, "speed", 115 + randint(-5, 10))
    }
    if (Player_Class == "Proto") {
        sprites.setDataNumber(TheEnemy, "speed", 145 + randint(-5, 10))
        sprites.setDataNumber(TheEnemy2, "speed", 150 + randint(-5, 10))
        sprites.setDataNumber(TheEnemy3, "speed", 145 + randint(-5, 10))
    }
    sprites.setDataNumber(TheEnemy, "playernumber", 2)
    sprites.setDataNumber(TheEnemy2, "playernumber", 3)
    sprites.setDataNumber(TheEnemy3, "playernumber", 4)
    if (Track_Number == 1) {
        TheEnemy.setPosition(140, 72)
        TheEnemy2.setPosition(188, 72)
        TheEnemy3.setPosition(188, 42)
    } else if (Track_Number == 2) {
        TheEnemy.setPosition(965, 298)
        spriteFx.smoothRotate(TheEnemy, 180, 0)
        TheEnemy2.setPosition(965, 326)
        spriteFx.smoothRotate(TheEnemy2, 180, 0)
        TheEnemy3.setPosition(1013, 326)
        spriteFx.smoothRotate(TheEnemy3, 180, 0)
    } else {
        TheEnemy.setPosition(213, 90)
        spriteFx.smoothRotate(TheEnemy, 180, 0)
        TheEnemy2.setPosition(260, 118)
        spriteFx.smoothRotate(TheEnemy2, 180, 0)
        TheEnemy3.setPosition(213, 118)
        spriteFx.smoothRotate(TheEnemy3, 180, 0)
    }
    scene.cameraFollowSprite(The_Player)
    Pitting = false
    Game_Staretd = true
    RaceStarted = false
    stop_counting_enemy_laps_1 = false
    stop_counting_enemy_laps_2 = false
    stop_counting_enemy_laps_3 = false
    position_in_race = 0
    Laps = 0
    Valid_Laps = 0
    timer.after(3100, function () {
        Circuit_AI(TheEnemy, sprites.readDataNumber(TheEnemy, "speed"))
        Circuit_AI(TheEnemy2, sprites.readDataNumber(TheEnemy2, "speed"))
        Circuit_AI(TheEnemy3, sprites.readDataNumber(TheEnemy3, "speed"))
        TheEnemy.setFlag(SpriteFlag.ShowPhysics, false)
        The_Player.setFlag(SpriteFlag.ShowPhysics, false)
    })
}
spriteutils.createRenderable(100, function (screen2) {
    if (Game_Staretd) {
        if (Night) {
            if (RaceStarted) {
                images.print(screen2, "" + Math.round(Math.abs(sprites.readDataNumber(The_Player, "speed"))) + "mph", 2, 2, 1)
                if (player_seconds < 10) {
                    images.print(screen2, "" + player_minutes + ":0" + player_seconds + "." + player_miliseconds, 100, 2, 1)
                } else {
                    images.print(screen2, "" + player_minutes + ":" + player_seconds + "." + player_miliseconds, 100, 2, 1)
                }
                images.print(screen2, "" + Laps + "/" + MandatoryLaps, 2, 10, 1)
                images.print(screen2, "" + sprites.readDataNumber(The_Player, "pits") + "/" + Mandatory_Pit_Stops, 34, 10, 1)
                spriteutils.drawTransparentImage(img`
                    . 1 1 1 1 1 1 . 
                    1 1 1 1 1 1 1 1 
                    1 1 1 . . 1 1 1 
                    1 1 . . . . 1 1 
                    1 1 . . . . 1 1 
                    1 1 1 . . 1 1 1 
                    1 1 1 1 1 1 1 1 
                    . 1 1 1 1 1 1 . 
                    `, screen2, 2, 18)
                spriteutils.drawTransparentImage(img`
                    . 1 1 1 1 1 . . 
                    . . 1 1 1 . . . 
                    . 1 1 1 1 1 . . 
                    1 . . . . . 1 . 
                    1 . . . . . . 1 
                    1 1 . . . . . 1 
                    . 1 1 1 1 1 1 . 
                    . . 1 1 . . . . 
                    `, screen2, 30, 18)
                spriteutils.drawTransparentImage(img`
                    1 1 . 1 . 1 1 1 
                    1 . . . . . 1 . 
                    . . . 1 1 . . . 
                    1 . 1 1 1 1 . 1 
                    . . 1 1 1 1 . 1 
                    . 1 . 1 1 . . . 
                    . 1 . . . . 1 . 
                    1 . . 1 1 . 1 1 
                    `, screen2, 16, 27)
                images.print(screen2, "" + Math.round(sprites.readDataNumber(The_Player, "tirelife")), 10, 18, 1)
                images.print(screen2, "" + Math.round(sprites.readDataNumber(The_Player, "fuel")), 38, 18, 1)
                images.print(screen2, "" + Math.round(sprites.readDataNumber(The_Player, "damage")), 25, 27, 1)
            }
        } else {
            if (RaceStarted) {
                images.print(screen2, "" + Math.round(Math.abs(sprites.readDataNumber(The_Player, "speed"))) + "mph", 2, 2, 15)
                if (player_seconds < 10) {
                    images.print(screen2, "" + player_minutes + ":0" + player_seconds + "." + player_miliseconds, 100, 2, 15)
                } else {
                    images.print(screen2, "" + player_minutes + ":" + player_seconds + "." + player_miliseconds, 100, 2, 15)
                }
                images.print(screen2, "" + Laps + "/" + MandatoryLaps, 2, 10, 15)
                images.print(screen2, "" + sprites.readDataNumber(The_Player, "pits") + "/" + Mandatory_Pit_Stops, 34, 10, 15)
                spriteutils.drawTransparentImage(img`
                    . f f f f f f . 
                    f f f f f f f f 
                    f f f . . f f f 
                    f f . . . . f f 
                    f f . . . . f f 
                    f f f . . f f f 
                    f f f f f f f f 
                    . f f f f f f . 
                    `, screen2, 2, 18)
                spriteutils.drawTransparentImage(img`
                    . f f f f f . . 
                    . . f f f . . . 
                    . f f f f f . . 
                    f . . . . . f . 
                    f . . . . . . f 
                    f f . . . . . f 
                    . f f f f f f . 
                    . . f f . . . . 
                    `, screen2, 30, 18)
                spriteutils.drawTransparentImage(img`
                    f f . f . f f f 
                    f . . . . . f . 
                    . . . f f . . . 
                    f . f f f f . f 
                    . . f f f f . f 
                    . f . f f . . . 
                    . f . . . . f . 
                    f . . f f . f f 
                    `, screen2, 16, 27)
                images.print(screen2, "" + Math.round(sprites.readDataNumber(The_Player, "tirelife")), 10, 18, 15)
                images.print(screen2, "" + Math.round(sprites.readDataNumber(The_Player, "fuel")), 38, 18, 15)
                images.print(screen2, "" + Math.round(sprites.readDataNumber(The_Player, "damage")), 25, 27, 15)
            }
        }
    }
})
function Load_Menu_Road_Cars () {
    Main_Menu_Open = false
    Info_Menu_Open = false
    Car_Menu_Open = true
    RoadMenuOpen = true
    myMenu2 = miniMenu.createMenu(
    miniMenu.createMenuItem("Kintaro V4"),
    miniMenu.createMenuItem("Ossira T1"),
    miniMenu.createMenuItem("Helion I50"),
    miniMenu.createMenuItem("Draxon 180"),
    miniMenu.createMenuItem("Back")
    )
    myMenu2.setPosition(31, 38)
    Car_Display_Image = sprites.create(img`
        1111111111111111111111111111111111111111111111111aaabaabbaaaaaa
        11111111111111111111111111111111111111111ababaabbbbbbbbbbbbbbbb
        111111111111111111111111111111111111abbaabbbbbbbbbbbbbbbfffffff
        1111111111111111111111111111111aaaabbbbbbbbbbbfffffffffffffffff
        11111111111111111111111111111abbbbbbbbfffffffffffffffffffffffff
        1111111111111111111111111111abbffffffffffffffffffffffffffffffff
        111111111111111111111111111abffffffffffffffffffffffffffffffffff
        11111111111111111111111111abfffffffffffffffffffffffffffffffffff
        1111111111111111111111111abffffffffffffffffffffffffffffffffffff
        1111111111111111111111111abffffffffffffffffffffffffffffffffffff
        111111111111111111111111abfffffffffffffffffffffffffffffffffffff
        11111111111111111111111abffffffffffffffffffffffffffffffffffffff
        11111111111111111111111bbffffffffffffffffffffffffffffffffffffff
        1111111111111111111111bbfffffffffffffffffffffffffffffffffffffff
        111111111111111111111bbffffffffffffffffffffffffffffffffffffffff
        111111111111111111111bbffffffffffffffffffffffffffffffffffffffff
        11111111111111111111bbfffffffffffffffffffffffffffffffffffffffff
        1111111111111ffc1111bbffffffffffffffffffffffffffffffffffffffffa
        11111111111fffff111bbfffffffffffffffffffffffffffffaaaaaaaaaaaaa
        111111111fffccfff11bbffffffffffffffffffaaaaaaaaaaaaaaaaaaaaaaaa
        111111111fccccccfabbfffffffaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbb
        111111111cffffccaaaaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        1111111111cffcaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        111111111111abbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        11111111111abbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        1111111111abbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        111111111abbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        11111111abbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        1111111abbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        111111abbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        11111abbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbaabbbaa
        1111aabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbabaaaaaaabbaaaaaaaac1
        1111abbbbbbbbbbbbbbbbbbbbbabaaaabaaaaaaaaaacccccccccccccccccc11
        111abbbbaaaaaaaaaaaaaaccccccccccccccccccccccccffffffffffccccc11
        111abbbacc1cccc111cccaacccfffffffffffffffffffffffffffffffcaccc1
        111abbbac111cc11111cccaacffffffffffffffffffffffffffffffffcacccc
        111abbbacc1ccc11111ccccacffffffffffffffffffffffffffffffffcaaaaa
        111abbbbaaaaccc111cccccacfffffffffffffffffffffffffffffffccaaaaa
        11aabbbbbbbbaaaaaaacccaacfffffffffffffffffffffffffffffcccaaaaaa
        11aabbbbbbbbbbbbbbbaaaaaccffffffffffccccccccccccccccccaaaaaaaaa
        11abbbbbbbbbbbbbbbbbbbaaacccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaa
        11abbbbbbbbbbbbbbbbbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaccaacccccccccc
        11aaaaabbbbbbbbbbbbaaaaaaaaaacaaacaccaabbbbbbbbbbbbbbaaaaaaaaaa
        11aacaabbbbbbbbbbbaaaaaaaaaccbbbbbbbbbbbbbbbbbbbbbbbbaaaaaaaaaa
        11aafaaaaabbbbbbbaaaaaaaaaaacbbbbbbbbbbbbbbbbbbbbbbbbcfffffffff
        11aafaaaaaaaaaaaaaaaaaaaaaaacbbbbbbbbbbbbbbbbbbbbbbbbafffffffff
        11aafcaaaaaafaaaaaaaafffffffabbbbbbbbbbbbcaaaacccaaaaafffffffff
        11aafcaaaaaaffffffffffffffffaccaaaccaaaaaafffffffffffffcfffffff
        11aafcaaaaaffcccffffffffffffffffffffffffccccccccccccccfcfccccff
        11aaffaaaaffcccccfffcccccfcfccccccccccccfffffffffffffffcfffffff
        11aacfaaaaffcccccfffffffffcfffffffffffffccccccccccccccfcfccccff
        11aacfaaafffcccccfffcccccfcfccccccccccccfffffffffffffffffffffff
        111acfaaaffffcccffffffffffcffffffffffffffffffffffffffffcfffffff
        111accaaafffffffffffffffffcffffffffffffffffffffffffffffffffffff
        111acccccffffffffffffffffffffffffffffffffffffffffffffffffffffff
        111acccccfffffffffffffffffcffffffffffffffffffffccccccccfccccccc
        111aacccccaffffffffffffffffffffcccccccfcccccccfffffffffffffffff
        1111aaaaaaaacccfccfcfccccccccffffffffffffffffffffffffffffffffff
        1111111aaaacffffffffcffffffffffffffffffffffffffffffffffffffffff
        111111cfffffffffffffcffffffffffffffffffffffffffffffffffffffffff
        111111cfffffffffffffcffffffffffffffffffffffffffffffffffffffffff
        111111cfffffffffffffcffffffffffffffffffffffffffffffffffffffffff
        1111111cfffffffffffccffffffffffffffffffffffffffffffffffffffffff
        1111111ccffffffffffcfffffffffffffffffffffffffffffffffffffffffff
        11111111111ccccccfcffffffffffffffffffffffffffffffffff1111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        `, SpriteKind.ui)
    Car_Display_Image.setPosition(128, 60)
    miniMenu.setMenuStyleProperty(myMenu2, miniMenu.MenuStyleProperty.Width, 93)
    miniMenu.setMenuStyleProperty(myMenu2, miniMenu.MenuStyleProperty.Columns, 1)
    miniMenu.setStyleProperty(myMenu2, miniMenu.StyleKind.Default, miniMenu.StyleProperty.Margin, 3)
    miniMenu.setStyleProperty(myMenu2, miniMenu.StyleKind.Default, miniMenu.StyleProperty.Background, -1)
    miniMenu.setStyleProperty(myMenu2, miniMenu.StyleKind.Default, miniMenu.StyleProperty.Foreground, -5)
    miniMenu.setStyleProperty(myMenu2, miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Background, 4)
    miniMenu.setStyleProperty(myMenu2, miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Foreground, 1)
    miniMenu.setStyleProperty(myMenu2, miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Border, 1)
    miniMenu.onSelectionChanged(myMenu2, function (selection, selectedIndex) {
        music.play(music.createSoundEffect(WaveShape.Triangle, 298, 0, 255, 255, 20, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        if (selectedIndex == 0) {
            scene.setBackgroundImage(img`
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                `)
            Car_Display_Image.setImage(img`
                1111111111111111111111111111111111111111111111111aaabaabbaaaaaa
                11111111111111111111111111111111111111111ababaabbbbbbbbbbbbbbbb
                111111111111111111111111111111111111abbaabbbbbbbbbbbbbbbfffffff
                1111111111111111111111111111111aaaabbbbbbbbbbbfffffffffffffffff
                11111111111111111111111111111abbbbbbbbfffffffffffffffffffffffff
                1111111111111111111111111111abbffffffffffffffffffffffffffffffff
                111111111111111111111111111abffffffffffffffffffffffffffffffffff
                11111111111111111111111111abfffffffffffffffffffffffffffffffffff
                1111111111111111111111111abffffffffffffffffffffffffffffffffffff
                1111111111111111111111111abffffffffffffffffffffffffffffffffffff
                111111111111111111111111abfffffffffffffffffffffffffffffffffffff
                11111111111111111111111abffffffffffffffffffffffffffffffffffffff
                11111111111111111111111bbffffffffffffffffffffffffffffffffffffff
                1111111111111111111111bbfffffffffffffffffffffffffffffffffffffff
                111111111111111111111bbffffffffffffffffffffffffffffffffffffffff
                111111111111111111111bbffffffffffffffffffffffffffffffffffffffff
                11111111111111111111bbfffffffffffffffffffffffffffffffffffffffff
                1111111111111ffc1111bbffffffffffffffffffffffffffffffffffffffffa
                11111111111fffff111bbfffffffffffffffffffffffffffffaaaaaaaaaaaaa
                111111111fffccfff11bbffffffffffffffffffaaaaaaaaaaaaaaaaaaaaaaaa
                111111111fccccccfabbfffffffaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbb
                111111111cffffccaaaaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                1111111111cffcaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                111111111111abbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                11111111111abbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                1111111111abbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                111111111abbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                11111111abbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                1111111abbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                111111abbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                11111abbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbaabbbaa
                1111aabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbabaaaaaaabbaaaaaaaac1
                1111abbbbbbbbbbbbbbbbbbbbbabaaaabaaaaaaaaaacccccccccccccccccc11
                111abbbbaaaaaaaaaaaaaaccccccccccccccccccccccccffffffffffccccc11
                111abbbacc1cccc111cccaacccfffffffffffffffffffffffffffffffcaccc1
                111abbbac111cc11111cccaacffffffffffffffffffffffffffffffffcacccc
                111abbbacc1ccc11111ccccacffffffffffffffffffffffffffffffffcaaaaa
                111abbbbaaaaccc111cccccacfffffffffffffffffffffffffffffffccaaaaa
                11aabbbbbbbbaaaaaaacccaacfffffffffffffffffffffffffffffcccaaaaaa
                11aabbbbbbbbbbbbbbbaaaaaccffffffffffccccccccccccccccccaaaaaaaaa
                11abbbbbbbbbbbbbbbbbbbaaacccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaa
                11abbbbbbbbbbbbbbbbbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaccaacccccccccc
                11aaaaabbbbbbbbbbbbaaaaaaaaaacaaacaccaabbbbbbbbbbbbbbaaaaaaaaaa
                11aacaabbbbbbbbbbbaaaaaaaaaccbbbbbbbbbbbbbbbbbbbbbbbbaaaaaaaaaa
                11aafaaaaabbbbbbbaaaaaaaaaaacbbbbbbbbbbbbbbbbbbbbbbbbcfffffffff
                11aafaaaaaaaaaaaaaaaaaaaaaaacbbbbbbbbbbbbbbbbbbbbbbbbafffffffff
                11aafcaaaaaafaaaaaaaafffffffabbbbbbbbbbbbcaaaacccaaaaafffffffff
                11aafcaaaaaaffffffffffffffffaccaaaccaaaaaafffffffffffffcfffffff
                11aafcaaaaaffcccffffffffffffffffffffffffccccccccccccccfcfccccff
                11aaffaaaaffcccccfffcccccfcfccccccccccccfffffffffffffffcfffffff
                11aacfaaaaffcccccfffffffffcfffffffffffffccccccccccccccfcfccccff
                11aacfaaafffcccccfffcccccfcfccccccccccccfffffffffffffffffffffff
                111acfaaaffffcccffffffffffcffffffffffffffffffffffffffffcfffffff
                111accaaafffffffffffffffffcffffffffffffffffffffffffffffffffffff
                111acccccffffffffffffffffffffffffffffffffffffffffffffffffffffff
                111acccccfffffffffffffffffcffffffffffffffffffffccccccccfccccccc
                111aacccccaffffffffffffffffffffcccccccfcccccccfffffffffffffffff
                1111aaaaaaaacccfccfcfccccccccffffffffffffffffffffffffffffffffff
                1111111aaaacffffffffcffffffffffffffffffffffffffffffffffffffffff
                111111cfffffffffffffcffffffffffffffffffffffffffffffffffffffffff
                111111cfffffffffffffcffffffffffffffffffffffffffffffffffffffffff
                111111cfffffffffffffcffffffffffffffffffffffffffffffffffffffffff
                1111111cfffffffffffccffffffffffffffffffffffffffffffffffffffffff
                1111111ccffffffffffcffffffffffffffffffffffffffffffffffffffffff1
                11111111111ccccccfcffffffffffffffffffffffffffffffffffffffff1111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                `)
            CarType = "Road1"
        } else if (selectedIndex == 1) {
            Car_Display_Image.setImage(img`
                111111111111111111111111111111111111111111111111166656655666666
                111111111111111111111111111111111111111116565665555555555555555
                11111111111111111111111111111111111165566555555555555555fffffff
                1111111111111111111111111111111666655555555555fffffffffffffffff
                11111111111111111111111111111655555555fffffffffffffffffffffffff
                1111111111111111111111111111655ffffffffffffffffffffffffffffffff
                11111111111111111111111111165ffffffffffffffffffffffffffffffffff
                1111111111111111111111111165fffffffffffffffffffffffffffffffffff
                111111111111111111111111165ffffffffffffffffffffffffffffffffffff
                111111111111111111111111165ffffffffffffffffffffffffffffffffffff
                11111111111111111111111165fffffffffffffffffffffffffffffffffffff
                1111111111111111111111165ffffffffffffffffffffffffffffffffffffff
                1111111111111111111111155ffffffffffffffffffffffffffffffffffffff
                111111111111111111111155fffffffffffffffffffffffffffffffffffffff
                11111111111111111111155ffffffffffffffffffffffffffffffffffffffff
                11111111111111111111155ffffffffffffffffffffffffffffffffffffffff
                1111111111111111111155fffffffffffffffffffffffffffffffffffffffff
                1111111111111ffc111155ffffffffffffffffffffffffffffffffffffffff6
                11111111111fffff11155fffffffffffffffffffffffffffff6666666666666
                111111111fffccfff1155ffffffffffffffffff666666666666666666666666
                111111111fccccccf655fffffff666666666666666555555555555555555555
                111111111cffffcc66666555555555555555555555555555555555555555555
                1111111111cffc6655555555555555555555555555555555555555555555555
                111111111111655555555555555555555555555555555555555555555555555
                111111111116555555555555555555555555555555555555555555555555555
                111111111165555555555555555555555555555555555555555555555555555
                111111111655555555555555555555555555555555555555555555555555555
                111111116555555555555555555555555555555555555555555555555555555
                111111165555555555555555555555555555555555555555555555555555555
                111111655555555555555555555555555555555555555555555555555555555
                111116555555555555555555555555555555555555555555555555556655566
                1111665555555555555555555555555555555555556566666665566666666ff
                1111655555555555555555555565666656666666666ccccccccccccccccccff
                1116556666666666666666ccccccccccccccccccccccccffffffffffccccfff
                1116561ffffffffffffff66cccffffffffffccccccccccccccccccccfc6c111
                111656111111ffffffffff66cfccccccccccfffffffffffffffffffffc6cc11
                1116556111111111111ffff6cfffffffffffccccccccccccccccccccfc66666
                111655566666111111111116cfccccccccccffffffffffffffffffffcc66666
                116655555555666666611166cfffffffffffffffffffffffffffffccc666666
                116655555555555555566666ccffffffffffcccccccccccccccccc666666666
                1165555555555555555555666ccccccccccc666666666666666666666666666
                116555555555555555555666666666666666666ccccccccccccccc666666666
                1166666555555555555666666666cccccccccccbbbbbbbbbbbbbbc666666666
                1166666555555555556666666666cbbbbbbbbbbbbbbbbbbbbbbbbc666666666
                1166666666555555566666666666cbbbbbbbbbbbbbbbbbbbbbbbbcfffffffff
                1166666666666666666666666666cbbbbbbbbbbbbbbbbbbbbbbbbafffffffff
                116666666666f66666666fffffffabbbbbbbbbbbbcaaaacccaaaaafffffffff
                116666666666ffffffffffffffffaccaaaccaaaaaafffffffffffffffffffff
                11666666666ffffffffffffffffffffffffffffffffffffffffffffffffffff
                1166666666ffffff66ffffffffffffffffffffffffccccccccccccccccfffff
                1166666666ffff6666ffffccccccccccccccccccccffffffffffffffffcfff6
                116666666fffff6666fffcffffffffffffffffffffccccccccccccccfffcff6
                111666666fff6666666fcfffccccccccccccccccccffffffffffffffcffcf66
                111666666ff66666666fcffcffffffffffffffffffffffffffffffffcfff666
                11166666ff6666666666fffcfffffffffffffffffffffffffffffffffcff666
                11166666ff66666666666fcffffffffffffffffffffffffccccccccfccccccc
                111666666f66666666666ffffffffffcccccccfcccccccfffffffffffffffff
                111166666666cccfccfcfccccccccffffffffffffffffffffffffffffffffff
                11111116666cffffffffcffffffffffffffffffffffffffffffffffffffffff
                111111cfffffffffffffcffffffffffffffffffffffffffffffffffffffffff
                111111cfffffffffffffcffffffffffffffffffffffffffffffffffffffffff
                111111cfffffffffffffcffffffffffffffffffffffffffffffffffffffffff
                1111111cfffffffffffccffffffffffffffffffffffffffffffffffffffffff
                1111111ccffffffffffcffffffffffffffffffffffffffffffffffffffffff1
                11111111111ccccccfcffffffffffffffffffffffffffffffffffffffff1111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                `)
            CarType = "Road2"
        } else if (selectedIndex == 2) {
            Car_Display_Image.setImage(img`
                1111111111111111111111111111111111111111111111111eeedeeddeeeeee
                11111111111111111111111111111111111111111ededeedddddddddddddddd
                111111111111111111111111111111111111eddeedddddddddddddddfffffff
                1111111111111111111111111111111eeeedddddddddddfffffffffffffffff
                11111111111111111111111111111eddddddddfffffffffffffffffffffffff
                1111111111111111111111111111eddffffffffffffffffffffffffffffffff
                111111111111111111111111111edffffffffffffffffffffffffffffffffff
                11111111111111111111111111edfffffffffffffffffffffffffffffffffff
                1111111111111111111111111edffffffffffffffffffffffffffffffffffff
                1111111111111111111111111edffffffffffffffffffffffffffffffffffff
                111111111111111111111111edfffffffffffffffffffffffffffffffffffff
                11111111111111111111111edffffffffffffffffffffffffffffffffffffff
                11111111111111111111111ddffffffffffffffffffffffffffffffffffffff
                1111111111111111111111ddfffffffffffffffffffffffffffffffffffffff
                111111111111111111111ddffffffffffffffffffffffffffffffffffffffff
                111111111111111111111ddffffffffffffffffffffffffffffffffffffffff
                11111111111111111111ddfffffffffffffffffffffffffffffffffffffffff
                1111111111111ffc1111ddffffffffffffffffffffffffffffffffffffffffe
                11111111111fffff111ddfffffffffffffffffffffffffffffeeeeeeeeeeeee
                111111111fffccfff11ddffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeee
                111111111fccccccfeddfffffffeeeeeeeeeeeeeeeddddddddddddddddddddd
                111111111cffffcceeeeedddddddddddddddddddddddddddddddddddddddddd
                1111111111cffceeddddddddddddddddddddddddddddddddddddddddddddddd
                111111111111edddddddddddddddddddddddddddddddddddddddddddddddddd
                11111111111eddddddddddddddddddddddddddddddddddddddddddddddddddd
                1111111111edddddddddddddddddddddddddddddddddddddddddddddddddddd
                111111111eddddddddddddddddddddddddddddddddddddddddddddddddddddd
                11111111edddddddddddddddddddddddddddddddddddddddddddddddddddddd
                1111111eddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                111111edddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                11111eddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                1111eeddddddddddddddddddddddddddddddddddddedeeeeeeeddeeeeeeeedd
                1111edddddddddddddddddddddedeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                111eddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecaaaaaaaaaaeeeeec
                111ede1cccccccccccccceeeeaaaaacccccccaaaacaacacfffffffccaeeeecc
                111ede111111cccccccccceeeaacfffffffffaaaffffffffffffccccceeeccc
                111ede1111111111111cccceeaacccfffffffaaafffffffffcccccceeeee111
                111ede11111111111111111eeeeaaccccffffaaaffffccccccccceeeeeeee11
                11eeddeee1111111111111eeeeeeeaaacccccccccccccccccceeeeeeeeeee11
                11eedddddeeeee11111111eeeeeeeeeecccccccccceeeeeeeeeeeeeeeeeee11
                11edddddddddddeeeee111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                11eddddddddddddddddeeeeeeeeeeeeeeeeeeeeaccaacacaaaaaaaeeeeeeeee
                11eeeeeddddddddddddeeeeeeeeeaaaaacccaaabbbbbbbbbbbbbbaeeeeeeeee
                11eeeeedddddddddddeeeeeeeeeecbbbbbbbbbbbbbbbbbbbbbbbbceeeeeeeee
                11eeeeeeeedddddddeeeeeeeeeeecbbbbbbbbbbbbbbbbbbbbbbbbceedddeeee
                11eeeeeeeeeeeeeeeeeeeeeeeeeecbbbbbbbbbbbbbbbbbbbbbbbbaffffdeeee
                11eeeeeeeeefffcfeeeeedddddeeabbbbbbbbbbbbcaaaacccaaaaafffffddee
                11eeeeeeeffffcfceeeeedffffffaccaaaccaaaaaafffffffffffffffffffde
                11eeeeeefffffcfceeeddffffffffffffffffffffffccccccccccccccccccde
                11eeeeeffffffcfceedccccccccccccccccccccccccffffffffffffffffffde
                11eeeefffffccfceeedffffffffffffffffffffffffccccccccccccccccccee
                11eeeefccccffceeeedccccccccccccccccccccccccfffffffffffffffffdee
                111eeecffffcceeeeeedfffffffffffffffffffffffccccccccccccccccdeee
                111eeeccccceeeeeeeedcccccccccccccccccccccccfffffffffffffffdeeee
                111eeeceeeeeeeeeeeeedffffffffffffffffffffffcccccccccccccccdeeee
                111eeeeeeeeeeeeeeeeeedcccccccccccccccccccccffffccccccccfccccccc
                111eeeeeeeeeeeeeeeeeedfffffffffcccccccfcccccccfffffffffffffffff
                1111eeeeeeeecccfccfcfccccccccffffffffffffffffffffffffffffffffff
                1111111eeeecffffffffcffffffffffffffffffffffffffffffffffffffffff
                111111cfffffffffffffcffffffffffffffffffffffffffffffffffffffffff
                111111cfffffffffffffcffffffffffffffffffffffffffffffffffffffffff
                111111cfffffffffffffcffffffffffffffffffffffffffffffffffffffffff
                1111111cfffffffffffccffffffffffffffffffffffffffffffffffffffffff
                1111111ccffffffffffcffffffffffffffffffffffffffffffffffffffffff1
                11111111111ccccccfcffffffffffffffffffffffffffffffffffffffff1111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                `)
            CarType = "Road3"
        } else if (selectedIndex == 3) {
            Car_Display_Image.setImage(img`
                111111111111111111111111111111111111111111111111188878877888888
                111111111111111111111111111111111111111118787887777777777777777
                11111111111111111111111111111111111187788777777777777777fffffff
                1111111111111111111111111111111888877777777777fffffffffffffffff
                11111111111111111111111111111877777777fffffffffffffffffffffffff
                1111111111111111111111111111877ffffffffffffffffffffffffffffffff
                11111111111111111111111111187ffffffffffffffffffffffffffffffffff
                1111111111111111111111111187fffffffffffffffffffffffffffffffffff
                111111111111111111111111187ffffffffffffffffffffffffffffffffffff
                111111111111111111111111187ffffffffffffffffffffffffffffffffffff
                11111111111111111111111187fffffffffffffffffffffffffffffffffffff
                1111111111111111111111187ffffffffffffffffffffffffffffffffffffff
                1111111111111111111111177ffffffffffffffffffffffffffffffffffffff
                111111111111111111111177fffffffffffffffffffffffffffffffffffffff
                11111111111111111111177ffffffffffffffffffffffffffffffffffffffff
                11111111111111111111177ffffffffffffffffffffffffffffffffffffffff
                1111111111111111111177fffffffffffffffffffffffffffffffffffffffff
                1111111111111ffc111177ffffffffffffffffffffffffffffffffffffffff8
                11111111111fffff11177fffffffffffffffffffffffffffff8888888888888
                111111111fffccfff1177ffffffffffffffffff888888888888888888888888
                111111111fccccccf877fffffff888888888888888777777777777777777777
                111111111cffffcc88888777777777777777777777777777777777777777777
                1111111111cffc8877777777777777777777777777777777777777777777777
                111111111111877777777777777777777777777777777777777777777777777
                111111111118777777777777777777777777777777777777777777777777777
                111111111187777777777777777777777777777777777777777777777777777
                111111111877777777777777777777777777777777777777777777777777777
                111111118777777777777777777777777777777777777777777777777777777
                111111187777777777777777777777777777777777777777777777777777777
                111111877777777777777777777777777777777777777777777777777777777
                111118777777777777777777777777777777777777777777777777778877788
                1111887777777777777777777777777777777777778788888887788888888bb
                1111877777777777777777777787888878888888888cccccccccccccccccbbb
                1118777788888888888888ccccccccccccccccccccccccffffffffffcccbbbb
                111877781bbbbbbbbbbbb88cccfffffffffffcccccfffffffffffffffc8bbbb
                111877781bbbbbbbbbbbbb88cfffffffffffcccccccffffffffffffffc81111
                111877781111bbbbbbbbbbb8cfffffffffffcccccccffffffffffffffc88888
                1118777788881111111bbbb8cfffffffffffcccccccfffffffffffffcc88888
                118877777777888888811188cffffffffffffcccccffffffffffffccc888888
                118877777777777777788888ccffffffffffcccccccccccccccccc888888888
                1187777777777777777777888ccccccccccc888888888888888888888888888
                11877777777777777777788888888888888888aaaaaaaaaaaccaacccccccccc
                1188888777777777777888888888acaaacaccaabbbbbbbbbbbbbbafffffffff
                1188c8877777777777888888888ccbbbbbbbbbbbbbbbbbbbbbbbbafffffffff
                1188f88888777777788ccccccccfcbbbbbbbbbbbbbbbbbbbbbbbbcfffffffff
                1188f888888888888cffffffffffcbbbbbbbbbbbbbbbbbbbbbbbbafffffffff
                1188fc8888888888cfffffffffffabbbbbbbbbbbbcaaaacccaaaaafffffffff
                1188fc888888888cffffffffffffaccaaaccaaaaaafffffffffffffcfffffff
                1188fc888888888cffffffffffffffffffffffffccccccccccccccfcfccccff
                1188ff888888888fffffcccccfcfccccccccccccfffffffffffffffcfffffff
                1188cf88888888cfffffffffffcfffffffffffffccccccccccccccfcfccccff
                1188cf88888888cfffffcccccfcfccccccccccccfffffffffffffffffffffff
                1118cf88888888ffffffffffffcffffffffffffffffffffffffffffcfffffff
                1118cc8888888cffffffffffffcffffffffffffffffffffffffffffffffffff
                1118ccccc8888cfffffffffffffffffffffffffffffffffffffffffffffffff
                1118cccccfffffffffffffffffcffffffffffffffffffffccccccccfccccccc
                11188cccccfffffffffffffffffffffcccccccfcccccccfffffffffffffffff
                111188888888cccfccfcfccccccccffffffffffffffffffffffffffffffffff
                11111118888cffffffffcffffffffffffffffffffffffffffffffffffffffff
                111111cfffffffffffffcffffffffffffffffffffffffffffffffffffffffff
                111111cfffffffffffffcffffffffffffffffffffffffffffffffffffffffff
                111111cfffffffffffffcffffffffffffffffffffffffffffffffffffffffff
                1111111cfffffffffffccffffffffffffffffffffffffffffffffffffffffff
                1111111ccffffffffffcfffffffffffffffffffffffffffffffffffffffffff
                11111111111ccccccfcfffffffffffffffffffffffffffffffffffffffffffb
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                `)
            CarType = "Road4"
        } else if (selectedIndex == 4) {
            CarType = "None"
        }
    })
    miniMenu.onButtonPressed(myMenu2, miniMenu.Button.A, function (selection, selectedIndex) {
        if (selectedIndex == 0) {
            PlayerSpecs(60, 130, 0.99, 1, RoadCarImages[0])
            music.play(music.createSoundEffect(WaveShape.Triangle, 298, 305, 202, 255, 20, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
            Carname = "Kintaro V4"
        } else if (selectedIndex == 1) {
            if (RoadCar2Unlocked) {
                PlayerSpecs(65, 140, 0.99, 1, RoadCarImages[1])
                music.play(music.createSoundEffect(WaveShape.Triangle, 298, 305, 202, 255, 20, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
                Carname = "Ossira T1"
            } else {
                if (100 <= Money) {
                    Money += -100
                    RoadCar2Unlocked = true
                    PlayerSpecs(65, 140, 0.99, 1, RoadCarImages[1])
                    Carname = "Ossira T1"
                } else {
                    music.play(music.createSoundEffect(WaveShape.Noise, 2899, 1844, 221, 168, 20, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
                }
            }
        } else if (selectedIndex == 2) {
            if (RoadCar3Unlocked) {
                PlayerSpecs(55, 120, 0.99, 2, RoadCarImages[2])
                music.play(music.createSoundEffect(WaveShape.Triangle, 298, 305, 202, 255, 20, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
                Carname = "Helion I50"
            } else {
                if (200 <= Money) {
                    Money += -200
                    RoadCar3Unlocked = true
                    PlayerSpecs(55, 120, 0.99, 2, RoadCarImages[2])
                    Carname = "Helion I50"
                } else {
                    music.play(music.createSoundEffect(WaveShape.Noise, 2899, 1844, 221, 168, 20, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
                }
            }
        } else if (selectedIndex == 3) {
            if (RoadCar4Unlocked) {
                PlayerSpecs(70, 125, 0.99, 0.5, RoadCarImages[3])
                music.play(music.createSoundEffect(WaveShape.Triangle, 298, 305, 202, 255, 20, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
                Carname = "Draxon 180"
            } else {
                if (300 <= Money) {
                    Money += -300
                    RoadCar4Unlocked = true
                    PlayerSpecs(70, 125, 0.99, 0.5, RoadCarImages[3])
                    Carname = "Draxon 180"
                } else {
                    music.play(music.createSoundEffect(WaveShape.Noise, 2899, 1844, 221, 168, 20, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
                }
            }
        } else if (selectedIndex == 4) {
            music.play(music.createSoundEffect(WaveShape.Triangle, 298, 305, 202, 255, 20, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
            color.startFade(color.originalPalette, color.Black, 300)
            color.pauseUntilFadeDone()
            sprites.destroy(myMenu2)
            sprites.destroy(Car_Display_Image)
            color.startFade(color.Black, color.originalPalette, 300)
            Load_Menu_Cars()
        }
    })
}
function End_Bad () {
    RaceStarted = false
    mySprite = sprites.create(img`
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        `, SpriteKind.ui)
    animation.runImageAnimation(
    mySprite,
    [img`
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        `,img`
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        `,img`
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        `,img`
        ................................................................................................................................................................
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        `,img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ................................................................................................................................................................
        ................................................................................................................................................................
        `,img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `],
    150,
    false
    )
    mySprite.setPosition(80, 60)
    mySprite.setFlag(SpriteFlag.RelativeToCamera, true)
    if (sprites.readDataNumber(The_Player, "damage") >= 100) {
        myTextSprite = fancyText.create("Crashed", 0, 2, fancyText.italic_small)
    } else if (sprites.readDataNumber(The_Player, "fuel") <= 0) {
        myTextSprite = fancyText.create("0 Fuel", 0, 2, fancyText.italic_small)
    }
    myTextSprite.setFlag(SpriteFlag.RelativeToCamera, true)
    myTextSprite.setPosition(80, 60)
    myTextSprite.z = 150
    mySprite.z = 150
    RaceStarted = false
    timer.after(3000, function () {
        sprites.destroy(mySprite)
        sprites.destroy(myTextSprite)
        timer.after(2000, function () {
            color.startFade(color.originalPalette, color.Black, 200)
            color.pauseUntilFadeDone()
            game.reset()
        })
    })
}
function Load_Menu_Custom_Race () {
    Main_Menu_Open = false
    Info_Menu_Open = true
    Car_Menu_Open = false
    Custom_Menu_Open = true
    truefalse_gen = false
    CustomLaps = 1
    Custom_Pits = 0
    Custom_Track_Name = "Halbmond Pass"
    Custom_Track_Number = 1
    myMenu2 = miniMenu.createMenu(
    miniMenu.createMenuItem("Track"),
    miniMenu.createMenuItem("Laps"),
    miniMenu.createMenuItem("Time"),
    miniMenu.createMenuItem("Pits"),
    miniMenu.createMenuItem("Proceed"),
    miniMenu.createMenuItem("Back")
    )
    myMenu2.setPosition(28, 38)
    miniMenu.setMenuStyleProperty(myMenu2, miniMenu.MenuStyleProperty.Width, 65)
    miniMenu.setMenuStyleProperty(myMenu2, miniMenu.MenuStyleProperty.Columns, 1)
    miniMenu.setStyleProperty(myMenu2, miniMenu.StyleKind.Default, miniMenu.StyleProperty.Margin, 3)
    miniMenu.setStyleProperty(myMenu2, miniMenu.StyleKind.Default, miniMenu.StyleProperty.Background, -1)
    miniMenu.setStyleProperty(myMenu2, miniMenu.StyleKind.Default, miniMenu.StyleProperty.Foreground, -5)
    miniMenu.setStyleProperty(myMenu2, miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Background, 4)
    miniMenu.setStyleProperty(myMenu2, miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Foreground, 1)
    miniMenu.setStyleProperty(myMenu2, miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Border, 1)
    miniMenu.onSelectionChanged(myMenu2, function (selection, selectedIndex) {
        music.play(music.createSoundEffect(WaveShape.Triangle, 298, 0, 255, 255, 20, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        if (selectedIndex == 0) {
            scene.setBackgroundImage(img`
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                `)
        } else if (selectedIndex == 1) {
        	
        } else if (selectedIndex == 2) {
        	
        } else if (selectedIndex == 3) {
        	
        } else if (selectedIndex == 4) {
        	
        } else {
        	
        }
    })
    miniMenu.onButtonPressed(myMenu2, miniMenu.Button.A, function (selection, selectedIndex) {
        if (selectedIndex == 2) {
            if (truefalse_gen) {
                truefalse_gen = false
            } else {
                truefalse_gen = true
            }
        } else if (selectedIndex == 1) {
            CustomLaps += 1
            if (50 < CustomLaps) {
                CustomLaps = 1
            }
        } else if (selectedIndex == 5) {
            music.play(music.createSoundEffect(WaveShape.Triangle, 298, 305, 202, 255, 20, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
            color.startFade(color.originalPalette, color.Black, 300)
            color.pauseUntilFadeDone()
            sprites.destroy(myMenu2)
            sprites.destroy(myTextSprite3)
            color.startFade(color.Black, color.originalPalette, 300)
            Load_Menu2()
        } else if (selectedIndex == 3) {
            Custom_Pits += 1
            if (5 < Custom_Pits) {
                Custom_Pits = 0
            }
        } else if (selectedIndex == 0) {
            if (Custom_Track_Name == "Halbmond Pass") {
                Custom_Track_Name = "Tani no Kochi"
                Custom_Track_Number = 2
            } else if (Custom_Track_Name == "Tani no Kochi") {
                Custom_Track_Name = "Hanabatake"
                Custom_Track_Number = 3
            } else if (Custom_Track_Name == "Hanabatake") {
                Custom_Track_Name = "Halbmond Pass"
                Custom_Track_Number = 1
            }
        } else if (selectedIndex == 4) {
            music.play(music.createSoundEffect(WaveShape.Triangle, 298, 305, 202, 255, 20, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
            color.startFade(color.originalPalette, color.Black, 300)
            color.pauseUntilFadeDone()
            sprites.destroy(myMenu2)
            sprites.destroy(myTextSprite3)
            Custom_Menu_Open = false
            color.startFade(color.Black, color.originalPalette, 300)
            if (Carname == "Kintaro V4") {
                PlayerSpecs(60, 130, 0.99, 1, RoadCarImages[0])
                CarRaceClass = "Road"
            } else if (Carname == "Ossira T1") {
                PlayerSpecs(65, 140, 0.99, 1, RoadCarImages[1])
                CarRaceClass = "Road"
            } else if (Carname == "Helion I50") {
                PlayerSpecs(55, 120, 0.99, 2, RoadCarImages[2])
                CarRaceClass = "Road"
            } else if (Carname == "Draxon 180") {
                PlayerSpecs(70, 125, 0.99, 0.5, RoadCarImages[3])
                CarRaceClass = "Road"
            } else if (Carname == "Ferrovia 0") {
                PlayerSpecs(95, 125, 0.99, 1, SportsCarImages[0])
                CarRaceClass = "Sport"
            } else if (Carname == "Aurex GT") {
                PlayerSpecs(90, 120, 0.99, 2.5, SportsCarImages[1])
                CarRaceClass = "Sport"
            } else if (Carname == "Rivaro P50") {
                PlayerSpecs(95, 125, 0.97, 0.5, SportsCarImages[2])
                CarRaceClass = "Sport"
            } else if (Carname == "Solvante A") {
                PlayerSpecs(100, 115, 0.995, 0.55, SportsCarImages[3])
                CarRaceClass = "Sport"
            } else if (Carname == "Ferrovia LM") {
                PlayerSpecs(125, 100, 0.999, 1.2, HyperCarImages[0])
                CarRaceClass = "Hyper"
            } else if (Carname == "Aurex LM") {
                PlayerSpecs(120, 90, 0.999, 3, HyperCarImages[1])
                CarRaceClass = "Hyper"
            } else if (Carname == "Rivaro LM") {
                PlayerSpecs(130, 110, 0.9995, 0.5, HyperCarImages[2])
                CarRaceClass = "Hyper"
            } else if (Carname == "Solvante LM") {
                PlayerSpecs(135, 95, 0.9995, 0.55, HyperCarImages[3])
                CarRaceClass = "Hyper"
            } else if (Carname == "RedlightPsr") {
                PlayerSpecs(155, 95, 0.999, 1.5, PrototypeCarImages[0])
                CarRaceClass = "Proto"
            } else if (Carname == "2027 LM") {
                PlayerSpecs(150, 85, 0.999, 3, PrototypeCarImages[1])
                CarRaceClass = "Proto"
            } else if (Carname == "Banned LM") {
                PlayerSpecs(155, 100, 0.99995, 0.65, PrototypeCarImages[2])
                CarRaceClass = "Proto"
            } else if (Carname == "BlueSky 27") {
                PlayerSpecs(160, 80, 0.99995, 0.75, PrototypeCarImages[3])
                CarRaceClass = "Proto"
            }
            Start_Race(RoadCarImages[randint(0, 3)], CarRaceClass, Custom_Track_Number)
            RaceSetup(CustomLaps, truefalse_gen, Custom_Pits)
            Isnightfunction()
            Start2()
        }
    })
}
/**
 * Higher the number for steering the worse the handling
 * 
 * <50 nah lowest is 75
 */
function carcontrol (player2: Sprite, max_speed: number, handling: number, deaceleration: number, acceleration: number) {
    if (sprites.readDataNumber(The_Player, "fuel") <= 0) {
    	
    } else {
        if (controller.up.isPressed()) {
            sprites.changeDataNumberBy(player2, "tirelife", -0.02)
            sprites.changeDataNumberBy(player2, "fuel", -0.01)
            if (The_Player.isHittingTile(CollisionDirection.Left) || The_Player.isHittingTile(CollisionDirection.Right)) {
            	
            } else {
                if (sprites.readDataNumber(player2, "tirelife") <= 0) {
                    if (Math.abs(sprites.readDataNumber(player2, "speed")) < max_speed - 20 + sprites.readDataNumber(player2, "fuelspeedchange")) {
                        sprites.changeDataNumberBy(player2, "speed", parseFloat("-" + acceleration))
                    }
                } else {
                    if (Math.abs(sprites.readDataNumber(player2, "speed")) < max_speed + sprites.readDataNumber(player2, "fuelspeedchange")) {
                        sprites.changeDataNumberBy(player2, "speed", parseFloat("-" + acceleration))
                    }
                }
            }
        } else if (controller.down.isPressed() || controller.A.isPressed()) {
            sprites.changeDataNumberBy(player2, "fuel", -0.01)
            if (Math.abs(sprites.readDataNumber(player2, "speed")) < max_speed + sprites.readDataNumber(player2, "fuelspeedchange")) {
                sprites.changeDataNumberBy(player2, "speed", acceleration)
            }
        } else {
            if (sprites.readDataNumber(player2, "speed") == 0) {
                sprites.setDataNumber(player2, "speed", 0)
            } else {
                sprites.setDataNumber(player2, "speed", sprites.readDataNumber(player2, "speed") * deaceleration)
            }
        }
        sprites.setDataNumber(player2, "steering", sprites.readDataNumber(player2, "speed") / (handling + sprites.readDataNumber(player2, "tireaffect")))
        if (The_Player.isHittingTile(CollisionDirection.Top) || The_Player.isHittingTile(CollisionDirection.Bottom)) {
        	
        } else {
            if (controller.left.isPressed()) {
                sprites.changeDataNumberBy(player2, "tirelife", -0.02)
                sprites.changeDataNumberBy(player2, "direction", sprites.readDataNumber(player2, "steering") * 4)
            } else if (controller.right.isPressed()) {
                sprites.changeDataNumberBy(player2, "tirelife", -0.02)
                if (sprites.readDataNumber(player2, "tirelife") <= 0) {
                    sprites.changeDataNumberBy(player2, "direction", 0 - sprites.readDataNumber(player2, "steering") * 1.25)
                } else {
                    sprites.changeDataNumberBy(player2, "direction", 0 - sprites.readDataNumber(player2, "steering") * 4)
                }
            }
        }
        if (sprites.readDataNumber(The_Player, "fuel") <= 90 && sprites.readDataNumber(The_Player, "fuel") > 81) {
            sprites.setDataNumber(The_Player, "fuelspeedchange", 1)
        } else if (sprites.readDataNumber(The_Player, "fuel") <= 80 && sprites.readDataNumber(The_Player, "fuel") > 71) {
            sprites.setDataNumber(The_Player, "fuelspeedchange", 2)
        } else if (sprites.readDataNumber(The_Player, "fuel") <= 70 && sprites.readDataNumber(The_Player, "fuel") > 61) {
            sprites.setDataNumber(The_Player, "fuelspeedchange", 3)
        } else if (sprites.readDataNumber(The_Player, "fuel") <= 60 && sprites.readDataNumber(The_Player, "fuel") > 51) {
            sprites.setDataNumber(The_Player, "fuelspeedchange", 4)
        } else if (sprites.readDataNumber(The_Player, "fuel") <= 50 && sprites.readDataNumber(The_Player, "fuel") > 41) {
            sprites.setDataNumber(The_Player, "fuelspeedchange", 5)
        } else if (sprites.readDataNumber(The_Player, "fuel") <= 40 && sprites.readDataNumber(The_Player, "fuel") > 31) {
            sprites.setDataNumber(The_Player, "fuelspeedchange", 6)
        } else if (sprites.readDataNumber(The_Player, "fuel") <= 30 && sprites.readDataNumber(The_Player, "fuel") > 21) {
            sprites.setDataNumber(The_Player, "fuelspeedchange", 7)
        } else if (sprites.readDataNumber(The_Player, "fuel") <= 20 && sprites.readDataNumber(The_Player, "fuel") > 11) {
            sprites.setDataNumber(The_Player, "fuelspeedchange", 8)
        } else if (sprites.readDataNumber(The_Player, "fuel") <= 10 && sprites.readDataNumber(The_Player, "fuel") > 1) {
            sprites.setDataNumber(The_Player, "fuelspeedchange", 9)
        }
        player2.vx = Math.cos(sprites.readDataNumber(player2, "direction") * Math.PI / 180) * sprites.readDataNumber(player2, "speed")
        player2.vy = Math.sin(sprites.readDataNumber(player2, "direction") * Math.PI / 180) * sprites.readDataNumber(player2, "speed")
        spriteFx.setRotation(player2, sprites.readDataNumber(player2, "direction"))
    }
}
function Load_Menu_Hyper_Cars () {
    Main_Menu_Open = false
    Info_Menu_Open = false
    Car_Menu_Open = true
    HyperMenuOpen = true
    myMenu2 = miniMenu.createMenu(
    miniMenu.createMenuItem("Ferrovia LM"),
    miniMenu.createMenuItem("Aurex LM"),
    miniMenu.createMenuItem("Rivaro LM"),
    miniMenu.createMenuItem("Solvante LM"),
    miniMenu.createMenuItem("Back")
    )
    myMenu2.setPosition(31, 38)
    Car_Display_Image = sprites.create(img`
        1111111111111111111111111111111111111111111111111aaabaabbaaaaaa
        11111111111111111111111111111111111111111ababaabbbbbbbbbbbbbbbb
        111111111111111111111111111111111111abbaabbbbbbbbbbbbbbbfffffff
        1111111111111111111111111111111aaaabbbbbbbbbbbfffffffffffffffff
        11111111111111111111111111111abbbbbbbbfffffffffffffffffffffffff
        1111111111111111111111111111abbffffffffffffffffffffffffffffffff
        111111111111111111111111111abffffffffffffffffffffffffffffffffff
        11111111111111111111111111abfffffffffffffffffffffffffffffffffff
        1111111111111111111111111abffffffffffffffffffffffffffffffffffff
        1111111111111111111111111abffffffffffffffffffffffffffffffffffff
        111111111111111111111111abfffffffffffffffffffffffffffffffffffff
        11111111111111111111111abffffffffffffffffffffffffffffffffffffff
        11111111111111111111111bbffffffffffffffffffffffffffffffffffffff
        1111111111111111111111bbfffffffffffffffffffffffffffffffffffffff
        111111111111111111111bbffffffffffffffffffffffffffffffffffffffff
        111111111111111111111bbffffffffffffffffffffffffffffffffffffffff
        11111111111111111111bbfffffffffffffffffffffffffffffffffffffffff
        1111111111111ffc1111bbffffffffffffffffffffffffffffffffffffffffa
        11111111111fffff111bbfffffffffffffffffffffffffffffaaaaaaaaaaaaa
        111111111fffccfff11bbffffffffffffffffffaaaaaaaaaaaaaaaaaaaaaaaa
        111111111fccccccfabbfffffffaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbb
        111111111cffffccaaaaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        1111111111cffcaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        111111111111abbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        11111111111abbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        1111111111abbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        111111111abbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        11111111abbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        1111111abbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        111111abbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        11111abbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbaabbbaa
        1111aabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbabaaaaaaabbaaaaaaaac1
        1111abbbbbbbbbbbbbbbbbbbbbabaaaabaaaaaaaaaacccccccccccccccccc11
        111abbbbaaaaaaaaaaaaaaccccccccccccccccccccccccffffffffffccccc11
        111abbbacc1cccc111cccaacccfffffffffffffffffffffffffffffffcaccc1
        111abbbac111cc11111cccaacffffffffffffffffffffffffffffffffcacccc
        111abbbacc1ccc11111ccccacffffffffffffffffffffffffffffffffcaaaaa
        111abbbbaaaaccc111cccccacfffffffffffffffffffffffffffffffccaaaaa
        11aabbbbbbbbaaaaaaacccaacfffffffffffffffffffffffffffffcccaaaaaa
        11aabbbbbbbbbbbbbbbaaaaaccffffffffffccccccccccccccccccaaaaaaaaa
        11abbbbbbbbbbbbbbbbbbbaaacccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaa
        11abbbbbbbbbbbbbbbbbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaccaacccccccccc
        11aaaaabbbbbbbbbbbbaaaaaaaaaacaaacaccaabbbbbbbbbbbbbbaaaaaaaaaa
        11aacaabbbbbbbbbbbaaaaaaaaaccbbbbbbbbbbbbbbbbbbbbbbbbaaaaaaaaaa
        11aafaaaaabbbbbbbaaaaaaaaaaacbbbbbbbbbbbbbbbbbbbbbbbbcfffffffff
        11aafaaaaaaaaaaaaaaaaaaaaaaacbbbbbbbbbbbbbbbbbbbbbbbbafffffffff
        11aafcaaaaaafaaaaaaaafffffffabbbbbbbbbbbbcaaaacccaaaaafffffffff
        11aafcaaaaaaffffffffffffffffaccaaaccaaaaaafffffffffffffcfffffff
        11aafcaaaaaffcccffffffffffffffffffffffffccccccccccccccfcfccccff
        11aaffaaaaffcccccfffcccccfcfccccccccccccfffffffffffffffcfffffff
        11aacfaaaaffcccccfffffffffcfffffffffffffccccccccccccccfcfccccff
        11aacfaaafffcccccfffcccccfcfccccccccccccfffffffffffffffffffffff
        111acfaaaffffcccffffffffffcffffffffffffffffffffffffffffcfffffff
        111accaaafffffffffffffffffcffffffffffffffffffffffffffffffffffff
        111acccccffffffffffffffffffffffffffffffffffffffffffffffffffffff
        111acccccfffffffffffffffffcffffffffffffffffffffccccccccfccccccc
        111aacccccaffffffffffffffffffffcccccccfcccccccfffffffffffffffff
        1111aaaaaaaacccfccfcfccccccccffffffffffffffffffffffffffffffffff
        1111111aaaacffffffffcffffffffffffffffffffffffffffffffffffffffff
        111111cfffffffffffffcffffffffffffffffffffffffffffffffffffffffff
        111111cfffffffffffffcffffffffffffffffffffffffffffffffffffffffff
        111111cfffffffffffffcffffffffffffffffffffffffffffffffffffffffff
        1111111cfffffffffffccffffffffffffffffffffffffffffffffffffffffff
        1111111ccffffffffffcfffffffffffffffffffffffffffffffffffffffffff
        11111111111ccccccfcffffffffffffffffffffffffffffffffff1111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        `, SpriteKind.ui)
    Car_Display_Image.setPosition(128, 60)
    miniMenu.setMenuStyleProperty(myMenu2, miniMenu.MenuStyleProperty.Width, 93)
    miniMenu.setMenuStyleProperty(myMenu2, miniMenu.MenuStyleProperty.Columns, 1)
    miniMenu.setStyleProperty(myMenu2, miniMenu.StyleKind.Default, miniMenu.StyleProperty.Margin, 3)
    miniMenu.setStyleProperty(myMenu2, miniMenu.StyleKind.Default, miniMenu.StyleProperty.Background, -1)
    miniMenu.setStyleProperty(myMenu2, miniMenu.StyleKind.Default, miniMenu.StyleProperty.Foreground, -5)
    miniMenu.setStyleProperty(myMenu2, miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Background, 4)
    miniMenu.setStyleProperty(myMenu2, miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Foreground, 1)
    miniMenu.setStyleProperty(myMenu2, miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Border, 1)
    miniMenu.onSelectionChanged(myMenu2, function (selection, selectedIndex) {
        music.play(music.createSoundEffect(WaveShape.Triangle, 298, 0, 255, 255, 20, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        if (selectedIndex == 0) {
            scene.setBackgroundImage(img`
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                `)
            Car_Display_Image.setImage(img`
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111bbbbaaaccaaaacccccccaaaaaaaccccccaaaaccccc
                111111111111111111111baaaaaccccc33333333222222222222222cccccccc
                111111111111111111111ba1111111333ffffffffffffffffffffff2111111c
                1111111111111111111111a11111113fffffffffffffffffffffffff211111c
                1111111111111111111111aa1111133ffffffffffffffffffffffffff21111c
                1111111111111111111111ba111113ffffffffffffffffffffffffffff2111c
                1111111111111111111111baabbb12ffffffffffffffffffffffffffff21ccc
                111111111111111111111babaabb33ffffffffffffffffffffffffffff2cccc
                11111111111111111111babaaaab3fffffffffffffffffffffffffffff22ccc
                11111111111333323332aabacccc2ffffffffffffffffffffffffffffff2ccc
                1111111111332222ccc33aaccccc3ffffffffffffffffffffffffffffff2ccc
                111111111332222cccccc3cccccc2ffffffffffffffffffffffffffffff2ccc
                1111111133222222cccccc3ccccc2ffffffffffffffffffffffffffffff2ccc
                11111113322222222ccccc3ccccc222fffffffffffffffffffffffff2233333
                11111113222222222cccc33333223333fffffffffffffffffffffff33333333
                11111113222222222ccccc23333333333fffffffffffffffffffff333333333
                11111113222222222222c2333322223333ffffffffffffffffff33333333333
                111111122222222222222233322222233333fffffffffffff33333333333333
                111111322222222222222233332222333333333333333333333333333333333
                111111322222222222222333333333333333333333333333333333333223332
                111111322223333333333333333232223322222222222222222222222222222
                111111322233333322333333332222222222222222222222222222222223333
                111111322311111133111111113222222222222222222233233333333231111
                111111322333111113311111132222222222222222222222222222222223111
                111111322333333333233333333322222222222222222222333332222333333
                111111232333111111331111111132222223333332222222222233333111111
                111111233333331111133111111322222222233333222222222222223311111
                111111333222223333322333333222222222222333333222222222322233333
                111111222222222223333322222222222222222222222222222222233333333
                111111323233233333322222222222222222222223333222222222233333322
                111111333222222222222233333322222222233332222222222222233333333
                111111333222233333333333333333332233322222222222222222222333333
                1111113332222aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                111111332222ccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                111111322222ccccccccfffccffcfffffffffffffffffffffffffffcffccfff
                11111332222ccccccccccfffccffcfffffffffffffffffffffffffcffccfffc
                11113332222ccccccccccfffccffcfffffffffffffffffffffffffcffccfffc
                11113332222cccccccccccfffccffcfffffffffffffffffffffffcffccfffcc
                111333333333f222f22222222f2222222ff2222222ff22222222f222222f222
                11111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                11fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                11fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                11111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                1111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                1111111111fffffffffffffffffffffffffffffffffffffffffffffffffffff
                1111111111111111ffffffffffffffffffffffffffffffffffffffffffffff1
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                `)
            CarType = "Hyper1"
        } else if (selectedIndex == 1) {
            Car_Display_Image.setImage(img`
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111555111111111111111111
                111111111111111111111111111111111111111115fff511111111111111111
                11111111111111111111111111111111111111115fffff51111111111111111
                1111111111111111111111111111111111111115fffffff5111111111111111
                11111111111111111ccccbbbbcccccccccccccc5fffffff5ccccccaaaaccccc
                11111111111111111ccccccccccccccc55555555666666666666666cccccccc
                111111111111111111ccccc1111111555ffffffffffffffffffffff6111111c
                1111111111111111111cccc11111115fffffffffffffffffffffffff611111c
                111111111111111111111ccc1111155ffffffffffffffffffffffffff61111c
                1111111111111111111111bc111115ffffffffffffffffffffffffffff6111c
                1111111111111111111111baabbb16ffffffffffffffffffffffffffff61ccc
                111111111111111111111babaabb55ffffffffffffffffffffffffffff6cccc
                11111111111111111111babaaaab5fffffffffffffffffffffffffffff66ccc
                11111111111555565556aabacccc6ffffffffffffffffffffffffffffff6ccc
                1111111111556666ccc55aaccccc5ffffffffffffffffffffffffffffff6ccc
                111111111556666cccccc5cccccc6ffffffffffffffffffffffffffffff6ccc
                1111111155666666cccccc5ccccc6ffffffffffffffffffffffffffffff6ccc
                11111115566666666ccccc5ccccc666fffffffffffffffffffffffff6655555
                11111115666666666cccc55555665555fffffffffffffffffffffff55555555
                11111115666666666ccccc65555555555fffffffffffffffffffff555555555
                11111115666666666666c6555566665555ffffffffffffffffff55555555555
                111111166666666666666655566666655555fffffffffffff55555555555555
                111111566666666666666655556666555555555555555555555555555555555
                111111566666666666666555555555555555555555555555555555555665556
                111111566665555555555555555656665566666666666666666666666666666
                1111115666555551111111566c666666666666666666666666666666c665111
                1111115666666511111111156ccc66666666666666666655655566ccc551111
                111111566666b1111111111156ccc66c666666666666666666c66ccc6611111
                111111566555b1111111115566cccc6ccc66666666666666ccc5cccc6655111
                1111116565555b1111155556666cc666ccc666666666666ccc666cc66565555
                11111165555555b11111556666666666cccc6666666666cccc6666665566551
                1111115556c666bb11111566666666666cc666666666666cc66666566666511
                111111666cc66666b1111566666666666666666666666666666666655566511
                111111565cccc555bb111566666666666666666666666666666666655566511
                11111155c666666666bbb6555555666666666666666666666666666555555bb
                1111115cc666655555555555555555556666666666666666666666666555555
                1111115cccc66aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                111111556666cfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                1111115c6666cffffffffffcfffffffffcfffffffffffcfffffffffffffcfff
                111115cc666ccccfffffffffcffffffffcfffffffffffcffffffffffffcfffc
                111155cccc6cccccccffffffcffffffffcfffffffffffcffffffffffffcfffc
                11115556666ccccccccffffffcfffffffcfffffffffffcfffffffffffcfffcc
                111555555555f666f66666666f6666666ff6666666ff66666666f666666f666
                11111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                11fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                11fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                11111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                1111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                1111111111fffffffffffffffffffffffffffffffffffffffffffffffffffff
                1111111111111111ffffffffffffffffffffffffffffffffffffffffffffff1
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                `)
            CarType = "Hyper2"
        } else if (selectedIndex == 2) {
            Car_Display_Image.setImage(img`
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111ccccccccccccccccccc9999999997997ccccccccccccc
                11111111111111111cccccccccccccccccccc9997777777777ccccccccccccc
                111111111111111111cccccccccccccc99999999999977779977777cccccccc
                1111111111111111111cccc8811111999ffffffffffffffffffffff7111111c
                11111111111111111111ccc88811119fffffffffffffffffffffffff7111118
                111111111111111111111cc81881199ffffffffffffffffffffffffff71118c
                111111111111111111111cc8118819ffffffffffffffffffffffffffff7181c
                1111111111111111111111ccccc887ffffffffffffffffffffffffffff78ccc
                111111111111111111111ccccccc99ffffffffffffffffffffffffffff7cccc
                11111111111111111111cccccccc9fffffffffffffffffffffffffffff77ccc
                11111111111999979997cccccccc7ffffffffffffffffffffffffffffff7ccc
                1111111111997777ccc99ccccccc9ffffffffffffffffffffffffffffff7ccc
                111111111997777cccccc9cccccc7ffffffffffffffffffffffffffffff7ccc
                1111111199777777cccccc9ccccc7ffffffffffffffffffffffffffffff7ccc
                11111119977777777ccccc9ccccc777fffffffffffffffffffffffff7799999
                11111119777777777cccc99999779999fffffffffffffffffffffff99999999
                11111119777777777ccccc79999999999fffffffffffffffffffff999999999
                11111119777777777777c7999999999999ffffffffffffffffff99999999999
                111111177777777777777799999999999999fffffffffffff99999999999999
                111111977777777777777799999999999999999999999999999999999999999
                111111977777777777777999999999999999999999999999999999999779997
                111111977779999999999999999797779977777777777777777777777777777
                111111977799999999999997777777777777777777777777777777777779999
                111111977777799999999999777777777779777777797799799977777999999
                111111977771199999999999977777777797777777799777777777777799999
                111111977991111199999999777777777997777777799777777977777779999
                111111797991111111199997777777779997777777799977777777777777999
                111111799999911111111177777777799977777777779997777777777777711
                1111119997c7779911111111177777999777777777777997777777777711111
                111111777cc7777799911111111799997777777777777799777777771111111
                111111979cccc99999999911111779777777777777777779999777771111199
                11111199c777777777999799911977777777777777777777777777791199979
                1111119cc777799999999999999999997777777777777777777777777999999
                1111119cccc77aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                111111997777ccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                1111119c7777cccfffccffccffccffffffffffffffffffffffffffffccffccf
                111119cc777ccccccfcccfcccfcccffffffffffffffffffffffffffcccfcccf
                111199cccc7ccccccc777777777777777777777777777777777777777777777
                11119997777cccc777777777777777777777777777777777777777777777777
                111999999999f77777777777777777777777777777777777777777777777777
                11111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                11fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                11fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                11111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                1111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                1111111111fffffffffffffffffffffffffffffffffffffffffffffffffffff
                1111111111111111ffffffffffffffffffffffffffffffffffffffffffffff1
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                `)
            CarType = "Hyper3"
        } else if (selectedIndex == 3) {
            Car_Display_Image.setImage(img`
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111444411111111111111111
                111111111111111111111111111111111111111114cffc41111111111111111
                11111111111111111111111111111111111111114cffffc4111111111111111
                1111111111111111111111111111111111111114cffffffc411111111111111
                1111111111111111111111111111111111111114cccccccf411111111111111
                1111111111111111111cccccccccccccccccc444444444e44eccccccccccccc
                111111111111111111ccccccccccccccccccc444eeeeeeeeeeccccccccccccc
                111111111111111111cccccccccccccc444444444444eeee44eeeeecccccccc
                1111111111111111111cccccc11111444ffffffffffffffffffffffe111111c
                11111111111111111111cccc1111114fffffffffffffffffffffffffe11111c
                111111111111111111111cc11111144ffffffffffffffffffffffffffe1111c
                111111111111111111111cc1111114ffffffffffffffffffffffffffffe111c
                1111111111111111111111ccccc11effffffffffffffffffffffffffffe1ccc
                111111111111144444111ccccccc44ffffffffffffffffffffffffffffecccc
                11111111111144444441cccccccc4fffffffffffffffffffffffffffffeeccc
                111111111114444e444ecccccccceffffffffffffffffffffffffffffffeccc
                111111111144eeeeccc44ccccccc4fffffffffffffffffffffffffffffceccc
                11111111144eeeecccccc4ccccccefffffffffffffffffffffffffffffceccc
                1111111144ee4eeecccccc4ccccceccffffffffffffffffffffffffffcceccc
                111111144ee4eeeeeccccc4ccccceeecfffffffffffffffffffffffcee44444
                11111114ee4eeeeeecccc44444ee4444cfffffffffffffffffffffc44444444
                11111114e4eeeeeeeccccce4444444444cffffffffffffffffffcc444444444
                11111144e4eeeeeeeeeece444444444444ccfffffffffffccccc44444444444
                1111114ee4eeeeeeeeeeee44444444444444fcccccffffccc44444444444444
                1111114eeeeeeeeeeeeeee44444444444444444444444444444444444444444
                1111114ee4eeeeeeeeeee444444444444444444444444444444444444ee444e
                1111114eeee4444444444444444e4eee44eee44444444444444eeeeeeeeeeee
                1111114eee4444444444444eeeeeeeeeeeeeeee44444444444eeeeeeeee4444
                1111114eeeeee44444444444eeeeeeeeeee444444444eeeeeeeeeeeee444444
                1111114eeee44444444444444eeeeeeeeeeee44444444eeeeeeeeeeeee44444
                111111411444444444444444eeeeeeeeeeeeeee4444444444eeeeeeeeee4444
                111111e1111144444444444eeeeeeeeeeeeeeeeeeeeeee444eeeeeeeeeee444
                111111e411111144444444eeeeeeeeeeeeeeeeeeeeeee4444eeeeeeeeeeee44
                1111114441111111444444444eeeeeeeeeeeeeeeeeeee4444eeeeeeeee44444
                111111eeeee1111111444444444eeeeeeeeeeeeee44444444eeeeeee4444444
                1111114e4eeee111111111111111111eeeeeeeee444444444eee11111111111
                11111144eeeeeee111111111111111111144444444444444411111111111111
                1111144eeeeeeccccccccccccccccccccccccccccccccccccccccccccccccc4
                1111144eeeeeeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                11111444eeeeccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                1111144eeeeecccffffcfffcfffcfcffffffffffffffffffffffffcfcfffcff
                111144eeeeeccccccfcccfcccfccccffffffffffffffffffffffffccccfcccf
                111144eeeeecccccccccccccccccccccccccccccccccccccccccccccccccccc
                1114444eeeecccccccccccccccccccccccccccccccccccccccccccccccccccc
                111444444444fcccccccccccccccccccccccccccccccccccccccccccccccccc
                11111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                11fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                11fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                11111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                1111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                1111111111fffffffffffffffffffffffffffffffffffffffffffffffffffff
                1111111111111111ffffffffffffffffffffffffffffffffffffffffffffff1
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                `)
            CarType = "Hyper4"
        } else if (selectedIndex == 4) {
            CarType = "None"
        }
    })
    miniMenu.onButtonPressed(myMenu2, miniMenu.Button.A, function (selection, selectedIndex) {
        if (selectedIndex == 0) {
            if (HyperCar1Unlocked) {
                PlayerSpecs(125, 100, 0.999, 1.2, HyperCarImages[0])
                music.play(music.createSoundEffect(WaveShape.Triangle, 298, 305, 202, 255, 20, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
                Carname = "Ferrovia LM"
            } else {
                if (200 <= Money) {
                    Money += -200
                    HyperCar1Unlocked = true
                    PlayerSpecs(125, 100, 0.999, 1.2, HyperCarImages[0])
                    Carname = "Ferrovia LM"
                } else {
                    music.play(music.createSoundEffect(WaveShape.Noise, 2899, 1844, 221, 168, 20, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
                }
            }
        } else if (selectedIndex == 1) {
            if (HyperCar2Unlocked) {
                PlayerSpecs(120, 90, 0.999, 3, HyperCarImages[1])
                music.play(music.createSoundEffect(WaveShape.Triangle, 298, 305, 202, 255, 20, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
                Carname = "Aurex LM"
            } else {
                if (250 <= Money) {
                    Money += -250
                    HyperCar2Unlocked = true
                    PlayerSpecs(120, 90, 0.999, 3, HyperCarImages[1])
                    Carname = "Aurex LM"
                } else {
                    music.play(music.createSoundEffect(WaveShape.Noise, 2899, 1844, 221, 168, 20, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
                }
            }
        } else if (selectedIndex == 2) {
            if (HyperCar3Unlocked) {
                PlayerSpecs(130, 110, 0.9995, 0.5, HyperCarImages[2])
                music.play(music.createSoundEffect(WaveShape.Triangle, 298, 305, 202, 255, 20, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
                Carname = "Rivaro LM"
            } else {
                if (350 <= Money) {
                    Money += 350
                    HyperCar3Unlocked = true
                    PlayerSpecs(130, 110, 0.9995, 0.5, HyperCarImages[2])
                    Carname = "Rivaro LM"
                } else {
                    music.play(music.createSoundEffect(WaveShape.Noise, 2899, 1844, 221, 168, 20, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
                }
            }
        } else if (selectedIndex == 3) {
            if (HyperCar4Unlocked) {
                PlayerSpecs(135, 95, 0.9995, 0.55, HyperCarImages[3])
                music.play(music.createSoundEffect(WaveShape.Triangle, 298, 305, 202, 255, 20, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
                Carname = "Solvante LM"
            } else {
                if (450 <= Money) {
                    Money += -450
                    HyperCar4Unlocked = true
                    PlayerSpecs(135, 95, 0.9995, 0.55, HyperCarImages[3])
                    Carname = "Solvante LM"
                } else {
                    music.play(music.createSoundEffect(WaveShape.Noise, 2899, 1844, 221, 168, 20, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
                }
            }
        } else if (selectedIndex == 4) {
            music.play(music.createSoundEffect(WaveShape.Triangle, 298, 305, 202, 255, 20, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
            color.startFade(color.originalPalette, color.Black, 300)
            color.pauseUntilFadeDone()
            sprites.destroy(myMenu2)
            sprites.destroy(Car_Display_Image)
            color.startFade(color.Black, color.originalPalette, 300)
            Load_Menu_Cars()
        }
    })
}
function Notification (text2: string, icon: Image) {
    myTextSprite = fancyText.create(text2, 0, 1, fancyText.smallArcade)
    myTextSprite.setFlag(SpriteFlag.RelativeToCamera, true)
    myTextSprite.setPosition(122, -20)
    myTextSprite.z = 101
    bar = sprites.create(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff......................
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff......................
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff......................
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff......................
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff......................
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff......................
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff......................
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff......................
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff......................
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff......................
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff......................
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff......................
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff......................
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff......................
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff......................
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff......................
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff......................
        `, SpriteKind.ui)
    bar.setFlag(SpriteFlag.RelativeToCamera, true)
    bar.setPosition(125, -20)
    bar.z = 100
    barimage = sprites.create(icon, SpriteKind.ui)
    barimage.setFlag(SpriteFlag.RelativeToCamera, true)
    barimage.setPosition(81, -20)
    barimage.z = 101
    spriteutils.moveToAtSpeed(myTextSprite, spriteutils.point(myTextSprite.x, myTextSprite.y + 29), 25)
    spriteutils.moveToAtSpeed(bar, spriteutils.point(bar.x, bar.y + 29), 25)
    spriteutils.moveToAtSpeed(barimage, spriteutils.point(barimage.x, barimage.y + 29), 25)
    timer.after(2500, function () {
        spriteutils.moveToAtSpeed(myTextSprite, spriteutils.point(myTextSprite.x, myTextSprite.y - 29), 25)
        spriteutils.moveToAtSpeed(bar, spriteutils.point(bar.x, bar.y - 29), 25)
        spriteutils.moveToAtSpeed(barimage, spriteutils.point(barimage.x, barimage.y - 29), 25)
        timer.after(1500, function () {
            sprites.destroy(myTextSprite)
            sprites.destroy(bar)
            sprites.destroy(barimage)
            sprites.destroyAllSpritesOfKind(SpriteKind.ui)
        })
    })
}
function Load_Menu_Cars () {
    Main_Menu_Open = false
    Info_Menu_Open = false
    Car_Menu_Open = true
    RoadMenuOpen = false
    SportMenuOpen = false
    HyperMenuOpen = false
    ProtoMenuOpen = false
    myMenu2 = miniMenu.createMenu(
    miniMenu.createMenuItem("Road Cars"),
    miniMenu.createMenuItem("Sports Cars"),
    miniMenu.createMenuItem("Hyper Cars"),
    miniMenu.createMenuItem("Prototype Cars"),
    miniMenu.createMenuItem("Back")
    )
    myMenu2.setPosition(44, 38)
    Car_Display_Image = sprites.create(img`
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddeeeeedddddddddddeeeeeeeeedddddddddddddddddddddddddddddddddd
        dddddddddeeedddddeeedddddddddeeeeeeeeedddddddddddddddeeeeeedddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeed
        dddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeedddddddddddddddd
        dddddddddddddeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddd
        dddddddddddeedddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddeeeeeedddddddddddddddddeeeeeeeeeeeeeeeeeeeeeddddddddd
        ddddddddeeddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddeeeeeeeeeeeedddddddddddddeeeeeeeeeeeeeeeeeeeeeeeddddddddd
        eeedddddddddddddddddddddddeeedddddddeeeeddddddddddddddddddddddd
        dddddddeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddd
        ddddddddddddeeeeedddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeee
        dddddddddddddddddeeddddddddeeeeeddddddddeeeeeeeeeeeeeeeeeeeeedd
        ddddddddddddddddddddddddddddddddddddddeeeedeedddd88878877888888
        ddddddddddddddddddddddddeeeeeeeeeeeeeeedd8787887777777777777777
        deeeeeeeeeeeeeeeeeeeeeeeeeedeedddddd87788777777777777777fffffff
        deeeddddddddddeeeeeeeeeeeeeeddd888877777777777fffffffffffffffff
        dddddeeeeeeeeeeeddddeeeeeeedb877777777fffffffffffffffffffffffff
        ddddddeeeeeeeeeeeeeeeeeeeeeb877ffffffffffffffffffffffffffffffff
        eeeeeeeeeeeeeeebbbbbbbbbbbb87ffffffffffffffffffffffffffffffffff
        bbbbbbbbbbbbbbbbbbbbbbbbbb87fffffffffffffffffffffffffffffffffff
        bbbbbbbbbbbbbbbbbbbbbbbbb87ffffffffffffffffffffffffffffffffffff
        bbbbbbbbbbbbbbbbbbbbbbbbb87ffffffffffffffffffffffffffffffffffff
        bbbbbbbbbbbbbbbbbbbbbbbb87fffffffffffffffffffffffffffffffffffff
        bbbbbbbbbbbbbbbbbbbbbbb87ffffffffffffffffffffffffffffffffffffff
        bbbbbbbbbbbbbbbbbbbbbbb77ffffffffffffffffffffffffffffffffffffff
        bbbbbbbbbbbbbbbbbbbbbb77fffffffffffffffffffffffffffffffffffffff
        bbbbbbbbbbbbbbbbbbbbb77ffffffffffffffffffffffffffffffffffffffff
        bbbbbbbbbbbbbbbbbbbbb77ffffffffffffffffffffffffffffffffffffffff
        bbbbbbbbbbbbbbbbbbbb77fffffffffffffffffffffffffffffffffffffffff
        bbbbbbbbbbbdbffcbbbb77ffffffffffffffffffffffffffffffffffffffff8
        dddddbdddddfffffbbb77fffffffffffffffffffffffffffff8888888888888
        dddddddbbfffccfffbb77ffffffffffffffffff888888888888888888888888
        dddddddbbfccccccf877fffffff888888888888888777777777777777777777
        bbbbbbbbbcffffcc88888777777777777777777777777777777777777777777
        dddddddddbcffc8877777777777777777777777777777777777777777777777
        bbbbbbbbbbbb877777777777777777777777777777777777777777777777777
        bbbbbbbbbbb8777777777777777777777777777777777777777777777777777
        bbbbbbbbbb87777777777777777777777777777777777777777777777777777
        bbbbbbbbb877777777777777777777777777777777777777777777777777777
        bbbbbbbb8777777777777777777777777777777777777777777777777777777
        bbbbbbb87777777777777777777777777777777777777777777777777777777
        bbbbbb877777777777777777777777777777777777777777777777777777777
        bbbbb8777777777777777777777777777777777777777777777777778877788
        bbbb887777777777777777777777777777777777778788888887788888888bb
        bbbb877777777777777777777787888878888888888cccccccccccccccccbbb
        bbb8777788888888888888ccccccccccccccccccccccccffffffffffcccbbbb
        bbb877781bbbbbbbbbbbb88cccfffffffffffcccccfffffffffffffffc8bbbb
        bbb877781bbbbbbbbbbbbb88cfffffffffffcccccccffffffffffffffc81111
        bbb877781111bbbbbbbbbbb8cfffffffffffcccccccffffffffffffffc88888
        bbb8777788881111111bbbb8cfffffffffffcccccccfffffffffffffcc88888
        bb8877777777888888811188cffffffffffffcccccffffffffffffccc888888
        bb8877777777777777788888ccffffffffffcccccccccccccccccc888888888
        bb87777777777777777777888ccccccccccc888888888888888888888888888
        bb877777777777777777788888888888888888aaaaaaaaaaaccaacccccccccc
        bb88888777777777777888888888acaaacaccaabbbbbbbbbbbbbbafffffffff
        bb88c8877777777777888888888ccbbbbbbbbbbbbbbbbbbbbbbbbafffffffff
        bb88f88888777777788ccccccccfcbbbbbbbbbbbbbbbbbbbbbbbbcfffffffff
        bb88f888888888888cffffffffffcbbbbbbbbbbbbbbbbbbbbbbbbafffffffff
        bb88fc8888888888cfffffffffffabbbbbbbbbbbbcaaaacccaaaaafffffffff
        bb88fc888888888cffffffffffffaccaaaccaaaaaafffffffffffffcfffffff
        bb88fc888888888cffffffffffffffffffffffffccccccccccccccfcfccccff
        bb88ff888888888fffffcccccfcfccccccccccccfffffffffffffffcfffffff
        bb88cf88888888cfffffffffffcfffffffffffffccccccccccccccfcfccccff
        bb88cf88888888cfffffcccccfcfccccccccccccfffffffffffffffffffffff
        bbb8cf88888888ffffffffffffcffffffffffffffffffffffffffffcfffffff
        bbb8cc8888888cffffffffffffcffffffffffffffffffffffffffffffffffff
        bbb8ccccc8888cfffffffffffffffffffffffffffffffffffffffffffffffff
        bbb8cccccfffffffffffffffffcffffffffffffffffffffccccccccfccccccc
        bbb88cccccfffffffffffffffffffffcccccccfcccccccfffffffffffffffff
        bbbb88888888cccfccfcfccccccccffffffffffffffffffffffffffffffffff
        bbbbbbb8888cffffffffcffffffffffffffffffffffffffffffffffffffffff
        bbbbbbcfffffffffffffcffffffffffffffffffffffffffffffffffffffffff
        bbbbbbcfffffffffffffcffffffffffffffffffffffffffffffffffffffffff
        bbbbbbcfffffffffffffcffffffffffffffffffffffffffffffffffffffffff
        bbbbbbbcfffffffffffccffffffffffffffffffffffffffffffffffffffffff
        bbbbbbbccffffffffffcfffffffffffffffffffffffffffffffffffffffffff
        bbbbbbbbbbbccccccfcfffffffffffffffffffffffffffffffffffffffffffb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffffbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffffffffffffffbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffffffffbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        `, SpriteKind.ui)
    Car_Display_Image.setPosition(128, 60)
    miniMenu.setMenuStyleProperty(myMenu2, miniMenu.MenuStyleProperty.Width, 93)
    miniMenu.setMenuStyleProperty(myMenu2, miniMenu.MenuStyleProperty.Columns, 1)
    miniMenu.setStyleProperty(myMenu2, miniMenu.StyleKind.Default, miniMenu.StyleProperty.Margin, 3)
    miniMenu.setStyleProperty(myMenu2, miniMenu.StyleKind.Default, miniMenu.StyleProperty.Background, -1)
    miniMenu.setStyleProperty(myMenu2, miniMenu.StyleKind.Default, miniMenu.StyleProperty.Foreground, -5)
    miniMenu.setStyleProperty(myMenu2, miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Background, 4)
    miniMenu.setStyleProperty(myMenu2, miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Foreground, 1)
    miniMenu.setStyleProperty(myMenu2, miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Border, 1)
    miniMenu.onSelectionChanged(myMenu2, function (selection, selectedIndex) {
        music.play(music.createSoundEffect(WaveShape.Triangle, 298, 0, 255, 255, 20, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        if (selectedIndex == 0) {
            scene.setBackgroundImage(img`
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                `)
            Car_Display_Image.setImage(img`
                ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddd
                ddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeddddddddddd
                ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                ddddeeeeedddddddddddeeeeeeeeedddddddddddddddddddddddddddddddddd
                dddddddddeeedddddeeedddddddddeeeeeeeeedddddddddddddddeeeeeedddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeed
                dddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeedddddddddddddddd
                dddddddddddddeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddd
                dddddddddddeedddddddddddddddddddddddddddddddddddddddddddddddddd
                ddddddddddeeeeeedddddddddddddddddeeeeeeeeeeeeeeeeeeeeeddddddddd
                ddddddddeeddddddddddddddddddddddddddddddddddddddddddddddddddddd
                ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                ddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                ddddddeeeeeeeeeeeedddddddddddddeeeeeeeeeeeeeeeeeeeeeeeddddddddd
                eeedddddddddddddddddddddddeeedddddddeeeeddddddddddddddddddddddd
                dddddddeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddd
                ddddddddddddeeeeedddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeee
                dddddddddddddddddeeddddddddeeeeeddddddddeeeeeeeeeeeeeeeeeeeeedd
                ddddddddddddddddddddddddddddddddddddddeeeedeedddd88878877888888
                ddddddddddddddddddddddddeeeeeeeeeeeeeeedd8787887777777777777777
                deeeeeeeeeeeeeeeeeeeeeeeeeedeedddddd87788777777777777777fffffff
                deeeddddddddddeeeeeeeeeeeeeeddd888877777777777fffffffffffffffff
                dddddeeeeeeeeeeeddddeeeeeeedb877777777fffffffffffffffffffffffff
                ddddddeeeeeeeeeeeeeeeeeeeeeb877ffffffffffffffffffffffffffffffff
                eeeeeeeeeeeeeeebbbbbbbbbbbb87ffffffffffffffffffffffffffffffffff
                bbbbbbbbbbbbbbbbbbbbbbbbbb87fffffffffffffffffffffffffffffffffff
                bbbbbbbbbbbbbbbbbbbbbbbbb87ffffffffffffffffffffffffffffffffffff
                bbbbbbbbbbbbbbbbbbbbbbbbb87ffffffffffffffffffffffffffffffffffff
                bbbbbbbbbbbbbbbbbbbbbbbb87fffffffffffffffffffffffffffffffffffff
                bbbbbbbbbbbbbbbbbbbbbbb87ffffffffffffffffffffffffffffffffffffff
                bbbbbbbbbbbbbbbbbbbbbbb77ffffffffffffffffffffffffffffffffffffff
                bbbbbbbbbbbbbbbbbbbbbb77fffffffffffffffffffffffffffffffffffffff
                bbbbbbbbbbbbbbbbbbbbb77ffffffffffffffffffffffffffffffffffffffff
                bbbbbbbbbbbbbbbbbbbbb77ffffffffffffffffffffffffffffffffffffffff
                bbbbbbbbbbbbbbbbbbbb77fffffffffffffffffffffffffffffffffffffffff
                bbbbbbbbbbbdbffcbbbb77ffffffffffffffffffffffffffffffffffffffff8
                dddddbdddddfffffbbb77fffffffffffffffffffffffffffff8888888888888
                dddddddbbfffccfffbb77ffffffffffffffffff888888888888888888888888
                dddddddbbfccccccf877fffffff888888888888888777777777777777777777
                bbbbbbbbbcffffcc88888777777777777777777777777777777777777777777
                dddddddddbcffc8877777777777777777777777777777777777777777777777
                bbbbbbbbbbbb877888777777777777777777777777777777777777777777777
                bbbbbbbbbbb8778877777777777777777777777777777777777777777777777
                bbbbbbbbbb87788777777777777777777777777777777777777777777777777
                bbbbbbbbb877877777777777777777777777777777777777777777777777777
                bbbbbbbb8778777777777777777777777777777777777777777777777777777
                bbbbbbb87887777777777777777777777777777777777777777777777777777
                bbbbbb878777777777777777777777777777777777777777777777777777777
                bbbbb8788777777777777777777777777777777777777777777777778877788
                bbbb887777777777777777777777777777777777778788888887788888888bb
                bbbb877777777777777777777787888878888888888cccccccccccccccccbbb
                bbb8777788888888888888ccccccccccccccccccccccccffffffffffcccbbbb
                bbb877781bbbbbbbbbbbb88cccfffffffffffcccccfffffffffffffffc8bbbb
                bbb877781bbbbbbbbbbbbb88cfffffffffffcccccccffffffffffffffc81111
                bbb877781111bbbbbbbbbbb8cfffffffffffcccccccffffffffffffffc88888
                bbb8777788881111111bbbb8cfffffffffffcccccccfffffffffffffcc88888
                bb8877777777888888811188cffffffffffffcccccffffffffffffccc888888
                bb8877777777777777788888ccffffffffffcccccccccccccccccc888888888
                bb87777777777777777777888ccccccccccc888888888888888888888888888
                bb877777777777777777788888888888888888aaaaaaaaaaaccaacccccccccc
                bb88888777777777777888888888acaaacaccaabbbbbbbbbbbbbbafffffffff
                bb88c8877777777777888888888ccbbbbbbbbbbbbbbbbbbbbbbbbafffffffff
                bb88f88888777777788ccccccccfcbbbbbbbbbbbbbbbbbbbbbbbbcfffffffff
                bb88f888888888888cffffffffffcbbbbbbbbbbbbbbbbbbbbbbbbafffffffff
                bb88fc8888888888cfffffffffffabbbbbbbbbbbbcaaaacccaaaaafffffffff
                bb88fc888888888cffffffffffffaccaaaccaaaaaafffffffffffffcfffffff
                bb88fc888888888cffffffffffffffffffffffffccccccccccccccfcfccccff
                bb88ff888888888fffffcccccfcfccccccccccccfffffffffffffffcfffffff
                bb88cf88888888cfffffffffffcfffffffffffffccccccccccccccfcfccccff
                bb88cf88888888cfffffcccccfcfccccccccccccfffffffffffffffffffffff
                bbb8cf88888888ffffffffffffcffffffffffffffffffffffffffffcfffffff
                bbb8cc8888888cffffffffffffcffffffffffffffffffffffffffffffffffff
                bbb8ccccc8888cfffffffffffffffffffffffffffffffffffffffffffffffff
                bbb8cccccfffffffffffffffffcffffffffffffffffffffccccccccfccccccc
                bbb88cccccfffffffffffffffffffffcccccccfcccccccfffffffffffffffff
                bbbb88888888cccfccfcfccccccccffffffffffffffffffffffffffffffffff
                bbbbbbb8888cffffffffcffffffffffffffffffffffffffffffffffffffffff
                bbbbbbcfffffffffffffcffffffffffffffffffffffffffffffffffffffffff
                bbbbbbcfffffffffffffcffffffffffffffffffffffffffffffffffffffffff
                bbbbbbcfffffffffffffcffffffffffffffffffffffffffffffffffffffffff
                bbbbbbbcfffffffffffccffffffffffffffffffffffffffffffffffffffffff
                bbbbbbbccffffffffffcfffffffffffffffffffffffffffffffffffffffffff
                bbbbbbbbbbbccccccfcfffffffffffffffffffffffffffffffffffffffffffb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffffbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffffffffffffffbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffffffffbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                `)
        } else if (selectedIndex == 1) {
            Car_Display_Image.setImage(img`
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111665555666655555666655555555566666
                1111111111111111111111111111166ffffffffffffffffffffffffffffffff
                111111111111111111111111111556fffffffffffffffffffffffffffffffff
                111111111111111111111111156c5ffffffffffffffffffffffffffffffffff
                11111111111111111111111156cc5ffffffffffffffffffffffffffffffffff
                1111111111111111111111156ccc5ffffffffffffffffffffffffffffffffff
                111a11111111111111111156cccc5ffffffffffffffffffffffffffffffffff
                111c1111111111111111156ccccc5ffffffffffffffffffffffffffffffffff
                111ca11111111111111156cccccc5ffffffffffffffffffffffffffffffffff
                111cca111111111111156ccccccc5ffffffffffffffffffffffffffffffffff
                111ccccc11111111accafacccccc5ffffffffffffffffffffffffffffffffff
                111cccccaaaaaaaacffffffccccc5ffffffffffffffffffffffffffffffffff
                111ccccccccccccafffffffccccc5ffffffffff655555555555555555555555
                111ccccccccccccafffffffcccc55ff65555666555555555555555555555666
                111cc11cccc1111fffffffffccc556666666666555555555555555556666555
                111c1111cc11111aaaafffffcccf55555666666666655555666666665555666
                111c1111c11111156ccccfffffff55555556666666556655555555555555566
                11111111c1111156ccccccffffff55555556666666665556666666666666666
                11111111c111156cccccccccfffc5556555566666666ccccccccccccc666666
                11111111c11155cccccccccccffc5556555555666666cc5555cc5555cccc666
                1111111cc11566ccccccccccccccccc66655555656666cc55611c555cccccc6
                1111111cc15666665555555556cffffc66555555555666c556111656111c5cc
                1111111c556665555666555566cfffffc6656555555556cc5a6116611111c5c
                1111111556655566555556666cffcccffc6656655555556cc5a66a61111165c
                1115555655555555556666666cffffcfffc6556655555556cc5aa561111165c
                111c66555555555566556665cffffffcffc66556655555556ccc55a61116555
                111f6655556666666666665ccffcfffcffc666556655555556cccc5a666a655
                111fc66666655655666665cfcfcffffcfffc6665566555555555ccccccaa666
                111cc6666666666666555ccfcfcffffcfffc66665566655565555556ccccccc
                111cccc665555556556ccffccfccfffcffffffc665566665566655555566666
                11cfcccccccccccccccffffccfccfffcffffccccc6555666655666555555556
                1cfffccccccfffffffffffffffccffffffffcccccccc5556666555666665555
                1fcffccccccffffffffffffcffccffffffffcccccccccc65555665556666665
                cfcffcccccfffcccccccccccffcffffcfffffccccccccccc665555555556665
                cfcffccffcffccccccccccccffcffffffffffccccccccccccc6666665555555
                ffcffcfffffcccccccccccccfffffffffffffccccccccccccccccccc6666666
                cfcffcfffffccccccccccccfcffcfffcffffffccccccccccccccccccccccccc
                cffffcfffffccccccccccccfcfccfffcfffffffffcccccccccccccccccccccc
                ffffccfffffccccccccccccfcfccffcfffffcffffffffcccccccccccccccccc
                ffffccfffffccccccccccccfcfcccfccffffcfffffffffffffccccccccccccc
                cfffcffffffcccccccccccffcfcccfcffffffffffffffffffffffccccccfffc
                ffffcfffffffcccccccccccccfcccfccffffcfffffffffffffffffffccffffc
                cffccfffffffffcccccccccccfcccfccffffcfffffffffffffffffffffffffc
                cfccffffffffffffffffcccfcfcccfcfffffffffffffcffffffcfcccccfffff
                cccffffffffffccfffffffffcfcccfcffffcfffffffffcccfcfcfcccccfffff
                1ffffffffffffcccccffffffcfcccfcffffcfffffffcfffffcfcfcccccfffff
                ccffffffffffffccccccccffcfcccfcfffffffffffffcccffcfcfcccccfffff
                ccffffffffffffccccccccffcfccffcfffcfffffffcffffffcfcfccccccffff
                ccccfffffffffffcccccccffcffcffcfffcffffffffcccfffcfcfccccccffff
                accccccffffffffffcccccffcffcffcfffffffffcffffffffcfcfccccccffff
                aaaacccccccffffffffcccffccfffcfffcffffffffcccffffcfcfccccccffff
                6aaaaaacccccccffffffffcffcffcffffcfffffffffffffffcfcfffccccffff
                666aaaaaaaccccccfffffffcfccfcffcffffffffffffffffffffcffcccccfff
                666666aaaaaaccccccffffffffccffffcfffffffffffffffffcfcffcccccfff
                666666666aaaaaccccccfffffffffffffccfffffffffffffffcfcffcccccfff
                666666666666aaaaaccccffffffffffffffccfffffffffffffcfcffccccccff
                66666666666666aaaaaccccffffffffffffffcccfffffffffffffcffccccccc
                66666666666666666aaaacccffffffffffffffffcccffffffffcfcffccccccc
                666666666666666666aaaacccfffffffffffffffffffcccffffcffccffffccc
                66666666666666666666aaaacccfffffffffffffffffffccffcccccfcccffff
                6666666666666666666666aaaccccffffffffffffffffffffffffffffffcccc
                66666666666666666666666aaaaccccccffffffffffffffffffffffffffffff
                6666666666666666666666666aaaaccccccffffffffffffffffffffffffffff
                6666666666666666666666666666aaaccccccffffffffffffffffffffffffff
                66666666666666666666666666666aaaaaacccccccfffffffffffffffffffff
                66666666666666666666666666666666aaaaaaacccccccccccfffffffffffff
                66666666666666666666666666666666666aaaaaaaaaaaccccccccccccccccc
                666666666666666666666666666666666666666aaaaaaaaaaaaaaacccccccca
                666666666666666666666666666666666666666666aaaaaaaaaaaaaaaaaaaaa
                666666666666666666666666666666666666666666666666aaaaaaaaaaaaaa6
                666666666666666666666666666666666666666666666666666666666666666
                666666666666666666666666666666666666666666666666666666666666666
                666666666666666666666666666666666666666666666666666666666666666
                666666666666666666666666666666666666666666666666666666666666666
                666666666666666666666666666666666666666666666666666666666666666
                666666666666666666666666666666666666666666666666666666666666666
                666666666666666666666666666666666666666666666666666666666666666
                666666666666666666666666666666666666666666666666666666666666666
                666666666666666666666666666666666666666666666666666666666666666
                666666666666666666666666666666666666666666666666666666666666666
                666666666666666666666666666666666666666666666666666666666666666
                666666666666666666666666666666666666666666666666666666666666666
                666666666666666666666666666666666666666666666666666666666666666
                666666666666666666666666666666666666666666666666666666666666666
                666666666666666666666666666666666666666666666666666666666666666
                666666666666666666666666666666666666666666666666666666666666666
                666666666666666666666666666666666666666666666666666666666666666
                666666666666666666666666666666666666666666666666666666666666666
                `)
        } else if (selectedIndex == 2) {
            Car_Display_Image.setImage(img`
                333333333333333333333333333333333333333333333333333333333333333
                333333333333333333333333333333333333333333333333333333333333333
                333333333333333333333333333333333333333333333333333333333333333
                333333333333333333333333333333333333333333333333333333333333333
                333333333333333333333333333333333333333333333333333333333333333
                333333333333333333333333333333333333333333333333333333333333333
                333333333333333333333333333333333333333333333333333333333333333
                333333333333333333333333333333333333333333333333333333333333333
                333333333333333333333333333333333333333333333333333333333333333
                333333333333333333333333333333333333333333333333333333333333333
                333333333333333333333333333333333333333333333333333333333333333
                333333333333333333333333333333333333333333333333333333333333333
                333333333333333333333333333333333333333333333333333333333333333
                333333333333333333333333333333333333333333333333333333333333333
                333333333333333333333333333333333333333333333333333333333333333
                333333333333333333333333333333333333333333333333333333333333333
                333333333333333333333333333333333333333333333333333333333333333
                333333333333333333333fc3333333333333333333333333333333333333333
                333333333333333333333fc3333333333333333333333333333333333333333
                33333333333333333333ffc3333333333333333333333333333333333333333
                3333333333333333333cffc3333333333333333333333333333333333333333
                33333333333333333fccffcc333333333333333333333333333333333333333
                ffcccccf33333333cffffffccc3333333333333333333333333333333333333
                ffffffffccccffcccffffffffcc333333333333333333333333333333333333
                fffffffffffffffffffffafffffaeee43333333333333333333333333333333
                fffffffffffffffffffffaaffffaaccee443333333333333333333333333333
                fffffffffffaaacfffffffaaffffaacccce4433333333333333333333333333
                ffffffffaaaafffffffffffaaffffaacccccce4433333333333333333333333
                ffffffaaaaccffffffffffffaaffffaacccccccee4433333333333333333333
                ffffaaaccccccffffffffffffaaffffaaccccccccce44333333333333333333
                fffaacccccccccfffffffffffffffffffccccccccccce443333333333333333
                fffacccccccccccffffffffffffffffccccccccccccccce4433333333333333
                ffacccccccccccccfffffffffffffffffcccccccccccaaeee43333333333333
                ffaccccccccccccccffffffffffffffffffccccaaeeeeeccce4333333333333
                faaaacccccccccccccffffffffffffffffaaaeeeeccccccccce433333333333
                ccfaaaaaaaeeeeeecccfffffffffaaaaeeeeeffffffffcccccce43333333333
                ccfccccccaaaaaaeeeefffffeeeeeeeeffffffffffffffcccccce4333333333
                ccfffffccccccccaaaeeeeeeffffffffffffffffffffffffffccce433333333
                cccfcccffffcccccccaeeeffffffffffffffffffffffffffffcccce43333333
                cccffccccccffffccccaeeeffffffffffffffffffffffffffffcccce4333333
                cccfcfffcccccccffcccaeeeffffffffffffffffffffffffffffcccce433333
                cccfccccffffccccccccaeeefffffffffffffffffffffffffffffcccce43333
                fffffcccccccfffccccccaeeefffffffffffffffffffffffffffffcccee4333
                fffccfffcccccccffccccaeeeefffffffffffffffffffffffffffffcccee433
                ffffffccffccccccccccccaeeefffffffffffffffffffffffffffffccccee43
                fffffffffcfffcccccccccaeeeeffffffffffffffffffffffffffffffcccee4
                fffffffffffccfffccccccaeeeeffffffffffffffffffffffffffffffffccee
                fffffffffffffcccffcccccaeeeffffffffffffffffffffffffffcfffffffce
                ffffffffffffffffccfffcccaeeffffffffffffffffffffffffffffffccccce
                fffffffffffffffffffccffcaeeffffffffffffffffffffffffffcccccccfcc
                ffffffffffffffffffffffcccaeefffffffffffffffffffffcccccccfffffcc
                fffffffffffffffffffffffffaeeccccccfffffffffcccccccccccccfffd444
                ccfffffffffffffffffffffffffffffcccccccccccccccccccccccccccfd444
                cccccfffffffffffffffffffffff444444ccccccccffcccccccccccccccc444
                ffcccccffffffffffffffffffffff444444444444fffffcfffffffffffccc44
                ccffccccfffffffff44444cffffffff4444444444444fffffffffffffffffce
                44ccfffccccfffff44444444444444444444444444444ffffffffffffffffff
                ee44cccfffcccce4444444444444444444444444444444fffffffffffffffff
                eeee4cccccffccee444444444444444444444ffffffffffffffffffffffffff
                eeeee4ccccccffcee4444e4444444444444444fffffffffffffffffffffffff
                eeeeee4ccccfccccee4444ee444444444444444ffffffffffffffffffffffff
                eeeeeec44cccfccccee44444ee44444444444444fffffffffffffffffffffff
                eeeeefcffceccfccccee444444e44444444444444ffffffffffffffffffffff
                eeeeecfffffeccffcccf1ee4444ee4444444444444fffffffffffffffffffff
                eeeeecffccfcecccfccf11eee4444ee444444444444ffffffffffffffffffff
                eeeeecffffcfcecccfcfb11feee4444e44e4444444444ffffffffffffffffff
                eeeeecfffffcfcfcecfcfb11ffeee444ee4ee444444444444cfffffffffffff
                eeeeecfffffffcefcecccfb11fffeee444ee4e4444444444444444444444fff
                eeeeeffffffffceffcecccfb11ffffeee444e4ee44444444444444444444444
                eeeeecffcfffffceffcecccfb11fffffee444ee4ee444444444444444444444
                eeeeecffcfffffcefffcecccfb11ffffffee444ee4e44444444444444444444
                eeeeecffffffffceffffcccccfb11ffffffeee444e4ee44e444444444444444
                eeeeefffffffffcefffffccccfb111fffffffeee44ee4e44ee4444444444444
                eeeeecfffffffffcefffffccccfb111ffffffffeee44eeee44ee444ee444444
                ceeeefffcffffffc4ffffffecccfb111fffffffffee444e4ee44ee444eee444
                ceeeffffcffffffc4fffffffecccfb1111fffffffffeeee444e444ee4444ee4
                cceefffffffffffceffffffffecccfb1111fffffffffffeeeeeeeeeeeeee444
                ccceeffffcfffffcefffffffffecccfb1111fffffffffffffffffffffffeeee
                ccccecfffcfffffcceffffffffffcccfb111111ffffffffffffffffffffffff
                ccccccfffffffffccefffffffffffcccb11111111111fffffffffffffffffff
                ccccccffffcfffffc4ffffffffffffffb111111111111111fffffffffffffff
                ccccccffffffffffc4fffffffffffffffb111111111111111111111111111ff
                cccccccfffffffffc4fffffffffffffffb11111111bbbbbbbbbbbbbbbbbbbff
                cccccccfffffffffc4fffffffffffffffb1111bbbbfffffffffffffffffffff
                cccccccffffffffccefffffffffffffffb111bfffffffffffffffffffffffff
                ccccccccfffffffccefffffffffffffffb11bffffffffffffffffffffffffff
                cccccccccffffffcc4ffffffffffffffb11ffffffffffffffffffffffffffff
                cccccccccffffffcc4ffffffffffffffb1fffffffffffffffffffffffffffff
                ccccccccccfffffcefffffffffffffffbffffffffffffffffffffffffffffff
                cccccccccccfffcc4fffffffffffffffbfeffffffffffffffffffffffffffff
                cccccccccccccfcc4fffffffffffffffbffffffffffffffffffffffffffffff
                cccccccccccccce4fffffffffffffffbffefffffffffffffffffffffff44444
                cccccccccccccccc4f4fffffffffffffffeffffffffffffeee44444444eeeee
                cccccccccccccccccce44fffffffffffffefffffff44444444ffffffeeccccc
                cccccccccccccccccccee44fffffffffffffff4444eeeffffffffffeccccccc
                cccccccccccccccccccccee44fffffffffefffeeefffffffffffffecccccccc
                cccccccccccccccccccccccee4ffffffffeffffffffffffffffffeccccccccc
                ccccccccccccccccccccccccce44ffffffeefffffffffffffffeecccccccccc
                ccccccccccccccccccccccccccee44fffffeefffffffffffccccccccccccccc
                ccccccccccccccccccccccccccccee44ffffeeffffffeeccccccccccccccccc
                ccccccccccccccccccccccccccccccee4ffffffffeeeccccccccccccccccccc
                cccccccccccccccccccccccccccccccceccccceeecccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                `)
        } else if (selectedIndex == 3) {
            Car_Display_Image.setImage(img`
                777777777777777777777777777777777777777777777777777777777777777
                777777777777777777777777777777777777777777777777777777777777777
                777777777777777777777777777777777777777777777777777777777777777
                777777777777777777777777777777777777777777777777777777777777777
                777777777777777777777777777777777777777777777777777777777777777
                777777777777777777777777777777777777777777777777777777777777777
                777777777777777777777777777777777777777777777777777777777777777
                777777777777777777777777777777777777777777777777777777777777777
                777777777777777777777777777777777777777777777777777777777777777
                777777777777777777777777777777777777777777777777777777777777777
                777777777777777777777777777777777777777777777777777777777777777
                777777777777777777777777777777777777777777777777777777777777777
                777777777777777777777777777777777777777777777777777777777777777
                777777777777777777777777777777777777777777777777777777777777777
                777777777777777777777777777777777777777777777777777777777777777
                777777777777777777777777777777777777777777777777777777777777777
                777777777777777777777777777777777777777777777777777777777777777
                777777777777777777777777777777777777777777777777777777777777777
                777777777777777777777777777777777777777777777777777777777777777
                777777777777777777777777777777777777777777777777777777777777777
                777777777777777777777777777777777777777777777777777777777777777
                777777777777777777777777777777777777777777777777777777777777777
                777777777777777777777777777777777777777777777777777777777777777
                777777777777777777777777777777777777777777777777777777777777777
                777777777777777777777777777777777777777777777777777777777777777
                777777777777777777777777777777777777777777777777777777777777777
                777777777777777777777777777777777777777777777777777777777779999
                777777777777777777777777777777777777777777777777777777777997777
                777777777777777777777777777777777777777777777777777777779779999
                777777777777777777777777777777777777777777777777777777797997777
                77777777777777777777777777777777777777777777777777777797977dddd
                777777777777777779977777777777777777777777777777777779797ddaaaa
                77777777777777999779999777777777777777777777777777779797daccccc
                7777777777777977799777799777777777777777777777777779797dacfffff
                777777777777979997799997797777777777777777777777779797dacffffff
                77777777777979777dd7777997997777777777777777777779797dacfffffff
                77777777779797ddddddddd77977977777777777777777779797dacffffffff
                7777777779797dddd11dddddd79979977777777777777779797dacfffffffff
                777777799797ddd11dd111dddd779779777777777779999797dacffffffffff
                77777797797dd11dd1111111dddd799799777777779777797dacfffffffffff
                7777797997dd1dd11111111111ddd77977977777797997797daffffffffffff
                777797977dd1d11111111111111dddd79979999997977997dacffffffffffff
                7779797ddd1d11111111111111111ddd77977777797aa777dccffffffffffff
                779797dd11d1111111111111111111dddd79999997cccdddaccffffffffffff
                779797d1d1111111111111111111111dddd7777777cccccccccffffffffffff
                79797dd1d11111111111111111111111dccdddddddcc1ddddddd1cfffffffff
                79797dd1d1111111111111111111dcccccc1111111111111111111ddddfffff
                9797dd1d111111111111111111dcccccccc111111111111111111111ddddfff
                9797d1d11111111111111111ddccccccddd11111111111111111111111dd1ff
                9797d1d1111111111111111dccccccc1111111111111111111111111111ddff
                9797d1d111111111111111dcccccccd11d11111111111111111111111111dff
                9797d1d111111111111111ccccdddd1d1111111111111111111111111111111
                797dd1d1111111111111dcccdd111dd1111111111111111111111111111111d
                797dd1d1111111111111cccd11dd1111111111111111111111111111111111d
                797dd1d111111111111cccd11d111111111111111111111111111111111111d
                797dd1d1111111111ddccd1111111111111111111111111111111111111111d
                797d1d11111111111dcccd11111111191111111111111111111111111111ddd
                797d1d1111111111dccaaddda779999791119111111d1111111111111111ddd
                97dd1d111111111dccaaa111da7777799999791111d9d1111111111111111dd
                97dd1d11111111ddcaff1111dda77777777797999997911d91111111111111d
                97dd1d11111111dccafff111111aaaaa77777777777999997911d11111d1111
                97d1d111111111dcaafff11111111111aaaaaa777777777797a11dd1111d111
                97d1d111111111caafffff1111111111111111aaaaaa77777a11ddddd1ddddd
                97d1d11111111ccaaffffffd11111111111111111111aaaaa11111ddd111ddd
                97d1d1111111dcaaffffffffadddd1111111111111111111111111111111111
                97d1d111111dcaafffffffffafffdddddddd111111111111111111111111111
                97d1d111111dcfffffffffffafffffaffffcdddddd1111111111ddddddddddd
                77d1d11111dccaffffffffffafffffaffafcaccccccdddddd1cccccccccccaf
                b7d1d11111ccfafffcffffffafffffaafaccaacccccccccccccccccccccccaf
                bbd1d1111dccfafffcffffffafffffaaffccaacccccccccccffffffffffffaf
                bbd1d111dcccfaffffffffffafffffaaffccaaccccfccccccccccffffffffaf
                bad11111dccffaffffcffffffffffaafafccaaacccffcccccccccccccccfaff
                aad1111dccfffaafffcffffffaaffaafaccaaaaccffffcccccccccccccccaff
                cadd11ddccccccaffffcfffffffaaafffccaaaaacfffffcccccccccccccafff
                ccdd11dccfffcccafffcffffffffaffffccaaaaaaccfffffffffffffffcafff
                cccd11dcfffffcccaffffffffffffffaccaaaaaaaaccccffffffffffffaffff
                acccddccffffffccafffffffffffaffaccaaaaaaaaaaaaaaaaaaaaaaaafffff
                aaccddcffffffffccfffffffffffffffccaafffffffffffffffffffffffffff
                aaacddcfffffffffcaafffffffffffafccacccccccccccccccccccccccccccc
                aaaacccffffffffffcacaaacaacaaaacccccccfffffffffffffffffffffffff
                acccccaffffffffffffccccccccccccffffffffffffffffffffffffffffffff
                ccccccbffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                cccccccbfffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffccccbfffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffcafabbfffffffffffffffffffffffffabbaffffffffffffffffffffff
                ffffffccfccafacafbabbbbafffffffffffffcccaffffffffabbaffffffffff
                88fffffffcccfcccfccccccafaaaaaabbbbbaacccffabbbbbcccaffffffaabb
                778baafffffffcccfcccccccfccccccccccccacccffcccccaccccfaabbbcccb
                887888abbaffffffffffffffffffffffffffffffffffffffffffffccccacccc
                7787778888abbbbbaaabfffffffffffffffffffffffffffffffffffffffffff
                88788877778888888888aabbbbbbaabaabaaaabbbbbaabbbbbfffffffffffff
                88877788887777777777888888888888888888888888888888abbbbaabbbfff
                88888877778888888888777777777777777777777777777777888888888abbb
                888888888877777777778888888888888888888888888888887777777778888
                888888888888888888887777777777777777777777777777778888888887777
                888888888888888888888888888888888888888888888888887777777778888
                888888888888888888888888888888888888888888888888888888888887777
                888888888888888888888888888888888888888888888888888888888888888
                888888888888888888888888888888888888888888888888888888888888888
                888888888888888888888888888888888888888888888888888888888888888
                888888888888888888888888888888888888888888888888888888888888888
                888888888888888888888888888888888888888888888888888888888888888
                888888888888888888888888888888888888888888888888888888888888888
                888888888888888888888888888888888888888888888888888888888888888
                888888888888888888888888888888888888888888888888888888888888888
                888888888888888888888888888888888888888888888888888888888888888
                888888888888888888888888888888888888888888888888888888888888888
                888888888888888888888888888888888888888888888888888888888888888
                888888888888888888888888888888888888888888888888888888888888888
                888888888888888888888888888888888888888888888888888888888888888
                888888888888888888888888888888888888888888888888888888888888888
                888888888888888888888888888888888888888888888888888888888888888
                888888888888888888888888888888888888888888888888888888888888888
                888888888888888888888888888888888888888888888888888888888888888
                888888888888888888888888888888888888888888888888888888888888888
                888888888888888888888888888888888888888888888888888888888888888
                888888888888888888888888888888888888888888888888888888888888888
                888888888888888888888888888888888888888888888888888888888888888
                `)
        } else if (selectedIndex == 4) {
        	
        }
    })
    miniMenu.onButtonPressed(myMenu2, miniMenu.Button.A, function (selection, selectedIndex) {
        if (selectedIndex == 0) {
            music.play(music.createSoundEffect(WaveShape.Triangle, 298, 305, 202, 255, 20, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
            color.startFade(color.originalPalette, color.Black, 300)
            color.pauseUntilFadeDone()
            sprites.destroy(myMenu2)
            sprites.destroy(Car_Display_Image)
            color.startFade(color.Black, color.originalPalette, 300)
            Load_Menu_Road_Cars()
        } else if (selectedIndex == 1) {
            music.play(music.createSoundEffect(WaveShape.Triangle, 298, 305, 202, 255, 20, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
            color.startFade(color.originalPalette, color.Black, 300)
            color.pauseUntilFadeDone()
            sprites.destroy(myMenu2)
            sprites.destroy(Car_Display_Image)
            color.startFade(color.Black, color.originalPalette, 300)
            Load_Menu_Sports_Cars()
        } else if (selectedIndex == 4) {
            music.play(music.createSoundEffect(WaveShape.Triangle, 298, 305, 202, 255, 20, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
            color.startFade(color.originalPalette, color.Black, 300)
            color.pauseUntilFadeDone()
            sprites.destroy(myMenu2)
            sprites.destroy(Car_Display_Image)
            color.startFade(color.Black, color.originalPalette, 300)
            Load_Menu()
        } else if (selectedIndex == 2) {
            music.play(music.createSoundEffect(WaveShape.Triangle, 298, 305, 202, 255, 20, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
            color.startFade(color.originalPalette, color.Black, 300)
            color.pauseUntilFadeDone()
            sprites.destroy(myMenu2)
            sprites.destroy(Car_Display_Image)
            color.startFade(color.Black, color.originalPalette, 300)
            Load_Menu_Hyper_Cars()
        } else if (selectedIndex == 3) {
            music.play(music.createSoundEffect(WaveShape.Triangle, 298, 305, 202, 255, 20, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
            color.startFade(color.originalPalette, color.Black, 300)
            color.pauseUntilFadeDone()
            sprites.destroy(myMenu2)
            sprites.destroy(Car_Display_Image)
            color.startFade(color.Black, color.originalPalette, 300)
            Load_Menu_Protoype_Cars()
        }
    })
}
function Start2 () {
    mySprite = sprites.create(img`
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        `, SpriteKind.ui)
    animation.runImageAnimation(
    mySprite,
    [img`
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        `,img`
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        `,img`
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        `,img`
        ................................................................................................................................................................
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        `,img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ................................................................................................................................................................
        ................................................................................................................................................................
        `,img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `],
    150,
    false
    )
    mySprite.setPosition(80, 60)
    mySprite.setFlag(SpriteFlag.RelativeToCamera, true)
    myTextSprite = fancyText.create("3", 0, 1, fancyText.italic_small)
    myTextSprite.setFlag(SpriteFlag.RelativeToCamera, true)
    myTextSprite.setPosition(80, 60)
    myTextSprite.z = 150
    mySprite.z = 150
    timer.after(1000, function () {
        animation.runImageAnimation(
        mySprite,
        [img`
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            `,img`
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            `,img`
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            `,img`
            ................................................................................................................................................................
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            `,img`
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ................................................................................................................................................................
            ................................................................................................................................................................
            `,img`
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            `],
        150,
        false
        )
        fancyText.setText(myTextSprite, "2")
        timer.after(1000, function () {
            animation.runImageAnimation(
            mySprite,
            [img`
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                `,img`
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                `,img`
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                `,img`
                ................................................................................................................................................................
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                `,img`
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ................................................................................................................................................................
                ................................................................................................................................................................
                `,img`
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                `],
            150,
            false
            )
            fancyText.setText(myTextSprite, "1")
            timer.after(1000, function () {
                sprites.destroy(mySprite)
                sprites.destroy(myTextSprite)
                RaceStarted = true
            })
        })
    })
}
function PitFunction (Sprite2: Sprite, playernumber: number) {
    if (Game_Staretd) {
        Sprite2.vx = 0
        Sprite2.vy = 0
        Sprite2.setFlag(SpriteFlag.GhostThroughWalls, false)
        if (Track_Number == 1) {
            timer.background(function () {
                spriteutils.moveToAtSpeed(Sprite2, spriteutils.point(283, 245), 30, true)
                spriteFx.smoothRotate(Sprite2, 114, 500)
                if (Night) {
                    multilights.flashlightSourceAttachedTo(Sprite2).direction = spriteFx.rotation(Sprite2) + 180
                }
                if (playernumber == 1) {
                    spriteFx.smoothRotate(Sprite2, 111, 500)
                    spriteutils.moveToAtSpeed(Sprite2, spriteutils.point(281, 236), 20, true)
                    spriteFx.smoothRotate(Sprite2, 90, 300)
                    spriteutils.moveToAtSpeed(Sprite2, spriteutils.point(295, 205), 20, true)
                } else if (playernumber == 2) {
                    spriteFx.smoothRotate(Sprite2, 90, 2000)
                    spriteutils.moveToAtSpeed(Sprite2, spriteutils.point(295, 159), 30, true)
                } else if (playernumber == 3) {
                    spriteFx.smoothRotate(Sprite2, 90, 2000)
                    spriteutils.moveToAtSpeed(Sprite2, spriteutils.point(295, 115), 30, true)
                } else if (playernumber == 4) {
                    spriteFx.smoothRotate(Sprite2, 90, 2000)
                    spriteutils.moveToAtSpeed(Sprite2, spriteutils.point(295, 71), 30, true)
                }
                if (playernumber == 1) {
                    timer.after(1000, function () {
                        Open_Pit_Menu()
                    })
                } else {
                    timer.after(randint(4000, 10000), function () {
                        Sprite2.setFlag(SpriteFlag.GhostThroughWalls, false)
                        PitFunction2(Sprite2, playernumber)
                    })
                }
            })
        } else if (Track_Number == 2) {
            timer.background(function () {
                spriteFx.smoothRotate(Sprite2, 180, 1000)
                spriteutils.moveToAtSpeed(Sprite2, spriteutils.point(480, 255), 30, true)
                if (Night) {
                    multilights.flashlightSourceAttachedTo(Sprite2).direction = spriteFx.rotation(Sprite2) + 180
                }
                if (playernumber == 1) {
                    spriteutils.moveToAtSpeed(Sprite2, spriteutils.point(563, 233), 30, true)
                } else if (playernumber == 2) {
                    spriteutils.moveToAtSpeed(Sprite2, spriteutils.point(643, 233), 30, true)
                } else if (playernumber == 3) {
                    spriteutils.moveToAtSpeed(Sprite2, spriteutils.point(723, 233), 30, true)
                } else if (playernumber == 4) {
                    spriteutils.moveToAtSpeed(Sprite2, spriteutils.point(803, 233), 30, true)
                }
                if (playernumber == 1) {
                    timer.after(1000, function () {
                        Open_Pit_Menu()
                    })
                } else {
                    timer.after(randint(4000, 10000), function () {
                        Sprite2.setFlag(SpriteFlag.GhostThroughWalls, false)
                        PitFunction2(Sprite2, playernumber)
                    })
                }
            })
        } else {
            timer.background(function () {
                spriteFx.smoothRotate(Sprite2, 127, 1000)
                spriteutils.moveToAtSpeed(Sprite2, spriteutils.point(83, 44), 30, true)
                if (Night) {
                    multilights.flashlightSourceAttachedTo(Sprite2).direction = spriteFx.rotation(Sprite2) + 180
                }
                if (playernumber == 1) {
                    spriteFx.smoothRotate(Sprite2, 180, 1000)
                    spriteutils.moveToAtSpeed(Sprite2, spriteutils.point(114, 41), 30, true)
                } else if (playernumber == 2) {
                    spriteFx.smoothRotate(Sprite2, 180, 1000)
                    spriteutils.moveToAtSpeed(Sprite2, spriteutils.point(146, 41), 30, true)
                } else if (playernumber == 3) {
                    spriteFx.smoothRotate(Sprite2, 180, 1000)
                    spriteutils.moveToAtSpeed(Sprite2, spriteutils.point(178, 41), 30, true)
                } else if (playernumber == 4) {
                    spriteFx.smoothRotate(Sprite2, 180, 1000)
                    spriteutils.moveToAtSpeed(Sprite2, spriteutils.point(210, 41), 30, true)
                }
                if (playernumber == 1) {
                    timer.after(1000, function () {
                        Open_Pit_Menu()
                    })
                } else {
                    timer.after(randint(4000, 10000), function () {
                        Sprite2.setFlag(SpriteFlag.GhostThroughWalls, false)
                        PitFunction2(Sprite2, playernumber)
                    })
                }
            })
        }
    }
}
function SportsCarsStats () {
    SportsCarImages = [
    img`
        ....................
        ....................
        ....................
        ....................
        .......c............
        ...ccffcccccccffc1..
        .1c22333223333223a2.
        11223133322333333ac2
        c2223113232223323aff
        c2223113232223323aff
        c2223113232223323aff
        11223133322333333ac2
        .1c22333223333223a2.
        ...ccffcccccccffc1..
        .......c............
        ....................
        ....................
        ....................
        ....................
        `,
    img`
        ....................
        ....................
        ....................
        ....................
        ..f....c..........f.
        .f1ccffcccccccffc.ff
        f1cee4444e4444ee4ec2
        1cee411444e444444e22
        ceee411144eee44e4eff
        ceee411114eee44e4eff
        ceee411144eee44e4eff
        1cee411444e444444e22
        f1eee4444e4444ee4ec2
        .f1ccffcccccccffc.ff
        ..f....c..........f.
        ....................
        ....................
        ....................
        ....................
        `,
    img`
        ....................
        ....................
        ....................
        ....................
        .......c..........f.
        ..cccffcccccccffccff
        .c1bb1111b1111bb1afc
        cc1b199111b111111af2
        cbbb199911bbb11b1af2
        cbbb199991bbb11b1aff
        cbbb199911bbb11b1af2
        cc1b199111b111111af2
        .c1bb1111b1111bb1afc
        ..cccffcccccccffccff
        .......c..........f.
        ....................
        ....................
        ....................
        ....................
        `,
    img`
        ....................
        ....................
        ....................
        ...................f
        .......c........ffff
        ..14cffcccccccffcfff
        .14665555655556656c.
        fc6651155565555556c2
        c6665111556665565622
        c66651111566655656ff
        c6665111556665565622
        fc6651155565555556c2
        .14665555655556656c.
        ..14cffcccccccffcfff
        .......c........ffff
        ...................f
        ....................
        ....................
        ....................
        `,
    img`
        ....................
        ....................
        ....................
        ....................
        .......8............
        ...88ff8888888ff81..
        .186655566555566582.
        116651555665555558c2
        866651156566655658ff
        866651156566655658ff
        866651156566655658ff
        116651555665555558c2
        .186655566555566582.
        ...88ff8888888ff81..
        .......8............
        ....................
        ....................
        ....................
        ....................
        `,
    img`
        ....................
        ....................
        ....................
        ....................
        .......c..........f.
        ..cccffcccccccffccff
        .c1ee4444e4444ee4afc
        cc1e4cc444e444444af2
        ceee4ccc44eee44e4af2
        ceee4cccc4eee44e4aff
        ceee4ccc44eee44e4af2
        cc1e4cc444e444444af2
        .c1ee4444e4444ee4afc
        ..cccffcccccccffccff
        .......c..........f.
        ....................
        ....................
        ....................
        ....................
        `,
    img`
        ....................
        ....................
        ....................
        ....................
        ..f....c..........f.
        .f1ccffcccccccffc.ff
        f1cbb1111b1111bb1bc2
        1cbb199111b111111b22
        cbbb199911bbb11b1bff
        cbbb199991bbb11b1bff
        cbbb199911bbb11b1bff
        1cbb199111b111111b22
        f1bbb1111b1111bb1bc2
        .f1ccffcccccccffc.ff
        ..f....c..........f.
        ....................
        ....................
        ....................
        ....................
        `,
    img`
        ....................
        ....................
        ....................
        ...................f
        .......c........ffff
        ..15cffcccccccffcfff
        .15223333233332232c.
        fc2231133323333332c2
        c2223111332223323222
        c22231111322233232ff
        c2223111332223323222
        fc2231133323333332c2
        .15223333233332232c.
        ..15cffcccccccffcfff
        .......c........ffff
        ...................f
        ....................
        ....................
        ....................
        `
    ]
}
function HyperCarsStats () {
    HyperCarImages = [
    img`
        ....................
        ....................
        ....................
        ..................cf
        ...ffaafff...faaffff
        .cc33affc2ccc2aff22f
        c1333332222222cc22c3
        c1333ffffcc2222222c3
        c33af11bbffcc2222ccf
        c33af111111fffffffff
        c33af11bbffcc2222ccf
        c1333ffffcc2222222c3
        c1333332222222cc22c3
        .cc33affc2ccc2aff22f
        ...ffaafff...faaffff
        ..................cf
        ....................
        ....................
        ....................
        `,
    img`
        ....................
        ....................
        ....................
        ....................
        ...ffaafff...faafff2
        .aa55affc6c.c6aff662
        a1155556666666cc66cf
        a1555ffffcc6666666cf
        c55af11bbffcc6666ccf
        c55af11111ffffffffff
        c55af11bbffcc6666ccf
        a1555ffffcc6666666cf
        a1155556666666cc66cf
        .aa55affc6c.c6aff662
        ...ffaafff...faafff2
        ....................
        ....................
        ....................
        ....................
        `,
    img`
        ....................
        ....................
        ....................
        ..................ff
        ....faafff...faaffff
        .cac9affcc.cc7aff77a
        c919999777c777cc77c2
        a1999ffffcc7777777c2
        c99afb11bffcc7777ccf
        c99affb11bffffffffff
        c99afb11bffcc7777ccf
        a1999ffffcc7777777c2
        c919999777c777cc77c2
        .cac9affcc.cc7aff77a
        ....faafff...faaffff
        ..................ff
        ....................
        ....................
        ....................
        `,
    img`
        ....................
        ....................
        ....................
        ..................c2
        ...ffaafff...faaffff
        .aa14affceccceaffeef
        a114444eeeeeeeccfec2
        a1444ffffcceeecfeec2
        c44aff1bbffcccfeeccf
        c44afb111bbfffeeeeef
        c44aff1bbffcccfeeccf
        a1444ffffcceeecfeec2
        a114444eeeeeeeccfec2
        .aa14affceccceaffeef
        ...ffaafff...faaffff
        ..................c2
        ....................
        ....................
        ....................
        `,
    img`
        ....................
        ....................
        ....................
        ..................cf
        ...ffaafff...faaffff
        .cc11affcbcccbaffbbf
        c211111bbbbbbbccbbc3
        c2111ffffccbbbbbbbc3
        c11af11bbffccbbbbccf
        c11af111111fffffffff
        c11af11bbffccbbbbccf
        c2111ffffccbbbbbbbc3
        c211111bbbbbbbccbbc3
        .cc11affcbcccbaffbbf
        ...ffaafff...faaffff
        ..................cf
        ....................
        ....................
        ....................
        `,
    img`
        ....................
        ....................
        ....................
        ..................cf
        ...ffaafff...faaffff
        .ccbbaffcacccaaffaa2
        c11bbbbaaaaaaaccaac2
        c1bbbffffccaaaaaaac2
        cbbaf11bbffccaaaaccf
        cbbaf111111fffffffff
        cbbaf11bbffccaaaaccf
        c1bbbffffccaaaaaaac2
        c11bbbbaaaaaaaccaac2
        .ccbbaffcacccaaffaa2
        ...ffaafff...faaffff
        ..................cf
        ....................
        ....................
        ....................
        `,
    img`
        ....................
        ....................
        ....................
        ..................ff
        ....faafff...faaffff
        .caceaffcc.ccaaffaaa
        ca1eeeeaaacaaaccaac2
        a1eeeffffccaaaaaaac2
        ceeafb11bffccaaaaccf
        ceeaffb11bffffffffff
        ceeafb11bffccaaaaccf
        a1eeeffffccaaaaaaac2
        ca1eeeeaaacaaaccaac2
        .caceaffcc.ccaaffaaa
        ....faafff...faaffff
        ..................ff
        ....................
        ....................
        ....................
        `,
    img`
        ....................
        ....................
        ....................
        ..................c2
        ...ffaafff...faaffff
        .cc77affc8ccc8aff88f
        c9777778888888cc88c2
        c9777ffffcc8888888c2
        c77af11bbffcc8888ccf
        c77af111111fffffffff
        c77af11bbffcc8888ccf
        c9777ffffcc8888888c2
        c9777778888888cc88c2
        .cc77affc8ccc8aff88f
        ...ffaafff...faaffff
        ..................c2
        ....................
        ....................
        ....................
        `
    ]
}
function Load_Menu_Sports_Cars () {
    Main_Menu_Open = false
    Info_Menu_Open = false
    Car_Menu_Open = true
    SportMenuOpen = true
    myMenu2 = miniMenu.createMenu(
    miniMenu.createMenuItem("Ferrovia 0"),
    miniMenu.createMenuItem("Aurex GT"),
    miniMenu.createMenuItem("Rivaro P50"),
    miniMenu.createMenuItem("Solvante A"),
    miniMenu.createMenuItem("Back")
    )
    myMenu2.setPosition(31, 38)
    Car_Display_Image = sprites.create(img`
        1111111111111111111111111111111111111111111111111aaabaabbaaaaaa
        11111111111111111111111111111111111111111ababaabbbbbbbbbbbbbbbb
        111111111111111111111111111111111111abbaabbbbbbbbbbbbbbbfffffff
        1111111111111111111111111111111aaaabbbbbbbbbbbfffffffffffffffff
        11111111111111111111111111111abbbbbbbbfffffffffffffffffffffffff
        1111111111111111111111111111abbffffffffffffffffffffffffffffffff
        111111111111111111111111111abffffffffffffffffffffffffffffffffff
        11111111111111111111111111abfffffffffffffffffffffffffffffffffff
        1111111111111111111111111abffffffffffffffffffffffffffffffffffff
        1111111111111111111111111abffffffffffffffffffffffffffffffffffff
        111111111111111111111111abfffffffffffffffffffffffffffffffffffff
        11111111111111111111111abffffffffffffffffffffffffffffffffffffff
        11111111111111111111111bbffffffffffffffffffffffffffffffffffffff
        1111111111111111111111bbfffffffffffffffffffffffffffffffffffffff
        111111111111111111111bbffffffffffffffffffffffffffffffffffffffff
        111111111111111111111bbffffffffffffffffffffffffffffffffffffffff
        11111111111111111111bbfffffffffffffffffffffffffffffffffffffffff
        1111111111111ffc1111bbffffffffffffffffffffffffffffffffffffffffa
        11111111111fffff111bbfffffffffffffffffffffffffffffaaaaaaaaaaaaa
        111111111fffccfff11bbffffffffffffffffffaaaaaaaaaaaaaaaaaaaaaaaa
        111111111fccccccfabbfffffffaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbb
        111111111cffffccaaaaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        1111111111cffcaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        111111111111abbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        11111111111abbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        1111111111abbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        111111111abbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        11111111abbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        1111111abbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        111111abbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        11111abbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbaabbbaa
        1111aabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbabaaaaaaabbaaaaaaaac1
        1111abbbbbbbbbbbbbbbbbbbbbabaaaabaaaaaaaaaacccccccccccccccccc11
        111abbbbaaaaaaaaaaaaaaccccccccccccccccccccccccffffffffffccccc11
        111abbbacc1cccc111cccaacccfffffffffffffffffffffffffffffffcaccc1
        111abbbac111cc11111cccaacffffffffffffffffffffffffffffffffcacccc
        111abbbacc1ccc11111ccccacffffffffffffffffffffffffffffffffcaaaaa
        111abbbbaaaaccc111cccccacfffffffffffffffffffffffffffffffccaaaaa
        11aabbbbbbbbaaaaaaacccaacfffffffffffffffffffffffffffffcccaaaaaa
        11aabbbbbbbbbbbbbbbaaaaaccffffffffffccccccccccccccccccaaaaaaaaa
        11abbbbbbbbbbbbbbbbbbbaaacccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaa
        11abbbbbbbbbbbbbbbbbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaccaacccccccccc
        11aaaaabbbbbbbbbbbbaaaaaaaaaacaaacaccaabbbbbbbbbbbbbbaaaaaaaaaa
        11aacaabbbbbbbbbbbaaaaaaaaaccbbbbbbbbbbbbbbbbbbbbbbbbaaaaaaaaaa
        11aafaaaaabbbbbbbaaaaaaaaaaacbbbbbbbbbbbbbbbbbbbbbbbbcfffffffff
        11aafaaaaaaaaaaaaaaaaaaaaaaacbbbbbbbbbbbbbbbbbbbbbbbbafffffffff
        11aafcaaaaaafaaaaaaaafffffffabbbbbbbbbbbbcaaaacccaaaaafffffffff
        11aafcaaaaaaffffffffffffffffaccaaaccaaaaaafffffffffffffcfffffff
        11aafcaaaaaffcccffffffffffffffffffffffffccccccccccccccfcfccccff
        11aaffaaaaffcccccfffcccccfcfccccccccccccfffffffffffffffcfffffff
        11aacfaaaaffcccccfffffffffcfffffffffffffccccccccccccccfcfccccff
        11aacfaaafffcccccfffcccccfcfccccccccccccfffffffffffffffffffffff
        111acfaaaffffcccffffffffffcffffffffffffffffffffffffffffcfffffff
        111accaaafffffffffffffffffcffffffffffffffffffffffffffffffffffff
        111acccccffffffffffffffffffffffffffffffffffffffffffffffffffffff
        111acccccfffffffffffffffffcffffffffffffffffffffccccccccfccccccc
        111aacccccaffffffffffffffffffffcccccccfcccccccfffffffffffffffff
        1111aaaaaaaacccfccfcfccccccccffffffffffffffffffffffffffffffffff
        1111111aaaacffffffffcffffffffffffffffffffffffffffffffffffffffff
        111111cfffffffffffffcffffffffffffffffffffffffffffffffffffffffff
        111111cfffffffffffffcffffffffffffffffffffffffffffffffffffffffff
        111111cfffffffffffffcffffffffffffffffffffffffffffffffffffffffff
        1111111cfffffffffffccffffffffffffffffffffffffffffffffffffffffff
        1111111ccffffffffffcfffffffffffffffffffffffffffffffffffffffffff
        11111111111ccccccfcffffffffffffffffffffffffffffffffff1111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        `, SpriteKind.ui)
    Car_Display_Image.setPosition(128, 60)
    miniMenu.setMenuStyleProperty(myMenu2, miniMenu.MenuStyleProperty.Width, 93)
    miniMenu.setMenuStyleProperty(myMenu2, miniMenu.MenuStyleProperty.Columns, 1)
    miniMenu.setStyleProperty(myMenu2, miniMenu.StyleKind.Default, miniMenu.StyleProperty.Margin, 3)
    miniMenu.setStyleProperty(myMenu2, miniMenu.StyleKind.Default, miniMenu.StyleProperty.Background, -1)
    miniMenu.setStyleProperty(myMenu2, miniMenu.StyleKind.Default, miniMenu.StyleProperty.Foreground, -5)
    miniMenu.setStyleProperty(myMenu2, miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Background, 4)
    miniMenu.setStyleProperty(myMenu2, miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Foreground, 1)
    miniMenu.setStyleProperty(myMenu2, miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Border, 1)
    miniMenu.onSelectionChanged(myMenu2, function (selection, selectedIndex) {
        music.play(music.createSoundEffect(WaveShape.Triangle, 298, 0, 255, 255, 20, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        if (selectedIndex == 0) {
            scene.setBackgroundImage(img`
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                `)
            Car_Display_Image.setImage(img`
                111111111111111111111111111111111111111111111111122232233222222
                111111111111111111111111111111111111111112323223333333333333333
                11111111111111111111111111111111111123322333333333333333fffffff
                1111111111111111111111111111111222233333333333fffffffffffffffff
                11111111111111111111111111111233333333fffffffffffffffffffffffff
                1111111111111111111111111111223ffffffffffffffffffffffffffffffff
                11111111111111111111111111123ffffffffffffffffffffffffffffffffff
                1111111111111111111111111123fffffffffffffffffffffffffffffffffff
                111111111111111111111111123ffffffffffffffffffffffffffffffffffff
                111111111111111111111111123ffffffffffffffffffffffffffffffffffff
                11111111111111111111111123fffffffffffffffffffffffffffffffffffff
                1111111111111111111111122ffffffffffffffffffffffffffffffffffffff
                1111111111111111111111123ffffffffffffffffffffffffffffffffffffff
                111111111111111111111123fffffffffffffffffffffffffffffffffffffff
                11111111111111111111123ffffffffffffffffffffffffffffffffffffffff
                11111111111111111111123ffffffffffffffffffffffffffffffffffffffff
                111111111111ffff111123fffffffffffffffffffffffffffffffffffffffff
                11111111111ffffc111133ffffffffffffffffffffffffffffffffffffffff2
                111111111fffffff11133fffffffffffffffffffffffffffff2222222222222
                111111111fffccfff1133ffffffffffffffffff222222222222222222222222
                111111111fccccccf233fffffff222222222222222333333333333333333333
                1111111111111fcc22222333333333333333333333333333333333333333333
                111111111111112233333333333333333333333333333222222333333333333
                111111111111233333333333333333333222222333332fffff2333333333333
                111111111112333333333333333333332fffff233332fffff23333333333333
                11111111112333333333333333333332fffff23333222222233333333333333
                111111111233333333333333333333222222233333333333333333333333333
                111111112333333333333333333333333333333333333333333333333333333
                111111123333333333333333333333333333333333333333333333333333333
                111111233333333333333333333333333333333333333333333333333333333
                111112333333333333333333333333333333333333333333333333332233322
                111122333333333333333333333333333333333333232222222332222222222
                111123333333333333333333332322223222222222222222222222222211111
                111233332333333223322222222222222222222222222222222222222222111
                111233321111111111233333222222222222222222222222222222222222222
                111233321111111111111111122222222222222222222222222222222222222
                111233322111111111111112222222222222222222222222222222222222222
                111233332221111111122222222222222222222222222222222222222222222
                111233333332222222222222222222222222222222222222222222222222222
                111233333333333333322222222222222222222222222222222222ccccccccc
                1113333333333333333333222222222222222222ccccccccccccccccccccccc
                111333333333333333333aaaaaaaaaaaaaaaccccccccccccccccccfffffffff
                111333332aaaaaccccaaccccccccccccccccccccffffffffffffff222222222
                111333332aaaaaaacccccfffffffffffffffffff22222222222222222222222
                111332222ffffffffffff222222222222222222222222222222222fffffffff
                1113322222222222222222222222222222222222fffffffffffffffffffffff
                111322222222222222222ffffffffffffffffffffffffffffffffffffffffff
                11133222222222222fffffffffffffff3fffffff2ffffffffffffffffffffff
                1111322222222222ffffffffffffffff2fffffff2ffffffffffffffffffffff
                1111332222222222ffffffffffffffff2fffffff2ffffffffffffffffffffff
                1111132222222222ffffffffffffffff3fffffff2ffffffffffffffffffffff
                1111132222222222ffffffffffffffff3fffffff2ffffffffffffffffffffff
                111113322222222fffffffffffffffff3fffffff2ffffffffffffffffffffff
                111111322222222fffffffffffffffff3fffffff2ffffffffffffffffffffff
                11111132222222ffffffffffffffffff3fffffff2ffffffffffffffffffffff
                1111111322222fffffffffffffffffff2fffffff2ffffffcccccccccccccccc
                111111112222fffffffffffffffffffa3aaaacca2cccccfffffffffffffffff
                11111111222aaaaaaaaaaaaaaccccfff2fffffff2ffffffffffffffffffffff
                11111112222affffffffcfffffffffff2ffffffffffffffffffffffffffffff
                1111111322222fffffffcfffffffffffffffffffffffffffffffffffffff222
                111111133322222222222ffffffffffffffffff222222222222222222222222
                1111111333322222222222222222222222222ff222222222222222222222222
                1111111333333322222222222222222222222ff222222222222222222222222
                11111ffffffff333333322222222222222222ff222222222222222222222fff
                111ffffffffffffffffff3333332332322222ffffffffffffffffffffffffff
                11fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                11111ffffffffffffffffffffffffffffffffffffffffffffffffffffffff11
                111111fffffffffffffffffffffffffffffffffffffffffffffff1111111111
                1111111fffffffffffffffffffffffffffffffffffffff11111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                `)
            CarType = "Sport1"
        } else if (selectedIndex == 1) {
            Car_Display_Image.setImage(img`
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                11111111111111111111111111111111111111111cccccccccfcccfccfcffff
                11111111111111111111111111ccccccfcccfcfffffffffffffffffffffffff
                1111111111111111111111ccccffffffffffffffff1111111d4ddd444dddddd
                1111111111111111111111ccffff111111111111ddddddd4444444444444444
                11111111111111111111111ffff1111111ddddd44fccccccfffffcccccccccc
                11111111111111111111111fff11111dd44ffffffffffffffffffffffffffff
                11111111111111111111111ff1111dd4fffffffffffffffffffffffffffffff
                111111111111111111111111f11d44cffffffffffffffffffffffffffffffff
                111111111111111111111111f144cffffffffffffffffffffffffffffffffff
                111111111111111111111111f44cfffffffffffffffffffffffffffffffffff
                111111111111111111111111444cfffffffffffffffffffffffffffffffffff
                11111111111111111111111444cffffffffffffffffffffffffffffffffffff
                1111111111111111111111d44cfffffffffffffffffffffffffffffffffffff
                111111111111111111111d44cffffffffffffffffffffffffffffffffffffff
                11111111111111111111144cfffffffffffffffffffffffffffffffffffffff
                11111111111111ffff1144cffffffffffffffffffffffffffffffffffffffff
                1111111111111ffffc1144cfffffffffffffffffffffffffffffffffffffff4
                11111111111fffffff144cffffffffffffffffffffffffffff4eeeeeeeee444
                11111111111fffccfff44ffffffffffffffffff4eeeeeeeeeee444444444444
                11111111111fccccccf4cffffff44444eeeeeee4ee444444444444444444444
                111111111111111fcc4444444444444444444444444ddddddddddddddddddd4
                1111111111111114444ddddddddddddddddddd4444dfffffffffffffffffffd
                11111111111111d444dfffffffffffffffffffd444dffffffffffffffffffe4
                1111111111111d44444effffffffffffffffffd4444effffffffffffffffe44
                111111111111dd444444effffffffffffffffe444444effffffffffffeee444
                11111111111d444444444eeeffffffffffffe44444444eeffffffffee444444
                1111111111d4444444444444eeffffffffee44444444444effffeee44444444
                111111111d4444444444444444eeeffffe44444444444444eeee44444444444
                11111111dd4444444444444444444eeee44444444444444444444444ee444ee
                1111111d4444444444444444444444444444444444e4ee4444e44eeeeeeeeee
                111111d4444444444444444444e4eeee4e444444444444eeeeeeeeee444eeee
                111114444444444ee44eeeeeeeeeeeeeeeeeeeeeeee444444eeeeeeeeeeeeee
                1111441ffff1eeeeeeeee444eeeeeeeeeeeeeeeeeeeee4444eeeeeeeeeeeeee
                11114411fff111ffeeeeeeeeeeeeeeeeeeeeeeee444444eeeeeeeeeeeeeeff1
                111144411ff111ff1eeeeeeeeeeeeeeeeee444444444eeeeeeeeeeeeeeefff1
                1114444411ff11ff1fffeeeeeeeeee44444444444eeeeeeeeeeeeeeeeefff11
                111444444111111111fffeeeeeeeeeeeeee44444eeeeeeeeeeeeeeeffffff11
                111444444444444411ffffeeeeeeee44444444444444eeeeeeeeeeffffff114
                111444444444444441fffffffeeeeeeeeeeeeeee4444444444eeee444444444
                111d4444444444444411ffffffeeeeeeeeeeeeeeeeeee444444eeeeeeeeeeee
                111d4444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeee444444eeeeeeeeeeeeeeeeee
                111d4444eeeeeeeeeeeeeeeeeeeeeeeeeeeeee44444444444eeeeeeeeeeeeee
                111d4eeeeeeeeeeeeeeeeeeeeeeeeeee444444444444444eeeeeeeeeeeeeeee
                11144eeeeeee44eeeeeeeeeeeee44444eeeeeeeeeeee444eeee4444ee4444d4
                111deeeeeeeeff44eeeeeeeee444444444444e4444444e4444444444444dd4f
                111d44eeeeecffffff4444444eeee444444e444444444ddddddddddddddffff
                111d44eeeeeccfffffcfffff44444e444ddddddddddd4dddddeeffffffcffff
                1114444eeeeccfffffcfffffffffffcccccccccccccccfffffffffffffcffff
                1114444eeeecccffffcffffffffffcccccccccccccccccffffffffffffcffff
                1114444eeeecccffffcffffffffffcccccccccccccccccffffffffffffcffff
                1114d444eeeecccfffcffffffffffcccccccccccccccccffffffffffffcffff
                111ddd44eeeeccccffcffffffffffccccccccccccccccffffffffffffffcfff
                111ddd44eeecccccffcffffffffffccccccccccccccccffffffffffffffcfff
                1111d444eeecccccccfffffffffffcccccccccccccccfffffffffffffffcffc
                11114444eeeeecccccffffffffffffcccccccccccffffffffffffffffffcccc
                1111144444eeeeeeecfffffffffffeeeeeeeeeeeeeeeeeeeeeeeeefffffcccc
                11111144444e444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                1111111444444444444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                11111ffffffff444444444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefff
                111ffffffffffffffffff444444e44e4eeeeeffffffffffffffffffffffffff
                11fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                11111ffffffffffffffffffffffffffffffffffffffffffffffffffffffff11
                111111fffffffffffffffffffffffffffffffffffffffffffffff1111111111
                1111111fffffffffffffffffffffffffffffffffffffff11111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                `)
            CarType = "Sport2"
        } else if (selectedIndex == 2) {
            Car_Display_Image.setImage(img`
                1111111111111111111111111111111111111111111111111aaaaaaaaaaaaaa
                11111111111111111111111111111111111111111aaaaaaaa11111111111111
                111111111111111111111111111111111111bbbbb111111111111111fffffff
                1111111111111111111111111111111bbbbb1111111111fffffffffffffffff
                11111111111111111111111111111bb1111111fffffffffffffffffffffffff
                1111111111111111111111111111bb1ffffffffffffffffffffffffffffffff
                111111111111111111111111111b1ffffffffffffffffffffffffffffffffff
                11111111111111111111111111b1fffffffffffffffffffffffffffffffffff
                1111111111111111111111111b1ffffffffffffffffffffffffffffffffffff
                1111111111111111111111111b1ffffffffffffffffffffffffffffffffffff
                111111111111111111111111b1fffffffffffffffffffffffffffffffffffff
                11111111111111111111111bbffffffffffffffffffffffffffffffffffffff
                11111111111111111111111b1ffffffffffffffffffffffffffffffffffffff
                1111111111111111111111b1fffffffffffffffffffffffffffffffffffffff
                111111111111111111111b1ffffffffffffffffffffffffffffffffffffffff
                111111111111111111111b1ffffffffffffffffffffffffffffffffffffffff
                11111111111111111111b1fffffffffffffffffffffffffffffffffffffffff
                11111111111111111111b1ffffffffffffffffffffffffffffffffffffffffb
                1111111111111ffff11b1fffffffffffffffffffffffffffffbbbbbbbbbbbbb
                111111111111ffffc11b1ffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbb
                1111111111fffffff11bfffffffbbbbbbbbbbbbbbb111111111111111111111
                1111111111fffccfff1b1111111111111111111111111111111111111111111
                1111111111fccccccfb111111111111111111111111bbbbbbbbb11111111111
                11111111111111fccb1111111111111bbbbbbbbb1111bcccccb111111111111
                111111111111111bb111111111111111bcccccb1111bcccccb1111111111111
                11111111111111b1111111111111111bcccccb1111bbbbbbb11111111111111
                1111111111111b1111111111111111bbbbbbb1111b11111b1111111111111aa
                111111111111b1111111111111111b11111b1111b11111b1111111111111abb
                11111111111b1aaaa11111111111b11111b111111111111111111111111ab11
                1111111111b1abbbba1111111111111111111111111111111111111111ab111
                111111111b1ab11111a1111111111111111111111111111111111111bba1111
                11111111b1ab111111a11111111111111111111111b1bbbbbbb11bbbbbc1111
                1111111c1a11111111c1111111b1bbbb1bbbbbbbbbbbbbbbbbbbbbbbbba1111
                1111111c1c1111111babbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcb111
                111111c1c11111111ba11111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcb111
                111111cc111111111bc111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbb11
                11111c1c111111111bc1111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbb
                11111c11c1111111bbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcc
                11111c11cbbbbbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                1111c1111accaacc111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                1111c11111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11b111
                111ca1111111111111111bbbbbbb1111111bbbbbbbb111111111111111111ab
                111c1a11111111111111111111111111111111111111111111111111aaaaabb
                111c11aa11111111111111111111111111111111111111111111bbaaabbbbbb
                111c111aaabbbaaa11111111111111111111111111111111bbaabbbbbbbbbbb
                111c111bbbbbbb11abbbb11aaaaaaaaabbbaaaaaaabbbaaaaabbbbbbbbbbbbf
                111c11bbbbbbbbbb11111111bb11111111bbbbbb111111111bbbbbbbbbbbbff
                111c1bbbbbbbbffbbb11111bbbbbbbbb1111bbbb1111111bbbbbbbbbbbbffff
                111c1bbbbbbbffffbbb1111bbbbbbbbbbb1111b11111111bbbbbbbbbbffffff
                111c1bbbbbbfffffffbb11bbbbbbbbbbbbbb1111111111bbbbbbbbbbfffffff
                111c1bbbbbffffffffffbbbbbbbbbbbbbbbbb111111111bbbbbbbbbffffffff
                111c1bbbbffffffffffffbbbbbbbbbbbbbbb1111111111bbbbbbbbfffffffff
                111c1bbbffffffffffffffbbbbbbbbbbbbb11111111111bbbbbbfffffffffff
                111c1bbffffffffffffffffbbbbbbbbbbbb111111111111bbbbbfffffffffff
                111c1bfffffffffffffffffffbbbbbbbbb1111111111111bbbbbfffffffffff
                111c1bfffffffffffffffffffbbbbbbbbb11111111111111bbbbbffffffffff
                111cbbfffffffffffffffffffbbbbbbbb111111111111111bbbbbffffffffff
                111c1fffffffffffffffffffbbbbbbbbb1111111111111111bbbbbfffffffff
                111c1fffffffffffffffffffbbbbbbbb1111111111111111111bbbbffffffff
                111c1bbffffffffffffffffbbbbbbbb1111111111111111111111bbbbbbbbbb
                1111c1bbbbbbbbbfffffffbbbbbbbbb11111111111111111111111111bbbbbb
                11111c11111bbbbbbbbbbbbbbbbbbb111111111111111111111111111111111
                111111ccccccc111111bbbbbbbbb11111111111111111111111111111111ccc
                11111ffffffffcccccccc1111111111111111c1111111111111111111111cff
                111ffffffffffffffffffcccccccccccccccccccccccccccccccccccccccfff
                11fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                11111ffffffffffffffffffffffffffffffffffffffffffffffffffffffff11
                111111fffffffffffffffffffffffffffffffffffffffffffffff1111111111
                1111111fffffffffffffffffffffffffffffffffffffff11111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                `)
            CarType = "Sport3"
        } else if (selectedIndex == 3) {
            Car_Display_Image.setImage(img`
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111fffffffffffffffffffffff
                1111111111111111111111111ffffffffffffffffffffffffffffffffffffff
                111111111111111111fffffffffffffffffffffffcccccccccfcccfccfcffff
                11111111111111111fffffffffccccccfcccfcfffffffffffffffffffffffff
                111111111111111111111fccccffffffffffffffff111111166666555666666
                111111111111111111111fccffff11111111111166666665555555555555555
                1111111111111111111111fffff11111116666655fccccccfffffcccccccccc
                1111111111111111111111ffff111116655ffffffffffffffffffffffffffff
                1111111111111111111111fff1111665fffffffffffffffffffffffffffffff
                11111111111111111111111ff11655cffffffffffffffffffffffffffffffff
                11111111111111111111111ff165cffffffffffffffffffffffffffffffffff
                11111111111111111111111ff55cfffffffffffffffffffffffffffffffffff
                11111111111111111111111f655cfffffffffffffffffffffffffffffffffff
                11111111111111111111111655cffffffffffffffffffffffffffffffffffff
                1111111111111111111111655cfffffffffffffffffffffffffffffffffffff
                111111111111111111111655cffffffffffffffffffffffffffffffffffffff
                11111111111111111111155cfffffffffffffffffffffffffffffffffffffff
                11111111111111ffff1155cffffffffffffffffffffffffffffffffffffffff
                1111111111111ffffc1155cffffffffffffffffffffffffffffffffffffffff
                11111111111fffffff155cfffffffffffffffffffffffffffffffffffffffff
                11111111111fffccfff55ffffffffffffffffffffffffffffffffffffffffff
                11111111111fccccccf5cffffffffffffffffff556666666666666556666555
                111111111111111fcc65fffffff555555666666655555555555555555566655
                111111111111111666555566666666665556665555555555555555566655555
                111111111111116655556666666666656665555555555555555555555666655
                111111111111166665565555555555555555555555555555555555555555565
                111111111111666555555555555555555555555555555555555555555555555
                111111111116665555555555555555555555555555555555555555555555555
                111111111165555555555555555555555555555555555555555556666655555
                111111111665555555555555555555555555555555555555666655556666665
                111111116655555555566665556665666666655555555555555555666555666
                111111166555566666555555555666655555555556666555666666655666666
                111111666555566666666666666555555555555555555555555555566666666
                111115555555666666666666666655566666666666656666655556666666666
                111156144444666666666666666666655555555555566555566666666666666
                111165114444444446666666666666666666666666666666666666666666444
                111165511444444444666666666666666666666666666666666666666664444
                111655551111111444466666666655566666666666666666666666666644441
                111655555111111111111166666666655555566666666666666666611111111
                111666555555555111111116666666665555666666666666666666111111115
                111aaa655555555556666666666666666666555566666666666666555555555
                111aaabbbb55555555666666666666656665555666666666666666666666666
                111aaaaaaaabbbbbbbb55555556666655555555555555556656555566555555
                111bbaaaaaaaaaabbbbbbbbbbbbb66666666666666655555555555556bbbbba
                111bbaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbaabbbbbaaaaaaaaaa
                111bbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                111baaaaaaaaffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                111bbbaaaaacffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffff
                111bbbaaaaaccfffffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaafffffffffff
                111bbbbaaaaccfffffffffffffffffcffffffffffffffffcfffffffffffffff
                111bbbbaaaacccffffffffffffffffccccccccccccccccccfffffffffffffff
                111bbbbaaaaccccfffffffffffffffcffffffffffffffffcffffffffffffffc
                111bbbbbaaacccccffffffffffffffcfccccccccccccccfcfffffffffffffcc
                111bbbbbaaaccccccfffffffffffffcffffffffffffffffcffffffffffffccc
                111bbbbbaaacccccccffffffffffffcffccccccccccccffcfffffffffffcccc
                1111bbbbaaacccccccccffffffffffcffffffffffffffffcfffffffffcccccc
                1111bbbbbbbaaccccccccfffffffffcfffcccccccccffffcffffffffccccccc
                11111bbbbbbbaaaaaccccffffffffaaaaaaaaaaaaaaaaaaaaaaaaaffccccaaa
                111111bbbbbbbbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                1111111bbbbbbbbbbbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                11111ffffffffbbbbbbbbbaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbabbabafff
                111fffffffffffffffffbbbbbbbbbbbbaaaaaffffffffffffffffffffffffff
                11fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                11111ffffffffffffffffffffffffffffffffffffffffffffffffffffffff11
                111111fffffffffffffffffffffffffffffffffffffffffffffff1111111111
                1111111fffffffffffffffffffffffffffffffffffffff11111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                `)
            CarType = "Sport4"
        } else if (selectedIndex == 4) {
            CarType = "None"
        }
    })
    miniMenu.onButtonPressed(myMenu2, miniMenu.Button.A, function (selection, selectedIndex) {
        if (selectedIndex == 0) {
            if (SportCar1Unlocked) {
                PlayerSpecs(95, 125, 0.99, 1, SportsCarImages[0])
                music.play(music.createSoundEffect(WaveShape.Triangle, 298, 305, 202, 255, 20, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
                Carname = "Ferrovia 0"
            } else {
                if (125 <= Money) {
                    Money += -125
                    SportCar1Unlocked = true
                    PlayerSpecs(95, 125, 0.99, 1, SportsCarImages[0])
                    Carname = "Ferrovia 0"
                } else {
                    music.play(music.createSoundEffect(WaveShape.Noise, 2899, 1844, 221, 168, 20, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
                }
            }
        } else if (selectedIndex == 1) {
            if (SportCar2Unlocked) {
                PlayerSpecs(90, 120, 0.99, 2.5, SportsCarImages[1])
                music.play(music.createSoundEffect(WaveShape.Triangle, 298, 305, 202, 255, 20, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
                Carname = "Aurex GT"
            } else {
                if (150 <= Money) {
                    Money += -150
                    SportCar2Unlocked = true
                    PlayerSpecs(90, 120, 0.99, 2.5, SportsCarImages[1])
                    Carname = "Aurex GT"
                } else {
                    music.play(music.createSoundEffect(WaveShape.Noise, 2899, 1844, 221, 168, 20, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
                }
            }
        } else if (selectedIndex == 2) {
            if (SportCar3Unlocked) {
                PlayerSpecs(95, 125, 0.97, 0.5, SportsCarImages[2])
                music.play(music.createSoundEffect(WaveShape.Triangle, 298, 305, 202, 255, 20, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
                Carname = "Rivaro P50"
            } else {
                if (275 <= Money) {
                    Money += -275
                    SportCar3Unlocked = true
                    PlayerSpecs(95, 125, 0.97, 0.5, SportsCarImages[2])
                    Carname = "Rivaro P50"
                } else {
                    music.play(music.createSoundEffect(WaveShape.Noise, 2899, 1844, 221, 168, 20, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
                }
            }
        } else if (selectedIndex == 3) {
            if (SportCar4Unlocked) {
                PlayerSpecs(100, 115, 0.995, 0.55, SportsCarImages[3])
                music.play(music.createSoundEffect(WaveShape.Triangle, 298, 305, 202, 255, 20, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
                Carname = "Solvante A"
            } else {
                if (400 <= Money) {
                    Money += -400
                    SportCar4Unlocked = true
                    PlayerSpecs(100, 115, 0.995, 0.55, SportsCarImages[3])
                    Carname = "Solvante A"
                } else {
                    music.play(music.createSoundEffect(WaveShape.Noise, 2899, 1844, 221, 168, 20, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
                }
            }
        } else if (selectedIndex == 4) {
            music.play(music.createSoundEffect(WaveShape.Triangle, 298, 305, 202, 255, 20, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
            color.startFade(color.originalPalette, color.Black, 300)
            color.pauseUntilFadeDone()
            sprites.destroy(myMenu2)
            sprites.destroy(Car_Display_Image)
            color.startFade(color.Black, color.originalPalette, 300)
            Load_Menu_Cars()
        }
    })
}
function Load_Menu_Protoype_Cars () {
    Main_Menu_Open = false
    Info_Menu_Open = false
    Car_Menu_Open = true
    ProtoMenuOpen = true
    myMenu2 = miniMenu.createMenu(
    miniMenu.createMenuItem("RedlightPsr"),
    miniMenu.createMenuItem("2027 LM"),
    miniMenu.createMenuItem("Banned LM"),
    miniMenu.createMenuItem("BlueSky 27"),
    miniMenu.createMenuItem("Back")
    )
    myMenu2.setPosition(31, 38)
    Car_Display_Image = sprites.create(img`
        1111111111111111111111111111111111111111111111111aaabaabbaaaaaa
        11111111111111111111111111111111111111111ababaabbbbbbbbbbbbbbbb
        111111111111111111111111111111111111abbaabbbbbbbbbbbbbbbfffffff
        1111111111111111111111111111111aaaabbbbbbbbbbbfffffffffffffffff
        11111111111111111111111111111abbbbbbbbfffffffffffffffffffffffff
        1111111111111111111111111111abbffffffffffffffffffffffffffffffff
        111111111111111111111111111abffffffffffffffffffffffffffffffffff
        11111111111111111111111111abfffffffffffffffffffffffffffffffffff
        1111111111111111111111111abffffffffffffffffffffffffffffffffffff
        1111111111111111111111111abffffffffffffffffffffffffffffffffffff
        111111111111111111111111abfffffffffffffffffffffffffffffffffffff
        11111111111111111111111abffffffffffffffffffffffffffffffffffffff
        11111111111111111111111bbffffffffffffffffffffffffffffffffffffff
        1111111111111111111111bbfffffffffffffffffffffffffffffffffffffff
        111111111111111111111bbffffffffffffffffffffffffffffffffffffffff
        111111111111111111111bbffffffffffffffffffffffffffffffffffffffff
        11111111111111111111bbfffffffffffffffffffffffffffffffffffffffff
        1111111111111ffc1111bbffffffffffffffffffffffffffffffffffffffffa
        11111111111fffff111bbfffffffffffffffffffffffffffffaaaaaaaaaaaaa
        111111111fffccfff11bbffffffffffffffffffaaaaaaaaaaaaaaaaaaaaaaaa
        111111111fccccccfabbfffffffaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbb
        111111111cffffccaaaaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        1111111111cffcaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        111111111111abbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        11111111111abbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        1111111111abbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        111111111abbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        11111111abbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        1111111abbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        111111abbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        11111abbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbaabbbaa
        1111aabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbabaaaaaaabbaaaaaaaac1
        1111abbbbbbbbbbbbbbbbbbbbbabaaaabaaaaaaaaaacccccccccccccccccc11
        111abbbbaaaaaaaaaaaaaaccccccccccccccccccccccccffffffffffccccc11
        111abbbacc1cccc111cccaacccfffffffffffffffffffffffffffffffcaccc1
        111abbbac111cc11111cccaacffffffffffffffffffffffffffffffffcacccc
        111abbbacc1ccc11111ccccacffffffffffffffffffffffffffffffffcaaaaa
        111abbbbaaaaccc111cccccacfffffffffffffffffffffffffffffffccaaaaa
        11aabbbbbbbbaaaaaaacccaacfffffffffffffffffffffffffffffcccaaaaaa
        11aabbbbbbbbbbbbbbbaaaaaccffffffffffccccccccccccccccccaaaaaaaaa
        11abbbbbbbbbbbbbbbbbbbaaacccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaa
        11abbbbbbbbbbbbbbbbbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaccaacccccccccc
        11aaaaabbbbbbbbbbbbaaaaaaaaaacaaacaccaabbbbbbbbbbbbbbaaaaaaaaaa
        11aacaabbbbbbbbbbbaaaaaaaaaccbbbbbbbbbbbbbbbbbbbbbbbbaaaaaaaaaa
        11aafaaaaabbbbbbbaaaaaaaaaaacbbbbbbbbbbbbbbbbbbbbbbbbcfffffffff
        11aafaaaaaaaaaaaaaaaaaaaaaaacbbbbbbbbbbbbbbbbbbbbbbbbafffffffff
        11aafcaaaaaafaaaaaaaafffffffabbbbbbbbbbbbcaaaacccaaaaafffffffff
        11aafcaaaaaaffffffffffffffffaccaaaccaaaaaafffffffffffffcfffffff
        11aafcaaaaaffcccffffffffffffffffffffffffccccccccccccccfcfccccff
        11aaffaaaaffcccccfffcccccfcfccccccccccccfffffffffffffffcfffffff
        11aacfaaaaffcccccfffffffffcfffffffffffffccccccccccccccfcfccccff
        11aacfaaafffcccccfffcccccfcfccccccccccccfffffffffffffffffffffff
        111acfaaaffffcccffffffffffcffffffffffffffffffffffffffffcfffffff
        111accaaafffffffffffffffffcffffffffffffffffffffffffffffffffffff
        111acccccffffffffffffffffffffffffffffffffffffffffffffffffffffff
        111acccccfffffffffffffffffcffffffffffffffffffffccccccccfccccccc
        111aacccccaffffffffffffffffffffcccccccfcccccccfffffffffffffffff
        1111aaaaaaaacccfccfcfccccccccffffffffffffffffffffffffffffffffff
        1111111aaaacffffffffcffffffffffffffffffffffffffffffffffffffffff
        111111cfffffffffffffcffffffffffffffffffffffffffffffffffffffffff
        111111cfffffffffffffcffffffffffffffffffffffffffffffffffffffffff
        111111cfffffffffffffcffffffffffffffffffffffffffffffffffffffffff
        1111111cfffffffffffccffffffffffffffffffffffffffffffffffffffffff
        1111111ccffffffffffcfffffffffffffffffffffffffffffffffffffffffff
        11111111111ccccccfcffffffffffffffffffffffffffffffffff1111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111
        `, SpriteKind.ui)
    Car_Display_Image.setPosition(128, 60)
    miniMenu.setMenuStyleProperty(myMenu2, miniMenu.MenuStyleProperty.Width, 93)
    miniMenu.setMenuStyleProperty(myMenu2, miniMenu.MenuStyleProperty.Columns, 1)
    miniMenu.setStyleProperty(myMenu2, miniMenu.StyleKind.Default, miniMenu.StyleProperty.Margin, 3)
    miniMenu.setStyleProperty(myMenu2, miniMenu.StyleKind.Default, miniMenu.StyleProperty.Background, -1)
    miniMenu.setStyleProperty(myMenu2, miniMenu.StyleKind.Default, miniMenu.StyleProperty.Foreground, -5)
    miniMenu.setStyleProperty(myMenu2, miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Background, 4)
    miniMenu.setStyleProperty(myMenu2, miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Foreground, 1)
    miniMenu.setStyleProperty(myMenu2, miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Border, 1)
    miniMenu.onSelectionChanged(myMenu2, function (selection, selectedIndex) {
        music.play(music.createSoundEffect(WaveShape.Triangle, 298, 0, 255, 255, 20, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        if (selectedIndex == 0) {
            scene.setBackgroundImage(img`
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                `)
            Car_Display_Image.setImage(img`
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111fffffb11111111111111111
                111111111111111111111111111111111111111fffffff11111111111111111
                1111111111111111ffffffffffffffffffffff1fffffffbffffffffffffffff
                111111111111111ffffffffccccccfffffcccc1fffffffbccccfffccccffccc
                111111111111111fffffffcccccccfffbbbbbbbbbbbbbbbaaaaaaaafffffccc
                11111111111111111fffffc1111111bbbbbffffffffffffffffffbba111111c
                111111111111111111fff1c1111111bbbfffffffffffffffffffffbba11111c
                1111111111111111111ff1ff11111bbbbffffffffffffffffffffffbba1111f
                1111111111111111111f11cf11111b11ffffffffffffffffffffffffbba111c
                1111111111111111111f11cccccf1b11ffffffffffffffffffffffffbbacccc
                1111111111111111111111fcccffb111ffffffffffffffffffffffffbbacccc
                1111111111abaaaabaaa1cffffffb11fffffffffffffffffffffffffbbbaccc
                111111111bb111111111bfffccccb11ffffffffffffffffffffffffffbbaccc
                11111111b111bbbbccc111fccccc111ffffffffffffffffffffffffffbbaccc
                1111111b111bbbbcccccc11ccccc111ffffffffffffffffffffffffffbbaccc
                1111111b11bbbbbbcccccc1ccccc111ffffffffffffffffffffffffffbbaccc
                1111111b11bbbbbbbccccc1ccccc11bcfffffffffffffffffffffffcbbbb111
                1111111b11bbbbbbbcccc11111bb111bccfffffffffffffffffffccbbbbb111
                1111111b11bbbbbbbcccccb111111111bcccccfcccccccfcccccccbbbb11111
                1111111b11bbbbbbbbbbcb11111111111bcccfffcccccfffccccbbbb1111111
                1111111b11bbbbbbbbbbbb111111111111bbcffffcccffffcbbbbb111111111
                111111b11111bbbbbbbbbb111111111111111bbbbb1bbbbbbbb111111111111
                111111b1111111bbbbbb111111111111111111111111111111111111111111b
                111111b11111111111111111111b1bbb11bbbbb11111111111bbbbbbbbbbbbb
                111111b1111111111111111111bbbbbbbbbbbbbbbbb11111111bbbbbbbb1111
                111111b11113311111111111111bbbbbbbbbbbbbbbbbb111111111111b11111
                111111b1111333333111111111bbbbbbbbbbbbbbbbbbbbb111111bbb1111111
                111111b111122333333331111111bbbbbbbbbbbbbbbbbbb1111111111111133
                111111b1111222222333333331111bbbbbb11111111111111bbb11111333333
                111111b111111222222223333333bbbbbbbbb111111111111bbbbb333333322
                111111b111111111122222222333bbbbbbbbbbb11111111111bbbb333222222
                111111b111111111111112222222bbbbbbbbbbbbb1111111bbbbbb222222211
                111111b11b11b111111bbbbbb222bbbbbbb1111111111bbbbbbbbb222bbbbbb
                111111b11bbbbbbbbbbbbb111111b111111111111bbbbbbbbbbbbbb11111111
                111111b11bbbb11111111111111111111111111111111111111bbbbbb111111
                111111b11bbbbcccccccccccccccccccccccccccccccccccccccccccccccccc
                111111b1bbbbccccccccccccccccccccccccccccccccccccccccccccccccccc
                1111111bbbbbccccccccfffccffcffffffffffffffffffffffffffffffccfff
                11111b1bbbbccccccccccfffccffcfffffffffffffffffffffffffcffccfffc
                1111b11bbbbccccccccccfffccffcfffffffffffffffffffffffffcffccfffc
                1111111bbbbcccccccccccfffccffcfffffffffffffffffffffffcffccfffcc
                111bbbbbbbbbfbbbfbbbbbbbbfbbbbbbbffbbbbbbbffbbbbbbbbfbbbbbbfbbb
                11111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                11fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                11fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                11111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                1111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                1111111111fffffffffffffffffffffffffffffffffffffffffffffffffffff
                1111111111111111ffffffffffffffffffffffffffffffffffffffffffffff1
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                `)
            CarType = "Proto1"
        } else if (selectedIndex == 1) {
            Car_Display_Image.setImage(img`
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111c11111111111111111111111111111111111111111111
                111111111111111111cc1111111111111111111111111111111111111111111
                111111111111111111cc1111111111111111111111111111111111111111111
                111111111111111111ccc111111111111111111111111111111111111111111
                111111111111111111cccc11111111111111111111111111111111111111111
                111111111111111111ccccccccccccccccccccccccccccccccccccccccccccc
                111111111111111111ccccccccccccccccccccccccccccccccccccccccccccc
                111111111111111111ccccccccccccccbbbbbbbbbbbbbbaaaaaaaaacccccccc
                111111111111111111ccccccc11111bbbffffffffffffffffffffffa111111c
                111111111111111111c1cccc111111bfffffffffffffffffffffffffa11111c
                111111111111111111111cc111111bbffffffffffffffffffffffffffa1111c
                111111111111111111111cc111111bffffffffffffffffffffffffffffa111c
                1111111111111111111111ccccc11bffffffffffffffffffffffffffffa1ccc
                1111111111111baaaa111cccccccbbffffffffffffffffffffffffffffacccc
                111111111111b11111a1cccccccc1fffffffffffffffffffffffffffffaaccc
                11111111111b111b11accccccccc1ffffffffffffffffffffffffffffffaccc
                1111111111b1111bcccbbcccccccbfffffffffffffffffffffffffffffcaccc
                111111111b11111ccccccbccccccbfffffffffffffffffffffffffffffcaccc
                11111111b11111bbcccccc1cccccbccffffffffffffffffffffffffffccaccc
                1111111b11111bbbbccccc1ccccc11bcfffffffffffffffffffffffcb1bbbb1
                1111111b111bbbbbbcccc1111111111bcfffffffffffffffffffffcb1111111
                1111111b11bb111bbcccccc111111111bcffffffffffffffffffccb11111111
                111111bb11bbbbb11bbbcb11111111111bccfffffffffffcccccbb111111111
                111111bbbb11111bbbbbbb111111111111bbfcccccffffcccbbb11111111111
                111111bccbbbbbb11111bbbbb1111111111111bbbbbbbbbbbb11111111111bb
                111111bcccb1111bbbbbbb111bbbb11111111111bbb1bbbbb111bbbbbb1111b
                111111b2ccbbbbb11111bbbbb1111bbbb11111111111111bbbbb111111bbbb1
                111111b22cccbbbbb1111111bbbbb1111bb111bbbbbbbbb11bbbbbbbbb11111
                111111b22cccccb11bbb111111111bbbb11bbb111111111bb11111111111111
                111111b22cccccccbb11bb1111111111bbbbbbbbbbbbbbbb11111111111bbbb
                111111b222ccccccccbb11bbbbb1111b11111bbbbbbbb11111111111bbbbbbb
                111111b22222cccccccccccccbbbbbbbbbbbbbbbb111111111111bbbbcccccc
                111111bf222222ccccccccccccc111bb111b11111111111111111bbcccccccc
                111111bff2222222cccccccccccc111bbbbbbbbbbb1111111111bbccccccccc
                111111aafff2222222ccccccccccc11111bbb11111b1111111bbbcccccccccc
                111111aabffff222222222222cccc111111bbbbbbbbbbbbbbbbbbcccc222222
                111111bbbaaffff222222222222cc111111111bb11111111111bbcc22222222
                11111b1bbaaaafffffffffffffffccccccccccccccccccccccccccccccccccc
                11111b11b1baaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                11111b11b1bbccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                11111b11b1bbcccffffffffffffffcffffffffffffffffffffffffcffffffff
                1111bb1b1bbccccccfcccfcccfcccccffffffffffffffffffffffcccccfcccf
                1111b11b1bbcccccccccccccccccccccccccccccccccccccccccccccccccccc
                111b111b1bbcccccccccccccccccccccccccccccccccccccccccccccccccccc
                111bbbbbbbbbfcccccccccccccccccccccccccccccccccccccccccccccccccc
                11111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                11fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                11fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                11111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                1111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                1111111111fffffffffffffffffffffffffffffffffffffffffffffffffffff
                1111111111111111ffffffffffffffffffffffffffffffffffffffffffffff1
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                `)
            CarType = "Proto2"
        } else if (selectedIndex == 2) {
            Car_Display_Image.setImage(img`
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                1111111111111111aaaaaaaaaaaaaaaaaacccbbbbbbabaaaaacaaaaaaaaaaaa
                1111111111111111aaaccaaaaaaacccccccccbbbaaaaaaaaaaccccccccccccc
                11111111111111111accccccccccccccbbbbbaaaaaaaaaaaaaaaaaacccccccc
                1111111111111111111cccccc11111bbbffffffffffffffffffffffa111111c
                11111111111111111111ccc1111111bfffffffffffffffffffffffffa11111c
                111111111111111111111cc111111baffffffffffffffffffffffffffa1111c
                111111111111111111111ccc11111bffffffffffffffffffffffffffffa111c
                1111111111111111111111acccc11affffffffffffffffffffffffffffa1ccc
                111111111111111111111accccccbaffffffffffffffffffffffffffffacccc
                11111111111111111111acccccccafffffffffffffffffffffffffffffaaccc
                11111111111bbbbaaaaaccccccccbffffffffffffffffffffffffffffffaccc
                1111111111baffffcccaacccccccaffffffffffffffffffffffffffffffaccc
                111111111baffffccccccacccccccffffffffffffffffffffffffffffffaccc
                11111111bbffcfffccccccfccccccffffffffffffffffffffffffffffffaccc
                1111111bafcccffffcccccfcccccfccfffffffffffffffffffffffffccccfff
                1111111bffccfffffccccffffffffffcfffffffffffffffffffffffcfffffff
                1111111afcccffccfcccccffffffffffcfffffffffffffffffffffcfffcccff
                1111111afccffccfffffcffffffffffffcffffffffffffffffffccfcccccccc
                1111111fccfffcfffffffccfffcccfffffccfffffffffffffcccffccccfcccc
                111111bfccfffffffffffcfffccccccfffffcccccccccccccfffffccffffccc
                111111bfcffcffffffffcffffffcccccccccffffffffffffffffffffccfffcc
                111111bffffcccffffccffffffcccccccccccccccccccffffffffffcccfffcc
                111111afccf11cccffffffffffccccfffcccccccccfffffffffffccccffffcc
                111111afccfff111ccfffffffcccccccfffffffffffffffffcccccccffffffc
                111111afcff11ffc111cccfffcccccccffffffffcccccccccccccccfffffffc
                111111afcff11111fff111ffffcccccccccccccccccccccccccffffffffff11
                111111ffcff11111111fff111fffffffffffcccccccccfffffffffffff111ff
                111111ffcffcc111111111fff11fffffffffffffffffffffffffffff11fff11
                111111ffffcffccc111111111fffccfffffffffffffffffccccccccfff11111
                111111fffccfffffccc11111111ffcccccccccccccccccccccccccff1111111
                111111bffccccffffffccc11111ffffcccccccccccccccccccccffff11111cc
                111111bfcfffffffffffffccc11fffffffffffffffffffffffffffff11cccff
                111111bccfffccccccccccccccccccccccccccccccccccccccccccccccccccc
                111111acccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                111111afffcbaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                111111acffcbaaacccaacaaacaaaccccccccccccccccccccccccccccaaacaaa
                11111accffaaaaaaacaaacaaacaaaccccccccccccccccccccccccccaaacaaac
                1111afccccaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                111aafffffaaaaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                111aacccccaafbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                11111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                11fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                11fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                11111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                1111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                1111111111fffffffffffffffffffffffffffffffffffffffffffffffffffff
                1111111111111111ffffffffffffffffffffffffffffffffffffffffffffff1
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                `)
            CarType = "Proto3"
        } else if (selectedIndex == 3) {
            Car_Display_Image.setImage(img`
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111888888888888888888899999999999998888888888888
                111111111111111118888888888888888888899999999999998888888888888
                111111111111111111888888888888889999999999997777997777788888888
                111111111111111111188881111111999999999999997777777777771111118
                111111111111111111118881111111999ffffffffffffffffffffff77111118
                11111111111111111111188111111999ffffffffffffffffffffffff7711118
                1111111111111111111118811111199ffffffffffffffffffffffffff771118
                1111111111111111111111888881199ffffffffffffffffffffffffff771888
                1111111111111111111118888888999ffffffffffffffffffffffffff778888
                111111111111111111118888888899fffffffffffffffffffffffffff777888
                11111111111bbbbabbba8888888899ffffffffffffffffffffffffffff77888
                1111111111bb1111777bb888888899ffffffffffffffffffffffffffff77888
                111111111bb1111777777b888888a7ffffffffffffffffffffffffffff77888
                11111111bb11b111777777188888a78fffffffffffffffffffffffffff77888
                1111111bb11b1111177777188888aaa8fffffffffffffffffffffff8771bbbb
                1111111b11b1111117777111bbbbb11b8fffffffffffffffffffff811bbb111
                1111111b1b1111111777777bbbbbbb11b8ffffffffffffffffff881bbb11111
                1111111b1b1b1111111171111bbb1bb11b88fffffffffffff888bbbbb111111
                11111111111b1111111111111bbb11bb11bb88888888888881bbbb111111111
                111111b11111bb11111111111111111bbb11bbbbbbbbbb1bbbb111111bbbb11
                111111b11b11111111111111111bb1111bb11111111111111111111bbb11bb1
                111111b11b1bbbbb111111111111bb1111bbbbbbbbbbbbbbbbb11bb1111bb11
                111111b11b111bbbbbb1111111111b1b11111111111111111111111111bbb11
                111111b11b711111bbbbbb111111111bbbbbbbbbbb111111111111111111111
                111111b11b777111111bbbbb111111111111111111111111111111111111bbb
                111111b11b799777111111bbb1111111111111111111111111111111111bbb1
                111111a1111779997771111b111111111111111111111111111111111111b11
                111111a11b11177799977711111bbbbbbbb1111111111111111111111111117
                111111b1119111117779997771111bbbbbbbbbbb111111111111111bb117779
                111111a119911111111777999771bbbbbbb11111bbbbbbb1111bbbb11779997
                111111b11999911111111177797111111111111111111111bbbbbbbbb797771
                111111b191111111bb1111111771111111111111111111111111111bb771111
                111111b99111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbb1111111111111111
                111111b99991188888888888888888888888888888888888888888888888888
                111111b11111998888888888888888888888888888888888888888888888888
                111111b91111999ff999ff99ff99f9ffffffffffffffffffffffff9f99ff999
                11111b99111999999f999f999f9999ffffffffffffffffffffffff9999f999f
                1111b1999919999999777777777777777777777777777777777777777777777
                1111b1111119999777777777777777777777777777777777777777777777777
                111bbbbbbbbbf77777777777777777777777777777777777777777777777777
                11111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                11fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                11fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                11111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                1111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                1111111111fffffffffffffffffffffffffffffffffffffffffffffffffffff
                1111111111111111ffffffffffffffffffffffffffffffffffffffffffffff1
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111
                `)
            CarType = "Proto4"
        } else if (selectedIndex == 4) {
            CarType = "None"
        }
    })
    miniMenu.onButtonPressed(myMenu2, miniMenu.Button.A, function (selection, selectedIndex) {
        if (selectedIndex == 0) {
            if (ProtoCar1Unlocked) {
                PlayerSpecs(155, 95, 0.999, 1.5, PrototypeCarImages[0])
                music.play(music.createSoundEffect(WaveShape.Triangle, 298, 305, 202, 255, 20, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
                Carname = "RedlightPsr"
            } else {
                if (1000 <= Money) {
                    Money += -1000
                    ProtoCar1Unlocked = true
                    PlayerSpecs(155, 95, 0.999, 1.5, PrototypeCarImages[0])
                    Carname = "RedlightPsr"
                } else {
                    music.play(music.createSoundEffect(WaveShape.Noise, 2899, 1844, 221, 168, 20, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
                }
            }
        } else if (selectedIndex == 1) {
            if (ProtoCar2Unlocked) {
                PlayerSpecs(150, 85, 0.999, 3, PrototypeCarImages[1])
                music.play(music.createSoundEffect(WaveShape.Triangle, 298, 305, 202, 255, 20, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
                Carname = "2027 LM"
            } else {
                if (1100 <= Money) {
                    Money += -1100
                    ProtoCar2Unlocked = true
                    PlayerSpecs(150, 85, 0.999, 3, PrototypeCarImages[1])
                    Carname = "2027 LM"
                } else {
                    music.play(music.createSoundEffect(WaveShape.Noise, 2899, 1844, 221, 168, 20, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
                }
            }
        } else if (selectedIndex == 2) {
            if (ProtoCar3Unlocked) {
                PlayerSpecs(155, 100, 0.99995, 0.65, PrototypeCarImages[2])
                music.play(music.createSoundEffect(WaveShape.Triangle, 298, 305, 202, 255, 20, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
                Carname = "Banned LM"
            } else {
                if (1200 <= Money) {
                    Money += -1200
                    ProtoCar3Unlocked = true
                    PlayerSpecs(155, 100, 0.99995, 0.65, PrototypeCarImages[2])
                    Carname = "Banned LM"
                } else {
                    music.play(music.createSoundEffect(WaveShape.Noise, 2899, 1844, 221, 168, 20, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
                }
            }
        } else if (selectedIndex == 3) {
            if (ProtoCar4Unlocked) {
                PlayerSpecs(160, 80, 0.99995, 0.75, PrototypeCarImages[3])
                music.play(music.createSoundEffect(WaveShape.Triangle, 298, 305, 202, 255, 20, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
                Carname = "BlueSky 27"
            } else {
                if (1300 <= Money) {
                    Money += -1300
                    ProtoCar4Unlocked = true
                    PlayerSpecs(160, 80, 0.99995, 0.75, PrototypeCarImages[3])
                    Carname = "BlueSky 27"
                } else {
                    music.play(music.createSoundEffect(WaveShape.Noise, 2899, 1844, 221, 168, 20, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
                }
            }
        } else if (selectedIndex == 4) {
            music.play(music.createSoundEffect(WaveShape.Triangle, 298, 305, 202, 255, 20, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
            color.startFade(color.originalPalette, color.Black, 300)
            color.pauseUntilFadeDone()
            sprites.destroy(myMenu2)
            sprites.destroy(Car_Display_Image)
            color.startFade(color.Black, color.originalPalette, 300)
            Load_Menu_Cars()
        }
    })
}
function Load_Menu2 () {
    Main_Menu_Open = false
    Info_Menu_Open = false
    Car_Menu_Open = false
    Custom_Menu_Open = false
    scene.setBackgroundImage(img`
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        `)
    mytextsprite2.setPosition(80, 3)
    myMenu2 = miniMenu.createMenu(
    miniMenu.createMenuItem("Freeplay", img`
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
        `),
    miniMenu.createMenuItem("Custom", img`
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
        `),
    miniMenu.createMenuItem("Back", img`
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
    )
    myMenu2.setPosition(46, 119)
    miniMenu.setMenuStyleProperty(myMenu2, miniMenu.MenuStyleProperty.Width, 150)
    miniMenu.setMenuStyleProperty(myMenu2, miniMenu.MenuStyleProperty.Rows, 1)
    miniMenu.setStyleProperty(myMenu2, miniMenu.StyleKind.Default, miniMenu.StyleProperty.Margin, 3)
    miniMenu.setStyleProperty(myMenu2, miniMenu.StyleKind.Default, miniMenu.StyleProperty.Background, -1)
    miniMenu.setStyleProperty(myMenu2, miniMenu.StyleKind.Default, miniMenu.StyleProperty.Foreground, -5)
    miniMenu.setStyleProperty(myMenu2, miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Background, 4)
    miniMenu.setStyleProperty(myMenu2, miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Foreground, 1)
    miniMenu.setStyleProperty(myMenu2, miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Border, 1)
    miniMenu.onSelectionChanged(myMenu2, function (selection, selectedIndex) {
        music.play(music.createSoundEffect(WaveShape.Triangle, 298, 0, 255, 255, 20, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        if (selectedIndex == 0) {
            scene.setBackgroundImage(img`
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999aacaaaaaaaaaaaaaa9999999999999999999999999999999999999999999999999999999999999999999
                99999999999999999999999999999999999999999999999999999999999999999999999999aaccaaaaacccaccaaaaaa99999999999999999999999999999999999999999999999999999999999999999
                99999999999999999999999999999999999999999999999999999999999999999999999acccccaaaaccccccccccccaaaae99999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999acccccaaaccccccccccccccccaae99999999999999999999999999999999999999999999999999999999999999
                999999999999999999999999999999999999999999994ee444ee999999999999999aaccacaaaacccccccccccccccccccaaee999999999999999999999999999999999999999999999999999999999999
                99999999999999999999999999999999999999999e4444eeeee449999999999999accccaaccccccccccccccccccccccccaaecccc444ee4e444eeee444e44444e99999999999999999999999999999999
                999999999999999999999999999999999999999e444eee4eeee4444499999999aaccccaaacccccccccccc444eeeeeeeeeeeeeeeeeeeee4eeeccceccecceceeee99999999999999999999999999999999
                9999999999999999999999999999999999999e4444444444ee44444ee999999cccacccccccccccccccc4444eeeeeeeeeeeeeeeeeeeeedee999999999999999ee999999999999999999999999999999bb
                9999999999999999999999999999999ccccce44444444444444444eee4eeeeeeeeeee444444eeeeccc44444444444444e4444eeeeeeeee9999cccc99999999e99999999999999999999999999999bbbb
                99999999999999999999999999999cccccce444444444444444444ee44444444eeeee4444444eeeee444444444444444444444ee44444eeeeeee4444eebb99e999999999999999bb99999bbbbbbbbbbb
                999999999999999999999999999ccccccee444444444444444eeee44444444444eeeeee44444444eeeeeeeeeee444444eeeee444444444eeeee44444eecbbb9999999999999999bbbbbbbbbbbbbbbbbb
                99999999999999999999999999cccccee44444444444444444eee44444444eeeeee4444444444eecccffccaaa444444eecccc4444444eeee4444444eeeecbbbbbbbbb99999999bbbbbbbbbbbbbbbbbbb
                999999999999999999999999ccccce444444444444444444eee444444444eeeeeee444444eeecccffffffa4eee44444eccffc4c4444444444444444eececbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                9999999999999999999999ccccccc4444444444444444eeeee4444444eeeee4444444444eeccccffffffca444e44444ecffffcf44444444444e4ec44ecccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                99999999999999999999cccccccc44444444444eee4eeeee44444eeeeeee4444444444444cccc111ffffca44444444cccffffccc444444eeeee444444cfcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                9999999999999999999ccccccff444444444444ee4eee44444444eeeee44444444444eecfccc1111ffffa444444e44ccffffffcc4ee4444ee44444444cfcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                99999999999999999ccccccfffee44444444eee444444444444444eeeeeee44444444ccf11cc1111cffa444444ee4cccffffffcc4eee444444444444ccfcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                ccccccccccccccccccccccfcfeee4444444eee4444444444444eeeeeee44444444eeccc1111cc11cfffa444444eecccfffffffcc4444444444444444ccfcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                cccccccccccccccccccccffffffcccccfeeee44444444444444eeeeee44444444eecccf1111fcccfcaa44444eeeefccfffffffcc444eee4444444444cffcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                cccccccccccccccccccccffffffffffffccccccf444444444eeeeee444444444eeccffff111ffffaa4444444eeefeecfffffffcf444eeeee4444444ccffcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                ccccccccccccccccccccffffffffffffffffffffcccccccf4444cccccccf444eeecffffffccffaa4444eeeeeeffffecfffffffcf444444444444444cfffcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                ccccccccccccccccccccfffcfffffffffffffffffffffffffffffffffffffff44cfffffffaaaa4444eeefffffffffecfffffffcf444444444444444cffcfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                ccccccccccccccccccccfffccfffffffffffffffffffffffffffffffffffffeccffaaaaaa44444eeeffffffffffffecfffffffcc44444444eeeee44cffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                cccccccccffffffffffcfffcccfffffffffffffffffffffffffffffffffffffccf44444444eeeefffffffffffffffecffffffff44444444eeeeeeeecffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                fffffffffffffffffffcfffffccffffffffffffffffffffffffffffffffffffff44444eeeefffffffffffffefffffecffffffcf4444444eeeececccffcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                ffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffff444fffffffffffffffffeeeeeefecffffffcf444eeeeeecfcffffcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbb
                ffffffffffffffffffffccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeefeccffffffceeeeecfffffffccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccc
                fffffffffffffffffffffcccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeefefcffffcf4eecfffffffccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccbb
                fffffffffffffffffffffffcccffccccffffffffffffffffffffffffffffffffffffffffffffffeefffffffffffffefcfffcfffffffffccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccc
                fffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffeefffffffffefeffeffcccfffffffccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbccccccc
                ffffffffffffffffffffffffffffffffccfffccccfffffffffffffffffffffffffffffffffffeeeffffeffefefeffefffffffcccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccbcccccc
                cccccffffffffffffffffffffffffffffffffffffcccccccffffffffffffffffffffffffffffffffffffffffffffeeffffcccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccc
                cccccccccffffffffffffffffffffffffffffffffffffffccffffccffffffffffffffffffffffffffffffffffffeeffccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccc
                cccccccccccccffffffffffffffffffffffffffffffffffffffffffcccccfcccccccccfffffffffffffffffffeefccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbcbbbbbccccccc
                cccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccfffffffffeefccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbcbbccbccccccc
                cccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeccccccccccccccccbbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbcbbccccccccc
                ccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbccccccccc
                ccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccbb
                ccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffccccccccccccccccccccccccccccbbbbbbccbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbccbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccbb
                ccccccccccccccccccccccccccccccccccccccccccbbccccccbbcbcccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbccbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbcccbbb
                cccccccccccccccccccccccccccccccccccccbbbbbccccbbbbbccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbcbbbbcbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbcccccc
                cccccccccccccccccccccccccccccccccbbbbbccccbbbbbbcccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbcbbbcbbcbbccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbcccccc
                ccccccccccccccccccccccccccccccbbbbbccccbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbcbbbcccbcbcccccbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccbcc
                cccccccccccccccccccccccccccccbcccccbbcbbcccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbcccbccccccbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbcccccccbcc
                cccccccccccccccccccccccccccccccccccbcccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbccbcbcccbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcbcbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbcbbbbbbbbbcbbbbbbbbbbbbcccccccccc
                ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbccccbbbbbbbbbbbbbbbbbbbbccccbccccbbbbbbbbbbbbbbbbbcccbbbcbbbbccbbbbbbbbbbbbbccccccccc
                cccccccccccccccccccccccccccccccccccccfcccccccccccccccccccccccccccccccccbbccccbbccbbbbbbbbbbbbbbbcccccccccccbbbbbbbbbbbbbbbbcccccbbcbbbcccbbbbbbbbbbbbbbbcccccccc
                ccccccccccccccccccccccccccccccccccffcccccccccccccccccccccccccccccccbbbbccccbbccbbbbbbbbbbbbbbbccccccbcccccbbbbbbbbbbbbbbbcccccccbccbbccccbcbbbbbbbbbbbbbcccccccc
                cccccccccccccccccccccccccccccccffccccccccccccccccccccccccccccccccbbbbccccbbcccbcbbbccbbccbcccccccccccccccbbbbbbbbbbbbbbbcbccccccccbbbbccbcbbbbbbbbbbbbbbbbcccccc
                cccccccccccccccccccccccccccfffccccccccccccccccccccccccccccccccbbbbbbccbccccccccbcccccccccccccccccccccccbbbbbbbbbbbbbbbbcbccbcccccbbbcccccccbbbbbbbbbbbbbbbcccccc
                ccccccccccccccccccccccccfffcfcccccccccccccccccccccccccccccccbbbbbbbcccbccccccccbccccccccccccccccccccccbbbbbbbbbbbbbbbbcbbcbcbccccbbcccccbbcbbccbbbbbbbbbbbcccccc
                ffccccccccccccccccfffffccfccccccccccccccccccccccccccccccccbbbbbbbcccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbccbcbccbcccbcccccccbccbccccccbbbbbbbbcccccc
                ccccccccccccccffffffccccccccccccccccccccccccccccccccccccbbbbcbcccccccccccbccccccccccccccccccccccccccccccbbbbbbbccbbcccccccccccccccccccccbccccccccccbbbbbcbcccccc
                ccccccccfffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccbbcccccccccccccccccccccccccccccccbbbbbcccccccccccccbccccccccccccbccbccccccccbbbbbcbcccccc
                ccccffffffffffcccccccccccccccffccccccccccccccccccccccccccccccccccccccbbccccccccccccccccccccccccccccccccccbbccccccccccccccbcccccccccccccbcccccccccccbccbbcccccccc
                fffffffffffcccccccccccccccfffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccccccccccccccccccccccccbccccccccccccccccccbbcccccccc
                ffffffffcccccccccccccfffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccbccccccccccccccccccccccccc
                fffffcccccccccccfcffffffffccffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccbcccccccccbccccccccccccccc
                ffccfccccccccfffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccccccccccccccccccccccccccccc
                cfccccccccffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccfcfffffffffffffffffffcccccfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccbccccccccccccccccccccccccccc
                cfffffffffffffffffffffffccfcfffccccccccccccccfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbccccccccccccccccccccccccccc
                ffffffffffffffffffffffcffffffcccccccccccccffccccccccccccccccccccccccccccccccccccccccccccfccccccccccccccccccccccccccccccccccccccccccbcccccccccccccccccccccccccccc
                fffffffffffffffffffffffffffcfcfffcccccccffcccccccccccccccccccccccccccccccccccccccccccccffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ffffffffffffffffffffffffffffffffccccccffccccccfcccccccccccccccccccccccccccccccccccccffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ffffffffffffffffffffffffffffffccccccffccccfffccccccffcccccccccccccccccccccccccccccccfffccccccccccccccfcccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ffffffffffffffffffffffffffffccccccffccccffffccffffffccccfccccccccccccccccccccccccffffccccccccccccfcffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ffffffffffffffffffffffffffcccccffcccfcffffccffffffcccfcccccccccccccccccccccccccfffffccccccccffccfcffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                `)
        } else if (selectedIndex == 1) {
            scene.setBackgroundImage(img`
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111111111111111111111111111111111111111111111111111d
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11111111111111111111111111111111111111111111111111111111
                ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111111111111111111fffffffffffffffffffffffffffffffffffffff11
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111111111111fffffffffffffffffccccccccccccccccccccccccccccfffff
                ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111111111fffffffaaaaaaaaaaaaacccccccccccccccccccccccccccccccccc
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111111ffffaaaaaaaaaaaaaaaaaaaccccccccccccccccccccccccccccccccccc
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1111ffffaaaaaaaaaaaaaaabbbaaaaacccccccccccccccccccccccccccffffffff
                ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1111ffffaaaaaaaaaaabbbbbaaaaaaaccccccccccccffffffffffffffffffffffff
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111ffffffaaaaabbbbbbbbbbbbbbaaaccccfffffffffffffffffffffffffffffffff
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1111fffaafffaaabbbbbbbbbbbbbaaaaacccccffffffffffffffffffffffffffffffff
                ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1111ffaaacfffaaabbbbbbbbbbaaaaaaaaccccccfffffffffffffffffffffffffffffff
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111fffaaacccfffaaabbbbbbbbbbbbbbaaaccccccccfffffffffffffffffffffffffffff
                ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111fffaaacccffffaabbbbbbbbbbbbbbaaaaaccccccccffffffffffffffffffffffffffff
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111fffaacccccffffaabbbbbbbbbbbbbaaaaaccccccccccfffffffffffffffffffffffffff
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111ffaaaaccccffffaabbbbbbbbbbbbaaaaacccccccccccccfffffffffffffffffffffffff
                ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111ffaaaccccccffffaaabbbbbbbbaaaaaaaaccccccccccccccffffffffffffffffffffffff
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111ffaaacaccccfffffaaaaaabbbbaaaaaaaaacccccccccccccccfffffffffffffffffffffff
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11ffaaacccccccfffffaabbbbbbbbbbaaaaaacccccccccccccccccffffffffffffffffffffff
                ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11fffaaaacccccccfffffabbbbbbbbbaaaaccccccccccccccccccccccffffffffffffffffffff
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111ffaacccccccccfffffabbbbbbbbbbbaaccccccccccccccccccccccccfffffffffffffffffff
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11ffaaacccccccccffffaaaabbbbbbbbaaaccccccccccccccccccccccccfffffffffffffffffff
                ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11ffaaacccccccccfffaaaabbbbbbbbbaaaacccccccccccccccccccccccccffffffffffffffffff
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11ffaaaaccccccccfffaaabbbbbbbbbbbbaaaaaccccccccccccccccccccccccfffffffffffffffff
                ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11fffaacccccccccffffabbbbbbbbbbbbbbaaaaaaaaccccccccccccccccccccccccffffffffffffff
                ddddddddddddddddddddddddddddddddddddddddddddddddd11111111111ddddddddddddddddddd1fffaaaccccccccffffaabbbbbbbbbbbbbbbbaaaaaaaaccccccccccccccccccccccccffffffffffff
                dddddddddddddddddddddddddddddddddddddddddddddddd11cccccfccf111dddddddddddddddd11ffaaaccccccccffffaabbbbbbbbbbbbbbbbbbbaaaaaaaaaaccccccccccccccccccccccffffffffff
                dddddddddddddddddddddddddddddddddddddddddddddd111cffffffffffc111dddddddddddddd1ffaaaacccccccffffaaaaabbbbbbbbbbbbbbbbbbaaaaaaaaaccccccccccccccccccccccccffffffff
                dddddddddddddddddddddddddddddddddddddddddddd111fffcccccccccfffc1ddddddddddddd11ffaacaccccccffffaaaaabbbbbbbbbbbbbbbbbbbbbaaaaaaaaccccccccccccccccccccccccccfffff
                ddddddddddddddddddddddddddddddddddddddddddd11ffcccccccccccccffc1ddddddddddddd1ffaaccccccccfffaabbbbbbbbbbbbbbbbbbbbbbbbbbaaaaaaaaaaccccccccccccccccccccccccccccc
                dddddddddddddddddddddddddddddddddddddddddd11fccccccccccccccccff1dddddddddddd11faaaaccccccfffaaaaabbbbbbbbbbbbbbbbbbbbaaaaaaaaaaaaaaacccccccccccccccccccccccccccc
                dddddddddddddddddddddddddddddddddddddddddd1ffccccccccccccccccff1dddddddddddd1faaaaacccccffaaaabbbbbbbbbbbbbbbbbbbbbbbbbbbaaaaaaaaaaacccccccccccccccccccccccccccc
                dddddddddddddddddddddddddddddddddddddddddd1cfcccccccccccccccccf1ddddddddddd11faacccccccffaaaaaaabbbbbbbbbbbbbbbbbbbbbbbaaaaaaaaaaaaaaaaccccccccccccccccccccaaaaa
                dddddddddddddddddddddddddddddddddddddddddd1fffccccccccccccccccf1ddddddddddd1ffacacccccffaaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbaaaaaaaacccccccccccaaaaaaaaaaaaaa
                dddddddddddddddddddddddddddddddddddddddddd11ffccccccccccccccccf1dddddddddd11faacaccccffaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbaaaaaaaaaaaaaaaaaaaaaaaaa22222222222
                ddddddddddddddddddddddddddddddddddddddddddd1cffccccccccccccccff111dddddddd1ffaccccccffaaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbaaaaaaaa22221311111133
                ddddddddddddddddddddddddddddddddddddddddddd11cffcccccccccccccffff111dddddd1ffffffffffccabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb22222133332222222
                dddddddddddddddddddddddddddddddddddddddddddd11cffcccccccccccffffff11111111ffffffccccccabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb2222333222ffffffff
                ddddddddddddddddddddddddddddddddddddddddddddd11ccffffffffffffffffffffccccccccccccccccaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb222213322ffffffccccc
                dddddddddddddddddddddddddddddddddddddddddddddd111cccccffff11111fffffffffffcccccccccaaaaaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb22231322fffffffffffff
                dddddddddddddddddddddddddddddddddddddddddddddddd111111111111dd11111ffffffccccccccccaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb222233322fffffffffffffff
                ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111111cccccccccccaaaaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb2222113322ffffffffffffffff
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111111ccccccaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb22222213332ffffffffffffffffff
                ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1111cccccccccaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbb2222222222222222233333322fffffffffffffffffff
                ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11111cccccaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbb222222222222222222233111111133322fffffffffffffffffffff
                ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1111111ccccaaaabbbbbbbbbbbbbbbbbbbb22222222222222222311111113333222222333222fffffffffffffffffffffff
                ddddddddddddddddddddddddddddddddddddddddddddddddddddddd111111111111ccaaaaaaabbbbbbbbbbbbbbbb2222222222222223111332222222222222223332222fffffffffffffffffffffffff
                ddddddddddddddddddddddddddddddddddddddddddddddd111111111111111111ccaaaaaabbbbbbbbbbbbbbbbbb222223311111113332222222222222222333332222fffffffffffffffffffffffffff
                dddddddddddddddddddddddddddddddddddddddddddddd111111111111111ccccaaaaaabbbbbbbbbbbbbbbb2222233333333333333333333333333333333322222ffffffffffcccccccccccccccccccc
                dddddddddddddddddddddddddddddddddddddddddddd11111cccccccccc1ccaaaaaaabbbbbbbbbbbbbbbbbb22222222222222222222222222222222222222222ffffffffffcccccccccaaaaaaaaaaaac
                dddddddddddddddddddddddddddddddddddddddddd11111ccccccccccccaaaaaaabbbbbbbbbbbbbbbbbbbbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaa222222222ffffffffffcccccaaaaaaaaaaaaaaaaaaaa
                ddddddddddddddddddddddddddddddddddddddddd11111ccccaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbbbaaaaaabbbbbbbbbbbbbbbbbbbaaaaaaaaffffffffffcccccaaaaaabbbbbbbbbbbbbbbbb
                ddddddddddddddddddddddddddddddddddddddddd1111ccaaaaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbaaaafffcccccaaaaaaaaaaabbbbbbbbbbbbbbbbbb
                ddddddddddddddddddddddddddddddddddddddddd111caaaabbbbbbbbbaabbbbbbbbbbbbbbbbaaaaaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbbb
                ddddddddddddddddddddddddddddddddddddddddd11ccaabbbbbbbbbbaaabbbbbbbbbbbbbaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                dddddddddddddddddddddddddddddddddddddddd111ccabbbbbbbbbbbcccabbbbbbbbbaaaaaaccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                dddddddddddddddddddddddddddddddddddddddd111ccbbbbbbbbbbbbffaaaabbbbbbbaaaaaaccccccccbbbbbaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                dddddddddddddddddddddddddddddddddddddddd111ccbbbbbbbbbbbbffaaabbbbbbbbbbaaaacccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbaaaaaaaaaaaaaabbbbbbbbaaaaaaaaaaaaaaab
                ddddddddddddddddddddddddddddddddddddddd1111cccbbccbbbbbbcffaaaaabbbbbbbbbbaacccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                ddddddddddddddddddddddddddddddddddddddd1111cffbbccccbbbbfffaaaabbbbbbbbaaaaacccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffff
                dddddddddddddddddddddddddddddddddddddd11111fffccccccbbbbfffcaaaabbbbbbbaaaaacccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffff
                dddddddddddddddddddddddddddddddddddddd11111fcfccccccbbbcfffaaaaabbbbbaaaaaaaccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffff
                ddddddddddddddddddddddddddddddddddddd111111fcfccccccbbbcffccabbbbbbbbbbbbaaaaccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffff
                ddddddddddddddddddddddddddddddddddddd11111cfcfccccccbcccffcccabbbbbbbbbbbbbaaccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffff
                dddddddddddddddddddddddddddddddddddd111111cfcfccccccbbcfffcccabbbbbbbbbbbbbbaccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffff
                ddddddddddddddddddddddddddddddddddd1111111cfcfccccccbbcfffcccaabbbbbbbbbbbbbacccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffff
                ddddddddddddddddddddddddddddddddd111111111cfcfccccccbbcfffccccabbbbbbbbbbbbbacccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffff
                dddddddddddddddddddddddddddddddd1111111111cfcfccccccbbcfffccccaaabbbbbbbbbbbacccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffff
                dddddddddddddddddddddddddddddd11111111111cffcfcccccbbbcfcfccccaaaaaabbbbbbbbaaccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffff
                dddddddddddddddddddddddddddd1111111111111cffcfcccccbbbcfcfccccaaabbbbbbbbbbbaacccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffff
                dddddddddddddddddddddddddd111111111111111cffcfcccccbbbcfcfccccaaaabbbbbbbbbbbacccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffff
                dddddddddddddddddddddddd11111111111111111cffcfcccccbbbcfcfccccaabbbbbbbbbbbbbaacccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffff
                ddddddddddddddddddddd1111111111111111111ccfccfcccccbbfffcfccccabbbbbbbbbbbbbbaaccccccccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffff
                ddddddddddddddddddd111111111111111111111ccfccfcccccbbfffcfccccaabbbbbbbbbbbbaaacccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffff
                dddddddddddddddd111111111111111111111111ccfccfccccccbbffcfcccccabbbbbbbbbbbbaaaccccccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffff
                ddddddddddddd111111111111111111111111111ccfccfccccccbbffcfcccccaabbbbbbbbbbaaaacccccccccccccccccccffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccc
                dddddddddddd1111111111111111111111111111ccfcccccccccccffcfcccccaaabbbbbbbbbaaaaccccccccccccccccffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccc
                dddddddddd111111111111111111111111111111ccfcccccccccccffcfcccccaaabbbbbbbbaaaacccccccccccccccffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccc
                dddd111111111111111111111111111111111111ccfccccccccccfffcfccccccaabbbbbbaaaaaacccccccccccccfffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccc
                1111111111111111111111111111111111111111ccfccfccccccccffcfccccccaabbbaaaaaaaccccccccccccccffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccc
                1111111111111111111111111111111111111111cccffcccccccccffcfccccccaabaaaaaaaaccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccc
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                `)
        } else {
        	
        }
    })
    miniMenu.onButtonPressed(myMenu2, miniMenu.Button.A, function (selection, selectedIndex) {
        if (selectedIndex == 0) {
            music.play(music.createSoundEffect(WaveShape.Triangle, 298, 305, 202, 255, 20, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
            color.startFade(color.originalPalette, color.Black, 300)
            color.pauseUntilFadeDone()
            sprites.destroy(myMenu2)
            sprites.destroy(mytextsprite2)
            color.startFade(color.Black, color.originalPalette, 300)
            if (Carname == "Kintaro V4") {
                PlayerSpecs(60, 130, 0.99, 1, RoadCarImages[0])
                CarRaceClass = "Road"
            } else if (Carname == "Ossira T1") {
                PlayerSpecs(65, 140, 0.99, 1, RoadCarImages[1])
                CarRaceClass = "Road"
            } else if (Carname == "Helion I50") {
                PlayerSpecs(55, 120, 0.99, 2, RoadCarImages[2])
                CarRaceClass = "Road"
            } else if (Carname == "Draxon 180") {
                PlayerSpecs(70, 125, 0.99, 0.5, RoadCarImages[3])
                CarRaceClass = "Road"
            } else if (Carname == "Ferrovia 0") {
                PlayerSpecs(95, 125, 0.99, 1, SportsCarImages[0])
                CarRaceClass = "Sport"
            } else if (Carname == "Aurex GT") {
                PlayerSpecs(90, 120, 0.99, 2.5, SportsCarImages[1])
                CarRaceClass = "Sport"
            } else if (Carname == "Rivaro P50") {
                PlayerSpecs(95, 125, 0.97, 0.5, SportsCarImages[2])
                CarRaceClass = "Sport"
            } else if (Carname == "Solvante A") {
                PlayerSpecs(100, 115, 0.995, 0.55, SportsCarImages[3])
                CarRaceClass = "Sport"
            } else if (Carname == "Ferrovia LM") {
                PlayerSpecs(125, 100, 0.999, 1.2, HyperCarImages[0])
                CarRaceClass = "Hyper"
            } else if (Carname == "Aurex LM") {
                PlayerSpecs(120, 90, 0.999, 3, HyperCarImages[1])
                CarRaceClass = "Hyper"
            } else if (Carname == "Rivaro LM") {
                PlayerSpecs(130, 110, 0.9995, 0.5, HyperCarImages[2])
                CarRaceClass = "Hyper"
            } else if (Carname == "Solvante LM") {
                PlayerSpecs(135, 95, 0.9995, 0.55, HyperCarImages[3])
                CarRaceClass = "Hyper"
            } else if (Carname == "RedlightPsr") {
                PlayerSpecs(155, 95, 0.999, 1.5, PrototypeCarImages[0])
                CarRaceClass = "Proto"
            } else if (Carname == "2027 LM") {
                PlayerSpecs(150, 85, 0.999, 3, PrototypeCarImages[1])
                CarRaceClass = "Proto"
            } else if (Carname == "Banned LM") {
                PlayerSpecs(155, 100, 0.99995, 0.65, PrototypeCarImages[2])
                CarRaceClass = "Proto"
            } else if (Carname == "BlueSky 27") {
                PlayerSpecs(160, 80, 0.99995, 0.75, PrototypeCarImages[3])
                CarRaceClass = "Proto"
            }
            if (Math.percentChance(50)) {
                truefalse_gen = false
            } else {
                truefalse_gen = true
            }
            Start_Race(RoadCarImages[randint(2, 3)], CarRaceClass, randint(1, 3))
            RaceSetup(randint(5, 25), truefalse_gen, randint(1, 3))
            Isnightfunction()
            Start2()
        } else if (selectedIndex == 1) {
            music.play(music.createSoundEffect(WaveShape.Triangle, 298, 305, 202, 255, 20, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
            color.startFade(color.originalPalette, color.Black, 300)
            color.pauseUntilFadeDone()
            sprites.destroy(myMenu2)
            sprites.destroy(mytextsprite2)
            color.startFade(color.Black, color.originalPalette, 300)
            Load_Menu_Custom_Race()
        } else {
            music.play(music.createSoundEffect(WaveShape.Triangle, 298, 305, 202, 255, 20, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
            color.startFade(color.originalPalette, color.Black, 300)
            color.pauseUntilFadeDone()
            sprites.destroy(myMenu2)
            sprites.destroy(mytextsprite2)
            color.startFade(color.Black, color.originalPalette, 300)
            Load_Menu()
        }
    })
}
function End () {
    RaceStarted = false
    mySprite = sprites.create(img`
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        `, SpriteKind.ui)
    animation.runImageAnimation(
    mySprite,
    [img`
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        `,img`
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        `,img`
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        `,img`
        ................................................................................................................................................................
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        `,img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ................................................................................................................................................................
        ................................................................................................................................................................
        `,img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `],
    150,
    false
    )
    mySprite.setPosition(80, 60)
    mySprite.setFlag(SpriteFlag.RelativeToCamera, true)
    if (Valid_Laps + 1 != Laps) {
        myTextSprite = fancyText.create("Invalid", 0, 2, fancyText.italic_small)
        sprites.setDataNumber(The_Player, "place in race", 4)
    } else if (sprites.readDataNumber(The_Player, "pits") < Mandatory_Pit_Stops) {
        myTextSprite = fancyText.create("Invalid", 0, 2, fancyText.italic_small)
        sprites.setDataNumber(The_Player, "place in race", 4)
    } else if (Valid_Laps + 1 == Laps) {
        myTextSprite = fancyText.create("Finished!", 0, 1, fancyText.italic_small)
    }
    myTextSprite.setFlag(SpriteFlag.RelativeToCamera, true)
    myTextSprite.setPosition(80, 60)
    myTextSprite.z = 150
    mySprite.z = 150
    RaceStarted = false
    timer.after(3000, function () {
        if (sprites.readDataNumber(The_Player, "place in race") == 1) {
            fancyText.setText(myTextSprite, "1st")
            Money += 100
            Money += sprites.readDataNumber(The_Player, "laps") * 5
        } else if (sprites.readDataNumber(The_Player, "place in race") == 2) {
            fancyText.setText(myTextSprite, "2nd")
            Money += 75
            Money += sprites.readDataNumber(The_Player, "laps") * 5
        } else if (sprites.readDataNumber(The_Player, "place in race") == 3) {
            fancyText.setText(myTextSprite, "3rd")
            Money += 50
            Money += sprites.readDataNumber(The_Player, "laps") * 5
        } else if (sprites.readDataNumber(The_Player, "place in race") == 4) {
            fancyText.setText(myTextSprite, "4th")
            Money += 25
            Money += sprites.readDataNumber(The_Player, "laps") * 5
        }
        timer.after(3000, function () {
            sprites.destroy(mySprite)
            sprites.destroy(myTextSprite)
            RaceStarted = false
            color.startFade(color.originalPalette, color.Black, 200)
            game.reset()
        })
    })
}
function RoadCarsStats () {
    RoadCarImages = [
    img`
        ....................
        ....................
        ....................
        ....................
        .......c............
        ..1ccffcccccccffccf.
        .1aaabbbbabbbbaabbf2
        caaab11bbbabbbbbbbc2
        caaab111bbaaabbabaaf
        caaab1111baaabbabbbf
        caaab111bbaaabbabaaf
        caaab11bbbabbbbbbbc2
        .1aaabbbbabbbbaabbf2
        ..1ccffcccccccffccf.
        .......c............
        ....................
        ....................
        ....................
        ....................
        `,
    img`
        ....................
        ....................
        ....................
        ....................
        .......8............
        ..188ff8888888ff882.
        .1166555565555665522
        816655ff55655555556f
        886655fff5666556566f
        886655fff5666556555f
        886655fff5666556566f
        816655ff55655555556f
        .1166555565555665522
        ..188ff8888888ff882.
        .......8............
        ....................
        ....................
        ....................
        ....................
        `,
    img`
        ....................
        ....................
        ....................
        ....................
        .......c............
        ...ccffcccccccffcc..
        .11eeddddeddddeedd22
        c1eed11dddedddddddc2
        cceed111ddeeeddedeef
        cceed1111deeeddedddf
        cceed111ddeeeddedeef
        c1eed11dddedddddddc2
        .11eeddddeddddeedd22
        ...ccffcccccccffcc..
        .......c............
        ....................
        ....................
        ....................
        ....................
        `,
    img`
        ....................
        ....................
        ....................
        ....................
        .......8............
        ..188ff8888888ff882.
        .17779999799997799f2
        17779cc9997999999982
        87779ccc99777997977f
        87779ccc99777997999f
        87779ccc99777997977f
        17779cc9997999999982
        .17779999799997799f2
        ..188ff8888888ff882.
        .......8............
        ....................
        ....................
        ....................
        ....................
        `,
    img`
        ....................
        ....................
        ....................
        ....................
        .......c............
        ..1ccffcccccccffccf.
        .12223333a3333aa33f2
        c222311333a3333333c2
        c222311133aaa33a3aaf
        c222311113aaa33a333f
        c222311133aaa33a3aaf
        c222311333a3333333c2
        .12223333a3333aa33f2
        ..1ccffcccccccffccf.
        .......c............
        ....................
        ....................
        ....................
        ....................
        `,
    img`
        ....................
        ....................
        ....................
        ....................
        .......f............
        ...ffccfffffffccff..
        .11bb4444b4444bb4422
        c1bb411444b4444444c2
        ccbb411144bbb44b4bbf
        ccbb411114bbb44b444f
        ccbb411144bbb44b4bbf
        c1bb411444b4444444c2
        .11bb4444b4444bb4422
        ...ffccfffffffccff..
        .......f............
        ....................
        ....................
        ....................
        ....................
        `,
    img`
        ....................
        ....................
        ....................
        ....................
        .......8............
        ..188ff8888888ff882.
        .1177999979999779922
        817799ff99799999997f
        887799fff9777997977f
        887799fff9777997999f
        887799fff9777997977f
        817799ff99799999997f
        .1177999979999779922
        ..188ff8888888ff882.
        .......8............
        ....................
        ....................
        ....................
        ....................
        `,
    img`
        ....................
        ....................
        ....................
        ....................
        .......c............
        ..1ccffccccccccccc2.
        .16665555655556655f2
        16665cc55565555555c2
        a6665ccc55666556566f
        a6665ccc55666556555f
        a6665ccc55666556566f
        16665cc55565555555c2
        .16665555655556655f2
        ..1ccffcccccccffcc2.
        .......c............
        ....................
        ....................
        ....................
        ....................
        `
    ]
}
function RaceSetup (MaxLaps: number, Is_Night: boolean, Mandatory_Pitstops: number) {
    Night = Is_Night
    Mandatory_Pit_Stops = Mandatory_Pitstops
    MandatoryLaps = MaxLaps
}
spriteutils.createRenderable(120, function (screen2) {
    if (Car_Menu_Open) {
        if (CarType == "Road1") {
            images.print(screen2, "Free", 96, 70, 15)
            spriteutils.drawTransparentImage(img`
                . . . . . . . . 
                . . . . . 9 . . 
                . . . . . 9 9 . 
                9 9 9 9 9 9 9 9 
                9 9 9 9 9 9 9 9 
                . . . . . 9 9 . 
                . . . . . 9 . . 
                . . . . . . . . 
                `, screen2, 97, 79)
            spriteutils.drawTransparentImage(img`
                . . . . . . . . 
                . . 3 . . . . . 
                . 3 3 . . . . . 
                3 3 3 3 3 3 3 3 
                3 3 3 3 3 3 3 3 
                . 3 3 . . . . . 
                . . 3 . . . . . 
                . . . . . . . . 
                `, screen2, 97, 88)
            spriteutils.drawTransparentImage(img`
                . 5 5 5 5 5 5 . 
                5 6 6 6 6 6 6 5 
                5 6 6 . . 6 6 5 
                5 6 . . . . 6 5 
                5 6 . . 5 . 5 6 
                6 6 6 . 5 5 6 6 
                6 6 6 6 5 5 5 6 
                . 6 6 6 6 6 6 . 
                `, screen2, 97, 97)
            spriteutils.drawTransparentImage(img`
                . 6 6 6 6 6 6 . 
                6 6 6 6 6 6 6 6 
                6 6 6 5 5 6 6 6 
                6 6 . 5 5 . 6 6 
                6 6 . 5 5 . 6 6 
                6 5 5 5 5 5 5 6 
                6 6 5 5 5 5 6 6 
                . 6 6 5 5 6 6 . 
                `, screen2, 97, 106)
            images.print(screen2, "60 mph", 105, 79, 15)
            images.print(screen2, "1 mph", 105, 88, 15)
            images.print(screen2, "1 mph", 105, 97, 15)
            images.print(screen2, "130", 105, 106, 15)
        } else if (CarType == "Road2") {
            if (!(RoadCar2Unlocked)) {
                spriteutils.drawTransparentImage(img`
                    . . . 4 d . . . 
                    . . 4 . . d . . 
                    . . 4 . . d . . 
                    . e 4 4 4 4 d . 
                    . e 4 c c 4 4 . 
                    . 4 4 c c 4 4 . 
                    . e e c c 4 e . 
                    . e e e 4 e e . 
                    `, screen2, 151, 70)
                images.print(screen2, "$100", 97, 70, 15)
            }
            spriteutils.drawTransparentImage(img`
                . . . . . . . . 
                . . . . . 9 . . 
                . . . . . 9 9 . 
                9 9 9 9 9 9 9 9 
                9 9 9 9 9 9 9 9 
                . . . . . 9 9 . 
                . . . . . 9 . . 
                . . . . . . . . 
                `, screen2, 97, 79)
            spriteutils.drawTransparentImage(img`
                . . . . . . . . 
                . . 3 . . . . . 
                . 3 3 . . . . . 
                3 3 3 3 3 3 3 3 
                3 3 3 3 3 3 3 3 
                . 3 3 . . . . . 
                . . 3 . . . . . 
                . . . . . . . . 
                `, screen2, 97, 88)
            spriteutils.drawTransparentImage(img`
                . 5 5 5 5 5 5 . 
                5 6 6 6 6 6 6 5 
                5 6 6 . . 6 6 5 
                5 6 . . . . 6 5 
                5 6 . . 5 . 5 6 
                6 6 6 . 5 5 6 6 
                6 6 6 6 5 5 5 6 
                . 6 6 6 6 6 6 . 
                `, screen2, 97, 97)
            spriteutils.drawTransparentImage(img`
                . 6 6 6 6 6 6 . 
                6 6 6 6 6 6 6 6 
                6 6 6 5 5 6 6 6 
                6 6 . 5 5 . 6 6 
                6 6 . 5 5 . 6 6 
                6 5 5 5 5 5 5 6 
                6 6 5 5 5 5 6 6 
                . 6 6 5 5 6 6 . 
                `, screen2, 97, 106)
            images.print(screen2, "65 mph", 105, 79, 15)
            images.print(screen2, "1 mph", 105, 88, 15)
            images.print(screen2, "1 mph", 105, 97, 15)
            images.print(screen2, "140", 105, 106, 15)
        } else if (CarType == "Road3") {
            if (!(RoadCar3Unlocked)) {
                spriteutils.drawTransparentImage(img`
                    . . . 4 d . . . 
                    . . 4 . . d . . 
                    . . 4 . . d . . 
                    . e 4 4 4 4 d . 
                    . e 4 c c 4 4 . 
                    . 4 4 c c 4 4 . 
                    . e e c c 4 e . 
                    . e e e 4 e e . 
                    `, screen2, 151, 70)
                images.print(screen2, "$200", 97, 70, 15)
            }
            spriteutils.drawTransparentImage(img`
                . . . . . . . . 
                . . . . . 9 . . 
                . . . . . 9 9 . 
                9 9 9 9 9 9 9 9 
                9 9 9 9 9 9 9 9 
                . . . . . 9 9 . 
                . . . . . 9 . . 
                . . . . . . . . 
                `, screen2, 97, 79)
            spriteutils.drawTransparentImage(img`
                . . . . . . . . 
                . . 3 . . . . . 
                . 3 3 . . . . . 
                3 3 3 3 3 3 3 3 
                3 3 3 3 3 3 3 3 
                . 3 3 . . . . . 
                . . 3 . . . . . 
                . . . . . . . . 
                `, screen2, 97, 88)
            spriteutils.drawTransparentImage(img`
                . 5 5 5 5 5 5 . 
                5 6 6 6 6 6 6 5 
                5 6 6 . . 6 6 5 
                5 6 . . . . 6 5 
                5 6 . . 5 . 5 6 
                6 6 6 . 5 5 6 6 
                6 6 6 6 5 5 5 6 
                . 6 6 6 6 6 6 . 
                `, screen2, 97, 97)
            spriteutils.drawTransparentImage(img`
                . 6 6 6 6 6 6 . 
                6 6 6 6 6 6 6 6 
                6 6 6 5 5 6 6 6 
                6 6 . 5 5 . 6 6 
                6 6 . 5 5 . 6 6 
                6 5 5 5 5 5 5 6 
                6 6 5 5 5 5 6 6 
                . 6 6 5 5 6 6 . 
                `, screen2, 97, 106)
            images.print(screen2, "55 mph", 105, 79, 15)
            images.print(screen2, "1 mph", 105, 88, 15)
            images.print(screen2, "2 mph", 105, 97, 15)
            images.print(screen2, "120", 105, 106, 15)
        } else if (CarType == "Road4") {
            if (!(RoadCar4Unlocked)) {
                spriteutils.drawTransparentImage(img`
                    . . . 4 d . . . 
                    . . 4 . . d . . 
                    . . 4 . . d . . 
                    . e 4 4 4 4 d . 
                    . e 4 c c 4 4 . 
                    . 4 4 c c 4 4 . 
                    . e e c c 4 e . 
                    . e e e 4 e e . 
                    `, screen2, 151, 70)
                images.print(screen2, "$300", 97, 70, 15)
            }
            spriteutils.drawTransparentImage(img`
                . . . . . . . . 
                . . . . . 9 . . 
                . . . . . 9 9 . 
                9 9 9 9 9 9 9 9 
                9 9 9 9 9 9 9 9 
                . . . . . 9 9 . 
                . . . . . 9 . . 
                . . . . . . . . 
                `, screen2, 97, 79)
            spriteutils.drawTransparentImage(img`
                . . . . . . . . 
                . . 3 . . . . . 
                . 3 3 . . . . . 
                3 3 3 3 3 3 3 3 
                3 3 3 3 3 3 3 3 
                . 3 3 . . . . . 
                . . 3 . . . . . 
                . . . . . . . . 
                `, screen2, 97, 88)
            spriteutils.drawTransparentImage(img`
                . 5 5 5 5 5 5 . 
                5 6 6 6 6 6 6 5 
                5 6 6 . . 6 6 5 
                5 6 . . . . 6 5 
                5 6 . . 5 . 5 6 
                6 6 6 . 5 5 6 6 
                6 6 6 6 5 5 5 6 
                . 6 6 6 6 6 6 . 
                `, screen2, 97, 97)
            spriteutils.drawTransparentImage(img`
                . 6 6 6 6 6 6 . 
                6 6 6 6 6 6 6 6 
                6 6 6 5 5 6 6 6 
                6 6 . 5 5 . 6 6 
                6 6 . 5 5 . 6 6 
                6 5 5 5 5 5 5 6 
                6 6 5 5 5 5 6 6 
                . 6 6 5 5 6 6 . 
                `, screen2, 97, 106)
            images.print(screen2, "70 mph", 105, 79, 15)
            images.print(screen2, "1 mph", 105, 88, 15)
            images.print(screen2, ".5 mph", 105, 97, 15)
            images.print(screen2, "125", 105, 106, 15)
        } else if (CarType == "Sport1") {
            if (!(SportCar1Unlocked)) {
                spriteutils.drawTransparentImage(img`
                    . . . 4 d . . . 
                    . . 4 . . d . . 
                    . . 4 . . d . . 
                    . e 4 4 4 4 d . 
                    . e 4 c c 4 4 . 
                    . 4 4 c c 4 4 . 
                    . e e c c 4 e . 
                    . e e e 4 e e . 
                    `, screen2, 151, 70)
                images.print(screen2, "$125", 97, 70, 15)
            }
            spriteutils.drawTransparentImage(img`
                . . . . . . . . 
                . . . . . 9 . . 
                . . . . . 9 9 . 
                9 9 9 9 9 9 9 9 
                9 9 9 9 9 9 9 9 
                . . . . . 9 9 . 
                . . . . . 9 . . 
                . . . . . . . . 
                `, screen2, 97, 79)
            spriteutils.drawTransparentImage(img`
                . . . . . . . . 
                . . 3 . . . . . 
                . 3 3 . . . . . 
                3 3 3 3 3 3 3 3 
                3 3 3 3 3 3 3 3 
                . 3 3 . . . . . 
                . . 3 . . . . . 
                . . . . . . . . 
                `, screen2, 97, 88)
            spriteutils.drawTransparentImage(img`
                . 5 5 5 5 5 5 . 
                5 6 6 6 6 6 6 5 
                5 6 6 . . 6 6 5 
                5 6 . . . . 6 5 
                5 6 . . 5 . 5 6 
                6 6 6 . 5 5 6 6 
                6 6 6 6 5 5 5 6 
                . 6 6 6 6 6 6 . 
                `, screen2, 97, 97)
            spriteutils.drawTransparentImage(img`
                . 6 6 6 6 6 6 . 
                6 6 6 6 6 6 6 6 
                6 6 6 5 5 6 6 6 
                6 6 . 5 5 . 6 6 
                6 6 . 5 5 . 6 6 
                6 5 5 5 5 5 5 6 
                6 6 5 5 5 5 6 6 
                . 6 6 5 5 6 6 . 
                `, screen2, 97, 106)
            images.print(screen2, "95 mph", 105, 79, 15)
            images.print(screen2, "1 mph", 105, 88, 15)
            images.print(screen2, "1 mph", 105, 97, 15)
            images.print(screen2, "125", 105, 106, 15)
        } else if (CarType == "Sport2") {
            if (!(SportCar2Unlocked)) {
                spriteutils.drawTransparentImage(img`
                    . . . 4 d . . . 
                    . . 4 . . d . . 
                    . . 4 . . d . . 
                    . e 4 4 4 4 d . 
                    . e 4 c c 4 4 . 
                    . 4 4 c c 4 4 . 
                    . e e c c 4 e . 
                    . e e e 4 e e . 
                    `, screen2, 151, 70)
                images.print(screen2, "$150", 97, 70, 15)
            }
            spriteutils.drawTransparentImage(img`
                . . . . . . . . 
                . . . . . 9 . . 
                . . . . . 9 9 . 
                9 9 9 9 9 9 9 9 
                9 9 9 9 9 9 9 9 
                . . . . . 9 9 . 
                . . . . . 9 . . 
                . . . . . . . . 
                `, screen2, 97, 79)
            spriteutils.drawTransparentImage(img`
                . . . . . . . . 
                . . 3 . . . . . 
                . 3 3 . . . . . 
                3 3 3 3 3 3 3 3 
                3 3 3 3 3 3 3 3 
                . 3 3 . . . . . 
                . . 3 . . . . . 
                . . . . . . . . 
                `, screen2, 97, 88)
            spriteutils.drawTransparentImage(img`
                . 5 5 5 5 5 5 . 
                5 6 6 6 6 6 6 5 
                5 6 6 . . 6 6 5 
                5 6 . . . . 6 5 
                5 6 . . 5 . 5 6 
                6 6 6 . 5 5 6 6 
                6 6 6 6 5 5 5 6 
                . 6 6 6 6 6 6 . 
                `, screen2, 97, 97)
            spriteutils.drawTransparentImage(img`
                . 6 6 6 6 6 6 . 
                6 6 6 6 6 6 6 6 
                6 6 6 5 5 6 6 6 
                6 6 . 5 5 . 6 6 
                6 6 . 5 5 . 6 6 
                6 5 5 5 5 5 5 6 
                6 6 5 5 5 5 6 6 
                . 6 6 5 5 6 6 . 
                `, screen2, 97, 106)
            images.print(screen2, "90 mph", 105, 79, 15)
            images.print(screen2, "1 mph", 105, 88, 15)
            images.print(screen2, "2.5 mph", 105, 97, 15)
            images.print(screen2, "120", 105, 106, 15)
        } else if (CarType == "Sport3") {
            if (!(SportCar3Unlocked)) {
                spriteutils.drawTransparentImage(img`
                    . . . 4 d . . . 
                    . . 4 . . d . . 
                    . . 4 . . d . . 
                    . e 4 4 4 4 d . 
                    . e 4 c c 4 4 . 
                    . 4 4 c c 4 4 . 
                    . e e c c 4 e . 
                    . e e e 4 e e . 
                    `, screen2, 151, 70)
                images.print(screen2, "$275", 97, 70, 15)
            }
            spriteutils.drawTransparentImage(img`
                . . . . . . . . 
                . . . . . 9 . . 
                . . . . . 9 9 . 
                9 9 9 9 9 9 9 9 
                9 9 9 9 9 9 9 9 
                . . . . . 9 9 . 
                . . . . . 9 . . 
                . . . . . . . . 
                `, screen2, 97, 79)
            spriteutils.drawTransparentImage(img`
                . . . . . . . . 
                . . 3 . . . . . 
                . 3 3 . . . . . 
                3 3 3 3 3 3 3 3 
                3 3 3 3 3 3 3 3 
                . 3 3 . . . . . 
                . . 3 . . . . . 
                . . . . . . . . 
                `, screen2, 97, 88)
            spriteutils.drawTransparentImage(img`
                . 5 5 5 5 5 5 . 
                5 6 6 6 6 6 6 5 
                5 6 6 . . 6 6 5 
                5 6 . . . . 6 5 
                5 6 . . 5 . 5 6 
                6 6 6 . 5 5 6 6 
                6 6 6 6 5 5 5 6 
                . 6 6 6 6 6 6 . 
                `, screen2, 97, 97)
            spriteutils.drawTransparentImage(img`
                . 6 6 6 6 6 6 . 
                6 6 6 6 6 6 6 6 
                6 6 6 5 5 6 6 6 
                6 6 . 5 5 . 6 6 
                6 6 . 5 5 . 6 6 
                6 5 5 5 5 5 5 6 
                6 6 5 5 5 5 6 6 
                . 6 6 5 5 6 6 . 
                `, screen2, 97, 106)
            images.print(screen2, "95 mph", 105, 79, 15)
            images.print(screen2, ".97 mph", 105, 88, 15)
            images.print(screen2, ".5 mph", 105, 97, 15)
            images.print(screen2, "125", 105, 106, 15)
        } else if (CarType == "Sport4") {
            if (!(SportCar4Unlocked)) {
                spriteutils.drawTransparentImage(img`
                    . . . 4 d . . . 
                    . . 4 . . d . . 
                    . . 4 . . d . . 
                    . e 4 4 4 4 d . 
                    . e 4 c c 4 4 . 
                    . 4 4 c c 4 4 . 
                    . e e c c 4 e . 
                    . e e e 4 e e . 
                    `, screen2, 151, 70)
                images.print(screen2, "$400", 97, 70, 15)
            }
            spriteutils.drawTransparentImage(img`
                . . . . . . . . 
                . . . . . 9 . . 
                . . . . . 9 9 . 
                9 9 9 9 9 9 9 9 
                9 9 9 9 9 9 9 9 
                . . . . . 9 9 . 
                . . . . . 9 . . 
                . . . . . . . . 
                `, screen2, 97, 79)
            spriteutils.drawTransparentImage(img`
                . . . . . . . . 
                . . 3 . . . . . 
                . 3 3 . . . . . 
                3 3 3 3 3 3 3 3 
                3 3 3 3 3 3 3 3 
                . 3 3 . . . . . 
                . . 3 . . . . . 
                . . . . . . . . 
                `, screen2, 97, 88)
            spriteutils.drawTransparentImage(img`
                . 5 5 5 5 5 5 . 
                5 6 6 6 6 6 6 5 
                5 6 6 . . 6 6 5 
                5 6 . . . . 6 5 
                5 6 . . 5 . 5 6 
                6 6 6 . 5 5 6 6 
                6 6 6 6 5 5 5 6 
                . 6 6 6 6 6 6 . 
                `, screen2, 97, 97)
            spriteutils.drawTransparentImage(img`
                . 6 6 6 6 6 6 . 
                6 6 6 6 6 6 6 6 
                6 6 6 5 5 6 6 6 
                6 6 . 5 5 . 6 6 
                6 6 . 5 5 . 6 6 
                6 5 5 5 5 5 5 6 
                6 6 5 5 5 5 6 6 
                . 6 6 5 5 6 6 . 
                `, screen2, 97, 106)
            images.print(screen2, "100 mph", 105, 79, 15)
            images.print(screen2, ".995 mph", 105, 88, 15)
            images.print(screen2, ".55 mph", 105, 97, 15)
            images.print(screen2, "115", 105, 106, 15)
        } else if (CarType == "Hyper1") {
            if (!(HyperCar1Unlocked)) {
                spriteutils.drawTransparentImage(img`
                    . . . 4 d . . . 
                    . . 4 . . d . . 
                    . . 4 . . d . . 
                    . e 4 4 4 4 d . 
                    . e 4 c c 4 4 . 
                    . 4 4 c c 4 4 . 
                    . e e c c 4 e . 
                    . e e e 4 e e . 
                    `, screen2, 151, 70)
                images.print(screen2, "$200", 97, 70, 15)
            }
            spriteutils.drawTransparentImage(img`
                . . . . . . . . 
                . . . . . 9 . . 
                . . . . . 9 9 . 
                9 9 9 9 9 9 9 9 
                9 9 9 9 9 9 9 9 
                . . . . . 9 9 . 
                . . . . . 9 . . 
                . . . . . . . . 
                `, screen2, 97, 79)
            spriteutils.drawTransparentImage(img`
                . . . . . . . . 
                . . 3 . . . . . 
                . 3 3 . . . . . 
                3 3 3 3 3 3 3 3 
                3 3 3 3 3 3 3 3 
                . 3 3 . . . . . 
                . . 3 . . . . . 
                . . . . . . . . 
                `, screen2, 97, 88)
            spriteutils.drawTransparentImage(img`
                . 5 5 5 5 5 5 . 
                5 6 6 6 6 6 6 5 
                5 6 6 . . 6 6 5 
                5 6 . . . . 6 5 
                5 6 . . 5 . 5 6 
                6 6 6 . 5 5 6 6 
                6 6 6 6 5 5 5 6 
                . 6 6 6 6 6 6 . 
                `, screen2, 97, 97)
            spriteutils.drawTransparentImage(img`
                . 6 6 6 6 6 6 . 
                6 6 6 6 6 6 6 6 
                6 6 6 5 5 6 6 6 
                6 6 . 5 5 . 6 6 
                6 6 . 5 5 . 6 6 
                6 5 5 5 5 5 5 6 
                6 6 5 5 5 5 6 6 
                . 6 6 5 5 6 6 . 
                `, screen2, 97, 106)
            images.print(screen2, "125 mph", 105, 79, 15)
            images.print(screen2, ".999 mph", 105, 88, 15)
            images.print(screen2, "1.2 mph", 105, 97, 15)
            images.print(screen2, "100", 105, 106, 15)
        } else if (CarType == "Hyper2") {
            if (!(HyperCar2Unlocked)) {
                spriteutils.drawTransparentImage(img`
                    . . . 4 d . . . 
                    . . 4 . . d . . 
                    . . 4 . . d . . 
                    . e 4 4 4 4 d . 
                    . e 4 c c 4 4 . 
                    . 4 4 c c 4 4 . 
                    . e e c c 4 e . 
                    . e e e 4 e e . 
                    `, screen2, 151, 70)
                images.print(screen2, "$250", 97, 70, 15)
            }
            spriteutils.drawTransparentImage(img`
                . . . . . . . . 
                . . . . . 9 . . 
                . . . . . 9 9 . 
                9 9 9 9 9 9 9 9 
                9 9 9 9 9 9 9 9 
                . . . . . 9 9 . 
                . . . . . 9 . . 
                . . . . . . . . 
                `, screen2, 97, 79)
            spriteutils.drawTransparentImage(img`
                . . . . . . . . 
                . . 3 . . . . . 
                . 3 3 . . . . . 
                3 3 3 3 3 3 3 3 
                3 3 3 3 3 3 3 3 
                . 3 3 . . . . . 
                . . 3 . . . . . 
                . . . . . . . . 
                `, screen2, 97, 88)
            spriteutils.drawTransparentImage(img`
                . 5 5 5 5 5 5 . 
                5 6 6 6 6 6 6 5 
                5 6 6 . . 6 6 5 
                5 6 . . . . 6 5 
                5 6 . . 5 . 5 6 
                6 6 6 . 5 5 6 6 
                6 6 6 6 5 5 5 6 
                . 6 6 6 6 6 6 . 
                `, screen2, 97, 97)
            spriteutils.drawTransparentImage(img`
                . 6 6 6 6 6 6 . 
                6 6 6 6 6 6 6 6 
                6 6 6 5 5 6 6 6 
                6 6 . 5 5 . 6 6 
                6 6 . 5 5 . 6 6 
                6 5 5 5 5 5 5 6 
                6 6 5 5 5 5 6 6 
                . 6 6 5 5 6 6 . 
                `, screen2, 97, 106)
            images.print(screen2, "120 mph", 105, 79, 15)
            images.print(screen2, ".999 mph", 105, 88, 15)
            images.print(screen2, "3 mph", 105, 97, 15)
            images.print(screen2, "90", 105, 106, 15)
        } else if (CarType == "Hyper3") {
            if (!(HyperCar3Unlocked)) {
                spriteutils.drawTransparentImage(img`
                    . . . 4 d . . . 
                    . . 4 . . d . . 
                    . . 4 . . d . . 
                    . e 4 4 4 4 d . 
                    . e 4 c c 4 4 . 
                    . 4 4 c c 4 4 . 
                    . e e c c 4 e . 
                    . e e e 4 e e . 
                    `, screen2, 151, 70)
                images.print(screen2, "$350", 97, 70, 15)
            }
            spriteutils.drawTransparentImage(img`
                . . . . . . . . 
                . . . . . 9 . . 
                . . . . . 9 9 . 
                9 9 9 9 9 9 9 9 
                9 9 9 9 9 9 9 9 
                . . . . . 9 9 . 
                . . . . . 9 . . 
                . . . . . . . . 
                `, screen2, 97, 79)
            spriteutils.drawTransparentImage(img`
                . . . . . . . . 
                . . 3 . . . . . 
                . 3 3 . . . . . 
                3 3 3 3 3 3 3 3 
                3 3 3 3 3 3 3 3 
                . 3 3 . . . . . 
                . . 3 . . . . . 
                . . . . . . . . 
                `, screen2, 97, 88)
            spriteutils.drawTransparentImage(img`
                . 5 5 5 5 5 5 . 
                5 6 6 6 6 6 6 5 
                5 6 6 . . 6 6 5 
                5 6 . . . . 6 5 
                5 6 . . 5 . 5 6 
                6 6 6 . 5 5 6 6 
                6 6 6 6 5 5 5 6 
                . 6 6 6 6 6 6 . 
                `, screen2, 97, 97)
            spriteutils.drawTransparentImage(img`
                . 6 6 6 6 6 6 . 
                6 6 6 6 6 6 6 6 
                6 6 6 5 5 6 6 6 
                6 6 . 5 5 . 6 6 
                6 6 . 5 5 . 6 6 
                6 5 5 5 5 5 5 6 
                6 6 5 5 5 5 6 6 
                . 6 6 5 5 6 6 . 
                `, screen2, 97, 106)
            images.print(screen2, "130 mph", 105, 79, 15)
            images.print(screen2, ".9995 mph", 105, 88, 15)
            images.print(screen2, ".5 mph", 105, 97, 15)
            images.print(screen2, "110", 105, 106, 15)
        } else if (CarType == "Hyper4") {
            if (!(HyperCar4Unlocked)) {
                spriteutils.drawTransparentImage(img`
                    . . . 4 d . . . 
                    . . 4 . . d . . 
                    . . 4 . . d . . 
                    . e 4 4 4 4 d . 
                    . e 4 c c 4 4 . 
                    . 4 4 c c 4 4 . 
                    . e e c c 4 e . 
                    . e e e 4 e e . 
                    `, screen2, 151, 70)
                images.print(screen2, "$450", 97, 70, 15)
            }
            spriteutils.drawTransparentImage(img`
                . . . . . . . . 
                . . . . . 9 . . 
                . . . . . 9 9 . 
                9 9 9 9 9 9 9 9 
                9 9 9 9 9 9 9 9 
                . . . . . 9 9 . 
                . . . . . 9 . . 
                . . . . . . . . 
                `, screen2, 97, 79)
            spriteutils.drawTransparentImage(img`
                . . . . . . . . 
                . . 3 . . . . . 
                . 3 3 . . . . . 
                3 3 3 3 3 3 3 3 
                3 3 3 3 3 3 3 3 
                . 3 3 . . . . . 
                . . 3 . . . . . 
                . . . . . . . . 
                `, screen2, 97, 88)
            spriteutils.drawTransparentImage(img`
                . 5 5 5 5 5 5 . 
                5 6 6 6 6 6 6 5 
                5 6 6 . . 6 6 5 
                5 6 . . . . 6 5 
                5 6 . . 5 . 5 6 
                6 6 6 . 5 5 6 6 
                6 6 6 6 5 5 5 6 
                . 6 6 6 6 6 6 . 
                `, screen2, 97, 97)
            spriteutils.drawTransparentImage(img`
                . 6 6 6 6 6 6 . 
                6 6 6 6 6 6 6 6 
                6 6 6 5 5 6 6 6 
                6 6 . 5 5 . 6 6 
                6 6 . 5 5 . 6 6 
                6 5 5 5 5 5 5 6 
                6 6 5 5 5 5 6 6 
                . 6 6 5 5 6 6 . 
                `, screen2, 97, 106)
            images.print(screen2, "135 mph", 105, 79, 15)
            images.print(screen2, ".9995 mph", 105, 88, 15)
            images.print(screen2, ".55 mph", 105, 97, 15)
            images.print(screen2, "95", 105, 106, 15)
        } else if (CarType == "Proto1") {
            if (!(ProtoCar1Unlocked)) {
                spriteutils.drawTransparentImage(img`
                    . . . 4 d . . . 
                    . . 4 . . d . . 
                    . . 4 . . d . . 
                    . e 4 4 4 4 d . 
                    . e 4 c c 4 4 . 
                    . 4 4 c c 4 4 . 
                    . e e c c 4 e . 
                    . e e e 4 e e . 
                    `, screen2, 151, 70)
                images.print(screen2, "$1000", 97, 70, 15)
            }
            spriteutils.drawTransparentImage(img`
                . . . . . . . . 
                . . . . . 9 . . 
                . . . . . 9 9 . 
                9 9 9 9 9 9 9 9 
                9 9 9 9 9 9 9 9 
                . . . . . 9 9 . 
                . . . . . 9 . . 
                . . . . . . . . 
                `, screen2, 97, 79)
            spriteutils.drawTransparentImage(img`
                . . . . . . . . 
                . . 3 . . . . . 
                . 3 3 . . . . . 
                3 3 3 3 3 3 3 3 
                3 3 3 3 3 3 3 3 
                . 3 3 . . . . . 
                . . 3 . . . . . 
                . . . . . . . . 
                `, screen2, 97, 88)
            spriteutils.drawTransparentImage(img`
                . 5 5 5 5 5 5 . 
                5 6 6 6 6 6 6 5 
                5 6 6 . . 6 6 5 
                5 6 . . . . 6 5 
                5 6 . . 5 . 5 6 
                6 6 6 . 5 5 6 6 
                6 6 6 6 5 5 5 6 
                . 6 6 6 6 6 6 . 
                `, screen2, 97, 97)
            spriteutils.drawTransparentImage(img`
                . 6 6 6 6 6 6 . 
                6 6 6 6 6 6 6 6 
                6 6 6 5 5 6 6 6 
                6 6 . 5 5 . 6 6 
                6 6 . 5 5 . 6 6 
                6 5 5 5 5 5 5 6 
                6 6 5 5 5 5 6 6 
                . 6 6 5 5 6 6 . 
                `, screen2, 97, 106)
            images.print(screen2, "155 mph", 105, 79, 15)
            images.print(screen2, ".999 mph", 105, 88, 15)
            images.print(screen2, "1.5 mph", 105, 97, 15)
            images.print(screen2, "95", 105, 106, 15)
        } else if (CarType == "Proto2") {
            if (!(ProtoCar2Unlocked)) {
                spriteutils.drawTransparentImage(img`
                    . . . 4 d . . . 
                    . . 4 . . d . . 
                    . . 4 . . d . . 
                    . e 4 4 4 4 d . 
                    . e 4 c c 4 4 . 
                    . 4 4 c c 4 4 . 
                    . e e c c 4 e . 
                    . e e e 4 e e . 
                    `, screen2, 151, 70)
                images.print(screen2, "$1100", 97, 70, 15)
            }
            spriteutils.drawTransparentImage(img`
                . . . . . . . . 
                . . . . . 9 . . 
                . . . . . 9 9 . 
                9 9 9 9 9 9 9 9 
                9 9 9 9 9 9 9 9 
                . . . . . 9 9 . 
                . . . . . 9 . . 
                . . . . . . . . 
                `, screen2, 97, 79)
            spriteutils.drawTransparentImage(img`
                . . . . . . . . 
                . . 3 . . . . . 
                . 3 3 . . . . . 
                3 3 3 3 3 3 3 3 
                3 3 3 3 3 3 3 3 
                . 3 3 . . . . . 
                . . 3 . . . . . 
                . . . . . . . . 
                `, screen2, 97, 88)
            spriteutils.drawTransparentImage(img`
                . 5 5 5 5 5 5 . 
                5 6 6 6 6 6 6 5 
                5 6 6 . . 6 6 5 
                5 6 . . . . 6 5 
                5 6 . . 5 . 5 6 
                6 6 6 . 5 5 6 6 
                6 6 6 6 5 5 5 6 
                . 6 6 6 6 6 6 . 
                `, screen2, 97, 97)
            spriteutils.drawTransparentImage(img`
                . 6 6 6 6 6 6 . 
                6 6 6 6 6 6 6 6 
                6 6 6 5 5 6 6 6 
                6 6 . 5 5 . 6 6 
                6 6 . 5 5 . 6 6 
                6 5 5 5 5 5 5 6 
                6 6 5 5 5 5 6 6 
                . 6 6 5 5 6 6 . 
                `, screen2, 97, 106)
            images.print(screen2, "150 mph", 105, 79, 15)
            images.print(screen2, ".999 mph", 105, 88, 15)
            images.print(screen2, "3 mph", 105, 97, 15)
            images.print(screen2, "85", 105, 106, 15)
        } else if (CarType == "Proto3") {
            if (!(ProtoCar3Unlocked)) {
                spriteutils.drawTransparentImage(img`
                    . . . 4 d . . . 
                    . . 4 . . d . . 
                    . . 4 . . d . . 
                    . e 4 4 4 4 d . 
                    . e 4 c c 4 4 . 
                    . 4 4 c c 4 4 . 
                    . e e c c 4 e . 
                    . e e e 4 e e . 
                    `, screen2, 151, 70)
                images.print(screen2, "$1200", 97, 70, 15)
            }
            spriteutils.drawTransparentImage(img`
                . . . . . . . . 
                . . . . . 9 . . 
                . . . . . 9 9 . 
                9 9 9 9 9 9 9 9 
                9 9 9 9 9 9 9 9 
                . . . . . 9 9 . 
                . . . . . 9 . . 
                . . . . . . . . 
                `, screen2, 97, 79)
            spriteutils.drawTransparentImage(img`
                . . . . . . . . 
                . . 3 . . . . . 
                . 3 3 . . . . . 
                3 3 3 3 3 3 3 3 
                3 3 3 3 3 3 3 3 
                . 3 3 . . . . . 
                . . 3 . . . . . 
                . . . . . . . . 
                `, screen2, 97, 88)
            spriteutils.drawTransparentImage(img`
                . 5 5 5 5 5 5 . 
                5 6 6 6 6 6 6 5 
                5 6 6 . . 6 6 5 
                5 6 . . . . 6 5 
                5 6 . . 5 . 5 6 
                6 6 6 . 5 5 6 6 
                6 6 6 6 5 5 5 6 
                . 6 6 6 6 6 6 . 
                `, screen2, 97, 97)
            spriteutils.drawTransparentImage(img`
                . 6 6 6 6 6 6 . 
                6 6 6 6 6 6 6 6 
                6 6 6 5 5 6 6 6 
                6 6 . 5 5 . 6 6 
                6 6 . 5 5 . 6 6 
                6 5 5 5 5 5 5 6 
                6 6 5 5 5 5 6 6 
                . 6 6 5 5 6 6 . 
                `, screen2, 97, 106)
            images.print(screen2, "155 mph", 105, 79, 15)
            images.print(screen2, ".9995 mph", 105, 88, 15)
            images.print(screen2, ".65 mph", 105, 97, 15)
            images.print(screen2, "100", 105, 106, 15)
        } else if (CarType == "Proto4") {
            if (!(ProtoCar4Unlocked)) {
                spriteutils.drawTransparentImage(img`
                    . . . 4 d . . . 
                    . . 4 . . d . . 
                    . . 4 . . d . . 
                    . e 4 4 4 4 d . 
                    . e 4 c c 4 4 . 
                    . 4 4 c c 4 4 . 
                    . e e c c 4 e . 
                    . e e e 4 e e . 
                    `, screen2, 151, 70)
                images.print(screen2, "$1300", 97, 70, 15)
            }
            spriteutils.drawTransparentImage(img`
                . . . . . . . . 
                . . . . . 9 . . 
                . . . . . 9 9 . 
                9 9 9 9 9 9 9 9 
                9 9 9 9 9 9 9 9 
                . . . . . 9 9 . 
                . . . . . 9 . . 
                . . . . . . . . 
                `, screen2, 97, 79)
            spriteutils.drawTransparentImage(img`
                . . . . . . . . 
                . . 3 . . . . . 
                . 3 3 . . . . . 
                3 3 3 3 3 3 3 3 
                3 3 3 3 3 3 3 3 
                . 3 3 . . . . . 
                . . 3 . . . . . 
                . . . . . . . . 
                `, screen2, 97, 88)
            spriteutils.drawTransparentImage(img`
                . 5 5 5 5 5 5 . 
                5 6 6 6 6 6 6 5 
                5 6 6 . . 6 6 5 
                5 6 . . . . 6 5 
                5 6 . . 5 . 5 6 
                6 6 6 . 5 5 6 6 
                6 6 6 6 5 5 5 6 
                . 6 6 6 6 6 6 . 
                `, screen2, 97, 97)
            spriteutils.drawTransparentImage(img`
                . 6 6 6 6 6 6 . 
                6 6 6 6 6 6 6 6 
                6 6 6 5 5 6 6 6 
                6 6 . 5 5 . 6 6 
                6 6 . 5 5 . 6 6 
                6 5 5 5 5 5 5 6 
                6 6 5 5 5 5 6 6 
                . 6 6 5 5 6 6 . 
                `, screen2, 97, 106)
            images.print(screen2, "160 mph", 105, 79, 15)
            images.print(screen2, ".9995 mph", 105, 88, 15)
            images.print(screen2, ".75 mph", 105, 97, 15)
            images.print(screen2, "80", 105, 106, 15)
        }
    } else {
    	
    }
})
controller.combos.attachCombo("bbbbb", function () {
    Money += 100000
})
function SFXEffects () {
    Explosion = extraEffects.createCustomSpreadEffectData(
    [
    1,
    4,
    3,
    2
    ],
    false,
    extraEffects.createPresetSizeTable(ExtraEffectPresetShape.Cloud),
    extraEffects.createPercentageRange(25, 75),
    extraEffects.createPercentageRange(25, 150),
    extraEffects.createTimeRange(200, 2000),
    0,
    0,
    extraEffects.createPercentageRange(100, 150),
    0,
    0,
    1000
    )
    Explosion_Dense = extraEffects.createCustomSpreadEffectData(
    [
    1,
    4,
    3,
    2
    ],
    false,
    extraEffects.createPresetSizeTable(ExtraEffectPresetShape.Explosion),
    extraEffects.createPercentageRange(25, 25),
    extraEffects.createPercentageRange(25, 25),
    extraEffects.createTimeRange(200, 2000),
    0,
    0,
    extraEffects.createPercentageRange(150, 150),
    0,
    0,
    5000
    )
}
function Isnightfunction () {
    if (Night) {
        multilights.toggleLighting(true)
        multilights.addLightSource(TheEnemy, 12)
        multilights.addLightSource(TheEnemy2, 12)
        multilights.addLightSource(TheEnemy3, 12)
        multilights.addLightSource(The_Player, 12)
        multilights.addFlashLightSource(
        The_Player,
        0,
        64,
        54
        )
        multilights.addFlashLightSource(
        TheEnemy,
        0,
        64,
        54
        )
        multilights.addFlashLightSource(
        TheEnemy2,
        0,
        64,
        54
        )
        multilights.addFlashLightSource(
        TheEnemy3,
        0,
        64,
        54
        )
    }
}
function Open_Pit_Menu2 () {
    myMenu = miniMenu.createMenu(
    miniMenu.createMenuItem("Soft", img`
        . 2 2 2 2 2 2 . 
        2 2 2 2 2 2 2 2 
        2 2 2 . . 2 2 2 
        2 2 . . . . 2 2 
        2 2 . . . . 2 2 
        2 2 2 . . 2 2 2 
        2 2 2 2 2 2 2 2 
        . 2 2 2 2 2 2 . 
        `),
    miniMenu.createMenuItem("Medium", img`
        . 4 4 4 4 4 4 . 
        4 4 4 4 4 4 4 4 
        4 4 4 . . 4 4 4 
        4 4 . . . . 4 4 
        4 4 . . . . 4 4 
        4 4 4 . . 4 4 4 
        4 4 4 4 4 4 4 4 
        . 4 4 4 4 4 4 . 
        `),
    miniMenu.createMenuItem("Hard", img`
        . 1 1 1 1 1 1 . 
        1 1 1 1 1 1 1 1 
        1 1 1 . . 1 1 1 
        1 1 . . . . 1 1 
        1 1 . . . . 1 1 
        1 1 1 . . 1 1 1 
        1 1 1 1 1 1 1 1 
        . 1 1 1 1 1 1 . 
        `),
    miniMenu.createMenuItem("Exit", img`
        . . . . . . . . 
        . . 4 . . . . . 
        . 4 4 . . . . . 
        4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 
        . 4 4 . . . . . 
        . . 4 . . . . . 
        . . . . . . . . 
        `)
    )
    myMenu.z = 150
    miniMenu.setDimensions(myMenu, 100, 100)
    miniMenu.setTitle(myMenu, "Pit")
    miniMenu.setStyleProperty(myMenu, miniMenu.StyleKind.DefaultAndSelected, miniMenu.StyleProperty.Background, 15)
    miniMenu.setStyleProperty(myMenu, miniMenu.StyleKind.Default, miniMenu.StyleProperty.Foreground, 14)
    miniMenu.setStyleProperty(myMenu, miniMenu.StyleKind.DefaultAndSelected, miniMenu.StyleProperty.Border, 1)
    miniMenu.setStyleProperty(myMenu, miniMenu.StyleKind.DefaultAndSelected, miniMenu.StyleProperty.BorderColor, 4)
    miniMenu.setStyleProperty(myMenu, miniMenu.StyleKind.Title, miniMenu.StyleProperty.BorderColor, 4)
    myMenu.setFlag(SpriteFlag.RelativeToCamera, true)
    myMenu.setPosition(52, 99)
    miniMenu.onButtonPressed(myMenu, miniMenu.Button.A, function (selection, selectedIndex) {
        if (selectedIndex == 3) {
            miniMenu.close(myMenu)
            Open_Pit_Menu()
        } else if (selectedIndex == 0) {
            miniMenu.setStyleProperty(myMenu, miniMenu.StyleKind.Default, miniMenu.StyleProperty.Foreground, 10)
            miniMenu.setStyleProperty(myMenu, miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Foreground, 11)
            sprites.setDataNumber(The_Player, "tireaffect", -20)
            sprites.setDataNumber(The_Player, "tirelife", 70)
            Notification("Equipped", img`
                . 2 2 2 2 2 2 . 
                2 2 2 2 2 2 2 2 
                2 2 2 . . 2 2 2 
                2 2 . . . . 2 2 
                2 2 . . . . 2 2 
                2 2 2 . . 2 2 2 
                2 2 2 2 2 2 2 2 
                . 2 2 2 2 2 2 . 
                `)
            miniMenu.setButtonEventsEnabled(myMenu, false)
            timer.after(4000, function () {
                miniMenu.setButtonEventsEnabled(myMenu, true)
                miniMenu.setStyleProperty(myMenu, miniMenu.StyleKind.Default, miniMenu.StyleProperty.Foreground, 14)
                miniMenu.setStyleProperty(myMenu, miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Foreground, 1)
            })
        } else if (selectedIndex == 1) {
            miniMenu.setStyleProperty(myMenu, miniMenu.StyleKind.Default, miniMenu.StyleProperty.Foreground, 10)
            miniMenu.setStyleProperty(myMenu, miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Foreground, 11)
            sprites.setDataNumber(The_Player, "tireaffect", 0)
            sprites.setDataNumber(The_Player, "tirelife", 100)
            Notification("Equipped", img`
                . 4 4 4 4 4 4 . 
                4 4 4 4 4 4 4 4 
                4 4 4 . . 4 4 4 
                4 4 . . . . 4 4 
                4 4 . . . . 4 4 
                4 4 4 . . 4 4 4 
                4 4 4 4 4 4 4 4 
                . 4 4 4 4 4 4 . 
                `)
            miniMenu.setButtonEventsEnabled(myMenu, false)
            timer.after(4000, function () {
                miniMenu.setButtonEventsEnabled(myMenu, true)
                miniMenu.setStyleProperty(myMenu, miniMenu.StyleKind.Default, miniMenu.StyleProperty.Foreground, 14)
                miniMenu.setStyleProperty(myMenu, miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Foreground, 1)
            })
        } else if (selectedIndex == 2) {
            miniMenu.setStyleProperty(myMenu, miniMenu.StyleKind.Default, miniMenu.StyleProperty.Foreground, 10)
            miniMenu.setStyleProperty(myMenu, miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Foreground, 11)
            sprites.setDataNumber(The_Player, "tireaffect", 20)
            sprites.setDataNumber(The_Player, "tirelife", 150)
            Notification("Equipped", img`
                . 1 1 1 1 1 1 . 
                1 1 1 1 1 1 1 1 
                1 1 1 . . 1 1 1 
                1 1 . . . . 1 1 
                1 1 . . . . 1 1 
                1 1 1 . . 1 1 1 
                1 1 1 1 1 1 1 1 
                . 1 1 1 1 1 1 . 
                `)
            miniMenu.setButtonEventsEnabled(myMenu, false)
            timer.after(4000, function () {
                miniMenu.setButtonEventsEnabled(myMenu, true)
                miniMenu.setStyleProperty(myMenu, miniMenu.StyleKind.Default, miniMenu.StyleProperty.Foreground, 14)
                miniMenu.setStyleProperty(myMenu, miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Foreground, 1)
            })
        }
    })
}
function Load_Menu () {
    Main_Menu_Open = true
    Info_Menu_Open = false
    Car_Menu_Open = false
    scene.setBackgroundImage(img`
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        bbbbbdddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        bbbbbbbbbbbbddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        bbbbbbbbbbbbbbbbbbbbbbfffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        bbbbbbbbbbbbbbbfffffffccccccccccccffffffffffffffffffffffffffffffffffffffffffffcfffcffccfcfccccfffffbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        bbbbbbbbbbfffffccccccccfffffffffffccccccccccccccccccccccccccccccfffffffffcccccccccccaaaaccccfccccccfbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        bbbbbbffffccccccfffffffccccccccccccccccccccccccccccccccccaaaffffffffffffccccccccaaacccccccccc7777777ccbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        bbffffcccccfffffcccccccccccccccccccccccccccccccccccccaaaaaffffffffffffffcccccccccccaaacccccccc77777777ccbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddd
        ffcccccffffccccccccccccccccccccccccccccccccccccccaaaaaafffffffffffffffccccccccccccccccccccccccc777777777ccbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddddddddd
        cccffffcccccccccccccccccccccccccccccccccccccaaaaaaaffffffffffffffffcccccccccccccccccccaaacccccc77777777777ccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddd
        fffccccccccccccccccccccccccccccccccaaaaaaaaaaaafffffffffffffffffcccccccccccccccccccaaacccccccccc77777777777ccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddd
        cccccccccccccccccccccccccccaaaaaaaaaaaaafffffffffffffffffffffccccccccccccccccccccccccaacccccccccc777777777777cbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccccccccccccccccccccccaaaaaaaaaffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccc7777777777777cbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        cccccccccccccccccaaaaaaaaaffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccaaaaacccccca7777777777797cbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        caaaaaaaaaaaaaaaaaaaffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccaccccccca77777777777997cbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ffffaaafffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccaaaacccccccc77777777777997cbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        fffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccaaaccccccaa77777777779997abbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        fffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccaaaaaaaacccccca77777777779997abbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccccccccccccccccccccccfffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccaaaaaaaccccca777777777799997abbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ffffffffffffffffffffffcccccccffffffffffffffffffffccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaacccc7777777777999997abbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        fffffffffffffffffffffffffffffcccccffffffffffffffffcccccccccccccccccccccccccccccccccccccccaaaaaaaaaccc77777777777999997abbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        fffffffffff222222222222222ffffffffcccccccfffffffffffffcccccccccccccccccccccccccccccccccccccaaaaaaaaccc77777777777999997abbbbbbbbbbcccccccbbbbbbbbbbbbbbbbbbbbbbb
        ffffffffffff2333333333333322222222ffffffcccccccccfffffffffffccccccccccccccccccccccccccccccccaaaaaaaaaccc7777777799999997abbbbbbbbcfffffffffcbbbbbbbbbbbbbbbbbbbb
        ffffffffffffffffffffff222333333332222222fffffffffccccccfffffffffcccccccccccccccccccccccccccaaaaaaaaaaaaccc77777799999999ccbbbbbbcffffffffffffcbbbbbbbbbbbbbbbbbb
        fffffffffffffffffffffffffffffff2333333333222222fffffffccccccffffffffccccccccccccccccccccccccaaaaaaaaaaaccccc7777999999997cbbbbbbcffffffffffffffbbbbbbbbbbbbbbbbb
        fffffffffffffffffffffffffffffffffffffff233333333222222fffffcccccfffffffcccccccccccccccccccccaaaaaaaaaaacaacccc77999999999ccbbbbbfffffffffffffffbbbbbbbbbbbbbbbbb
        ffffffffffffffffffffffffffffffffffffffffffffff233333332222fffffcccccfffffcccccccccccccccccccaaaaaaaaaaacaaaaccc79999999997ccbbbbcffffffffffffffbbbbbbbbbbbbbbbbb
        ffffffffffffffffffffffffffffffffffffffffffffffffffff23333332222ffffccccffffccccccccccccccccccaaaaaaaaaaccaaaacccb997779999ccbbbbafffffffffffffcbbbbbbbbbbbbbbbbb
        ccccffffffffffffffffffffffffffffffff3ffffffffffffffffffff2333333222fffcccffffccccccccccccccccaaaaaaaaaaacaaaaaacc7777779997ccbbacffffffffffffcbbbbbbbbbbbbbddddd
        ffffcccccccccccccccccccccccffffffff32fffffffffffffffffffffffff233332fffffcccfffccccccccccccccaaaaaaaaaaacaaaaaaaccc77777999acccffffffffffffcabbbbbdddddddddddddd
        ffffffffffffffffffffffffffcccccccc2322222fffffffffffffffffffffffff232ffffffccffffcccccaaccccccaaaaaaaaaaacaaaaaaacccc777999afffffabaffffcbbbbbbbbbbbbbbddddddddd
        ffffffffffffffffffffffffffffffffffc3333222fffffffffffffffffffffffff222fffffffffffffcccccaaaccccaaaaaaaaaacaaaaaaaacccc777afffffabbbbbbbbbbbbbbbbbbbbbbbbbbdddddd
        fffffffffffffffffffffffffffffffffffc2233332222ffffffffffffffffffffff32ffffffccfffffffcccccaaaccaaaaaaaaaaacaaaaaaaaaccccccafffbbaaaaaaaabbbbbbbbbbbbbbbddddddddd
        ffffffffffffffffffffffffffffffffffffcccc23333332ffffffffffffffffffff32ffffcccccccffffffcccccaaaaaaaaaaaaaaccaaaaaaaaaccccccffab1abbb111baaaabbbbdddddddddddddddd
        fffffffffffffffffffffffffffffffffffffffcccc222333333322222222222222232ffffccccccccccfffffcccccaaaaaaaaaaaaccaaaaaaaaaaaaccffa1111bb1111bbbaaabbbdddddddddddddddd
        fffffffffffffffffffffffffffffffffffffffffffccc222222333333333333333332ffffffffffffffffffffcccccaaaaaaaaaaaccaaaaaaaaaaccaccab1111bb111bbbbbaabbbbbdddddddddddddd
        ffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccc22222222ccffffffffffccccccccccccccccaaaaaaaaaaccaaaaaccccccbbbc1111111bb1bbbbbbbaabbbbbbdddddddddddd
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccffffffffffcccccccccccccccccccaaaaaaaaaccccccccaaaabbbbbb111111bbbbbbbbbbbbabbbbddddddddddddd
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccaaaaaaaaccaacbbbbbbbbbbb111111111bbbbbbbbbbbaabbbbbbbbbddddddd
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccaaaaaaaaaacbbbbbbbbbbb1111111111bbbbbbbbbbffbbbbbbbbbbbbbbdd
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccaaaaaaaacbbbbbbbbbbbb1111111111bbbbbbbbaffabbbbbbbbbbbbbbb
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccaaaaabbbbbbbbbbbbbbbbbbb1111111bbbbbbbaffabbbbbbbbbbbbbbb
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccaaabbbbbbbbbbbbbbbbbbbbbbbb1111bbbbbbbbaffcbbbbbbbbbbbbbbb
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccaaacffabbbbbbbbbbbbbbbbbbbbb11bbbaaaaaaafffabbbbbbbbbbbbbb
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccaaafffffabbbbbbbbbbbbbbbbbbbbbbbbbaaaaacffffabbbbbbbbbbbbbb
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccaccffffffabbbbbbbbbbbbbbbbbbbbbaaaaaaaacffffabbbbbbbbbbbbbb
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccfffffffcbbbbbbbbbbbbbbbbbbbbaabbbaaaccffffabbbbbbbbbbbbbb
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccfffffffffffabbbbbbbbbbbbbbbbbbaabbbbbaaccffffabbbbbbbbbbbbbb
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccfffffffffffcbbbbbbbbbbbbbbbbaabbbbbbbaacfffffcbbbbbbbbbbbbbb
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccffffffffffffabbbbbbbbbbbbbbaabbbbbbbbaacfffffcbbbbbbbbbbbbbb
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccfffffffffffffcbbbbbbbbbbbbaaabbbbbaaaaaacfffffcbbbbbbbbbbbbbb
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccffffffffffffffbbbbbbbbbbaaabbbbaacfffffccffffffcccccccccccccc
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccffffffffffffffcbbbbbbbbaaabbbaaffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccfffffffffffffcbbbbbbbaabbaacffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccfffffffffffffffaaabaaaabbafffffffffffffffffffcfffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccfffffffffffffffaaaaaaabacffffffffffffffffffffcfffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccffffffffffffffffacaaaaacffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccffffffffffffffffcccaacffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        `)
    mytextsprite2 = fancyText.create("Floorit! by Octodemon", 0, 4, fancyText.bold_sans_7)
    mytextsprite2.setPosition(80, 3)
    myMenu2 = miniMenu.createMenu(
    miniMenu.createMenuItem("Cars"),
    miniMenu.createMenuItem("Play"),
    miniMenu.createMenuItem("Info")
    )
    myMenu2.setPosition(46, 119)
    miniMenu.setMenuStyleProperty(myMenu2, miniMenu.MenuStyleProperty.Width, 120)
    miniMenu.setMenuStyleProperty(myMenu2, miniMenu.MenuStyleProperty.Rows, 1)
    miniMenu.setStyleProperty(myMenu2, miniMenu.StyleKind.Default, miniMenu.StyleProperty.Margin, 3)
    miniMenu.setStyleProperty(myMenu2, miniMenu.StyleKind.Default, miniMenu.StyleProperty.Background, -1)
    miniMenu.setStyleProperty(myMenu2, miniMenu.StyleKind.Default, miniMenu.StyleProperty.Foreground, -5)
    miniMenu.setStyleProperty(myMenu2, miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Background, 4)
    miniMenu.setStyleProperty(myMenu2, miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Foreground, 1)
    miniMenu.setStyleProperty(myMenu2, miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Border, 1)
    miniMenu.onSelectionChanged(myMenu2, function (selection, selectedIndex) {
        music.play(music.createSoundEffect(WaveShape.Triangle, 298, 0, 255, 255, 20, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        if (selectedIndex == 0) {
            scene.setBackgroundImage(img`
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffc11111111111111111cfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc11111111111111cffffffffffffffffffffffffffffc11111111111111111cfffffffff
                fffffffcccccccccccccccccffffffffffffffffffffffffffffc11111111111111cfffffffffffffffffffffccccccccccccccffffffffffffffffffffffffffffffcccccccccccccccccffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffc11111111111111cffffffffffffffffffc11111111111111cffffffffffffc111111111111111cfffffffffffffffffc11111111111111cffffffffffffffffffffffffff
                fffffffffffffffffffffffccccccccccccccffffffffffffffffffffccccccccccccccffffffffffffffcccccccccccccccfffffffffffffffffffccccccccccccccfffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffc111111111111cffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc111111111111cfffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddbcfffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcfffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccfffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffcdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcfffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffcbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddbcfffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffcbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddbcfffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffc11111111111111111111111111111111111111111111111111111111111cfffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffcbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddbcfffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffcbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddbcfffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffcdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcfffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccfffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffcdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcfffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffcbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddbcfffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcfffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffc11111111111111111111111111111111111111111111111111111111111cfffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffcbbbbdddddddddbbbbbbbbbbbbddddddddbbbbddddbbddddbbbdddddddbbcfffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffcbbbbbbddddddddddbbbbbbccccccccccccccccbbbbbbbdddddddddbbbbbcfffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffc11111111111111111bffffccffffffffffffccffffb1111111111111111cfffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffcccbbbbbbbbbbbbbbbfffccccffffffffffffccccfffbbbbbbbbbbbbbbcccfffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffcbbbbbbbbbbbbbbbbcffffffcffffffffffffcffffffcbbbbbbbbbbbbbbbcfffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffcbdddddddddbbdddfffffffffccccccccccccfffffffffdddbbdddddddddcfffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffc11111111111cccccffcffffffffffffffffffffffcffccccc1111111111cfffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffcdddddddddbcccccccfcccffffffffffffffffffcccfcccccccbddddddddcfffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffcbdbbddbccccccccffccccccccfcffffffcfccccccccffccccccccbdbbbbcfffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffcbbbbbbcccccccffffccccccfffcffffffcfffccccccffffcccccccbbbbbcfffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffcd1111dcccccccffffcccccffffffffffffffffcccccffffcccccccdd11dcfffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffcbbbbbffffffffffffffccfcffffffffffffffcfccffffffffffffffbbbbcfffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffcbbbbbff2ffffffffffcccffffffffffffffffffcccffffffffff2ffbbbbcfffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffcd111dff22332ffffffffffffffffffffffffffffffffffff23322ff111dcfffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffccccccfff22222332ffffffffffffffffffffffffffff23322222fffcccccfffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffcbbddbfffff2222233332ffffffffffffffffffff2333322222fffffddbbcfffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffcbddddfffffffff222222ffffffffffffffffffff222222fffffffffdddbcfffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffccccccffffffffffffffffffffffffffffffffffffffffffffffffffcccccfffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffcccccbbb111111111111ffffffffffffffffffffffffffffffffffffffffffffffffff11111111bbcccccfffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffcccccccccbbbbbbb111111111ffffffffffffffffffffffffffffffffffffffffffffffffff111111bbbcccccccccccccffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffcccccccbb11111bffffffffffffffffffffffffffffffffffffffffffffffffff1111bbccccccffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffcccccbb1111bffffffffffffffffffffffffffffffffffffffffffffffffff111bbcccccffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffccccccccccbbbbb11111111ffffffffffffffffffffffffffffffffffffffffffffffffff111111bbbbccccccccccccccffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffccccccccbbbbb1111111111ffffffffffffffffffffffffffffffffffffffffffffffffff1111111bbbbbbcccccccccccccffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffcccccccccbbbb11111bfffffffccccccccccccccccccccccccccccccccccccfffffff1111bbbccccccccccccfffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffcccccccbbb1111bffffffcffffffffffffffffffffffffffffffffffffcffffff111bbbccccccffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffcccccccbbb1111bffffffcfccccccccccccccccccccccccccccccccccfcffffffbbbbbbcccccccccfffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffccccccbb111111fffffcffffffffffffffffffffffffffffffffffffffcfffff1111bbccccccccccffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffcccccbbbbbbbfffffcfffccccccccccccccccccccccccccccccccfffcfffffbbbbbcccccffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffccccbbbbbbffffcffffffffffffffffffffffffffffffffffffffffcffffbbbbbccccfffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffccccccbbbcffffcfffffccccccccccccccccccccccccccccccfffffcffffccccccccffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffccccccbbbcfffcffffffffffffffffffffffffffffffffffffffffffcfffcccccccfffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffcccccccbcccffcffffffffffffffffffffffffffffffffffffffffffcffccccccccfffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffccccccbbccccffffffffffffffffffffffffffffffffffffffffffffffccccccccccffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffcccccbbbccccccffffffffffffffffffffffffffffffffffffffffffccccccccccccffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccffcccfffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfccccccccccfccccccccccccccfffffffffffcccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccffffffffffffffffffffffffffffffffffcccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccfffffffcccccffffffcccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccffffffffffffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                `)
        } else if (selectedIndex == 1) {
            scene.setBackgroundImage(img`
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                bbbbbdddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                bbbbbbbbbbbbddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                bbbbbbbbbbbbbbbbbbbbbbfffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                bbbbbbbbbbbbbbbfffffffccccccccccccffffffffffffffffffffffffffffffffffffffffffffcfffcffccfcfccccfffffbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                bbbbbbbbbbfffffccccccccfffffffffffccccccccccccccccccccccccccccccfffffffffcccccccccccaaaaccccfccccccfbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                bbbbbbffffccccccfffffffccccccccccccccccccccccccccccccccccaaaffffffffffffccccccccaaacccccccccc7777777ccbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                bbffffcccccfffffcccccccccccccccccccccccccccccccccccccaaaaaffffffffffffffcccccccccccaaacccccccc77777777ccbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddd
                ffcccccffffccccccccccccccccccccccccccccccccccccccaaaaaafffffffffffffffccccccccccccccccccccccccc777777777ccbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddddddddd
                cccffffcccccccccccccccccccccccccccccccccccccaaaaaaaffffffffffffffffcccccccccccccccccccaaacccccc77777777777ccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddd
                fffccccccccccccccccccccccccccccccccaaaaaaaaaaaafffffffffffffffffcccccccccccccccccccaaacccccccccc77777777777ccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddd
                cccccccccccccccccccccccccccaaaaaaaaaaaaafffffffffffffffffffffccccccccccccccccccccccccaacccccccccc777777777777cbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                ccccccccccccccccccccccaaaaaaaaaffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccc7777777777777cbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                cccccccccccccccccaaaaaaaaaffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccaaaaacccccca7777777777797cbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                caaaaaaaaaaaaaaaaaaaffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccaccccccca77777777777997cbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                ffffaaafffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccaaaacccccccc77777777777997cbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                fffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccaaaccccccaa77777777779997abbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                fffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccaaaaaaaacccccca77777777779997abbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                ccccccccccccccccccccccfffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccaaaaaaaccccca777777777799997abbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                ffffffffffffffffffffffcccccccffffffffffffffffffffccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaacccc7777777777999997abbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                fffffffffffffffffffffffffffffcccccffffffffffffffffcccccccccccccccccccccccccccccccccccccccaaaaaaaaaccc77777777777999997abbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                fffffffffff222222222222222ffffffffcccccccfffffffffffffcccccccccccccccccccccccccccccccccccccaaaaaaaaccc77777777777999997abbbbbbbbbbcccccccbbbbbbbbbbbbbbbbbbbbbbb
                ffffffffffff2333333333333322222222ffffffcccccccccfffffffffffccccccccccccccccccccccccccccccccaaaaaaaaaccc7777777799999997abbbbbbbbcfffffffffcbbbbbbbbbbbbbbbbbbbb
                ffffffffffffffffffffff222333333332222222fffffffffccccccfffffffffcccccccccccccccccccccccccccaaaaaaaaaaaaccc77777799999999ccbbbbbbcffffffffffffcbbbbbbbbbbbbbbbbbb
                fffffffffffffffffffffffffffffff2333333333222222fffffffccccccffffffffccccccccccccccccccccccccaaaaaaaaaaaccccc7777999999997cbbbbbbcffffffffffffffbbbbbbbbbbbbbbbbb
                fffffffffffffffffffffffffffffffffffffff233333333222222fffffcccccfffffffcccccccccccccccccccccaaaaaaaaaaacaacccc77999999999ccbbbbbfffffffffffffffbbbbbbbbbbbbbbbbb
                ffffffffffffffffffffffffffffffffffffffffffffff233333332222fffffcccccfffffcccccccccccccccccccaaaaaaaaaaacaaaaccc79999999997ccbbbbcffffffffffffffbbbbbbbbbbbbbbbbb
                ffffffffffffffffffffffffffffffffffffffffffffffffffff23333332222ffffccccffffccccccccccccccccccaaaaaaaaaaccaaaacccb997779999ccbbbbafffffffffffffcbbbbbbbbbbbbbbbbb
                ccccffffffffffffffffffffffffffffffff3ffffffffffffffffffff2333333222fffcccffffccccccccccccccccaaaaaaaaaaacaaaaaacc7777779997ccbbacffffffffffffcbbbbbbbbbbbbbddddd
                ffffcccccccccccccccccccccccffffffff32fffffffffffffffffffffffff233332fffffcccfffccccccccccccccaaaaaaaaaaacaaaaaaaccc77777999acccffffffffffffcabbbbbdddddddddddddd
                ffffffffffffffffffffffffffcccccccc2322222fffffffffffffffffffffffff232ffffffccffffcccccaaccccccaaaaaaaaaaacaaaaaaacccc777999afffffabaffffcbbbbbbbbbbbbbbddddddddd
                ffffffffffffffffffffffffffffffffffc3333222fffffffffffffffffffffffff222fffffffffffffcccccaaaccccaaaaaaaaaacaaaaaaaacccc777afffffabbbbbbbbbbbbbbbbbbbbbbbbbbdddddd
                fffffffffffffffffffffffffffffffffffc2233332222ffffffffffffffffffffff32ffffffccfffffffcccccaaaccaaaaaaaaaaacaaaaaaaaaccccccafffbbaaaaaaaabbbbbbbbbbbbbbbddddddddd
                ffffffffffffffffffffffffffffffffffffcccc23333332ffffffffffffffffffff32ffffcccccccffffffcccccaaaaaaaaaaaaaaccaaaaaaaaaccccccffab1abbb111baaaabbbbdddddddddddddddd
                fffffffffffffffffffffffffffffffffffffffcccc222333333322222222222222232ffffccccccccccfffffcccccaaaaaaaaaaaaccaaaaaaaaaaaaccffa1111bb1111bbbaaabbbdddddddddddddddd
                fffffffffffffffffffffffffffffffffffffffffffccc222222333333333333333332ffffffffffffffffffffcccccaaaaaaaaaaaccaaaaaaaaaaccaccab1111bb111bbbbbaabbbbbdddddddddddddd
                ffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccc22222222ccffffffffffccccccccccccccccaaaaaaaaaaccaaaaaccccccbbbc1111111bb1bbbbbbbaabbbbbbdddddddddddd
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccffffffffffcccccccccccccccccccaaaaaaaaaccccccccaaaabbbbbb111111bbbbbbbbbbbbabbbbddddddddddddd
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccaaaaaaaaccaacbbbbbbbbbbb111111111bbbbbbbbbbbaabbbbbbbbbddddddd
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccaaaaaaaaaacbbbbbbbbbbb1111111111bbbbbbbbbbffbbbbbbbbbbbbbbdd
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccaaaaaaaacbbbbbbbbbbbb1111111111bbbbbbbbaffabbbbbbbbbbbbbbb
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccaaaaabbbbbbbbbbbbbbbbbbb1111111bbbbbbbaffabbbbbbbbbbbbbbb
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccaaabbbbbbbbbbbbbbbbbbbbbbbb1111bbbbbbbbaffcbbbbbbbbbbbbbbb
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccaaacffabbbbbbbbbbbbbbbbbbbbb11bbbaaaaaaafffabbbbbbbbbbbbbb
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccaaafffffabbbbbbbbbbbbbbbbbbbbbbbbbaaaaacffffabbbbbbbbbbbbbb
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccaccffffffabbbbbbbbbbbbbbbbbbbbbaaaaaaaacffffabbbbbbbbbbbbbb
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccfffffffcbbbbbbbbbbbbbbbbbbbbaabbbaaaccffffabbbbbbbbbbbbbb
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccfffffffffffabbbbbbbbbbbbbbbbbbaabbbbbaaccffffabbbbbbbbbbbbbb
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccfffffffffffcbbbbbbbbbbbbbbbbaabbbbbbbaacfffffcbbbbbbbbbbbbbb
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccffffffffffffabbbbbbbbbbbbbbaabbbbbbbbaacfffffcbbbbbbbbbbbbbb
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccfffffffffffffcbbbbbbbbbbbbaaabbbbbaaaaaacfffffcbbbbbbbbbbbbbb
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccffffffffffffffbbbbbbbbbbaaabbbbaacfffffccffffffcccccccccccccc
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccffffffffffffffcbbbbbbbbaaabbbaaffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccfffffffffffffcbbbbbbbaabbaacffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccfffffffffffffffaaabaaaabbafffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccfffffffffffffffaaaaaaabacffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccffffffffffffffffacaaaaacffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccffffffffffffffffcccaacffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                `)
        } else {
            scene.setBackgroundImage(img`
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999111111111119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999911111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911119999999999111111111999999999999999999999999999999999999999
                9999999999999999111111111111111111111111999999999999999999999999999999999999999999999999999999999999991111111111111111111111111111999999999999999999999999999999
                9999999999999999991111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911119999999999999999999999999999999999
                9999999999999999999999111111111111111111999999999999999999999999999999999999999999999999999999999999991111111111111111111111111111111999999999999999111111199999
                9999999999999999999999999999999999999999111999999999999999999999999999999999999999999999999999999999999999911111111111111199999999999111111111111111999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111999199999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111111111111111111991999199999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111199999999999999999999999999999999999999999999
                9999999999999111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111119999999999999999999999999999999999999999
                9999999999999999999999999999991111111111111111111111111111111111111119999999999999999999999999999999999111111111999999199999999999999999999999999999999999999999
                9999999999999999999999999991111111111111111111111111111111111111199999999999999999999999999919111111111199999999991111999999999999999999999999999999999999999999
                9999911111111111111111111111111999999999999999999999999999999999999999999999999999999999919199991111111111199999999999999999999999999999999999999999999999999999
                9999999999999999111111111111111111111111111111111111111111111111111111111111199999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999991111111111111111111111111111111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999933333333333333333333333333333333333333333333333333999999999999999999999991111111199999999999999999999999999
                99999999999999999999999999999999999999999999accffffccccccccccccccccccc222233333333333333333333333333333333222999999999999999919999991911999999999999999999999999
                9999999999999999999999999999999999999999999ccccccfffffcccccccccccccccc2222233bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb2239999999999911111111119991999919999999999999999999
                99999999999999999999999999999999999999999accffff777777ccccffc77777777cf2222233bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb222999999999991999999111991999999999999999999999999
                999111111111199999999999999999999999999ccccf777777777fcccffff777777777f2222233bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb2239919991111111111111111199999999999999999999999
                99999911111119999999999999999999999999accff7777777777fcccf777777777777cf2233233bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb22999111111111111111999999991111199999999999999
                9999911999911111911119999999999999999cccf77777777777fccccf777777777777cf33323233bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb2229119111111111111111111119999999999999999999
                999991199919999999999999999999999999accf77777777777fccccf7777777777777cf323332333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb22299999999991111999999999999999999999999999
                99991111199119999999999999999999999accf777777777777fccccf7777777777777ccf33323233bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb2229999991111999999999999999999999999999999
                1111199911119999919999999999999999aacf777777777777fccccff77ccccccc777cccf323332233bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb22399999999111111111199999999999999999999
                991111111111111111999999999aacc99accf7777777777777fcccfff77cccccccc7ccccc233333223bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb229999999999999999999999999999999999999
                91119111111111111999999999cffffcacccfffffffcfffcfcfccffff7ccccccccc7cccccf323232233bbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccff999999999999999
                99999999999999999919999999cffffccccccccccccccccccccccccccccccccccccccccccf3222332233bbbbbbbbbbbbccccccccccccccccccccfffffffffffffffffffffffffffff999999999999999
                91111111111111111119999999accffffcccccccccfffffffccccccffccccccccccccccccf2322233223bbbbbbbbbbcccccccccccccffffffffcbbbbbbbb229999999999999ffffff999999999999999
                999111111111999999999999999aaffffccccccccccccccccccccccccfffffffcccccccccf23222332233bbbbbbbbccccccccccccfbbbbbbbbbbbbbbbbbb229999999999999ffffff999999999999999
                99919999999999999999999999ffffffffcccccccccccccccccccccccccccccccccccccccf232222332233333333ccccccccccccfcbbbbbbbbbbbbbbbbbb233222223233fffffffff999999999999999
                91111119999999222222233333222333333333332222ccffffcffcffffffffcfffffffff22222222332222222222cfffffffffffcbbbbbbbb222222223333333333cccccccc33cc33299999999999999
                9999999999922222332222222222222222222223322222222222223333333333333333333333233333322223333222332222333222222222222222233333333333333333333333333399999999999999
                99999999992222222222222222222222222222222222222223333333333333333333333333333333333333322333322223333333cccccccc33333333ccc3333333333333333333333399999999999999
                19991111992222222222222222222222222222222222cccc2233333322233233332222222222333333322222233333333333333333333333333333333333333333333333333333333399999999999999
                9999999922222222222322222222222222222222222222ff222222223333222222333333322222222222223333332333333333333333333333333333333333333333333333333111b299999999999999
                999999992222fcccc223322222222222222222222222222222222222222233322223222223333333222223322333233333333333333333333333333333333333333333111b331b111b99999999999999
                999999992222fffffc2232222222222222222222222222223222222222222223333233333222222232222322333233333333333333333333333333333333bbbbbb3331b111b31bb11199999999999999
                999999992222fffffff2222222222222222222222222222232222222222223333233322223333222232232233332333333333333333333333111b333bbbbbbbbbb3331bb1113b1b11199999999999999
                99999999222fffffffcc23222222222222222222222222232222222222233222222223322222233322232233333333333333333333111b331b111b33abbbbbbbbb333b1b111311111b99919991111199
                99999999222cffcccffc22322222222222222222222222232222222222222222232222233222222232332333333333333333333331b111b31bb11133abbbbbbbbbb3311111b331baa399999119999999
                99999999922fffcfccfc22322222222222222222222222232222222222222233332222222333222222322333333333333333333331bb1113b1b111333bbbbbbbbbb3331baa3333332299991111111199
                99999999922ffffffcfc2232222222222222222222222222222222222222232222cc2222222333333322333333333333333333333b1b111311111b333abbbbbbbbb33333333333333299111111119999
                99999999922cfcfffcff2223222222222222222222222222222222222222232fffffcccc22222233322333333323333333333333311111b331baa3333aabbbbbbaaa3333333333332999999999999999
                99999999992ffcfffcfff2232222222222222222222222232222222322232cffffffffffcc222223323333333323333333333333331baa333333333333aabba333333333333333333999999999999999
                99999999992ffffffcffc2232222222222222222222222232222223222322cffffffffffffc2223322333333332333333333333333333333333333333333333333333333333333333299999999999999
                9999bbbbbb2cffcffcffc222222222222222222222222223222222322332cffffcffffccfffc2233233333333323333333333333333333333333333333333333333333333333333322bbbbbbbbbbbbbb
                bbbb555555fcffcffcffc222322222222222222222222223222222322322cffccffffffccffc2332233333333333333333333333333333333333333333333333333333333fffffffff55555555555555
                5555555555bfffccffffc22222233333222222222222222222222222222cffffffffffffffffc33233333333333333333333333333333333333333333333333333fffffffffffffffc55555555555555
                55555555bbbbcffccffcff2222222222333322233332222222222222232cffcfffcfffffffcff33233333333333333333333333322223333333333333fffffffffffffffffcc22ccc355555555555555
                555555bbbbbbcfffffcffffff2222222222233332222222222222232232cffcfffcffffffffcff3233333333323333322222233333333333ffffffffffffffccc22cc22cc33333333355555555555555
                55555bbbbbcccfffffcfffffccccc222222222223332222222222223232fffffffcffffffffcfc3233333333323333ffffffffffffffffffffcc22222cc22cc2223333333333ffff5555555555555555
                5555bbbbbbbbbccccfffffffcccccccffffffc2222222222322222232322ffffffcfffffffffff3223333333323333ffffffffccccccccccc2222ccc3333333333333fffffffffff5555555555555555
                5555555555bbbbbbccccccccccccccccccccccfffff22222222222232322ffcffffcccfcfffffff32333333333333cfccccccccccc3322333333333333333ffffffffffffffffffff555555555555555
                55555555555555bbbbbbbbbbbccccccccccccccccccffffff22222223322ffcffcfccccfffffffc32333333333333ccccccccc3333333333333333ffffffffffffffffffffffffff5555555555555555
                5555555555555555555566666bbbbbbcccccccccccccccccffffff222222ffffffccccffffffffc32233322222333333322222333333333ffffffffffffffffffffffffffff555555555555555555555
                55555555555555555555566666666666bbccccccccccccccccccfffffcc2fffffffcfcffffffffff32333333333322333233333ffffffffffffffffffffffffffffff555555555555555555555555555
                555555555555555555555555666666666666bbbcccccccccccccccccccffffffffcfffcfffcfffff3233333333222333ffffffaaafffffffffffffffffffff5555555555555555555555555555555555
                555555555555555555555555555666666666666bbbbbccccccccccccccccffffffffffffffcffcff332222222233ffffaaaffacccafffffffcccccccccb5555555555555555555555555555555555555
                5555555555555555555555555555566666666666666bbbbbbcccccccccccffffcffffffffffffcff33333333333ffffacccafacccafccccccccccccccccbbbb555555555555555555555555555555555
                555555555555555555555555555555556666666666666666bbbbbbccccccffffccfffffffffffcfffffffffffffffffacccafacccaccccccccccccccccccbbbbbbb55555555555555555555555555555
                55555555555555555555555555555555555556666666666666666bbbbccccfffffffccfffffffffffffffffffffffffacccaccaaaccccccccccccccccccccbbbbbbbbbbb555555555555555555555555
                555555555555555555555555555555555555555566666666666666666bbbcccfffffffffffffccccccccccccccccccccaaacccccccccccccccccccccccccccbbbbbbbbbbbbb655555555555555555555
                55555555555555555555555555555555555555555556666666666666666bbbbcffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbb655555555555555555555
                55555555555555555555555555555555555555555555555666666666666666bbbcccfffccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbb66655555555555555555555
                55555555555555555555555555555555555555555555555555666666666666666bbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbb666655555555555555555555
                55555555555555555555555555555555555555555555555555555555666666666666bbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbb6666665555555555555555555555
                5555555555555555555555555555555555555555555555555555555555566666666666666bbbbbbbbbbbbbcccccccccccccccccccccccccccccbbbbbbbbbbbbbbb666665555555555555555555555555
                555555555555555555555555555555555555555555555555555555555555555566666666666666bbbbbbbbbbbbbbccccccccccccccccccccbbbbbbbbbbbbbb6666666555555555555555555555555555
                55555555555555555555555555555555555555555555555555555555555555555555666666666666666bbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbb6666666665555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555566666666666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb666666666665555555555555555555555555555555
                55555555555555555555555555555555555555555555555555555555555555555555555555555666666666666666666bbbbbbbbbbbbbbbbbb66666666666665555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555566666666666666666666666666666666666666666655555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555556666666666666666666666666666666666555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555666666666666666666666666555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555566666666666666655555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                .......................................5........................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                `)
        }
    })
    miniMenu.onButtonPressed(myMenu2, miniMenu.Button.A, function (selection, selectedIndex) {
        if (selectedIndex == 0) {
            music.play(music.createSoundEffect(WaveShape.Triangle, 298, 305, 202, 255, 20, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
            color.startFade(color.originalPalette, color.Black, 300)
            color.pauseUntilFadeDone()
            sprites.destroy(myMenu2)
            sprites.destroy(mytextsprite2)
            color.startFade(color.Black, color.originalPalette, 300)
            Load_Menu_Cars()
        } else if (selectedIndex == 1) {
            music.play(music.createSoundEffect(WaveShape.Triangle, 298, 305, 202, 255, 20, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
            color.startFade(color.originalPalette, color.Black, 300)
            color.pauseUntilFadeDone()
            sprites.destroy(myMenu2)
            sprites.destroy(mytextsprite2)
            color.startFade(color.Black, color.originalPalette, 300)
            Load_Menu2()
            Main_Menu_Open = false
        } else {
            music.play(music.createSoundEffect(WaveShape.Triangle, 298, 305, 202, 255, 20, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
            color.startFade(color.originalPalette, color.Black, 300)
            color.pauseUntilFadeDone()
            sprites.destroy(myMenu2)
            sprites.destroy(mytextsprite2)
            color.startFade(color.Black, color.originalPalette, 300)
            Load_Menu_Info()
        }
    })
}
function Circuit_AI (sprite: Sprite, speed: number) {
    if (Game_Staretd) {
        if (Track_Number == 1) {
            timer.background(function () {
                spriteutils.moveToAtSpeed(sprite, spriteutils.point(101 + randint(-4, 4), 69 + randint(-4, 4)), speed + randint(-10, 10), true)
                spriteFx.smoothRotate(sprite, 342, 1000)
                spriteutils.moveToAtSpeed(sprite, spriteutils.point(77 + randint(-2, 2), 76 + randint(-2, 2)), speed + randint(-10, 10), true)
                spriteFx.smoothRotate(sprite, 317, 500)
                spriteutils.moveToAtSpeed(sprite, spriteutils.point(61 + randint(-4, 2), 86 + randint(-4, 2)), speed + randint(-10, 10), true)
                spriteFx.smoothRotate(sprite, 289, 500)
                spriteutils.moveToAtSpeed(sprite, spriteutils.point(48 + randint(-8, 8), 107 + randint(-8, 8)), speed + randint(-10, 10), true)
                spriteFx.smoothRotate(sprite, 269, 500)
                spriteutils.moveToAtSpeed(sprite, spriteutils.point(42 + randint(-2, 2), 129 + randint(-2, 2)), speed + randint(-10, 10), true)
                spriteFx.smoothRotate(sprite, 231, 500)
                spriteutils.moveToAtSpeed(sprite, spriteutils.point(56 + randint(-2, 2), 146 + randint(-2, 2)), speed + randint(-10, 10), true)
                spriteFx.smoothRotate(sprite, 222, 500)
                spriteutils.moveToAtSpeed(sprite, spriteutils.point(87 + randint(-3, 3), 175 + randint(-3, 3)), speed + randint(-10, 10), true)
                spriteFx.smoothRotate(sprite, 228, 500)
                spriteutils.moveToAtSpeed(sprite, spriteutils.point(125 + randint(-3, 3), 211 + randint(-3, 3)), speed + randint(-10, 10), true)
                spriteFx.smoothRotate(sprite, 239, 200)
                spriteutils.moveToAtSpeed(sprite, spriteutils.point(134 + randint(-3, 3), 225 + randint(-3, 3)), speed + randint(-10, 10), true)
                spriteFx.smoothRotate(sprite, 247, 200)
                spriteutils.moveToAtSpeed(sprite, spriteutils.point(139 + randint(-3, 3), 240 + randint(-3, 3)), speed + randint(-10, 10), true)
                spriteFx.smoothRotate(sprite, 274, 200)
                spriteutils.moveToAtSpeed(sprite, spriteutils.point(142 + randint(-3, 3), 256 + randint(-3, 3)), speed + randint(-10, 10), true)
                spriteFx.smoothRotate(sprite, 283, 500)
                spriteutils.moveToAtSpeed(sprite, spriteutils.point(137 + randint(-3, 3), 272 + randint(-3, 3)), speed + randint(-10, 10), true)
                spriteFx.smoothRotate(sprite, 270, 500)
                spriteutils.moveToAtSpeed(sprite, spriteutils.point(120 + randint(-3, 3), 315 + randint(-3, 3)), speed + randint(-10, 10), true)
                spriteFx.smoothRotate(sprite, 291, 500)
                spriteutils.moveToAtSpeed(sprite, spriteutils.point(110 + randint(-3, 3), 383 + randint(-3, 3)), speed + randint(-10, 10), true)
                spriteFx.smoothRotate(sprite, 328, 500)
                spriteutils.moveToAtSpeed(sprite, spriteutils.point(98 + randint(-3, 3), 396 + randint(-3, 3)), speed + randint(-10, 10), true)
                spriteFx.smoothRotate(sprite, 319, 500)
                spriteutils.moveToAtSpeed(sprite, spriteutils.point(71, 416), speed, true)
                spriteFx.smoothRotate(sprite, 288, 500)
                spriteutils.moveToAtSpeed(sprite, spriteutils.point(50, 447), speed, true)
                spriteFx.smoothRotate(sprite, 269, 500)
                spriteutils.moveToAtSpeed(sprite, spriteutils.point(45, 467), speed, true)
                spriteFx.smoothRotate(sprite, 229, 500)
                spriteutils.moveToAtSpeed(sprite, spriteutils.point(54, 488), speed, true)
                spriteFx.smoothRotate(sprite, 203, 500)
                spriteutils.moveToAtSpeed(sprite, spriteutils.point(78, 507), speed, true)
                spriteFx.smoothRotate(sprite, 178, 500)
                spriteutils.moveToAtSpeed(sprite, spriteutils.point(99, 517), speed, true)
                spriteFx.smoothRotate(sprite, 160, 500)
                spriteutils.moveToAtSpeed(sprite, spriteutils.point(122, 509), speed, true)
                spriteFx.smoothRotate(sprite, 135, 500)
                spriteutils.moveToAtSpeed(sprite, spriteutils.point(188 + randint(-3, 3), 459 + randint(-3, 3)), speed + randint(-10, 10), true)
                spriteFx.smoothRotate(sprite, 115, 500)
                spriteutils.moveToAtSpeed(sprite, spriteutils.point(231 + randint(-3, 3), 393 + randint(-3, 3)), speed + randint(-10, 10), true)
                spriteFx.smoothRotate(sprite, 96, 500)
                spriteutils.moveToAtSpeed(sprite, spriteutils.point(230 + randint(-3, 3), 364 + randint(-3, 3)), speed + randint(-10, 10), true)
                spriteFx.smoothRotate(sprite, 90, 500)
                randomnumber = randint(1, 2)
                if (randomnumber == 1) {
                    spriteFx.smoothRotate(sprite, 90, 500)
                    spriteutils.moveToAtSpeed(sprite, spriteutils.point(235, 315), speed + randint(-10, 10), true)
                    spriteFx.smoothRotate(sprite, 126, 500)
                    spriteutils.moveToAtSpeed(sprite, spriteutils.point(248, 285), speed + randint(-20, -10), true)
                    spriteFx.smoothRotate(sprite, 134, 500)
                    spriteutils.moveToAtSpeed(sprite, spriteutils.point(262, 265), speed + randint(-20, -10), true)
                } else if (randomnumber == 2) {
                    if (sprites.readDataBoolean(sprite, "pitting") == true) {
                    	
                    } else {
                        spriteutils.moveToAtSpeed(sprite, spriteutils.point(232, 167), speed + randint(-1, 20), true)
                        spriteFx.smoothRotate(sprite, 80, 500)
                        spriteutils.moveToAtSpeed(sprite, spriteutils.point(222, 103), speed + randint(-1, 20), true)
                        spriteFx.smoothRotate(sprite, 57, 500)
                        spriteutils.moveToAtSpeed(sprite, spriteutils.point(211, 67), speed + randint(-1, 20), true)
                        spriteFx.smoothRotate(sprite, 19, 250)
                        spriteutils.moveToAtSpeed(sprite, spriteutils.point(196, 55), speed + randint(-1, 20), true)
                        spriteFx.smoothRotate(sprite, 0, 250)
                        spriteutils.moveToAtSpeed(sprite, spriteutils.point(110, 60), speed + randint(-1, 20), true)
                    }
                }
            })
        } else if (Track_Number == 2) {
            timer.background(function () {
                spriteutils.moveToAtSpeed(sprite, spriteutils.point(1100 + randint(-3, 3), 296), speed + randint(-10, 10), true)
                spriteFx.smoothRotate(sprite, 168, 200)
                spriteutils.moveToAtSpeed(sprite, spriteutils.point(1119 + randint(-3, 3), 286), speed + randint(-10, 10), true)
                spriteFx.smoothRotate(sprite, 147, 150)
                spriteutils.moveToAtSpeed(sprite, spriteutils.point(1142 + randint(-3, 3), 268), speed + randint(-10, 10), true)
                spriteFx.smoothRotate(sprite, 127, 250)
                spriteutils.moveToAtSpeed(sprite, spriteutils.point(1154 + randint(-3, 3), 248), speed + randint(-10, 10), true)
                spriteFx.smoothRotate(sprite, 109, 250)
                spriteutils.moveToAtSpeed(sprite, spriteutils.point(1154 + randint(-3, 3), 230), speed + randint(-10, 10), true)
                spriteFx.smoothRotate(sprite, 90, 150)
                spriteutils.moveToAtSpeed(sprite, spriteutils.point(1149 + randint(-3, 3), 190), speed + randint(-10, 10), true)
                spriteFx.smoothRotate(sprite, 81, 150)
                spriteutils.moveToAtSpeed(sprite, spriteutils.point(1135 + randint(-3, 3), 133), speed + randint(-10, 10), true)
                spriteFx.smoothRotate(sprite, 100, 200)
                spriteutils.moveToAtSpeed(sprite, spriteutils.point(1131 + randint(-3, 3), 67), speed + randint(-10, 10), true)
                spriteFx.smoothRotate(sprite, 131, 220)
                spriteutils.moveToAtSpeed(sprite, spriteutils.point(1150 + randint(-3, 3), 44), speed + randint(-10, 10), true)
                spriteFx.smoothRotate(sprite, 157, 220)
                spriteutils.moveToAtSpeed(sprite, spriteutils.point(1172 + randint(-3, 3), 37), speed + randint(-10, 10), true)
                spriteFx.smoothRotate(sprite, 180, 220)
                spriteutils.moveToAtSpeed(sprite, spriteutils.point(1216 + randint(-3, 3), 53), speed + randint(-10, 10), true)
                spriteFx.smoothRotate(sprite, 221, 220)
                spriteutils.moveToAtSpeed(sprite, spriteutils.point(1234 + randint(-3, 3), 113), speed + randint(-10, 10), true)
                spriteFx.smoothRotate(sprite, 270, 220)
                spriteutils.moveToAtSpeed(sprite, spriteutils.point(1211 + randint(-3, 3), 515), speed + randint(-10, 10), true)
                spriteFx.smoothRotate(sprite, 273, 260)
                spriteutils.moveToAtSpeed(sprite, spriteutils.point(1201 + randint(-3, 3), 541), speed + randint(-10, 10), true)
                spriteFx.smoothRotate(sprite, 305, 150)
                spriteutils.moveToAtSpeed(sprite, spriteutils.point(1184 + randint(-3, 3), 555), speed + randint(-10, 10), true)
                spriteFx.smoothRotate(sprite, 337, 150)
                spriteutils.moveToAtSpeed(sprite, spriteutils.point(1150 + randint(-3, 3), 567), speed + randint(-10, 10), true)
                spriteFx.smoothRotate(sprite, 360, 150)
                spriteutils.moveToAtSpeed(sprite, spriteutils.point(317 + randint(-3, 3), 581), speed + randint(-10, 10), true)
                spriteFx.smoothRotate(sprite, 0, 150)
                spriteutils.moveToAtSpeed(sprite, spriteutils.point(260 + randint(-3, 3), 572), speed + randint(-10, 10), true)
                spriteFx.smoothRotate(sprite, 10, 150)
                spriteutils.moveToAtSpeed(sprite, spriteutils.point(213 + randint(-3, 3), 553), speed + randint(-10, 10), true)
                spriteFx.smoothRotate(sprite, 34, 150)
                spriteutils.moveToAtSpeed(sprite, spriteutils.point(183 + randint(-3, 3), 530), speed + randint(-10, 10), true)
                spriteFx.smoothRotate(sprite, 54, 175)
                spriteutils.moveToAtSpeed(sprite, spriteutils.point(176 + randint(-3, 3), 503), speed + randint(-10, 10), true)
                spriteFx.smoothRotate(sprite, 90, 200)
                spriteutils.moveToAtSpeed(sprite, spriteutils.point(179 + randint(-3, 3), 447), speed + randint(-10, 10), true)
                spriteFx.smoothRotate(sprite, 103, 200)
                spriteutils.moveToAtSpeed(sprite, spriteutils.point(199 + randint(-3, 3), 398), speed + randint(-10, 10), true)
                spriteFx.smoothRotate(sprite, 101, 150)
                spriteutils.moveToAtSpeed(sprite, spriteutils.point(201 + randint(-3, 3), 371), speed + randint(-10, 10), true)
                spriteFx.smoothRotate(sprite, 82, 140)
                spriteutils.moveToAtSpeed(sprite, spriteutils.point(190 + randint(-3, 3), 350), speed + randint(-10, 10), true)
                spriteFx.smoothRotate(sprite, 35, 130)
                spriteutils.moveToAtSpeed(sprite, spriteutils.point(87 + randint(-3, 3), 321), speed + randint(-10, 10), true)
                spriteFx.smoothRotate(sprite, 40, 150)
                spriteutils.moveToAtSpeed(sprite, spriteutils.point(60 + randint(-3, 3), 300), speed + randint(-10, 10), true)
                spriteFx.smoothRotate(sprite, 45, 150)
                spriteutils.moveToAtSpeed(sprite, spriteutils.point(35 + randint(-3, 3), 260), speed + randint(-10, 10), true)
                spriteFx.smoothRotate(sprite, 80, 150)
                spriteutils.moveToAtSpeed(sprite, spriteutils.point(37 + randint(-3, 3), 139), speed + randint(-10, 10), true)
                spriteFx.smoothRotate(sprite, 105, 150)
                spriteutils.moveToAtSpeed(sprite, spriteutils.point(57 + randint(-3, 3), 93), speed + randint(-10, 10), true)
                spriteFx.smoothRotate(sprite, 145, 175)
                spriteutils.moveToAtSpeed(sprite, spriteutils.point(90 + randint(-3, 3), 72), speed + randint(-10, 10), true)
                spriteFx.smoothRotate(sprite, 167, 200)
                spriteutils.moveToAtSpeed(sprite, spriteutils.point(125 + randint(-3, 3), 69), speed + randint(-10, 10), true)
                spriteFx.smoothRotate(sprite, 180, 200)
                spriteutils.moveToAtSpeed(sprite, spriteutils.point(174 + randint(-3, 3), 62), speed + randint(-10, 10), true)
                spriteFx.smoothRotate(sprite, 180, 200)
                spriteutils.moveToAtSpeed(sprite, spriteutils.point(254 + randint(-3, 3), 90), speed + randint(-10, 10), true)
                spriteFx.smoothRotate(sprite, 210, 200)
                spriteutils.moveToAtSpeed(sprite, spriteutils.point(305 + randint(-3, 3), 135), speed + randint(-10, 10), true)
                spriteFx.smoothRotate(sprite, 242, 200)
                spriteutils.moveToAtSpeed(sprite, spriteutils.point(321 + randint(-3, 3), 182), speed + randint(-10, 10), true)
                spriteFx.smoothRotate(sprite, 270, 200)
                spriteutils.moveToAtSpeed(sprite, spriteutils.point(308 + randint(-3, 3), 225), speed + randint(-10, 10), true)
                spriteFx.smoothRotate(sprite, 288, 200)
                spriteutils.moveToAtSpeed(sprite, spriteutils.point(298 + randint(-3, 3), 261), speed + randint(-10, 10), true)
                spriteFx.smoothRotate(sprite, 288, 200)
                spriteutils.moveToAtSpeed(sprite, spriteutils.point(301 + randint(-3, 3), 312), speed + randint(-10, 10), true)
                spriteFx.smoothRotate(sprite, 231, 200)
                spriteutils.moveToAtSpeed(sprite, spriteutils.point(335 + randint(-3, 3), 325), speed + randint(-10, 10), true)
                spriteFx.smoothRotate(sprite, 190, 200)
                spriteutils.moveToAtSpeed(sprite, spriteutils.point(360 + randint(-3, 3), 330), speed + randint(-10, 10), true)
                spriteFx.smoothRotate(sprite, 180, 200)
                randomnumber = randint(1, 2)
                if (randomnumber == 1) {
                    spriteutils.moveToAtSpeed(sprite, spriteutils.point(435, 242), speed, true)
                    spriteFx.smoothRotate(sprite, 180, 200)
                } else if (randomnumber == 2) {
                    spriteutils.moveToAtSpeed(sprite, spriteutils.point(1047, 312), speed + randint(-10, 10), true)
                }
            })
        } else if (Track_Number == 3) {
            timer.background(function () {
                spriteutils.moveToAtSpeed(sprite, spriteutils.point(383, 110), speed + randint(-10, 10), true)
                spriteFx.smoothRotate(sprite, 201, 250)
                spriteutils.moveToAtSpeed(sprite, spriteutils.point(427, 117), speed, true)
                spriteFx.smoothRotate(sprite, 242, 250)
                spriteutils.moveToAtSpeed(sprite, spriteutils.point(451, 132), speed, true)
                spriteFx.smoothRotate(sprite, 281, 250)
                spriteutils.moveToAtSpeed(sprite, spriteutils.point(454, 168), speed, true)
                spriteFx.smoothRotate(sprite, 323, 250)
                spriteutils.moveToAtSpeed(sprite, spriteutils.point(432, 194), speed, true)
                spriteutils.moveToAtSpeed(sprite, spriteutils.point(370, 218), speed, true)
                spriteFx.smoothRotate(sprite, 290, 250)
                spriteutils.moveToAtSpeed(sprite, spriteutils.point(340, 266), speed, true)
                spriteFx.smoothRotate(sprite, 216, 400)
                spriteutils.moveToAtSpeed(sprite, spriteutils.point(363, 321), speed, true)
                spriteFx.smoothRotate(sprite, 213, 250)
                spriteutils.moveToAtSpeed(sprite, spriteutils.point(419, 353), speed, true)
                spriteFx.smoothRotate(sprite, 240, 250)
                spriteutils.moveToAtSpeed(sprite, spriteutils.point(428, 371), speed, true)
                spriteFx.smoothRotate(sprite, 290, 250)
                spriteutils.moveToAtSpeed(sprite, spriteutils.point(430, 400), speed, true)
                spriteFx.smoothRotate(sprite, 340, 250)
                spriteutils.moveToAtSpeed(sprite, spriteutils.point(407, 431), speed, true)
                spriteFx.smoothRotate(sprite, 0, 250)
                spriteutils.moveToAtSpeed(sprite, spriteutils.point(363, 432), speed, true)
                spriteutils.moveToAtSpeed(sprite, spriteutils.point(130, 397), speed, true)
                spriteFx.smoothRotate(sprite, 30, 250)
                spriteutils.moveToAtSpeed(sprite, spriteutils.point(80, 390), speed, true)
                spriteFx.smoothRotate(sprite, 70, 250)
                spriteutils.moveToAtSpeed(sprite, spriteutils.point(59, 365), speed, true)
                spriteFx.smoothRotate(sprite, 90, 250)
                spriteutils.moveToAtSpeed(sprite, spriteutils.point(52, 307), speed, true)
                spriteFx.smoothRotate(sprite, 147, 250)
                spriteutils.moveToAtSpeed(sprite, spriteutils.point(69, 269), speed, true)
                spriteFx.smoothRotate(sprite, 180, 250)
                spriteutils.moveToAtSpeed(sprite, spriteutils.point(104, 261), speed, true)
                spriteFx.smoothRotate(sprite, 215, 250)
                spriteutils.moveToAtSpeed(sprite, spriteutils.point(135, 270), speed, true)
                spriteFx.smoothRotate(sprite, 225, 250)
                spriteutils.moveToAtSpeed(sprite, spriteutils.point(154, 288), speed, true)
                spriteFx.smoothRotate(sprite, 217, 250)
                spriteutils.moveToAtSpeed(sprite, spriteutils.point(179, 311), speed, true)
                spriteFx.smoothRotate(sprite, 180, 250)
                spriteutils.moveToAtSpeed(sprite, spriteutils.point(218, 327), speed, true)
                spriteFx.smoothRotate(sprite, 143, 250)
                spriteutils.moveToAtSpeed(sprite, spriteutils.point(255, 318), speed, true)
                spriteFx.smoothRotate(sprite, 90, 250)
                spriteutils.moveToAtSpeed(sprite, spriteutils.point(291, 260), speed, true)
                spriteFx.smoothRotate(sprite, 37, 250)
                spriteutils.moveToAtSpeed(sprite, spriteutils.point(250, 193), speed, true)
                spriteFx.smoothRotate(sprite, 37, 250)
                spriteFx.smoothRotate(sprite, 0, 250)
                spriteutils.moveToAtSpeed(sprite, spriteutils.point(130, 169), speed, true)
                spriteFx.smoothRotate(sprite, 32, 250)
                spriteutils.moveToAtSpeed(sprite, spriteutils.point(89, 158), speed, true)
                randomnumber = randint(1, 2)
                spriteFx.smoothRotate(sprite, 90, 250)
                if (randomnumber == 1) {
                    spriteutils.moveToAtSpeed(sprite, spriteutils.point(83, 75), speed, true)
                } else if (randomnumber == 2) {
                    spriteutils.moveToAtSpeed(sprite, spriteutils.point(70, 128), speed, true)
                    spriteFx.smoothRotate(sprite, 136, 250)
                    spriteutils.moveToAtSpeed(sprite, spriteutils.point(82, 105), speed, true)
                    spriteFx.smoothRotate(sprite, 180, 250)
                    spriteutils.moveToAtSpeed(sprite, spriteutils.point(115, 94), speed, true)
                    spriteutils.moveToAtSpeed(sprite, spriteutils.point(295, 102), speed, true)
                    spriteFx.smoothRotate(sprite, 205, 250)
                    spriteutils.moveToAtSpeed(sprite, spriteutils.point(292, 93), speed, true)
                }
            })
        } else {
        	
        }
    } else {
    	
    }
}
let randomnumber = 0
let mytextsprite2: fancyText.TextSprite = null
let ProtoMenuOpen = false
let SportMenuOpen = false
let barimage: Sprite = null
let bar: Sprite = null
let HyperMenuOpen = false
let CarRaceClass = ""
let Custom_Track_Number = 0
let myTextSprite: fancyText.TextSprite = null
let mySprite: Sprite = null
let CarType = ""
let Car_Display_Image: Sprite = null
let RoadMenuOpen = false
let MandatoryLaps = 0
let player_miliseconds = 0
let player_minutes = 0
let player_seconds = 0
let Valid_Laps = 0
let Laps = 0
let position_in_race = 0
let stop_counting_enemy_laps_3 = false
let stop_counting_enemy_laps_2 = false
let stop_counting_enemy_laps_1 = false
let RaceStarted = false
let HyperCarImages: Image[] = []
let SportsCarImages: Image[] = []
let RoadCarImages: Image[] = []
let Mandatory_Pit_Stops = 0
let Night = false
let Custom_Track_Name = ""
let Custom_Pits = 0
let CustomLaps = 0
let truefalse_gen = false
let Custom_Menu_Open = false
let myMenu: Sprite = null
let PlayerInRacingImage: Image = null
let PlayerInRaceAcceleration = 0
let PlayerInRaceDeaccleration = 0
let PlayerInRaceHandling = 0
let PlayerInRaceSpeed = 0
let Pitting = false
let Track_Number = 0
let Game_Staretd = false
let PrototypeCarImages: Image[] = []
let Explosion: SpreadEffectData = null
let Explosion_Dense: SpreadEffectData = null
let myMenu2: Sprite = null
let myTextSprite3: fancyText.TextSprite = null
let Car_Menu_Open = false
let Info_Menu_Open = false
let Main_Menu_Open = false
let TheEnemy3: Sprite = null
let TheEnemy2: Sprite = null
let TheEnemy: Sprite = null
let The_Player: Sprite = null
let Carname = ""
let ProtoCar4Unlocked = false
let ProtoCar3Unlocked = false
let ProtoCar2Unlocked = false
let ProtoCar1Unlocked = false
let HyperCar4Unlocked = false
let HyperCar3Unlocked = false
let HyperCar2Unlocked = false
let HyperCar1Unlocked = false
let SportCar4Unlocked = false
let SportCar3Unlocked = false
let SportCar2Unlocked = false
let SportCar1Unlocked = false
let RoadCar4Unlocked = false
let RoadCar3Unlocked = false
let RoadCar2Unlocked = false
let Money = 0
let Start = false
let Cutsvene = false
RoadCarsStats()
SportsCarsStats()
HyperCarsStats()
ProtoypeCarsStats()
SFXEffects()
Cutsvene = false
if (!(blockSettings.exists("start"))) {
    blockSettings.writeBoolean("RoadCar1Unlocked", true)
    blockSettings.writeBoolean("RoadCar2Unlocked", false)
    blockSettings.writeBoolean("RoadCar3Unlocked", false)
    blockSettings.writeBoolean("RoadCar4Unlocked", false)
    blockSettings.writeBoolean("SportCar1Unlocked", false)
    blockSettings.writeBoolean("SportCar2Unlocked", false)
    blockSettings.writeBoolean("SportCar3Unlocked", false)
    blockSettings.writeBoolean("SportCar4Unlocked", false)
    blockSettings.writeBoolean("HyperCar1Unlocked", false)
    blockSettings.writeBoolean("HyperCar2Unlocked", false)
    blockSettings.writeBoolean("HyperCar3Unlocked", false)
    blockSettings.writeBoolean("HyperCar4Unlocked", false)
    blockSettings.writeBoolean("ProtoCar1Unlocked", false)
    blockSettings.writeBoolean("ProtoCar2Unlocked", false)
    blockSettings.writeBoolean("ProtoCar3Unlocked", false)
    blockSettings.writeBoolean("ProtoCar4Unlocked", false)
    blockSettings.writeString("start", "start")
    blockSettings.writeNumber("Money", 0)
    blockSettings.writeString("Carname", "Kintaro V4")
    Start = false
} else {
    Start = true
}
Money = blockSettings.readNumber("Money")
let RoadCar1Unlocked = blockSettings.readBoolean("RoadCar1Unlocked")
RoadCar2Unlocked = blockSettings.readBoolean("RoadCar2Unlocked")
RoadCar3Unlocked = blockSettings.readBoolean("RoadCar3Unlocked")
RoadCar4Unlocked = blockSettings.readBoolean("RoadCar4Unlocked")
SportCar1Unlocked = blockSettings.readBoolean("SportCar1Unlocked")
SportCar2Unlocked = blockSettings.readBoolean("SportCar2Unlocked")
SportCar3Unlocked = blockSettings.readBoolean("SportCar3Unlocked")
SportCar4Unlocked = blockSettings.readBoolean("SportCar4Unlocked")
HyperCar1Unlocked = blockSettings.readBoolean("HyperCar1Unlocked")
HyperCar2Unlocked = blockSettings.readBoolean("HyperCar2Unlocked")
HyperCar3Unlocked = blockSettings.readBoolean("HyperCar3Unlocked")
HyperCar4Unlocked = blockSettings.readBoolean("HyperCar4Unlocked")
ProtoCar1Unlocked = blockSettings.readBoolean("ProtoCar1Unlocked")
ProtoCar2Unlocked = blockSettings.readBoolean("ProtoCar2Unlocked")
ProtoCar3Unlocked = blockSettings.readBoolean("ProtoCar3Unlocked")
ProtoCar4Unlocked = blockSettings.readBoolean("ProtoCar4Unlocked")
Carname = blockSettings.readString("Carname")
tiles.setCurrentTilemap(tilemap`level2`)
The_Player = sprites.create(img`
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
TheEnemy = sprites.create(img`
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
    `, SpriteKind.Enemy)
TheEnemy2 = sprites.create(img`
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
    `, SpriteKind.Enemy)
TheEnemy3 = sprites.create(img`
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
    `, SpriteKind.Enemy)
pauseUntil(() => Start)
Load_Menu()
events.regionEvent(SpriteKind.Player, events.createRegionFromLocations(
tiles.getTileLocation(43, 34),
tiles.getTileLocation(43, 36)
), events.RegionEvent.StartOverlapping, function (sprite) {
    if (Track_Number == 2) {
        if (sprite.vx < 0) {
            Valid_Laps += 1
        }
    }
})
game.onUpdate(function () {
    blockSettings.writeNumber("Money", Money)
    blockSettings.writeBoolean("RoadCar1Unlocked", RoadCar1Unlocked)
    blockSettings.writeBoolean("RoadCar2Unlocked", RoadCar2Unlocked)
    blockSettings.writeBoolean("RoadCar3Unlocked", RoadCar3Unlocked)
    blockSettings.writeBoolean("RoadCar4Unlocked", RoadCar4Unlocked)
    blockSettings.writeBoolean("SportCar1Unlocked", SportCar1Unlocked)
    blockSettings.writeBoolean("SportCar2Unlocked", SportCar2Unlocked)
    blockSettings.writeBoolean("SportCar3Unlocked", SportCar3Unlocked)
    blockSettings.writeBoolean("SportCar4Unlocked", SportCar4Unlocked)
    blockSettings.writeBoolean("HyperCar1Unlocked", HyperCar1Unlocked)
    blockSettings.writeBoolean("HyperCar2Unlocked", HyperCar2Unlocked)
    blockSettings.writeBoolean("HyperCar3Unlocked", HyperCar3Unlocked)
    blockSettings.writeBoolean("HyperCar4Unlocked", HyperCar4Unlocked)
    blockSettings.writeBoolean("ProtoCar1Unlocked", ProtoCar1Unlocked)
    blockSettings.writeBoolean("ProtoCar2Unlocked", ProtoCar2Unlocked)
    blockSettings.writeBoolean("ProtoCar3Unlocked", ProtoCar3Unlocked)
    blockSettings.writeBoolean("ProtoCar4Unlocked", ProtoCar4Unlocked)
    blockSettings.writeString("Carname", Carname)
})
game.onUpdate(function () {
    if (Game_Staretd) {
        if (Night) {
            multilights.flashlightSourceAttachedTo(The_Player).direction = sprites.readDataNumber(The_Player, "direction") + 180
        }
        if (Pitting) {
            if (Night) {
                sprites.setDataNumber(The_Player, "direction", spriteFx.rotation(The_Player))
            }
        } else {
            if (RaceStarted) {
                carcontrol(The_Player, PlayerInRaceSpeed, PlayerInRaceHandling, PlayerInRaceDeaccleration, PlayerInRaceAcceleration)
            }
        }
    }
})
game.onUpdate(function () {
    if (Game_Staretd) {
        sprites.setDataNumber(TheEnemy, "direction", spriteFx.rotation(TheEnemy))
        sprites.setDataNumber(TheEnemy2, "direction", spriteFx.rotation(TheEnemy2))
        sprites.setDataNumber(TheEnemy3, "direction", spriteFx.rotation(TheEnemy3))
        if (Night) {
            multilights.flashlightSourceAttachedTo(TheEnemy).direction = sprites.readDataNumber(TheEnemy, "direction") + 180
            multilights.flashlightSourceAttachedTo(TheEnemy2).direction = sprites.readDataNumber(TheEnemy2, "direction") + 180
            multilights.flashlightSourceAttachedTo(TheEnemy3).direction = sprites.readDataNumber(TheEnemy3, "direction") + 180
        }
    }
})
game.onUpdateInterval(5000, function () {
    if (RaceStarted) {
        if (sprites.readDataNumber(The_Player, "fuel") <= 0 || sprites.readDataNumber(The_Player, "damage") >= 100) {
            End_Bad()
        }
    }
})
events.regionEvent(SpriteKind.Player, events.createRegionFromLocations(
tiles.getTileLocation(66, 18),
tiles.getTileLocation(66, 20)
), events.RegionEvent.StartOverlapping, function (sprite) {
    if (Track_Number == 2) {
        if (sprite.vx > 0) {
            Laps += 1
        }
        if (Laps > MandatoryLaps) {
            position_in_race += 1
            sprites.setDataNumber(sprite, "place in race", position_in_race)
            sprite.vx = 0
            sprite.vy = 0
            End()
            sprite.vx = 0
            sprite.vy = 0
        }
    }
})
events.regionEvent(SpriteKind.Enemy, events.createRegionFromLocations(
tiles.getTileLocation(6, 2),
tiles.getTileLocation(6, 4)
), events.RegionEvent.StartOverlapping, function (sprite) {
    timer.after(100, function () {
        if (Track_Number == 1) {
            if (sprites.readDataNumber(sprite, "laps") >= MandatoryLaps) {
                position_in_race += 1
                sprites.setDataNumber(sprite, "place in race", position_in_race)
                sprite.vx = 0
                sprite.vy = 0
                sprite.setKind(SpriteKind.ded)
            } else {
                sprites.changeDataNumberBy(sprite, "laps", 1)
                Circuit_AI(sprite, sprites.readDataNumber(sprite, "speed"))
            }
        }
    })
})
events.regionEvent(SpriteKind.Enemy, events.createRegionFromLocations(
tiles.getTileLocation(26, 13),
tiles.getTileLocation(29, 15)
), events.RegionEvent.StartOverlapping, function (sprite) {
    if (Track_Number == 2) {
        PitFunction(sprite, sprites.readDataNumber(sprite, "playernumber"))
        sprites.setDataBoolean(sprite, "pitting", true)
        sprites.changeDataNumberBy(sprite, "pits", 1)
    }
})
events.regionEvent(SpriteKind.Enemy, events.createRegionFromLocations(
tiles.getTileLocation(16, 16),
tiles.getTileLocation(17, 16)
), events.RegionEvent.StartOverlapping, function (sprite) {
    if (Track_Number == 1) {
        PitFunction(sprite, sprites.readDataNumber(sprite, "playernumber"))
        sprites.setDataBoolean(sprite, "pitting", true)
        sprites.changeDataNumberBy(sprite, "pits", 1)
    }
})
events.regionEvent(SpriteKind.Enemy, events.createRegionFromCoordinates(
events.createCoordinate(35, 74),
events.createCoordinate(97, 74)
), events.RegionEvent.StartOverlapping, function (sprite) {
    if (Track_Number == 3) {
        PitFunction(sprite, sprites.readDataNumber(sprite, "playernumber"))
        sprites.setDataBoolean(sprite, "pitting", true)
        sprites.changeDataNumberBy(sprite, "pits", 1)
    }
})
events.regionEvent(SpriteKind.Player, events.createRegionFromLocations(
tiles.getTileLocation(19, 5),
tiles.getTileLocation(19, 7)
), events.RegionEvent.StartOverlapping, function (sprite) {
    if (Track_Number == 3) {
        if (sprite.vx > 0) {
            Laps += 1
        }
        if (Laps > MandatoryLaps) {
            position_in_race += 1
            sprites.setDataNumber(sprite, "place in race", position_in_race)
            sprite.vx = 0
            sprite.vy = 0
            End()
            sprite.vx = 0
            sprite.vy = 0
        }
    }
})
events.regionEvent(SpriteKind.Enemy, events.createRegionFromLocations(
tiles.getTileLocation(19, 5),
tiles.getTileLocation(19, 7)
), events.RegionEvent.StartOverlapping, function (sprite) {
    timer.after(100, function () {
        if (Track_Number == 3) {
            if (sprites.readDataNumber(sprite, "laps") >= MandatoryLaps) {
                position_in_race += 1
                sprites.setDataNumber(sprite, "place in race", position_in_race)
                sprite.vx = 0
                sprite.vy = 0
                sprite.setKind(SpriteKind.ded)
            } else {
                sprites.changeDataNumberBy(sprite, "laps", 1)
                Circuit_AI(sprite, sprites.readDataNumber(sprite, "speed"))
            }
        }
    })
})
game.onUpdateInterval(1, function () {
    if (Game_Staretd) {
        if (RaceStarted) {
            player_miliseconds += 20
            if (player_miliseconds >= 1000) {
                player_seconds += 1
                player_miliseconds = 0
                if (player_seconds >= 60) {
                    player_minutes += 1
                    player_seconds = 0
                }
            }
        }
    }
})
events.regionEvent(SpriteKind.Enemy, events.createRegionFromLocations(
tiles.getTileLocation(66, 18),
tiles.getTileLocation(66, 20)
), events.RegionEvent.StartOverlapping, function (sprite) {
    timer.after(100, function () {
        if (Track_Number == 2) {
            if (sprites.readDataNumber(sprite, "laps") >= MandatoryLaps) {
                position_in_race += 1
                sprites.setDataNumber(sprite, "place in race", position_in_race)
                sprite.vx = 0
                sprite.vy = 0
                sprite.setKind(SpriteKind.ded)
            } else {
                sprites.changeDataNumberBy(sprite, "laps", 1)
                Circuit_AI(sprite, sprites.readDataNumber(sprite, "speed"))
            }
        }
    })
})
events.regionEvent(SpriteKind.Player, events.createRegionFromLocations(
tiles.getTileLocation(26, 13),
tiles.getTileLocation(29, 16)
), events.RegionEvent.StartOverlapping, function (sprite) {
    if (Track_Number == 2) {
        Pitting = true
        PitFunction(sprite, sprites.readDataNumber(sprite, "playernumber"))
        sprites.changeDataNumberBy(sprite, "pits", 1)
    }
})
events.regionEvent(SpriteKind.Player, events.createRegionFromLocations(
tiles.getTileLocation(6, 2),
tiles.getTileLocation(6, 4)
), events.RegionEvent.StartOverlapping, function (sprite) {
    if (Track_Number == 1) {
        if (sprite.vx < 0) {
            Laps += 1
        }
        if (Laps > MandatoryLaps) {
            position_in_race += 1
            sprites.setDataNumber(sprite, "place in race", position_in_race)
            sprite.vx = 0
            sprite.vy = 0
            End()
            sprite.vx = 0
            sprite.vy = 0
        }
    }
})
events.regionEvent(SpriteKind.Player, events.createRegionFromLocations(
tiles.getTileLocation(7, 32),
tiles.getTileLocation(7, 28)
), events.RegionEvent.StartOverlapping, function (sprite) {
    if (Track_Number == 1) {
        if (sprite.vx > 0) {
            Valid_Laps += 1
        }
    }
})
events.regionEvent(SpriteKind.Player, events.createRegionFromLocations(
tiles.getTileLocation(8, 9),
tiles.getTileLocation(8, 11)
), events.RegionEvent.StartOverlapping, function (sprite) {
    if (Track_Number == 3) {
        if (sprite.vx < 0) {
            Valid_Laps += 1
        }
    }
})
events.regionEvent(SpriteKind.Player, events.createRegionFromCoordinates(
events.createCoordinate(35, 74),
events.createCoordinate(97, 74)
), events.RegionEvent.StartOverlapping, function (sprite) {
    if (Track_Number == 3) {
        Pitting = true
        PitFunction(sprite, sprites.readDataNumber(sprite, "playernumber"))
        sprites.changeDataNumberBy(sprite, "pits", 1)
    }
})
events.regionEvent(SpriteKind.Player, events.createRegionFromLocations(
tiles.getTileLocation(16, 16),
tiles.getTileLocation(17, 16)
), events.RegionEvent.StartOverlapping, function (sprite) {
    if (Track_Number == 1) {
        Pitting = true
        PitFunction(sprite, sprites.readDataNumber(sprite, "playernumber"))
        sprites.changeDataNumberBy(sprite, "pits", 1)
    }
})
game.onUpdateInterval(11, function () {
    if (Game_Staretd) {
        if (RaceStarted) {
            if (Laps > MandatoryLaps) {
            	
            } else {
                sprites.changeDataNumberBy(The_Player, "realmiliseconds", 1)
            }
            if (sprites.readDataNumber(TheEnemy, "laps") > MandatoryLaps) {
            	
            } else {
                sprites.changeDataNumberBy(TheEnemy, "realmiliseconds", 1)
            }
            if (sprites.readDataNumber(TheEnemy2, "laps") > MandatoryLaps) {
            	
            } else {
                sprites.changeDataNumberBy(TheEnemy2, "realmiliseconds", 1)
            }
            if (sprites.readDataNumber(TheEnemy3, "laps") > MandatoryLaps) {
            	
            } else {
                sprites.changeDataNumberBy(TheEnemy3, "realmiliseconds", 1)
            }
        }
    }
})
