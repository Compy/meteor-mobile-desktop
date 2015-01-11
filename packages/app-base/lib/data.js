/* Set up a collection and a publication that will be shared between
 * both desktop and mobile applications
 */
ProgLangs = new Meteor.Collection('proglangs');

/* We can also seed this collection with data if its empty -- OPTIONAL */
Meteor.startup(function() {
  if (Meteor.isServer) {
    if (ProgLangs.find().count() == 0) {
      console.log("[App-Base::Server] Seeding ProgLangs collection...");
      ProgLangs.insert({ name: "C" });
      ProgLangs.insert({ name: "C++" });
      ProgLangs.insert({ name: "CoffeeScript" });
      ProgLangs.insert({ name: "Go" });
      ProgLangs.insert({ name: "Java" });
      ProgLangs.insert({ name: "Javascript" });
      ProgLangs.insert({ name: "Perl" });
      ProgLangs.insert({ name: "PHP" });
      ProgLangs.insert({ name: "Python" });
      ProgLangs.insert({ name: "TCL" });
    }
  }
});
