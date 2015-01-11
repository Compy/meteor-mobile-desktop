Package.describe({
  summary: "MyApp base package",
  version: "0.0.1",
  name: "app-base"
});

Package.onUse(function(api) {
  /* Add our packages that we depend on on both mobile/desktop sides */
  api.use([
    'iron:router',
    'meteor-platform',
    'templating',
    'handlebars',
    'session',
    'underscore',
  ],['client','server']);

  /* Add client side dependencies */
  api.use([
    'jquery'
  ],'client');

  /* Add each of our files that are a part of this package */
  api.add_files([
    'lib/data.js',
    'lib/functions.js',
    'lib/methods.js'
  ],['client','server']);

  /* Export functions from this package that can be accessed anywhere */
  api.export([
    'baseFunction',
    'ProgLangs'
  ]);
});
