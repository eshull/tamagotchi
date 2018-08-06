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
    jasmine.clock().tick(10001)
    expect(ourPet.food).toEqual(95)
  })
})
