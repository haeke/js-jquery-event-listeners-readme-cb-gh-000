//define functions here

$(document).ready(function(){

// call functions here
  $('form').on('submit', function() {
    if ($('input:first').val() === 'correct') {
      alert('your form iwas going to be submitted now');
      return ;
    }
    alert('you entered the wrong value');
    return;
  });
});
