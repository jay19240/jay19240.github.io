function throwError001() {
  var message = "Error 1." + '\n' + "The rank value is less than zero.";
  root.msg(message);
  root.endGame();
}

function throwError002() {
  var message = "Error 2." + '\n' + "The rank value is more than max.";
  root.msg(message);
  root.endGame();
}

function throwError003() {
  var message = "Error 3." + '\n' + "The weapon type is not allowed by plugin settings.";
  root.msg(message);
  root.endGame();
}

function throwError004() {
  var message = "Error 4." + '\n' + "The weapon type rank is not registered in custom data.";
  root.msg(message);
  root.endGame();
}

function throwError005() {
  var message = "Error 5." + '\n' + "The unit can't be found.";
  root.msg(message);
  root.endGame();
}
