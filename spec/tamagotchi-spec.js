import { Tamagotchi } from './../src/tamagotchi'

describe ('Tamagotchi',function(){
  let ourPet;
  let ourPet2;

  beforeEach(function(){
    ourPet = new Tamagotchi("Peter");
    ourPet2 = new Tamagotchi("Frank")
    jasmine.clock().install();
    ourPet.realTime();
    ourPet2.realTime();
  })

  afterEach(function(){
    jasmine.clock().uninstall();
  })

  it ('should give our pet a name', function(){
    expect(ourPet.name).toEqual("Peter")
  })

  it ('should decrease our pets food', function(){
    jasmine.clock().tick(10001);
    expect(ourPet.food).toEqual(95);
  })

  it ('should decrease our pets sleep', function(){
    jasmine.clock().tick(10001);
    expect(ourPet.sleep).toEqual(95);
  })

  it ('should decrease our pets life', function(){
    jasmine.clock().tick(10001);
    expect(ourPet.sleep).toEqual(95);
  })

  it ('should decrease our pets feelings', function(){
    jasmine.clock().tick(10001);
    expect(ourPet.sleep).toEqual(95);
  })

  it ('should increase our pets food level', function(){
    jasmine.clock().tick(10001)
    ourPet.feed();
    expect(ourPet.food).toEqual(115)
  })

  it ('should increase our pets sleep level', function(){
    jasmine.clock().tick(10001)
    ourPet.putToBed();
    expect(ourPet.sleep).toEqual(115)
  })

  it ('should increase our pets need to go to the bathroom', function(){
    jasmine.clock().tick(10001);
    ourPet.feed()
    expect(ourPet.bathroom).toEqual(5);
  })

  it ('should decrease our pets bathroom level', function(){
    jasmine.clock().tick(10001)
    ourPet.feed();
    ourPet.bathroomBreak();
    expect(ourPet.bathroom).toEqual(-10)
  })

  it ('increase bathroom level over time period if over 40', function(){
    ourPet.bathroom = 45;
    jasmine.clock().tick(10001);
    expect(ourPet.bathroom).toEqual(50)
  })

  it ('will decrease parameters if exercise is used', function(){
    jasmine.clock().tick(10001);
    ourPet.exercise();
    expect(ourPet.weight).toEqual(45)
  })

  it ('will increase happiness when soothed', function(){
    jasmine.clock().tick(10001);
    ourPet.happiness -= 10;
    ourPet.soothe();
    expect(ourPet.happiness).toEqual(105)
  })

  it ('will increase life if bathroom is under 40', function(){
    ourPet.life = 90;
    ourPet.bathroom = 45;
    jasmine.clock().tick(10001);
    expect(ourPet.happiness).toEqual(95)
  })

  it ('will increase life if food is over 60', function(){
    ourPet.life = 80;
    ourPet.food = 70; // life + 5
    ourPet.bathroom = 35;
    ourPet.weight = 60; // life + 5
    ourPet.sleep = 50;
    jasmine.clock().tick(10001);
    console.log(ourPet.food);
    console.log(ourPet.life);
    expect(ourPet.life).toEqual(90)
  })

  it ('will increase life if sleep is over 60', function(){
    ourPet2.life = 80;
    ourPet2.food = 70; // life + 5
    ourPet2.bathroom = 35;
    ourPet2.weight = 60; // life + 5
    ourPet2.sleep = 70; // life + 5
    jasmine.clock().tick(10001);
    console.log("This is sleep for ourPet2: " + ourPet2.sleep);
    console.log("This is life for ourPet2: " + ourPet2.life);
    expect(ourPet2.life).toEqual(95)
  })
  //
  it ('should show if our pet is over weight', function(){
    ourPet2.life = 80;
    ourPet2.food = 70; // life + 5
    ourPet2.bathroom = 35;
    ourPet2.weight = 200; // life - 5
    ourPet2.sleep = 70; // life + 5
    jasmine.clock().tick(10001);
    expect(ourPet2.life).toEqual(85)
  })

  it ('should increase health if our pet is between a good weight', function(){
    ourPet.life = 80;
    ourPet.food = 70; // life + 5
    ourPet.bathroom = 35;
    ourPet.weight = 60; // life + 5
    ourPet.sleep = 50;
    jasmine.clock().tick(10001);
    expect(ourPet.life).toEqual(90)
  })


})
