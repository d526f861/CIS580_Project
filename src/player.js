export default class Player {
  constructor(images, sounds) {
    this.images = images
    this.sounds = sounds
    this.soundCounter = 1

    this.x = 600;
    this.y = 600;

    this.fuel = 100
    this.maxFuel = 100
    this.idleFuelUsage = 90
    this.fuelCounter = 0

	  this.money = 0;

    this.drillStrength = 10

    this.health = 100
    this.hullStrength = 5
    this.damageCounter = 0

    this.maxStorage = 10
	  this.usedStorage=0
    this.inventory = {
      wood:0,
      iron:0,
      bronze:0,
      silver:0,
      gold:0,
      platinum:0,
      amethyst:0,
      sapphire:0,
      emerald:0,
      ruby:0,
      diamond:0,
      alexandrite:0
    }

    this.items = {
      smallExplosive: 0,
      bigExplosive: 0,
      fuelTank: 0,
      teleporter: 0
    }

    this.state = 'PLAY'

    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.update = this.update.bind(this)
    this.lastMove = 'right'
    window.addEventListener('keydown', this.handleKeyDown)
  }

  maxOut() {
    this.money = 9999999
    this.fuel = 100
    this.maxFuel = 100
    this.drillStrength = 10
    this.hullStrength = 5
    this.maxStorage = 10
    this.health = 100
  }

  pickup(type) {
    if(type === 'rock') return
    if(this.usedStorage < this.maxStorage) {
      this.playSound('pickup')
      this.inventory[type.split('_')[1]]+=1;
      this.usedStorage+=1;
    } else {
      this.playSound('destroy')
    }
  }

	update(updateInfo) {
		if(updateInfo.type==='trade'){
			this.money+=updateInfo.income;
			this.inventory.wood=0;
			this.inventory.iron=0;
      this.inventory.bronze=0
      this.inventory.silver=0
      this.inventory.gold=0
      this.inventory.platinum=0
      this.inventory.amethyst=0
      this.inventory.sapphire=0
      this.inventory.emerald=0
      this.inventory.ruby=0
      this.inventory.diamond=0
      this.inventory.alexandrite=0
      if(this.usedStorage > 0) this.sounds.trade.play()
      this.usedStorage=0;
		}
    else if(updateInfo.type === 'fuel') {
      this.fuel += updateInfo.amount
      this.money -= updateInfo.amount*2
      if(updateInfo.amount > 0) this.sounds.fuel.play()
    }
    else if(updateInfo.type === 'repair') {
      this.health += updateInfo.amount
      this.money -= updateInfo.amount*10
      if(updateInfo.amount > 0) this.sounds.repair.play()
    }
    else if(updateInfo.type === 'rock') {
      if(this.fuel > 0) this.fuel-=1
      this.damageCounter++
      if(this.damageCounter >= this.hullStrength) {
        this.health--
        this.damageCounter = 0
      }
    } else if(updateInfo.type === 'damage') {
      if(this.health > 0){
        this.health -= updateInfo.amount
        this.playSound('damage')
      }
      if(this.health < 0) this.health = 0
      switch(this.lastMove) {
        case 'up':
          this.y+=1
          break

        case 'down':
          this.y-=1
          break

        case 'left':
          this.x+=1
          break

        case 'right':
          this.x-=1
          break

        default:
      }
    } else if(updateInfo.type === 'upgrade') {
      //DO NOTHING - DONT REMOVE THIS!!
    }
		else if (updateInfo.type!=='empty'){
      this.damageCounter++
      if(this.damageCounter >= this.hullStrength) {
        this.health--
        this.damageCounter = 0
      }
      if(updateInfo.type === 'wood_wood') if(this.fuel > 0) this.fuel--
      else {
        if(this.fuel > 1) this.fuel-=2
        else this.fuel = 0
      }

			if(this.usedStorage < this.maxStorage) {
        this.playSound('pickup')
        this.inventory[updateInfo.type.split('_')[1]]+=1;
			  this.usedStorage+=1;
      } else {
        this.playSound('destroy')
      }
		}

    //idle fuel usage
    this.fuelCounter++
    if(this.fuelCounter >= this.idleFuelUsage) {
      this.fuelCounter = 0
      if(this.fuel > 0) this.fuel--
    }

    if(this.fuel <= 0) this.health = 0
	}

  render(ctx) {
    ctx.save()
    ctx.translate(300, 300)
    if(this.lastMove === 'up') {
      ctx.rotate(-Math.PI/2)
    } else if(this.lastMove === 'down') {
      ctx.rotate(Math.PI/2)
    } else if(this.lastMove === 'left') {
      ctx.rotate(Math.PI)
    }
    var p = 1
    switch(this.drillStrength) {
      case 25:
        p = 2
        break
      case 50:
        p = 3
        break
      case 100:
        p = 4
        break
      default:
        p = 1
    }
    ctx.drawImage(this.images['player'+p], -20, -20)
    ctx.restore()
  }

  playSound(sound) {
    if(!this.sounds) return
    this.soundCounter++
    if(this.soundCounter >= 5) this.soundCounter = 1
    this.sounds[sound+this.soundCounter].play()
  }

  getInfo(){
	  return {
      x: this.x,
      y: this.y,
      fuel:this.fuel,
      maxFuel:this.maxFuel,
      drillStrength:this.drillStrength,
      health:this.health,
      inventory:this.inventory,
      money:this.money,
      usedStorage:this.usedStorage,
      maxStorage:this.maxStorage,
      hullStrength: this.hullStrength,
      items: this.items
    };
  }

  getPosition(){
	  return {x:this.x,y:this.y}
  }

  handleKeyDown(event) {
    event.preventDefault()
    if(this.health <= 0) return
    if(this.x === 599 && this.y === 601) return
    if(this.state === 'PAUSE') return
    if(this.state === 'START') return

    switch(event.key) {
      case 'a':
      case 'ArrowLeft':
        if(this.x > 7) this.x-=1
        if(this.fuel > 0) this.fuel--
        this.lastMove = 'left'
        break
      case 'd':
      case 'ArrowRight':
        if(this.x < 1191) this.x+=1
        if(this.fuel > 0) this.fuel--
        this.lastMove = 'right'
        break
      case 'w':
      case 'ArrowUp':
        if(this.y > 7) this.y-=1
        if(this.fuel > 0) this.fuel--
        this.lastMove = 'up'
        break
      case 's':
      case 'ArrowDown':
        if(this.y <1191) this.y+=1
        if(this.fuel > 0) this.fuel--
        this.lastMove = 'down'
        break

      case 'e':
        //Usable item
        break
      default:
    }
  }
}
