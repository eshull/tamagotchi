import { Tamagotchi } from './tamagotchi';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import img from './exercise.jpg';

function refreshLife(object) {
  let that = object;
  setInterval(() => {
    $('#name_id').text("Name: " + that.name);
    $('#life_spec').text("Life: " + that.life);
    $('#food_spec').text("Food: " + that.food);
    $('#sleep_spec').text("Sleep: " + that.sleep);
    $('#bathroom_spec').text("Bathroom: " + that.bathroom);
    $('#weight_spec').text("Weight: " + that.weight);
    $('#happiness_spec').text("Happiness: " + that.happiness);
      console.log(that);
    }, 1000);
  }

$(document).ready(function() {
  $('#new_pet').submit(function(event) {
    event.preventDefault();
    let petName = $("#new_pet").find('input[name=pet_name]').val();
    let pet1 = new Tamagotchi(petName);
    console.log(pet1);
    $('#name_id').text("Name: " + pet1.name);
    $('#life_spec').text("Life: " + pet1.life);
    $('#food_spec').text("Food: " + pet1.food);
    $('#sleep_spec').text("Sleep: " + pet1.sleep);
    $('#bathroom_spec').text("Bathroom: " + pet1.bathroom);
    $('#weight_spec').text("Weight: " + pet1.weight);
    $('#happiness_spec').text("Happiness: " + pet1.happiness);
    pet1.realTime()
    refreshLife(pet1)

    $("#exercise").click(function(){
      pet1.exercise()
    })
    $("#feed").click(function(){
      pet1.feed()
    })
    $("#sleep").click(function(){
      pet1.putToBed()
    })
    $("#potty").click(function(){
      pet1.bathroomBreak()
    })
    $("#soothe").click(function(){
      pet1.soothe()
    })
  });
});
