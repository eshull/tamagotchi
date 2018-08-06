export class Tamagotchi {
  constructor(name){
    this.name = name;
    this.food = 100;
    this.sleep = 100;
    this.bathroom = 0;
    this.weight = 50;
    this.happiness = 100;
    this.life = 100;
  }

  realTime() {
    setInterval(() => {
      this.food -= 5;
      this.sleep -= 5;
      if (this.bathroom >= 40) {
        this.bathroomThreshold();
      }
      else if (this.bathroom < 30 && this.life <= 100) {
        this.wellpottied();
      }
      if (this.food <= 20) {
        this.starving();
      }
      else if (this.food > 60 && this.life <= 100) {
        this.wellfed();
      }
      if (this.sleep <= 20) {
        this.exhaustion();
      }
      else if (this.sleep > 60 && this.life <= 100) {
        this.wellrested();
      }
      if (this.weight >= 100 || this.weight <= 20) {
        this.underOrOverWeight();
      }
      else if (this.weight > 20 && this.weight < 100 && this.life <= 100) {
        this.healthyWeight();
      }
    }, 10000);
  }

refreshLife() {
  setInterval(() => {
      let life = this.life;
      console.log(life);
      return life;
    }, 1000);
  }


  bathroomThreshold() {
      this.bathroom += 5;
      this.life -= 5;
      this.happiness -= 5;
  }

  starving(){
    this.life -= 5;
    this.happiness -= 5;
  }

  exhaustion(){
    this.life -= 5;
    this.happiness -=5;
  }

  underOrOverWeight(){
    this.life -= 5;
  }

  healthyWeight(){
    this.life +=5;
  }

  wellrested(){
    this.life += 5;
  }

  wellfed(){
    this.life += 5;
  }

  wellpottied(){
    this.life += 5;
  }

  feed() {
    this.food += 20;
    this.bathroom += 5;
    this.weight += 5;
    this.happiness += 5;
  }

  putToBed() {
    if (this.sleep <= 100) {
      this.sleep += 20;
      this.happiness += 5;
      this.food -= 10;
    }
  }

  bathroomBreak() {
    if (this.bathroom > 0) {
      this.bathroom -= 15;
    }
  }

  exercise() {
    this.weight -= 5;
    this.sleep -= 10;
    this.food -= 10;
    this.happiness -= 10;
  }

  soothe() {
    if (this.happiness <= 100) {
      this.happiness += 15;
    }
  }
}
