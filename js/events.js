//define functions here

$(document).ready(function(){

// call functions here
getIt();
submitIt();

});

function getIt() {
  $('p').on('click', function() {
    alert('Hey!');
  });
}

function frameIt() {
  $('img').on('load', function(img) {
    img.addClass('tasty style="border-color: red;"');
  });
}

function pressIt() {
  $('input').on('keydown', function(key) {
    if (key.which == 71) {
      alert('g was pressed');
    }
  });
}

function submitIt() {
  $('input').on('submit', function() {
    alert('Your form is going to be submitted now.');
  });
}