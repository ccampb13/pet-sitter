/* global Pet */
/* global pets */


(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#add').click(add);
    $('#pets').on('click', '.eat', eat);
    $('#pets').on('click', '.play', play);
    $('#pets').on('click', '.sleep', sleep);
  }

  function eat(){
    let name = $(this).closest('.pet').data('name');
    let pet = Pet.find(name);
    pet.eat();
    
  }

  function play(){
    let name = $(this).closest('.pet').data('name');
    let pet = Pet.find(name);
    pet.play();

  }

  function sleep(){
    let name = $(this).closest('.pet').data('name');
    let pet = Pet.find(name);
    pet.sleep();

  }

  function add(){
    let gender = $('#gender').val();
    let speciesImg = $('#species').val();
    let species = $('#species option:selected').text();
    let name = $('#name').val() || undefined;
    let age = $('#age').val() || undefined;

    let pet = new Pet(species, speciesImg, gender, age, name);
    pets.push(pet);
    pet.render();
  }
})();
