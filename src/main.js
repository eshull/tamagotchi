import { Tamagotchi } from './tamagotchi';
// import './styles.css';
import $ from 'jquery';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

function refreshLife(object) {
  let that = object;
  setInterval(() => {
      $('.tamagotchi').text(that.life)
      console.log(that);
    }, 1000);
  }

$(document).ready(function() {
  $('#new_pet').submit(function(event) {
    event.preventDefault();
    let petName = $("#new_pet").find('input[name=pet_name]').val();
    let pet1 = new Tamagotchi(petName);
    console.log(pet1);
    $('.tamagotchi').text(pet1.life);
    pet1.realTime()
    refreshLife(pet1)
  });
});


// let pet1 = new Tamagotchi("Peter");
