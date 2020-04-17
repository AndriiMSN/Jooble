
var button = document.getElementById('userButton');
button.addEventListener('click', function () {
  var ta = document.getElementById('cont');
  ta.select(); 
  try { 
    document.execCommand('copy'); 
  } catch(err) { 
    console.log('Can`t copy, boss'); 
  } 
});



