input.onButtonPressed(Button.A, function () {
    wuKong.setAllMotor(vitesse, vitesse)
    basic.pause(5000)
    wuKong.setAllMotor(negVitesse, 0)
    basic.pause(rotation_time)
    wuKong.setAllMotor(vitesse, vitesse)
    basic.pause(3000)
    wuKong.setAllMotor(negVitesse, 0)
    basic.pause(rotation_time)
    wuKong.setAllMotor(vitesse, vitesse)
    basic.pause(5000)
    wuKong.setAllMotor(negVitesse, 0)
    basic.pause(rotation_time)
    wuKong.setAllMotor(vitesse, vitesse)
    basic.pause(3000)
    wuKong.stopAllMotor()
})
input.onButtonPressed(Button.AB, function () {
    wuKong.stopAllMotor()
})
let rotation_time = 0
let negVitesse = 0
let vitesse = 0
vitesse = -30
negVitesse = 15
rotation_time = 1200
