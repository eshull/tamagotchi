export class Tamagotchi {
  constructor(name){
    this.name = name;
    this.food = 100;
    this.sleep = 100;
    this.bathroom = 0;
    this.weight = 50;
    this.feelings = 100;
    this.life = 100;

  }

  realTime() {
    setInterval(() => {
      this.food -= 5;
      this.sleep -= 5;
      this.life -= 5;
      if (this.bathroom >= 40) {
        this.bathroomThreshold();
      }
    }, 10000);

  }

  bathroomThreshold() {
      this.bathroom += 5;
  }

  feed() {
    if (this.food < 100) {
      this.food += 20;
      this.bathroom += 5;
    }
  }

  putToBed() {
    if (this.sleep <100) {
      this.sleep += 20;
    }
  }

  bathroomBreak() {
    if (this.bathroom > 0) {
      this.bathroom -= 15;
    }
  }

  // exercise() {
  //
  // }
  //
  // soothe() {
  //
  // }

}
