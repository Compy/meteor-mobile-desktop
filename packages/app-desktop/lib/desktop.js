Meteor.startup(function() {
  console.log("[App-Desktop] Initialized!");

  // Call some sample functionality from our app-base functions
  var r = baseFunction();
  console.log("[App-Desktop] baseFunction() returned " + r);
});
