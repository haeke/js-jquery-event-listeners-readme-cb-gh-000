//define functions here

$(document).ready(function(){

// call functions here
getIt();

});

function getIt() {
  $('p').on('click', function() {
    alert('Hey!');
  });
}

function frameIt() {
  $('img').on('load', function(img) {
    img.addClass('tasty');
  });
}

function pressIt() {
  $('input').on('keydown', function(key) {
    if (key.which == )
  });
}