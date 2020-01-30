
let target = {
  health: 100,

  targetName: "Very bad man",

  attacks: {
    slap: 1,
    punch: 5,
    kick: 10,
  },
  inventory: [],
  hits: 0,
}

let items = {
  fire: { name: 'fire', modifier: 2, description: 'IT BURNS!' },
  shield: { name: 'shield', modifier: -2, description: 'Reduces damage from attacks!' },
  oh_wunder: { name: 'one hit wonder', modifier: 30, description: 'For when you really want to blow stuff up' }
}

function damageBorder() {

  document.getElementById('enemy-portrait').className = `border-${Math.floor(target.health / 10) * 10}`

}

function reset() {
  target.health = 100
  target.hits = 0
  target.inventory = []
  damageBorder()
  update()
}

function slap() {
  let slapDamage = 1 + addMods()
  if (slapDamage > 0) {
    target.health -= slapDamage
    target.hits++
  }
  zeroHealth()
  damageBorder()
  update()
}

function punch() {
  let punchDamage = 5 + addMods()
  if (punchDamage > 0) {
    target.health -= punchDamage
    target.hits++
  }
  zeroHealth()
  damageBorder()
  update()
}

function kick() {
  let kickDamage = 10 + addMods()
  if (kickDamage > 0) {
    target.health -= kickDamage
    target.hits++
  }
  zeroHealth()
  damageBorder()
  update()
}

function giveFire() {
  target.inventory.push(items.fire)
  console.log('Gave Fire')
}

function giveShield() {
  target.inventory.push(items.shield)
  console.log('Gave Shield')
}

function giveWonder() {
  target.inventory.push(items.oh_wunder)
  console.log("Gave out an OP weapon. (That probably shouldn't exist")
}

function addMods() {
  let modTotal = 0
  for (let i = 0; i < target.inventory.length; i++) {
    modTotal += target.inventory[i].modifier
  }
  return modTotal
}

function update() {
  document.getElementById("health").innerText = `${target.health}`
  document.getElementById("target-name").innerText = `${target.targetName}`
  document.getElementById("hits").innerText = `${target.hits}`
}

function zeroHealth() {
  if (target.health < 0) {
    target.health = 0
  }
  if (target.health == 0) {
    document.getElementById("character-heading").innerText = 'Dead enemy status: Dead'
  }
}


update()


