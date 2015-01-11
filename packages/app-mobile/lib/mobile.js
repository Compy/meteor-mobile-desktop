Meteor.startup(function() {
  console.log("[App-Mobile] Initialized!");

  // Call some sample functionality from our app-base functions
  var r = baseFunction();
  console.log("[App-Mobile] baseFunction() returned " + r);
});
