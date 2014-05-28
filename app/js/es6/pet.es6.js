/* exported Pet */
/* global _, pets */

class Pet{
  constructor(species, speciesImg, gender, age=4, name='George'){
    this.species = species;
    this.speciesImg = `../media/${speciesImg}`;
    this.gender = gender;
    this.age = age * 1;
    this.name = name;

    this.health = _.random(10, 101);
    this.full = _.random(5, 51);
    this.mood = _.random(1, 11);
  }

  static find(name){
    return _(pets).find(p=>p.name === name);
  }

  eat(){
    this.full += _.random(1,3);
    if(this.full >= 50){this.full = 50;}
    this.health -= _.random(1,5);
    if(this.health <=0){alert('My bad, your pet has met his maker');}
    this.update();
  }

  sleep(){
    this.health += _.random(1,5);
    if(this.health >= 100){this.health=100;}
    this.mood -= _.random(1,2);
    if(this.mood <= 0){this.mood = 0;}
    this.update();

  }

  play(){
    this.mood += _.random(0,1);
    if(this.mood >= 10){this.mood=10;}
    this.full -= _.random(1,3);
    if(this.full === 0){this.full=0;}
    this.health -= _.random(1,3);
    if(this.health ===0){this.health=0;}
    this.update();
  }

  update(){
    $(`div[data-name=${this.name}]`).find('.outer:nth-child(1) .inner').css('width',`${this.health}%`);
    $(`div[data-name=${this.name}]`).find('.outer:nth-child(2) .inner').css('width',`${this.full * 2}%`);
    $(`div[data-name=${this.name}]`).find('.outer:nth-child(3) .inner').css('width',`${this.mood * 10}%`);
  }


  render(){
    $('#pets').append(`<div class=pet data-name=${this.name}>
                         <div class=photo style='background-image:url("${this.speciesImg}")'></div>
                         <div class=meta>
                              <div class=name>name: ${this.name}</div>
                              <div class=age>age: ${this.age} years old</div>
                              <div class=gender>gender: ${this.gender}</div>
                          </div>
                          <div class=stats>
                            <div class=outer><div class=inner style="width:${this.health}%:">HEALTH</div></div>
                            <div class=outer><div class=inner style="width:${this.full * 2}%:">FULL</div></div>
                            <div class=outer><div class=inner style="width:${this.mood * 20}%:">MOOD</div></div>
                          </div>
                          <div class=verbs>
                            <button class='eat button button-border-action button-pill'>Eat</button>
                            <button class='play button button-border-action button-pill'>Play</button>
                            <button class='sleep button button-border-action button-pill'>Sleep</button>
                          </div>
                      </div>`);
  }
}

// {this.health = 0;}
// <div class=outer><div class=inner style="width:${this.health}%:">HEALTH</div></div>
// <div class=outer><div class=inner style="width:${this.full * 2}%:">FULL</div></div>
// <div class=outer><div class=inner style="width:${this.mood * 20}%:">MOOD</div></div>

// ${this.name}
// ${this.species}
// ${this.speciesImg}
// ${this.gender}
// ${this.age}
// ${this.health}
// ${this.full}
// ${this.mood}
