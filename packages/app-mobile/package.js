Package.describe({
  summary: "MyApp mobile package",
  version: "0.0.1",
  name: "app-mobile"
});

Package.onUse(function(api) {
  /* Add our packages that we depend on on both mobile/desktop sides */
  api.use([
    'app-base',
    'iron:router',
    'meteor-platform',
    'templating',
    'handlebars',
    'session',
    'underscore',
  ],['client','server']);

  /* Add each of our files that are a part of this package */
  api.add_files([
    'lib/mobile.js',
    'lib/routes.js',
    'views/layout.html',
    'views/list.html',
    'views/list.js'
  ],['web.cordova']);
});
