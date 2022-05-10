///////////////////////////////////Sounds for each pokemon//////////////////////////////////////
document.querySelector('#bulbasaur').addEventListener('click', function () {
    var audio = new Audio('sounds/bulbasaur.mp3');
    audio.play();
});

document.querySelector('#charmander').addEventListener('click', function () {
    var audio = new Audio('sounds/charmander.mp3');
    audio.play();
});

document.querySelector('#squirtle').addEventListener('click', function () {
    var audio = new Audio('sounds/squirtle.mp3');
    audio.play();
});