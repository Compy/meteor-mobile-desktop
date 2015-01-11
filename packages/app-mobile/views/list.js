Template.list.helpers({
  programmingLanguages: function() {
    return ProgLangs.find();
  }
});

Template.list.events({
  'click .remove-lang': function(e,t) {
    ProgLangs.remove({_id: this._id });
  },
  'submit #addLanguageForm': function(e,t) {
    e.preventDefault();
    var name = t.find("#languageName").value;
    if (name.length > 0)
      ProgLangs.insert({name: name});
  }
});
