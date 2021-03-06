export default class Info {
  constructor(images) {
    this.images = images
  }

  update() {

  }

  render(ctx, player) {
    ctx.font = '15px Verdana'
    ctx.fillStyle = '#000080'
    ctx.fillRect(0,0,200,600)

	  ctx.fillStyle = 'white'
    ctx.fillText('Money: $' + player.money, 10, 25)

    ctx.fillStyle = 'white'
    ctx.fillText('Health: ' + player.health, 10, 45)
    ctx.fillRect(10, 55, 180, 25)
    ctx.fillStyle = 'red'
    ctx.fillRect(10, 55, (player.health*180)/100, 25)

    ctx.fillStyle = 'white'
    ctx.fillText('Fuel: ' + player.fuel + '/' + player.maxFuel, 10, 100)
    ctx.fillRect(10, 110, 180, 25)
    ctx.fillStyle = '#B57E1D'
    ctx.fillRect(10, 110, (player.fuel*180)/player.maxFuel, 25)

    ctx.fillStyle = 'white'
    var drill = 1
    switch(player.drillStrength) {
      case 25:
        drill = 2
        break
      case 50:
        drill = 3
        break
      case 100:
        drill = 4
        break
      default:
        drill = 1
    }
    ctx.fillText('Drill Level: ' + drill, 10, 155)
    var hull = 1
    switch(player.hullStrength) {
      case 10:
        hull = 2
        break
      case 25:
        hull = 3
        break
      case 50:
        hull = 4
        break
      default:
        hull = 1
    }
    ctx.fillText('Hull Level: ' + hull, 10, 180)

    ctx.fillText('Cargo: ' + player.usedStorage + '/' + player.maxStorage, 10, 205)

    ctx.fillStyle = 'white'
    ctx.font = '10px Verdana'
    ctx.fillText('Wood', 20, 230)
    ctx.font = '15px Verdana'
    ctx.drawImage(this.images.wood_wood, 10, 235, 50, 50)
    ctx.fillText(player.inventory.wood, 10+25, 210+45+25)

    ctx.fillStyle = 'white'
    ctx.font = '10px Verdana'
    ctx.fillText('Iron', 90, 230)
    ctx.drawImage(this.images.ore_iron, 75, 235, 50, 50)
    ctx.font = '15px Verdana'
    ctx.fillText(player.inventory.iron, 75+25, 210+45+25)

    ctx.fillStyle = 'white'
    ctx.font = '10px Verdana'
    ctx.fillText('Bronze', 148, 230)
    ctx.drawImage(this.images.ore_bronze, 140, 235, 50, 50)
    ctx.font = '15px Verdana'
    ctx.fillText(player.inventory.bronze, 140+25, 210+45+25)

    ctx.fillStyle = 'white'
    ctx.font = '10px Verdana'
    ctx.fillText('Silver', 20, 310)
    ctx.drawImage(this.images.ore_silver, 10, 315, 50, 50)
    ctx.font = '15px Verdana'
    ctx.fillText(player.inventory.silver, 10+25, 290+45+25)

    ctx.fillStyle = 'white'
    ctx.font = '10px Verdana'
    ctx.fillText('Gold', 90, 310)
    ctx.drawImage(this.images.ore_gold, 75, 315, 50, 50)
    ctx.font = '15px Verdana'
    ctx.fillText(player.inventory.gold, 75+25, 290+45+25)

    ctx.fillStyle = 'white'
    ctx.font = '10px Verdana'
    ctx.fillText('Platinum', 143, 310)
    ctx.drawImage(this.images.ore_platinum, 140, 315, 50, 50)
    ctx.font = '15px Verdana'
    ctx.fillText(player.inventory.platinum, 140+25, 290+45+25)

    if(player.drillStrength < 25) {
      ctx.globalAlpha = 0.75
      ctx.fillStyle = 'grey'
      ctx.fillRect(10, 315, 50, 50)
      ctx.fillRect(75, 315, 50, 50)
      ctx.fillRect(140, 315, 50, 50)
      ctx.globalAlpha = 1.0
      ctx.fillStyle = 'black'
      ctx.font = '30px Verdana'
      ctx.fillText('2', 25, 350)
      ctx.fillText('2', 90, 350)
      ctx.fillText('2', 155, 350)
    }

    ctx.fillStyle = 'white'
    ctx.font = '10px Verdana'
    ctx.fillText('Amethyst', 12, 390)
    ctx.drawImage(this.images.ore_amethyst, 10, 395, 50, 50)
    ctx.font = '15px Verdana'
    ctx.fillText(player.inventory.amethyst, 10+25, 370+45+25)

    ctx.fillStyle = 'white'
    ctx.font = '10px Verdana'
    ctx.fillText('Sapphire', 77, 390)
    ctx.drawImage(this.images.ore_sapphire, 75, 395, 50, 50)
    ctx.fillStyle = 'white'
    ctx.font = '15px Verdana'
    ctx.fillText(player.inventory.sapphire, 75+25, 370+45+25)

    ctx.fillStyle = 'white'
    ctx.font = '10px Verdana'
    ctx.fillText('Emerald', 145, 390)
    ctx.drawImage(this.images.ore_emerald, 140, 395, 50, 50)
    ctx.font = '15px Verdana'
    ctx.fillText(player.inventory.emerald, 140+25, 370+45+25)

    if(player.drillStrength < 50) {
      ctx.globalAlpha = 0.75
      ctx.fillStyle = 'grey'
      ctx.fillRect(10, 395, 50, 50)
      ctx.fillRect(75, 395, 50, 50)
      ctx.fillRect(140, 395, 50, 50)
      ctx.globalAlpha = 1.0
      ctx.fillStyle = 'black'
      ctx.font = '30px Verdana'
      ctx.fillText('3', 25, 430)
      ctx.fillText('3', 90, 430)
      ctx.fillText('3', 155, 430)
    }

    ctx.fillStyle = 'white'
    ctx.font = '10px Verdana'
    ctx.fillText('Ruby', 21, 470)
    ctx.drawImage(this.images.ore_ruby, 10, 475, 50, 50)
    ctx.font = '15px Verdana'
    ctx.fillText(player.inventory.ruby, 10+25, 450+45+25)

    ctx.fillStyle = 'white'
    ctx.font = '10px Verdana'
    ctx.fillText('Diamond', 77, 470)
    ctx.drawImage(this.images.ore_diamond, 75, 475, 50, 50)
    ctx.font = '15px Verdana'
    ctx.fillText(player.inventory.diamond, 75+25, 450+45+25)

    ctx.fillStyle = 'white'
    ctx.font = '10px Verdana'
    ctx.fillText('Alexandrite', 138, 470)
    ctx.drawImage(this.images.ore_alexandrite, 140, 475, 50, 50)
    ctx.font = '15px Verdana'
    ctx.fillText(player.inventory.alexandrite, 140+25, 450+45+25)

    if(player.drillStrength < 100) {
      ctx.globalAlpha = 0.75
      ctx.fillStyle = 'grey'
      ctx.fillRect(10, 475, 50, 50)
      ctx.fillRect(75, 475, 50, 50)
      ctx.fillRect(140, 475, 50, 50)
      ctx.globalAlpha = 1.0
      ctx.fillStyle = 'black'
      ctx.font = '30px Verdana'
      ctx.fillText('4', 25, 510)
      ctx.fillText('4', 90, 510)
      ctx.fillText('4', 155, 510)
    }

    if(player.items.smallExplosive > 0) {
      ctx.drawImage(this.images.smallExplosion, 5, 530)
      ctx.font = '15px Verdana'
      ctx.fillStyle = 'white'
      ctx.fillText(player.items.smallExplosive, 25, 570)
    }

    if(player.items.bigExplosive > 0) {
      ctx.drawImage(this.images.bigExplosion, 45, 530)
      ctx.font = '15px Verdana'
      ctx.fillStyle = 'white'
      ctx.fillText(player.items.bigExplosive, 75, 570)
    }

    if(player.items.fuelTank > 0) {
      ctx.drawImage(this.images.fuelTank, 100, 530)
      ctx.font = '15px Verdana'
      ctx.fillStyle = 'white'
      ctx.fillText(player.items.fuelTank, 130, 570)
    }

    if(player.items.teleporter > 0) {
      ctx.drawImage(this.images.teleporter, 150, 532)
      ctx.font = '15px Verdana'
      ctx.fillStyle = 'white'
      ctx.fillText(player.items.teleporter, 175, 570)
    }

    ctx.fillStyle = 'white'
    ctx.font = '15px Verdana'
    ctx.fillText('Position: ' + (player.x-600) + ', ' + (-player.y+600), 10, 590)
  }
}
