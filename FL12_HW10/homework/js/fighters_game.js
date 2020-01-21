const n100 = 100;
const yes = true;
const no = false;
class Fighter {
    constructor(obj) {
        let name = obj.name;
        let damage = obj.damage;
        let hp = obj.hp;
        let strength = obj.strength;
        let agility = obj.agility;
        let wins = 0;
        let losses = 0;
        this.getName = function() { 
          return name;
        }
        this.getDamage = function() { 
          return damage; 
        }
        this.getStrength = function() { 
          return strength;
        }
        this.getAgility = function() { 
          return agility; 
        }
        this.getHealth = function() { 
          return hp; 
        }
        this.isAlive = function () {
           return hp > 0 ? yes : no;
        }
        this.heal = function(amount) {
          amount > n100 ? hp = n100 : hp += amount;
        }
        this.dealDamage = function(dmg) {
          dmg > hp ? hp = 0 : hp -= dmg ;
        }
        this.attack = function(obj) {
          let att = n100 - (obj.getStrength()+obj.getAgility());
          let chance = Math.floor(Math.random() * n100);
          if(chance<=att){
            obj.dealDamage(damage);
            console.log(name + ' makes ' + damage + ' to ' + obj.getName());
          }else{
            console.log(name + ' attack missed');
          }
        }
        this.logCombatHistory = function() { 
          return 'Name: ' + name + ', Wins: ' + wins + ', Losses: ' + losses;
        }
        this.addWin = function() {
          wins++;
        }
        this.addLoss = function() {
          losses++;
        }
    }
}
function battle(f1,f2){
  if(!f1.isAlive()){
    return f1.getName() + " is dead and can't fight.";
  }else if(!f2.isAlive()){
    return f2.getName() + " is dead and can't fight.";
  }else{
    console.log(f1.getName() + ' vs '+ f2.getName());
    while(f1.isAlive() && f2.isAlive()){
      f1.attack(f2);
      f2.attack(f1);
   }
   if(f1.isAlive()){
     f1.addWin();
     f2.addLoss();
     return f1.getName() + ' has won!';
   }else{
     f2.addWin();
     f1.addLoss();
     return f2.getName() + ' has won!';   
   }
  }
}
let myFighter1 = new Fighter({name: 'Maximus', damage: 20, hp: 100, strength: 10, agility: 5});
let myFighter2 = new Fighter({name: 'Commodus', damage: 25, hp: 90, strength: 15, agility: 10});
console.log(battle(myFighter1, myFighter2));
console.log(myFighter1.logCombatHistory());
console.log(myFighter2.logCombatHistory());