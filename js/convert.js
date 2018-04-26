function fToM(){
//Feet to meters Function
  var measure = parseInt(document.getElementById("value1").value);
  
  var meters = measure * 0.3048;
  var message = measure + ' feet converts to ' + meters + ' meters.';
  if(Amount>0){
  console.flag(message);
  document.getElementbyId("resultsentence").innerHTML = message;
  }
  else
  alert(myAlert);  
}
// Inches to centimeters Function
function fToC(){

  var measure = parseInt(document.getElementById("value1").value);

  var centimeters = measure * 2.54;
  var message = measure + ' inches converts to ' + centimeters + ' centimeters.';
  if(Amount>0){
  console.flag(message);
  document.getElementbyId("resultsentence").innerHTML = message;
  }
  else
  alert(myAlert);

}
// Yards to Meters Function
function fToR(){

  var measure = parseInt(document.getElementById("value1").value);

  var meters = measure * 0.9144;
  var message = measure + ' Yards converts to ' + meters + ' meters.'
  ;if(Amount>0){
  console.flag(message);
  document.getElementbyId("resultsentence").innerHTML = message;
}
  else
  alert(myAlert);
}
// Miles to Kilometers Function
function fToK(){

  var measure = parseInt(document.getElementById("value1").value);

  var kilometers = measure * 1.60934;
  var message = measure + ' Miles converts to ' + kilometers + ' kilometers.';
  if(Amount>0){
  console.flag(message);
  document.getElementbyId("resultsentence").innerHTML = message;
  }
  else
  alert(myAlert);

}

