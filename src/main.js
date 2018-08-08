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

    // let request = new XMLHttpRequest();
    // let url = `http://api.giphy.com/v1/gifs/m096tqgmH5Nmw?api_key=qwCP7BLZ5HMzmejAQLmGB0REUMKUK5b1`;
    //
    // let getElements = function(response) {
    //   var image_gif = response.data.images.fixed_width.url;
    //   document.getElementById('creature_gif').innerHTML = "<img src=" + image_gif + ">";
    //   console.log(image_gif);
    // }
    //
    // request.onreadystatechange = function() {
    //   if (this.readyState === 4 && this.status === 200) {
    //     let response = JSON.parse(this.responseText);
    //
    //     console.log(response.data.images.original.url);
    //     getElements(response);
    //   }
    // }
    //
    // request.open("GET", url, true);
    // request.send();

    let request = new XMLHttpRequest();
    let url = `http://api.giphy.com/v1/gifs/search?api_key=qwCP7BLZ5HMzmejAQLmGB0REUMKUK5b1&q=${petName}`;
    let getElements = function(response) {
      let randomNumber = Math.floor(Math.random() * 24);
      var image_gif = response.data[randomNumber].images.fixed_width.url;
      document.getElementById('creature_gif').innerHTML = "<img src=" + image_gif + ">";
    }

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        let response = JSON.parse(this.responseText);

        console.log(response);
        getElements(response);
      }
    }

    request.open("GET", url, true);
    request.send();

  });
});
