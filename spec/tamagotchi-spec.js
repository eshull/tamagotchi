import { Tamagotchi } from './../src/tamagotchi'

describe ('Tamagotchi',function(){
  let ourPet;

  beforeEach(function(){
    ourPet = new Tamagotchi("Peter");
    jasmine.clock().install();
    ourPet.realTime();
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
    expect(ourPet.bathroom).toEqual(10);
  })

  it ('should decrease our pets bathroom level', function(){
    jasmine.clock().tick(10001)
    ourPet.bathroomBreak();
    expect(ourPet.bathroom).toEqual(-5)
  })

})
