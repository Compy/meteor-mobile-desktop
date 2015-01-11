baseFunction = function() {
  console.log("[App-Base] baseFunction() called...");
  return true;
}

Meteor.startup(function() {
  console.log("[App-Base] Initialized!");
});
