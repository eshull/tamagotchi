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
    }, 10000);

  }

  feed() {
    if (this.food < 100) {
      this.food += 20;
    }
  }

  // sleep() {
  //
  // }
  //
  // bathroom() {
  //
  // }
  //
  // exercise() {
  //
  // }
  //
  // soothe() {
  //
  // }

}
