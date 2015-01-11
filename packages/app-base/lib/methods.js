if (Meteor.isServer) {
  Meteor.methods({
    echo: function(something) {
      console.log("[App-Base::Server] echo method called!");
      return something;
    }
  });
}
