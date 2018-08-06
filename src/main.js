import { Tamagotchi } from './tamagotchi';
// import './styles.css';
import $ from 'jquery';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';


$(document).ready(function() {
  $('#new_pet').submit(function(event) {
    event.preventDefault();
    let petName = $("#new_pet").find('input[name=pet_name]').val()
    let pet1 = new Tamagotchi(petName)
    pet1.realTime()
    pet1.refreshLife()
    $('.tamagotchi').html("<h3>" + pet1.life + "</h3>")
  });
});


// let pet1 = new Tamagotchi("Peter");
