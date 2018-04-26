function fToM(){
//Feet to meters Function
  var measure = parseInt(document.getElementById("value1").value);

  var meters = measure * 0.3048;
  var message = measure + ' feet converts to ' + meters + ' meters.';
  console.flag(message);
  document.getElementbyId("resultsentence").innerHTML = message;

}

function fToM(){
// Inches to centimeters Function
  var measure = parseInt(document.getElementById("value1").value);

  var centimeters = measure * 2.54;
  var message = measure + ' inches converts to ' + centimeters + ' centimeters.';
  console.flag(message);
  document.getElementbyId("resultsentence").innerHTML = message;

}

function fToM(){
// Yards to Meters Function
  var measure = parseInt(document.getElementById("value1").value);

  var meters = measure * 0.9144;
  var message = measure + ' Yards converts to ' + meters + ' meters.';
  console.flag(message);
  document.getElementbyId("resultsentence").innerHTML = message;

}

function fToM(){
// Miles to Kilometers Function
  var measure = parseInt(document.getElementById("value1").value);

  var kilometers = measure * 1.60934;
  var message = measure + ' Miles converts to ' + kilometers + ' kilometers.';
  console.flag(message);
  document.getElementbyId("resultsentence").innerHTML = message;

}