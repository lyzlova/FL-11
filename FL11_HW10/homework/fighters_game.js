class Fighter {
  constructor({ name, damage, hp, agility }) {
    this._name = name;
    this._damage = damage;
    this._hp = hp;
    this._agility = agility;
    this.wins = 0;
    this.losses = 0;
  }

  getName() {
    return this._name;
  }

  getDamage() {
    return this._damage;
  }
  getAgility() {
    return this._hp;
  }

  getHealth() {
    return this._agility;
  }

  attack(obj) {
    if (this._agility > 50) {
      this._hp -= this._damage;
      console.log(this._hp);
      console.log(`${this._name} make ${this._damage} damage to ${obj._name}`);
    } else {
      console.log(`${this._name} attack missed`);
    }
  }

  logCombatHistory() {
    let history = `Name: ${this._name}, Wins: ${this.wins}, Losses: ${
      this.losses
    }`;
    console.log(history);
  }

  heal(healthAmount) {
    this._hp += healthAmount;

    if (this._hp > healthAmount) {
      this._hp = healthAmount;
    }
  }

  dealDamage(amount) {
    this._hp -= amount;
    if (this._hp < 0) {
      this._hp = 0;
    }
  }

  addWin() {
    this.wins += 1;
  }

  addLoss() {
    this.losses -= 1;
  }

  battle(obj) {
    if (this._hp === 0) {
      console.log(`${this.getName()} is dead and can't fight.`);
      return;
    } else if (obj._hp === 0) {
      console.log(`${obj.getName()} is dead and can't fight.`);
      return;
    } else {
      while (this._hp && obj._hp) {
        this.attack(obj);
        obj.attack(this);
        if (this._hp === 0) {
          this.addLoss();
          this.addWin();
          this.logCombatHistory();
        } else if (obj._hp === 0) {
          obj.addLoss();
          obj.addWin();
          obj.logCombatHistory();
        }
      }
    }
  }
}

// const myFighter = new Fighter({
//   name: 'John',
//   damage: 20,
//   hp: 100,
//   agility: 25,
// });

// const myFighter2 = new Fighter({
//   name: 'Jim',
//   damage: 10,
//   hp: 40,
//   agility: 120,
// });

// console.log(myFighter.getName());
// console.log(myFighter.getDamage());
// console.log(myFighter.getAgility());
// console.log(myFighter.getHealth());
// myFighter.attack(myFighter2);
// myFighter2.attack(myFighter);
// myFighter.logCombatHistory();
// myFighter.heal(50);
// myFighter.dealDamage(20);
// myFighter.addWin();
// myFighter.addLoss();
// myFighter.battle(myFighter2);
